#!/usr/bin/env node

/**
 * Link Checker Script
 * Validates all external links in the codebase
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const EXTERNAL_LINK_REGEX = /https?:\/\/[^\s"'<>)]+/g;
// A URL that closes a sentence, a CSS declaration or a CSP source list carries
// that punctuation with it. Trimming it is what stops `https://fonts.gstatic.com;`
// from being requested as if it were a page.
const TRAILING_PUNCTUATION = /[;,.:!?]+$/;
const IGNORE_PATTERNS = [
  /localhost/,
  /127\.0\.0\.1/,
  /^#/,
  /^mailto:/,
  /^tel:/,
];

const brokenLinks = [];
const checkedLinks = new Set();

function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, dist, etc.
      if (!['node_modules', '.git', 'dist', '.next', '.vite'].includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else {
      // Only check relevant file types
      const ext = extname(file);
      if (['.ts', '.tsx', '.js', '.jsx', '.html', '.md'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

async function checkLink(url, file) {
  if (checkedLinks.has(url)) {
    return;
  }
  
  checkedLinks.add(url);
  
  // Skip ignored patterns
  if (IGNORE_PATTERNS.some(pattern => pattern.test(url))) {
    return;
  }
  
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok && response.status !== 405) {
      brokenLinks.push({ url, status: response.status, file });
    }
  } catch (error) {
    // Some servers don't support HEAD, try GET
    try {
      const response = await fetch(url, { 
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      
      if (!response.ok) {
        brokenLinks.push({ url, status: response.status, file });
      }
    } catch (getError) {
      brokenLinks.push({ url, status: 'ERROR', error: getError.message, file });
    }
  }
}

function extractTextLinks(content) {
  return [...content.matchAll(EXTERNAL_LINK_REGEX)].map(match =>
    match[0].replace(TRAILING_PUNCTUATION, '')
  );
}

function extractHtmlLinks(content) {
  // index.html carries both a CSP meta tag and font preconnects. A policy
  // source list and a preconnect origin are not pages, so scanning them
  // produced `https://fonts.googleapis.com;` and four sibling false positives
  // on every run -- failures no edit to the page could ever clear.
  const withoutPolicy = content
    .replace(/<meta[^>]+http-equiv=["']?content-security-policy["']?[^>]*>/gi, '')
    .replace(/<link[^>]+rel=["']?(?:preconnect|dns-prefetch|prefetch|preload|modulepreload)["']?[^>]*>/gi, '');

  const links = [];
  for (const match of withoutPolicy.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    if (/^https?:\/\//i.test(match[1])) {
      links.push(match[1]);
    }
  }

  return links;
}

function extractLinks(content, filePath) {
  const urls = extname(filePath) === '.html'
    ? extractHtmlLinks(content)
    : extractTextLinks(content);

  return urls.map(url => ({ url, file: filePath }));
}

async function main() {
  console.log('🔍 Checking links in codebase...\n');
  
  const files = getAllFiles(join(projectRoot, 'src'));
  files.push(join(projectRoot, 'index.html'));
  
  const allLinks = [];
  
  for (const file of files) {
    try {
      const content = readFileSync(file, 'utf-8');
      const links = extractLinks(content, file);
      allLinks.push(...links);
    } catch (error) {
      console.warn(`⚠️  Could not read ${file}: ${error.message}`);
    }
  }
  
  console.log(`Found ${allLinks.length} external links to check...\n`);
  
  // Check links in batches to avoid overwhelming servers
  const batchSize = 5;
  for (let i = 0; i < allLinks.length; i += batchSize) {
    const batch = allLinks.slice(i, i + batchSize);
    await Promise.all(batch.map(link => checkLink(link.url, link.file)));
  }
  
  if (brokenLinks.length > 0) {
    console.error('❌ Broken links found:\n');
    brokenLinks.forEach(({ url, status, file }) => {
      console.error(`  ${url}`);
      console.error(`    Status: ${status}`);
      if (file !== 'unknown') {
        console.error(`    File: ${file}`);
      }
      console.error('');
    });
    process.exit(1);
  } else {
    console.log('✅ All links are valid!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('❌ Error checking links:', error);
  process.exit(1);
});
