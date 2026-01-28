import './style.css'
import './utils/analytics'
import { Navigation, Hero, Features, CodeBlock, Showcase, BuiltWith, CTA, Tools, Footer, initToolsImageModal } from './components';
import { initLanguageSwitcher } from './components/LanguageSwitcher';
import { initVersionDisplay } from './utils/version';
import { i18n } from './i18n';

/**
 * Main Application Entry Point
 * Renders all components into the #app container
 */
function renderApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  
  if (!app) {
    console.error('App container not found');
    return;
  }

  // Render all components in order
  app.innerHTML = Navigation() + Hero() + Features() + CodeBlock() + Showcase() + BuiltWith() + Tools() + CTA() + Footer();
  
  // Initialize language switcher functionality
  initLanguageSwitcher();
  
  // Initialize tools image modal
  initToolsImageModal();
  
  // Initialize version display from GitHub
  initVersionDisplay(i18n);

  console.log('PixelRoot32 Landing Page Rendered');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

