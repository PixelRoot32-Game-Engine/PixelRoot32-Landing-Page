/**
 * Version Utility
 * Fetches the latest tag version from GitHub
 */

const GITHUB_API_URL = 'https://api.github.com/repos/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/tags';
const FALLBACK_VERSION = 'v0.1.0-alpha';

let cachedVersion: string | null = null;

/**
 * Get the latest version from GitHub tags
 * Falls back to cached version or default if API fails
 */
export async function getLatestVersion(): Promise<string> {
  // Return cached version if available
  if (cachedVersion) {
    return cachedVersion;
  }

  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const tags = await response.json();
    
    // Get the first tag (tags are sorted by creation date, most recent first)
    if (Array.isArray(tags) && tags.length > 0) {
      const latestTag = tags[0];
      const version = latestTag.name || FALLBACK_VERSION;
      
      // Cache the version
      cachedVersion = version;
      
      return version;
    }
    
    return FALLBACK_VERSION;
  } catch (error) {
    console.warn('Failed to fetch latest version from GitHub:', error);
    return FALLBACK_VERSION;
  }
}

/**
 * Initialize version display
 * Updates the version badge in the hero section
 */
export async function initVersionDisplay(i18n?: { t: (key: string, defaultValue?: string) => string }, container: HTMLElement = document.body): Promise<void> {
  const versionElement = container.querySelector('#hero-version');
  if (!versionElement) return;

  try {
    const version = await getLatestVersion();
    const availableText = i18n?.t('hero.version.available') || 'available';
    versionElement.textContent = `${version} ${availableText}`;
  } catch (error) {
    console.warn('Failed to update version display:', error);
  }
}
