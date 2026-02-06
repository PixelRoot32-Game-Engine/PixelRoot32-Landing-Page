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
          <div class="flex items-center gap-4">
            <a href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-surface border-2 border-border-ui hover:border-secondary transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover text-xs font-mono font-bold group/btn">
              <span class="group-hover/btn:text-secondary transition-colors">${i18n.t('tools.view')}</span>
              <svg class="w-3 h-3 text-text-muted group-hover/btn:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <div class="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
              <span>${i18n.t('tools.by')}</span>
              <span class="w-1 h-1 rounded-full bg-border-ui"></span>
              <span>GitHub</span>
            </div>
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
          <div class="flex items-center gap-4">
            <a href="https://pixelroot32.com" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-surface border-2 border-border-ui hover:border-retro transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover text-xs font-mono font-bold group/btn">
              <span class="group-hover/btn:text-retro transition-colors">pixelroot32.com</span>
              <svg class="w-3 h-3 text-text-muted group-hover/btn:text-retro transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <div class="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-wider">
              <span>${i18n.t('tools.by')}</span>
              <span class="w-1 h-1 rounded-full bg-border-ui"></span>
              <span>Web</span>
            </div>
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
export function initToolsImageModal(container: HTMLElement = document.body): void {
  // Search for modal and triggers within the provided container
  let modal = container.querySelector('#tool-image-modal') as HTMLElement;
  if (!modal) return;

  // Move modal to body if it's not already there for better positioning
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
  
  const modalImg = modal.querySelector('#tool-image-modal-img') as HTMLImageElement;
  const modalTitle = modal.querySelector('#tool-image-modal-title');
  const modalDescription = modal.querySelector('#tool-image-modal-description');
  const modalLink = modal.querySelector('#tool-image-modal-link') as HTMLAnchorElement;
  const modalLinkText = modal.querySelector('#tool-image-modal-link-text');
  const modalBadge = modal.querySelector('#tool-image-modal-badge');
  const modalBadgeText = modal.querySelector('#tool-image-modal-badge-text');
  const closeBtn = modal.querySelector('#tool-image-modal-close');
  const imageContainers = container.querySelectorAll('[data-tool-image]');

  if (!modalImg || !closeBtn || !modalTitle || !modalDescription || !modalLink || !modalLinkText || !modalBadge || !modalBadgeText) return;

  // Tool data mapping
  const toolData: Record<string, { title: string; description: string; link: string; linkText?: string; badge: string; badgeColor: string }> = {
    'sprite-compiler': {
      title: i18n.t('tools.sprite_compiler.title'),
      description: i18n.t('tools.sprite_compiler.description'),
      link: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler',
      linkText: i18n.t('tools.view'),
      badge: i18n.t('tools.available'),
      badgeColor: 'secondary'
    },
    'tilemap-editor': {
      title: i18n.t('tools.tilemap_editor.title'),
      description: i18n.t('tools.tilemap_editor.description'),
      link: 'https://pixelroot32.com',
      linkText: 'pixelroot32.com',
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
    
    // Set grayscale based on tool status (retro badge color means coming soon)
    if (tool.badgeColor === 'retro') {
      modalImg.classList.add('grayscale-[0.3]');
    } else {
      modalImg.classList.remove('grayscale-[0.3]', 'grayscale');
    }

    // Set content
    modalTitle.textContent = tool.title;
    modalDescription.textContent = tool.description;
    
    // Set badge
    modalBadgeText.textContent = tool.badge;
    
    // Update badge colors
    modalBadge.className = 'absolute bottom-4 right-4 z-10 px-2 py-1 text-[10px] font-bold';
    modalBadgeText.className = '';
    modalTitle.className = 'text-xl font-bold mb-2';
    modalLink.className = 'font-mono transition-colors hover:text-primary';
    
    // Show link
    modalLink.classList.remove('hidden');
    modalLinkText.classList.add('hidden');
    modalLink.href = tool.link;
    modalLink.innerHTML = `
      <span>${tool.linkText || i18n.t('tools.view')}</span>
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    `;
    
    if (tool.badgeColor === 'retro') {
      modalBadge.classList.add('bg-retro', 'text-background');
      modalTitle.classList.add('text-text-muted');
      modalLink.className = 'inline-flex items-center gap-2 px-4 py-2 bg-surface border-2 border-border-ui hover:border-retro transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover text-xs font-mono font-bold';
    } else {
      modalBadge.classList.add('bg-secondary', 'text-background');
      modalLink.className = 'inline-flex items-center gap-2 px-4 py-2 bg-surface border-2 border-border-ui hover:border-secondary transition-all shadow-block hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-block-hover text-xs font-mono font-bold';
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
