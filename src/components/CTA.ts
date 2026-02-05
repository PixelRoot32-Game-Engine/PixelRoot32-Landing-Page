/**
 * CTA Component
 * Final call-to-action section before footer
 */
import { i18n } from '../i18n';
import { Button } from 'pixelroot32-components-landing-page';

export function CTA(): string {
  return `<section class="py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl lg:text-6xl font-black mb-8 tracking-tight">${i18n.t('cta.title')}</h2>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      ${Button({
        label: i18n.t('cta.cta1'),
        variant: 'primary',
        className: 'w-full sm:w-auto px-10 py-5 text-xl',
        href: 'https://docs.pixelroot32.org',
        target: '_blank'
      })}
      ${Button({
        label: i18n.t('cta.cta2'),
        variant: 'outline',
        className: 'w-full sm:w-auto px-10 py-5 text-xl',
        href: 'https://github.com/Gperez88/PixelRoot32-Game-Engine-Samples',
        target: '_blank'
      })}
    </div>
  </div>
</section>`;
}
