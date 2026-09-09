/**
 * BuiltWith Component
 * Showcase section for community projects built with PixelRoot32
 */
import { i18n } from '../i18n';

const DEMOS_REPO_URL = 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Demo-Projects';

/**
 * Accent classes are written out in full rather than interpolated, because
 * Tailwind scans source text for literal class names — a composed
 * `border-${accent}` never reaches the generated stylesheet.
 */
const ACCENTS = {
  primary: {
    border: 'hover:border-primary',
    badge: 'bg-primary/20 border-primary/30',
    badgeText: 'text-primary',
    badgeSolid: 'bg-primary text-background',
    title: 'group-hover:text-primary',
    link: 'hover:text-primary',
  },
  secondary: {
    border: 'hover:border-secondary',
    badge: 'bg-secondary/20 border-secondary/30',
    badgeText: 'text-secondary',
    badgeSolid: 'bg-secondary text-background',
    title: 'group-hover:text-secondary',
    link: 'hover:text-secondary',
  },
  retro: {
    border: 'hover:border-retro',
    badge: 'bg-retro/20 border-retro/30',
    badgeText: 'text-retro',
    badgeSolid: 'bg-retro text-background',
    title: 'group-hover:text-retro',
    link: 'hover:text-retro',
  },
} as const;

interface Project {
  /** Directory name under `games/` in the demo projects repository. */
  slug: string;
  /** i18n key stem; expects `<stem>` and `<stem>.description` to exist. */
  key: string;
  image: string;
  alt: string;
  accent: keyof typeof ACCENTS;
}

/**
 * Ordered strongest first: the grid reads left to right, and the first card is
 * the one that has to earn the scroll.
 */
const PROJECTS: Project[] = [
  {
    slug: 'top_down_city',
    key: 'builtwith.top_down_city',
    image: '/build_with/top_down_city-game.webp',
    alt: 'Top-Down City Game',
    accent: 'primary',
  },
  {
    slug: 'bomberbot',
    key: 'builtwith.bomberbot',
    image: '/build_with/bomberbot-game.webp',
    alt: 'Bomberbot Game',
    accent: 'secondary',
  },
  {
    slug: 'legend_of_clone',
    key: 'builtwith.legend_of_clone',
    image: '/build_with/legend_of_clone-game.webp',
    alt: 'Legend of Clone Game',
    accent: 'retro',
  },
  {
    slug: 'chess',
    key: 'builtwith.chess',
    image: '/build_with/chess-game.webp',
    alt: 'Chess Game',
    accent: 'primary',
  },
  {
    slug: 'space_invaders',
    key: 'builtwith.space_invaders',
    image: '/build_with/space_invaders-game.webp',
    alt: 'Space Invaders Game',
    accent: 'secondary',
  },
  {
    slug: 'midway_clone',
    key: 'builtwith.midway_clone',
    image: '/build_with/midway_clone-game.webp',
    alt: 'Midway Clone Game',
    accent: 'retro',
  },
];

function projectCard(project: Project): string {
  const accent = ACCENTS[project.accent];

  return `<div class="group cursor-pointer">
        <div class="bg-surface border-2 border-border-ui ${accent.border} transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover overflow-hidden relative aspect-square" data-builtwith-project="${project.slug}" role="button" tabindex="0" aria-label="${i18n.t(project.key)}">
          <img src="${project.image}" alt="${project.alt}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute top-2 right-2 ${accent.badge} backdrop-blur-sm px-2 py-1 rounded border">
            <span class="text-[10px] font-mono font-bold ${accent.badgeText} uppercase">ESP32</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-[2px]">
            <h3 class="text-xl font-bold mb-2 ${accent.title} transition-colors">${i18n.t(project.key)}</h3>
            <p class="text-sm text-text-muted mb-4">${i18n.t(`${project.key}.description`)}</p>
            <div class="flex items-center gap-2 text-xs text-text-muted">
              <span class="font-mono">${i18n.t('builtwith.by')}</span>
              <span>•</span>
              <a href="${DEMOS_REPO_URL}/tree/main/games/${project.slug}" target="_blank" rel="noopener noreferrer" class="${accent.link} transition-colors font-mono">${i18n.t('builtwith.view')}</a>
            </div>
          </div>
        </div>
      </div>`;
}

export function BuiltWith(): string {
  return `<section id="built-with" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('builtwith.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('builtwith.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${PROJECTS.map(projectCard).join('\n      ')}
    </div>

    <div class="mt-12 text-center">
      <a href="${DEMOS_REPO_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-border-ui hover:border-primary transition-all font-mono font-bold text-sm">
        ${i18n.t('builtwith.more_samples')}
      </a>
    </div>
  </div>

  <!-- Image Modal -->
  <div id="builtwith-image-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-background/80 backdrop-blur-md p-4">
    <button id="builtwith-image-modal-close" class="fixed top-4 right-4 z-[101] w-12 h-12 bg-surface border-2 border-border-ui hover:border-primary transition-all shadow-block flex items-center justify-center group">
      <svg class="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <div class="inline-block max-w-[90vw] max-h-[90vh]">
      <div class="bg-surface border-4 border-border-ui shadow-block overflow-hidden relative inline-block">
        <img id="builtwith-image-modal-img" src="" alt="" class="block max-w-full max-h-[calc(90vh-200px)] object-contain" style="image-rendering: pixelated;" />
        <div id="builtwith-image-modal-badge" class="absolute bottom-4 right-4 z-10 px-2 py-1 text-[10px] font-bold">ESP32</div>
        <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-[2px] z-10">
          <h3 id="builtwith-image-modal-title" class="text-xl font-bold mb-2"></h3>
          <p id="builtwith-image-modal-description" class="text-sm text-text-muted mb-4"></p>
          <div class="flex items-center gap-2 text-xs text-text-muted">
            <span class="font-mono">${i18n.t('builtwith.by')}</span>
            <span>•</span>
            <a id="builtwith-image-modal-link" href="#" target="_blank" rel="noopener noreferrer" class="font-mono transition-colors">${i18n.t('builtwith.view')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

/**
 * Listeners from the previous render. `renderApp` rebuilds the whole page on
 * every language change, so without this the document-level Escape handler
 * would be registered again on each pass and never removed.
 */
let modalListeners: AbortController | null = null;

/**
 * Wires the fullscreen viewer for the project cards.
 *
 * Content comes from PROJECTS rather than a second lookup table, so a card and
 * its fullscreen view cannot describe the project differently.
 */
export function initBuiltWithImageModal(container: HTMLElement = document.body): void {
  const modal = container.querySelector<HTMLElement>('#builtwith-image-modal');
  if (!modal) return;

  modalListeners?.abort();
  modalListeners = new AbortController();
  const { signal } = modalListeners;

  // The modal is positioned against the viewport, so it has to escape the
  // section's stacking context. Drop any copy left by an earlier render first,
  // otherwise language switches accumulate duplicate ids in the body.
  document.querySelectorAll('#builtwith-image-modal').forEach((stale) => {
    if (stale !== modal) stale.remove();
  });
  document.body.appendChild(modal);

  const modalImg = modal.querySelector<HTMLImageElement>('#builtwith-image-modal-img');
  const modalTitle = modal.querySelector<HTMLElement>('#builtwith-image-modal-title');
  const modalDescription = modal.querySelector<HTMLElement>('#builtwith-image-modal-description');
  const modalLink = modal.querySelector<HTMLAnchorElement>('#builtwith-image-modal-link');
  const modalBadge = modal.querySelector<HTMLElement>('#builtwith-image-modal-badge');
  const closeBtn = modal.querySelector<HTMLElement>('#builtwith-image-modal-close');

  if (!modalImg || !modalTitle || !modalDescription || !modalLink || !modalBadge || !closeBtn) return;

  const openModal = (project: Project): void => {
    const accent = ACCENTS[project.accent];

    modalImg.src = project.image;
    modalImg.alt = project.alt;
    modalTitle.textContent = i18n.t(project.key);
    modalDescription.textContent = i18n.t(`${project.key}.description`);

    modalBadge.className = `absolute bottom-4 right-4 z-10 px-2 py-1 text-[10px] font-bold ${accent.badgeSolid}`;
    modalLink.className = `font-mono transition-colors ${accent.link}`;
    modalLink.href = `${DEMOS_REPO_URL}/tree/main/games/${project.slug}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeModal = (): void => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  container.querySelectorAll<HTMLElement>('[data-builtwith-project]').forEach((card) => {
    const project = PROJECTS.find((p) => p.slug === card.dataset.builtwithProject);
    if (!project) return;

    card.addEventListener(
      'click',
      (event) => {
        // The "View Project" anchor sits inside the card; let it navigate.
        if ((event.target as HTMLElement).closest('a')) return;
        openModal(project);
      },
      { signal },
    );

    card.addEventListener(
      'keydown',
      (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openModal(project);
      },
      { signal },
    );
  });

  closeBtn.addEventListener('click', closeModal, { signal });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  }, { signal });

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    },
    { signal },
  );
}
