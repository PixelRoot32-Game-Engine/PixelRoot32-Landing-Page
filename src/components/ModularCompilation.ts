/**
 * ModularCompilation Component
 * Shows modular compilation flags and memory savings
 */
import { i18n } from '../i18n';

export function ModularCompilation(): string {
  return `<section id="modular" class="py-24 relative overflow-hidden">
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
            <!--
              Every number comes from scripts/modular_size_results.json in the
              engine repo (1.14.0, measured 2026-11-04): esp32dev, 128x128 bench
              scene with each subsystem's symbols linked. Audio RAM includes the
              sizeof(ESP32AudioScheduler) heap (ApuCore); not task/DMA.
            -->
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.audio')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~17 KB</td>
              <td class="text-center py-4 px-4 font-mono">~26 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_AUDIO</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.physics')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~8 KB</td>
              <td class="text-center py-4 px-4 font-mono">~8 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_PHYSICS</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.ui')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">&lt;1 KB</td>
              <td class="text-center py-4 px-4 font-mono">~4 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_UI_SYSTEM</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.particles')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~1 KB</td>
              <td class="text-center py-4 px-4 font-mono">~1 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_PARTICLES</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.networking')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">~2 KB</td>
              <td class="text-center py-4 px-4 font-mono">~5 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_NETWORKING</td>
            </tr>
            <tr class="hover:bg-background/50 transition-colors">
              <td class="py-4 px-4 font-mono">${i18n.t('modular.persistence')}</td>
              <td class="text-center py-4 px-4 font-mono text-secondary">&lt;1 KB</td>
              <td class="text-center py-4 px-4 font-mono">~1 KB</td>
              <td class="py-4 px-4 font-mono text-xs text-text-muted">PIXELROOT32_ENABLE_PERSISTENCE</td>
            </tr>
            <tr class="border-t-2 border-border-ui bg-background/30">
              <td class="py-4 px-4 font-mono font-bold text-primary">${i18n.t('modular.all')}</td>
              <td class="text-center py-4 px-4 font-mono font-bold text-primary">~28 KB</td>
              <td class="text-center py-4 px-4 font-mono font-bold text-primary">~43 KB</td>
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

    <!-- Every row states what the module costs to have compiled in, measured
         against the same build without it. The four default-on modules are
         turned off one at a time from the full build; networking and
         persistence default to off, so theirs is the enabled build minus the
         full one. Both directions describe the same thing, which is why the
         rows share one table instead of a separate block. -->
    <p class="mt-6 text-text-muted text-xs leading-relaxed max-w-3xl">${i18n.t('modular.method')}</p>
  </div>
</section>`;
}
