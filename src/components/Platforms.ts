/**
 * Platforms Component
 * Comparison table showing supported platforms and their capabilities
 */
import { i18n } from '../i18n';

export function Platforms(): string {
  return `<section id="platforms" class="py-24 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('platforms.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('platforms.subtitle')}</p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b-2 border-border-ui">
            <th class="text-left py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('platforms.table.platform')}</th>
            <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('platforms.table.fpu')}</th>
            <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('platforms.table.cores')}</th>
            <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('platforms.table.scalar')}</th>
            <th class="text-center py-4 px-4 font-black text-sm uppercase tracking-wider text-text-muted">${i18n.t('platforms.table.audio')}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border-ui/50">
          <tr class="hover:bg-surface/50 transition-colors">
            <td class="py-4 px-4 font-mono font-bold text-primary">ESP32 Classic</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs font-bold">✓</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">2</td>
            <td class="text-center py-4 px-4 font-mono text-secondary">Float</td>
            <td class="text-center py-4 px-4 font-mono text-xs">DAC + I2S</td>
          </tr>
          <tr class="hover:bg-surface/50 transition-colors">
            <td class="py-4 px-4 font-mono font-bold text-primary">ESP32-S3</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs font-bold">✓</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">2</td>
            <td class="text-center py-4 px-4 font-mono text-secondary">Float</td>
            <td class="text-center py-4 px-4 font-mono text-xs">I2S</td>
          </tr>
          <tr class="hover:bg-surface/50 transition-colors">
            <td class="py-4 px-4 font-mono font-bold text-text-high">ESP32-C3</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-text-muted/20 text-text-muted text-xs font-bold">✗</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">1</td>
            <td class="text-center py-4 px-4 font-mono text-retro">Fixed16</td>
            <td class="text-center py-4 px-4 font-mono text-xs">I2S</td>
          </tr>
          <tr class="hover:bg-surface/50 transition-colors">
            <td class="py-4 px-4 font-mono font-bold text-text-high">ESP32-S2</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-text-muted/20 text-text-muted text-xs font-bold">✗</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">1</td>
            <td class="text-center py-4 px-4 font-mono text-retro">Fixed16</td>
            <td class="text-center py-4 px-4 font-mono text-xs">I2S</td>
          </tr>
          <tr class="hover:bg-surface/50 transition-colors">
            <td class="py-4 px-4 font-mono font-bold text-text-high">ESP32-C6</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-text-muted/20 text-text-muted text-xs font-bold">✗</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">1</td>
            <td class="text-center py-4 px-4 font-mono text-retro">Fixed16</td>
            <td class="text-center py-4 px-4 font-mono text-xs">I2S</td>
          </tr>
          <tr class="hover:bg-surface/50 transition-colors border-t-2 border-border-ui">
            <td class="py-4 px-4 font-mono font-bold text-secondary">Native (PC)</td>
            <td class="text-center py-4 px-4">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs font-bold">✓</span>
            </td>
            <td class="text-center py-4 px-4 font-mono">N</td>
            <td class="text-center py-4 px-4 font-mono text-secondary">Float</td>
            <td class="text-center py-4 px-4 font-mono text-xs">SDL2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-center text-sm text-text-muted mt-8 max-w-2xl mx-auto">
      ${i18n.t('platforms.note')}
    </p>
  </div>
</section>`;
}
