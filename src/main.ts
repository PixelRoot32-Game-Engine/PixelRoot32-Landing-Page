import './style.css'
import './utils/analytics'
import { Navigation, initNavigation, Hero, Features, CodeBlock, Showcase, BuiltWith, CTA, Tools, Footer, initToolsImageModal } from './components';
import { initLanguageSwitcher } from './components/LanguageSwitcher';
import { initVersionDisplay } from './utils/version';
import { i18n } from './i18n';

/**
 * Helper to create an element from an HTML string safely
 */
function appendComponent(container: HTMLElement, html: string): void {
  const temp = document.createElement('div');
  temp.innerHTML = html.trim();
  while (temp.firstChild) {
    container.appendChild(temp.firstChild);
  }
}

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

  // Clear container
  app.innerHTML = '';

  // Render all components in order
  const components = [
    Navigation(), 
    Hero(), 
    Features(), 
    CodeBlock(), 
    Showcase(), 
    BuiltWith(), 
    Tools(), 
    CTA(), 
    Footer()
  ];

  components.forEach(html => appendComponent(app, html));
  
  // Initialize language switcher functionality
  initLanguageSwitcher(app);
  
  // Initialize navigation mobile menu
  initNavigation(app);
  
  // Initialize tools image modal
  initToolsImageModal(app);
  
  // Initialize version display from GitHub
  initVersionDisplay(i18n, app);

  console.log('PixelRoot32 Landing Page Rendered');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

// Re-render app when language changes
window.addEventListener('languageChanged', renderApp);

