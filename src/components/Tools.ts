/**
 * Tools Component
 * Showcase section for PixelRoot32 developer tools
 */
import { i18n } from '../i18n';

export function Tools(): string {
  return `<section id="tools" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">${i18n.t('tools.title')}</h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">${i18n.t('tools.subtitle')}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Sprite Compiler -->
      <div class="space-y-6">
        <div class="aspect-video bg-background border-4 border-border-ui shadow-block flex items-center justify-center relative group overflow-hidden cursor-pointer" data-tool-image="sprite-compiler">
          <img src="/tools/sprite-compiler.webp" alt="PixelRoot32 Sprite Compiler" class="absolute inset-0 w-full h-full object-cover" style="object-position: top left;" />
          <div class="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
          <div class="absolute bottom-4 right-4 bg-secondary text-background px-2 py-1 text-[10px] font-bold z-10">
            ${i18n.t('tools.available')}
          </div>
        </div>
        <div class="text-left px-4">
          <h3 class="text-xl font-bold mb-2 italic">${i18n.t('tools.sprite_compiler.title')}</h3>
          <p class="text-text-muted text-sm mb-4">${i18n.t('tools.sprite_compiler.description')}</p>
          <div class="flex items-center gap-2 text-xs text-text-muted">
            <span class="font-mono">${i18n.t('tools.by')}</span>
            <span>•</span>
            <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler" target="_blank" class="hover:text-primary transition-colors font-mono">${i18n.t('tools.view')}</a>
          </div>
        </div>
      </div>

      <!-- Tilemap Editor -->
      <div class="space-y-6">
        <div class="aspect-video bg-background border-4 border-border-ui shadow-block flex items-center justify-center relative overflow-hidden opacity-75 cursor-pointer" data-tool-image="tilemap-editor">
          <img src="/tools/tilemap-editor.webp" alt="PixelRoot32 Tilemap Editor" class="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" style="object-position: top left;" />
          <div class="absolute inset-0 bg-background/40"></div>
          <div class="absolute bottom-4 right-4 bg-retro text-background px-2 py-1 text-[10px] font-bold z-10">
            ${i18n.t('tools.coming_soon')}
          </div>
        </div>
        <div class="text-left px-4">
          <h3 class="text-xl font-bold mb-2 italic text-text-muted">${i18n.t('tools.tilemap_editor.title')}</h3>
          <p class="text-text-muted text-sm mb-4">${i18n.t('tools.tilemap_editor.description')}</p>
          <div class="flex items-center gap-2 text-xs text-text-muted">
            <span class="font-mono">${i18n.t('tools.by')}</span>
            <span>•</span>
            <span class="font-mono opacity-50">${i18n.t('tools.coming_soon')}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Image Modal -->
  <div id="tool-image-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-background/95 backdrop-blur-md p-4">
    <button id="tool-image-modal-close" class="fixed top-4 right-4 z-[101] w-12 h-12 bg-surface border-2 border-border-ui hover:border-primary transition-all shadow-block flex items-center justify-center group">
      <svg class="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <div class="inline-block max-w-[90vw] max-h-[90vh]">
      <div class="bg-surface border-4 border-border-ui shadow-block overflow-hidden relative inline-block">
        <img id="tool-image-modal-img" src="" alt="" class="block max-w-full max-h-[calc(90vh-200px)] object-contain" style="object-position: top left;" />
        <div id="tool-image-modal-badge" class="absolute bottom-4 right-4 z-10 px-2 py-1 text-[10px] font-bold">
          <span id="tool-image-modal-badge-text"></span>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-[2px] z-10">
          <h3 id="tool-image-modal-title" class="text-xl font-bold mb-2"></h3>
          <p id="tool-image-modal-description" class="text-sm text-text-muted mb-4"></p>
          <div class="flex items-center gap-2 text-xs text-text-muted">
            <span class="font-mono">${i18n.t('tools.by')}</span>
            <span>•</span>
            <span id="tool-image-modal-link-text" class="font-mono"></span>
            <a id="tool-image-modal-link" href="#" target="_blank" class="font-mono transition-colors hidden"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

/**
 * Initialize image modal functionality for Tools component
 */
export function initToolsImageModal(): void {
  // Move modal to body if it's not already there
  let modal = document.getElementById('tool-image-modal');
  if (modal && modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
  
  const modalImg = document.getElementById('tool-image-modal-img') as HTMLImageElement;
  const modalTitle = document.getElementById('tool-image-modal-title');
  const modalDescription = document.getElementById('tool-image-modal-description');
  const modalLink = document.getElementById('tool-image-modal-link') as HTMLAnchorElement;
  const modalLinkText = document.getElementById('tool-image-modal-link-text');
  const modalBadge = document.getElementById('tool-image-modal-badge');
  const modalBadgeText = document.getElementById('tool-image-modal-badge-text');
  const closeBtn = document.getElementById('tool-image-modal-close');
  const imageContainers = document.querySelectorAll('[data-tool-image]');

  if (!modal || !modalImg || !closeBtn || !modalTitle || !modalDescription || !modalLink || !modalLinkText || !modalBadge || !modalBadgeText) return;

  // Tool data mapping
  const toolData: Record<string, { title: string; description: string; link: string; badge: string; badgeColor: string }> = {
    'sprite-compiler': {
      title: i18n.t('tools.sprite_compiler.title'),
      description: i18n.t('tools.sprite_compiler.description'),
      link: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler',
      badge: i18n.t('tools.available'),
      badgeColor: 'secondary'
    },
    'tilemap-editor': {
      title: i18n.t('tools.tilemap_editor.title'),
      description: i18n.t('tools.tilemap_editor.description'),
      link: '',
      badge: i18n.t('tools.coming_soon'),
      badgeColor: 'retro'
    }
  };

  const openModal = (imageSrc: string, imageAlt: string, toolId: string): void => {
    const tool = toolData[toolId];
    if (!tool) return;

    // Set image
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    
    // Remove grayscale if it's tilemap editor (remove any grayscale class)
    modalImg.classList.remove('grayscale-[0.3]', 'grayscale');

    // Set content
    modalTitle.textContent = tool.title;
    modalDescription.textContent = tool.description;
    
    // Set badge
    modalBadgeText.textContent = tool.badge;
    
    // Update badge colors based on tool - using same style as Showcase badges
    modalBadge.className = 'absolute bottom-4 right-4 z-10 px-2 py-1 text-[10px] font-bold';
    modalBadgeText.className = '';
    modalTitle.className = 'text-xl font-bold mb-2';
    modalLink.className = 'font-mono transition-colors';
    
    // Show link or coming soon text based on tool
    if (tool.badgeColor === 'retro') {
      // Tilemap Editor - show coming soon text instead of link
      modalLink.classList.add('hidden');
      modalLinkText.classList.remove('hidden');
      modalLinkText.textContent = i18n.t('tools.coming_soon');
      modalLinkText.classList.add('opacity-50');
      modalBadge.classList.add('bg-retro', 'text-background');
      modalTitle.classList.add('text-text-muted');
    } else {
      // Sprite Compiler - show link
      modalLink.classList.remove('hidden');
      modalLinkText.classList.add('hidden');
      modalLink.href = tool.link;
      modalLink.textContent = i18n.t('tools.view');
      modalBadge.classList.add('bg-secondary', 'text-background');
      modalTitle.classList.add('group-hover:text-primary');
      modalLink.classList.add('hover:text-primary');
    }

    // Show modal - ensure it's in body and has correct classes
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  // Add click handlers to image containers
  imageContainers.forEach((container) => {
    container.addEventListener('click', () => {
      const toolId = container.getAttribute('data-tool-image');
      const img = container.querySelector('img') as HTMLImageElement;
      if (img && toolId) {
        openModal(img.src, img.alt, toolId);
      }
    });
  });

  // Close modal handlers
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
