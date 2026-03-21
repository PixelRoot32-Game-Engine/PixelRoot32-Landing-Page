/**
 * ModularCompilation Component
 * Shows modular compilation flags and memory savings
 */
import { i18n } from '../i18n';

export function ModularCompilation(): string {
  return `<section id="modular" class="py-24 bg-surface/30 border-y border-border-ui relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('modular.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('modular.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Memory Savings Table -->
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b-2 border-border-ui">
              <th class="text-left py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('modular.table.subsystem')}</th>
              <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('modular.table.ram')}</th>
              <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('modular.table.flash')}</th>
              <th class="text-left py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('modular.table.flag')}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border-ui/50">
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.audio')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~8 KB</td>
              <td class="text-center py-4 px-4 font-mono">~15 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_AUDIO</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.physics')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~12 KB</td>
              <td class="text-center py-4 px-4 font-mono">~25 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_PHYSICS</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.ui')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~4 KB</td>
              <td class="text-center py-4 px-4 font-mono">~20 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_UI</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.particles')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~6 KB</td>
              <td class="text-center py-4 px-4 font-mono">~10 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_PARTICLES</td>
            </tr>
            <tr class="border-t-2 border-border-ui bg-background/30">
              <td class="py-4 px-4 font-mono font-bold text-primary">${i18n.t('modular.all')}</td>
              <td class="text-center py-4 px-4 font-mono font-bold text-primary">~30 KB</td>
              <td class="text-center py-4 px-4 font-mono font-bold text-primary">~70 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">${i18n.t('modular.all_flags')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Benefits -->
      <div class="space-y-6">
        <div class="bg-background border-2 border-border-ui p-6 shadow-block">
          <h3 class="text-xl font-bold mb-3 text-primary">${i18n.t('modular.benefit1.title')}</h3>
          <p class="text-text-muted text-sm">${i18n.t('modular.benefit1.description')}</p>
        </div>
        <div class="bg-background border-2 border-border-ui p-6 shadow-block">
          <h3 class="text-xl font-bold mb-3 text-secondary">${i18n.t('modular.benefit2.title')}</h3>
          <p class="text-text-muted text-sm">${i18n.t('modular.benefit2.description')}</p>
        </div>
        <div class="bg-background border-2 border-border-ui p-6 shadow-block">
          <h3 class="text-xl font-bold mb-3 text-retro">${i18n.t('modular.benefit3.title')}</h3>
          <p class="text-text-muted text-sm">${i18n.t('modular.benefit3.description')}</p>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
