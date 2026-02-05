/**
 * Hero Component
 * Main hero section with tagline, value proposition, and primary CTAs
 */
import { i18n } from '../i18n';
import { Button, Card } from 'pixelroot32-components-landing-page';

export function Hero(): string {
  return `<main class="pt-32 pb-16 lg:pt-48 lg:pb-32 relative overflow-hidden">
  <!-- Background Decor -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
    <div class="absolute inset-0 bg-grid-pattern"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-8">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
      </span>
      <span id="hero-version">${i18n.t('hero.version')}</span>
    </div>
    
    <h1 class="text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
      ${i18n.t('hero.title')}
    </h1>
    
    <p class="max-w-2xl mx-auto text-lg lg:text-xl text-text-muted mb-10 leading-relaxed">
      ${i18n.t('hero.subtitle')}
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      ${Button({
        label: i18n.t('hero.cta.start'),
        variant: 'primary',
        className: 'w-full sm:w-auto px-8 py-4 text-lg',
        href: 'https://docs.pixelroot32.org',
        target: '_blank'
      })}
      ${Button({
        label: i18n.t('hero.cta.view'),
        variant: 'outline',
        className: 'w-full sm:w-auto px-8 py-4 text-lg',
        href: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine',
        target: '_blank'
      })}
    </div>

    <!-- Feature Teaser -->
    <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      ${Card({
        title: i18n.t('hero.feature1.title'),
        description: i18n.t('hero.feature1.description'),
        variant: 'primary',
        className: 'p-6'
      })}
      ${Card({
        title: i18n.t('hero.feature2.title'),
        description: i18n.t('hero.feature2.description'),
        variant: 'secondary',
        className: 'p-6'
      })}
      ${Card({
        title: i18n.t('hero.feature3.title'),
        description: i18n.t('hero.feature3.description'),
        variant: 'retro',
        className: 'p-6'
      })}
    </div>
  </div>
</main>`;
}
