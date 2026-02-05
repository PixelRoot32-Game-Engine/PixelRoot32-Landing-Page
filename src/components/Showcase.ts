/**
 * Showcase Component
 * Visual gallery comparing PC simulation vs ESP32 hardware
 */
import { i18n } from '../i18n';

export function Showcase(): string {
  return `<section id="showcase" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl lg:text-5xl font-black mb-16 tracking-tight">${i18n.t('showcase.title')}</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- PC Simulation -->
      <div class="space-y-6">
        <div class="aspect-video bg-background border-4 border-border-ui shadow-block flex items-center justify-center relative group overflow-hidden">
            <div class="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
            <div class="text-primary font-mono text-sm uppercase tracking-[0.2em] font-bold">${i18n.t('showcase.pc.title')}</div>
            <!-- Placeholder for actual demo image/video -->
            <div class="absolute bottom-4 right-4 bg-primary text-background px-2 py-1 text-[10px] font-bold">60 FPS</div>
          </div>
          <div class="text-left px-4">
            <h3 class="text-xl font-bold mb-2 italic">${i18n.t('showcase.pc.subtitle')}</h3>
            <p class="text-text-muted text-sm">${i18n.t('showcase.pc.description')}</p>
          </div>
      </div>

      <!-- ESP32 Hardware -->
      <div class="space-y-6">
        <div class="aspect-video bg-background border-4 border-secondary shadow-block flex items-center justify-center relative group overflow-hidden">
            <div class="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors"></div>
            <div class="text-secondary font-mono text-sm uppercase tracking-[0.2em] font-bold">${i18n.t('showcase.esp32.title')}</div>
            <!-- Placeholder for actual hardware photo -->
            <div class="absolute bottom-4 right-4 bg-secondary text-background px-2 py-1 text-[10px] font-bold">ST7735 / ST7789 / ILI9341</div>
          </div>
          <div class="text-left px-4">
            <h3 class="text-xl font-bold mb-2 italic">${i18n.t('showcase.esp32.subtitle')}</h3>
            <p class="text-text-muted text-sm">${i18n.t('showcase.esp32.description')}</p>
          </div>
      </div>
    </div>
  </div>
</section>`;
}
