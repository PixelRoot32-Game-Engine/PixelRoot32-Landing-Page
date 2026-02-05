/**
 * BuiltWith Component
 * Showcase section for community projects built with PixelRoot32
 */
import { i18n } from '../i18n';

export function BuiltWith(): string {
  return `<section id="built-with" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('builtwith.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('builtwith.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project 1 - Space Invaders -->
      <div class="group cursor-pointer">
        <div class="bg-surface border-2 border-border-ui hover:border-primary transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover overflow-hidden relative aspect-square">
          <img src="/build_with/spaceinvaders-game.webp" alt="Space Invaders Game" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute top-2 right-2 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded border border-primary/30">
            <span class="text-[10px] font-mono font-bold text-primary uppercase">ESP32</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-[2px]">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">${i18n.t('builtwith.spaceinvaders')}</h3>
            <p class="text-sm text-text-muted mb-4">${i18n.t('builtwith.spaceinvaders.description')}</p>
            <div class="flex items-center gap-2 text-xs text-text-muted">
              <span class="font-mono">${i18n.t('builtwith.by')}</span>
              <span>•</span>
              <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Samples/tree/master/src/examples/Games/SpaceInvaders" target="_blank" class="hover:text-primary transition-colors font-mono">${i18n.t('builtwith.view')}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 2 - Metroidvania -->
      <div class="group cursor-pointer">
        <div class="bg-surface border-2 border-border-ui hover:border-secondary transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover overflow-hidden relative aspect-square">
          <img src="/build_with/meroidvania-game.webp" alt="Metroidvania Game" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute top-2 right-2 bg-secondary/20 backdrop-blur-sm px-2 py-1 rounded border border-secondary/30">
            <span class="text-[10px] font-mono font-bold text-secondary uppercase">ESP32</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-[2px]">
            <h3 class="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">${i18n.t('builtwith.metroidvania')}</h3>
            <p class="text-sm text-text-muted mb-4">${i18n.t('builtwith.metroidvania.description')}</p>
            <div class="flex items-center gap-2 text-xs text-text-muted">
              <span class="font-mono">${i18n.t('builtwith.by')}</span>
              <span>•</span>
              <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Samples/tree/master/src/examples/Games/Metroidvania" target="_blank" class="hover:text-secondary transition-colors font-mono">${i18n.t('builtwith.view')}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project 3 - Tic-Tac-Toe -->
      <div class="group cursor-pointer">
        <div class="bg-surface border-2 border-border-ui hover:border-retro transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover overflow-hidden relative aspect-square">
          <img src="/build_with/tictactoe-game.webp" alt="Tic-Tac-Toe Game" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute top-2 right-2 bg-retro/20 backdrop-blur-sm px-2 py-1 rounded border border-retro/30">
            <span class="text-[10px] font-mono font-bold text-retro uppercase">ESP32</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-[2px]">
            <h3 class="text-xl font-bold mb-2 group-hover:text-retro transition-colors">${i18n.t('builtwith.tictactoe')}</h3>
            <p class="text-sm text-text-muted mb-4">${i18n.t('builtwith.tictactoe.description')}</p>
            <div class="flex items-center gap-2 text-xs text-text-muted">
              <span class="font-mono">${i18n.t('builtwith.by')}</span>
              <span>•</span>
              <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Samples/tree/master/src/examples/Games/TicTacToe" target="_blank" class="hover:text-retro transition-colors font-mono">${i18n.t('builtwith.view')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Samples/tree/master/src/examples/Games" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-border-ui hover:border-primary transition-all font-mono font-bold text-sm">
        ${i18n.t('builtwith.more_samples')}
      </a>
    </div>
  </div>
</section>`;
}
