/**
 * CTA Component
 * Final call-to-action section before footer
 */
import { i18n } from '../i18n';

export function CTA(): string {
  return `<section class="py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl lg:text-6xl font-black mb-8 tracking-tight">${i18n.t('cta.title')}</h2>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine" target="_blank" class="w-full sm:w-auto px-10 py-5 bg-primary text-black font-mono font-black text-xl shadow-block hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-block-hover-lg transition-all">
        ${i18n.t('cta.cta1')}
      </a>
      <a href="https://github.com/Gperez88/PixelRoot32-Game-Engine-Samples" target="_blank" class="w-full sm:w-auto px-10 py-5 bg-surface border-2 border-border-ui font-mono font-bold text-xl hover:border-primary transition-all">
        ${i18n.t('cta.cta2')}
      </a>
    </div>
  </div>
</section>`;
}
