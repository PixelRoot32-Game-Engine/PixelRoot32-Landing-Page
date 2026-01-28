/**
 * Features Component
 * Technical deep-dive section with feature grid
 */
import { i18n } from '../i18n';

export function Features(): string {
  return `<section id="features" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('features.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl">${i18n.t('features.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Feature 1: Scene System -->
      <div class="p-8 bg-surface border border-border-ui hover:border-primary transition-all group">
        <div class="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">${i18n.t('features.scene_system.title')}</h3>
        <p class="text-text-muted text-sm leading-relaxed">${i18n.t('features.scene_system.description')}</p>
      </div>

      <!-- Feature 2: Sprite Engine -->
      <div class="p-8 bg-surface border border-border-ui hover:border-secondary transition-all group">
        <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
          <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zM9 12h6M12 9v6"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">${i18n.t('features.sprite_engine.title')}</h3>
        <p class="text-text-muted text-sm leading-relaxed">${i18n.t('features.sprite_engine.description')}</p>
      </div>

      <!-- Feature 3: NES Audio -->
      <div class="p-8 bg-surface border border-border-ui hover:border-retro transition-all group">
        <div class="w-12 h-12 bg-retro/10 flex items-center justify-center mb-6 group-hover:bg-retro/20 transition-colors">
          <svg class="w-6 h-6 text-retro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">${i18n.t('features.nes_audio.title')}</h3>
        <p class="text-text-muted text-sm leading-relaxed">${i18n.t('features.nes_audio.description')}</p>
      </div>

      <!-- Feature 4: UI Toolkit -->
      <div class="p-8 bg-surface border border-border-ui hover:border-primary transition-all group">
        <div class="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-3">${i18n.t('features.ui_toolkit.title')}</h3>
        <p class="text-text-muted text-sm leading-relaxed">${i18n.t('features.ui_toolkit.description')}</p>
      </div>
    </div>
  </div>
</section>`;
}
