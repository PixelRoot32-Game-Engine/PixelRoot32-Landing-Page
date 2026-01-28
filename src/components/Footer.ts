/**
 * Footer Component
 * Site footer with links, copyright, and branding
 */
import { i18n } from "../i18n";

export function Footer(): string {
  return `<footer class="py-12 border-t border-border-ui bg-surface/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src="/pr32_logo_v2.png" alt="PixelRoot32" class="h-10 w-auto opacity-70" />
      </a>
      
      <div class="flex space-x-8 text-sm font-medium text-text-muted">
        <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine" target="_blank" class="hover:text-primary transition-colors">${i18n.t('footer.social.github')}</a>
        <a href="https://discord.com/invite/NWRMTKU5" target="_blank" class="hover:text-primary transition-colors">${i18n.t('footer.social.discord')}</a>
        <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/blob/main/LICENSE" target="_blank" class="hover:text-primary transition-colors">${i18n.t('footer.license')}</a>
      </div>

      <p class="text-xs text-text-muted font-mono uppercase tracking-widest">
        ${i18n.t('footer.text')}
      </p>
    </div>
    <div class="mt-12 pt-8 border-t border-border-ui/30 text-center">
      <p class="text-[10px] text-text-muted/50 font-mono uppercase tracking-widest">
        ${i18n.t('footer.copyright')}
      </p>
    </div>
  </div>
</footer>`;
}
