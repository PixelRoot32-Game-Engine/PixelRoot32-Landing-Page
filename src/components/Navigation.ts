/**
 * Navigation Component
 * Sticky navigation bar with logo, links, and GitHub CTA
 */
import { i18n } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation(): string {
  return `<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20 items-center">
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src="/pr32_logo_v2.png" alt="PixelRoot32" class="h-12 w-auto" />
      </a>
      <div class="hidden md:flex items-center space-x-8">
        <a href="#features" class="text-sm font-medium hover:text-primary transition-colors">${i18n.t('nav.features')}</a>
        <a href="https://docs.pixelroot32.org" target="_blank" class="text-sm font-medium hover:text-primary transition-colors">${i18n.t('nav.documentation')}</a>
        <a href="https://github.com/Gperez88/PixelRoot32-Game-Engine-Samples" target="_blank" class="text-sm font-medium hover:text-primary transition-colors">${i18n.t('nav.samples')}</a>
        <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-surface border border-border-ui hover:border-primary transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover">
          <span class="text-sm font-mono font-bold">${i18n.t('nav.github')}</span>
        </a>
        ${LanguageSwitcher()}
      </div>
    </div>
  </div>
</nav>`;
}
