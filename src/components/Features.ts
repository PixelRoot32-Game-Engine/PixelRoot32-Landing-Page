/**
 * Features Component
 * Technical deep-dive section with feature grid
 *
 * Six cards, deliberately: this section argues why the engine is worth
 * choosing, not what its API contains. Everything trimmed from it — the
 * gameplay primitives, sprite formats, UI toolkit and the projection
 * internals — is documented in full at docs.pixelroot32.org, which the
 * footer link points at.
 */
import { i18n } from '../i18n';
import { Card } from 'pixelroot32-components-landing-page';

const DOCS_URL = 'https://docs.pixelroot32.org';

export function Features(): string {
  return `<section id="features" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('features.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('features.subtitle')}</p>
    </div>

    <!-- auto-rows-fr: grid rows size independently, so without it the row
         holding the longest description stands taller than the other. -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 mb-6">
      <!-- Feature 1: Isometric Projection -->
      ${Card({
        title: i18n.t('features.projection.title'),
        description: i18n.t('features.projection.description'),
        variant: 'primary',
        icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l9 5.25v7.5L12 21l-9-5.25v-7.5L12 3zM12 3v9m0 0l9-5.25M12 12L3 6.75"></path></svg>'
      })}

      <!-- Feature 2: Memory Architecture -->
      ${Card({
        title: i18n.t('features.optimization.title'),
        description: i18n.t('features.optimization.description'),
        variant: 'retro',
        icon: '<svg class="w-6 h-6 text-retro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>'
      })}

      <!-- Feature 3: Render Performance -->
      ${Card({
        title: i18n.t('features.render_performance.title'),
        description: i18n.t('features.render_performance.description'),
        variant: 'retro',
        icon: '<svg class="w-6 h-6 text-retro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
      })}

      <!-- Feature 4: Multi-Core Audio -->
      ${Card({
        title: i18n.t('features.multicore_audio.title'),
        description: i18n.t('features.multicore_audio.description'),
        variant: 'secondary',
        icon: '<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>'
      })}

      <!-- Feature 5: Scene System -->
      ${Card({
        title: i18n.t('features.scene_system.title'),
        description: i18n.t('features.scene_system.description'),
        variant: 'primary',
        icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'
      })}

      <!-- Feature 6: Flat Solver Physics -->
      ${Card({
        title: i18n.t('features.physics.title'),
        description: i18n.t('features.physics.description'),
        variant: 'secondary',
        icon: '<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
      })}
    </div>

    <div class="text-center">
      <a href="${DOCS_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-border-ui hover:border-primary transition-all font-mono font-bold text-sm">
        ${i18n.t('features.more')}
      </a>
    </div>
  </div>
</section>`;
}
