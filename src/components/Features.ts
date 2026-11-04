/**
 * Features Component
 * Technical deep-dive section with feature grid
 *
 * Six cards, deliberately: this section argues the platform floor and the
 * subsystems a game would otherwise have to write, not what the API contains.
 * The order is the argument. The first card answers "will it fit on my board"
 * and the second "how do I iterate" — the two questions that decide whether a
 * project starts at all. The remaining four are the parts of a 2D game that
 * are expensive to rebuild on a microcontroller: audio, physics, saves and
 * networking.
 *
 * Everything trimmed from it — the scene/actor hierarchy, the projection
 * internals, sprite formats, the UI toolkit, camera effects and the render
 * pipeline — is documented in full at docs.pixelroot32.org, which the link
 * below points at. The scene story is already carried by the hero and the
 * showcase, so repeating it here would spend a card on the least surprising
 * part of the engine.
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
      <!-- 1. Memory floor first: "will it fit?" disqualifies every other engine
           on this class of hardware, so it has to be the first answer. -->
      ${Card({
        title: i18n.t('features.memory.title'),
        description: i18n.t('features.memory.description'),
        variant: 'primary',
        icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>'
      })}

      <!-- 2. Workflow second: a reader who accepts the memory budget immediately
           asks how the loop feels, and "no flashing" is the honest answer. -->
      ${Card({
        title: i18n.t('features.native.title'),
        description: i18n.t('features.native.description'),
        variant: 'retro',
        icon: '<svg class="w-6 h-6 text-retro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'
      })}

      <!-- 3. Audio leads the subsystem cards: the latency figure is the one
           concrete number that separates this engine from a frame-synced toy. -->
      ${Card({
        title: i18n.t('features.audio.title'),
        description: i18n.t('features.audio.description'),
        variant: 'secondary',
        icon: '<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>'
      })}

      <!-- 4. Physics after audio: both are fixed-step simulation problems, so
           the 1/60 s argument reinforces the timing story above it. -->
      ${Card({
        title: i18n.t('features.physics.title'),
        description: i18n.t('features.physics.description'),
        variant: 'primary',
        icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
      })}

      <!-- 5. Saves before networking: a single-player game needs persistence,
           and the 1.14.0 module is the newest thing the section can point at. -->
      ${Card({
        title: i18n.t('features.persistence.title'),
        description: i18n.t('features.persistence.description'),
        variant: 'retro',
        icon: '<svg class="w-6 h-6 text-retro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l9 5.25v7.5L12 21l-9-5.25v-7.5L12 3zM12 3v9m0 0l9-5.25M12 12L3 6.75"></path></svg>'
      })}

      <!-- 6. Networking last: it is the most unusual capability here, and it
           reads as an extension of a finished game rather than a prerequisite. -->
      ${Card({
        title: i18n.t('features.networking.title'),
        description: i18n.t('features.networking.description'),
        variant: 'secondary',
        icon: '<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM5.5 14.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10.4 9.6L7.1 14.4M13.6 9.6l3.3 4.8M8 17h8"></path></svg>'
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
