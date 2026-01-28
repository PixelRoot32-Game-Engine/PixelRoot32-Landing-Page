/**
 * Language Switcher Component
 * Dropdown menu for selecting language
 */
import { i18n } from '../i18n';

interface LanguageOption {
  code: 'en' | 'es';
  label: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: i18n.t('language.english') },
  { code: 'es', label: i18n.t('language.spanish') }
];

export function LanguageSwitcher(): string {
  return `<div class="relative ml-4">
    <button 
      id="language-toggle" 
      class="flex items-center gap-2 px-3 py-2 bg-surface border border-border-ui rounded-md hover:border-primary transition-colors"
      aria-expanded="false"
      aria-haspopup="menu"
    >
      <span class="text-sm font-mono">${i18n.getLanguage().toUpperCase()}</span>
      <svg class="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <div 
      id="language-dropdown" 
      class="absolute right-0 mt-2 w-40 bg-background border-2 border-border-ui rounded-md shadow-lg z-50 hidden"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="language-toggle"
    >
      ${languages.map(lang => `
        <button 
          class="w-full text-left px-4 py-2 text-sm hover:bg-surface transition-colors ${i18n.getLanguage() === lang.code ? 'bg-surface font-medium' : ''}"
          data-language="${lang.code}"
          role="menuitem"
        >
          ${lang.label}
        </button>
      `).join('')}
    </div>
  </div>`;
}

/**
 * Initialize language switcher functionality
 */
export function initLanguageSwitcher(): void {
  const toggle = document.getElementById('language-toggle');
  const dropdown = document.getElementById('language-dropdown');
  
  if (!toggle || !dropdown) return;
  
  // Toggle dropdown visibility
  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', dropdown.classList.contains('hidden') ? 'false' : 'true');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target as Node) && !dropdown.contains(e.target as Node)) {
      dropdown.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Handle language selection
  dropdown.querySelectorAll('button[data-language]').forEach(button => {
    button.addEventListener('click', (e) => {
      const language = (e.target as HTMLElement).getAttribute('data-language') as 'en' | 'es';
      if (language) {
        i18n.setLanguage(language);
        dropdown.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        // Re-render the app when language changes
        window.location.reload();
      }
    });
  });
}
