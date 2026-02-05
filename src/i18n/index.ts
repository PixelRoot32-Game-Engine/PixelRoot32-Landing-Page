/**
 * Internationalization (i18n) System
 * Manages language selection and translation functions
 */

// Define supported languages
export type Language = 'en' | 'es';

// Translation interface
export interface Translations {
  [key: string]: string;
}

// i18n store class
export class I18nStore {
  private currentLanguage: Language = 'en';
  private translations: Record<Language, Translations> = {
    en: {},
    es: {}
  };
  private listeners: Array<() => void> = [];

  // Initialize with translations
  constructor(translations: Record<Language, Translations>) {
    this.translations = translations;
    this.loadSavedLanguage();
  }

  // Load saved language from localStorage
  private loadSavedLanguage(): void {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
      this.currentLanguage = savedLanguage;
    } else {
      // Detect browser language if no saved preference
      const browserLanguage = navigator.language.split('-')[0] as Language;
      if (['en', 'es'].includes(browserLanguage)) {
        this.currentLanguage = browserLanguage;
      }
    }
  }

  // Save language to localStorage
  private saveLanguage(language: Language): void {
    localStorage.setItem('language', language);
  }

  // Set current language
  setLanguage(language: Language): void {
    if (language !== this.currentLanguage) {
      this.currentLanguage = language;
      this.saveLanguage(language);
      this.notifyListeners();
    }
  }

  // Get current language
  getLanguage(): Language {
    return this.currentLanguage;
  }

  // Translate a key
  t(key: string, defaultValue?: string): string {
    return this.translations[this.currentLanguage][key] || defaultValue || key;
  }

  // Subscribe to language changes
  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners of language changes
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

// Create and export a single instance
export const i18n = new I18nStore({
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.documentation': 'Documentation',
    'nav.samples': 'Samples',
    'nav.github': 'GitHub',
    
    // Hero
    'hero.version': 'v0.1.0-alpha available', // This will be replaced dynamically
    'hero.version.available': 'available',
    'hero.title': 'High-Performance 2D Games for ESP32 & PC.',
    'hero.subtitle': 'A modular, C++17 game engine with a scene-based architecture. Build once, simulate on PC, and deploy to embedded hardware with zero friction.',
    'hero.cta.start': 'START BUILDING',
    'hero.cta.view': 'VIEW SOURCE',
    'hero.feature1.title': '01. Modular by Design',
    'hero.feature1.description': 'Swap display drivers, audio backends, or input systems without touching core logic.',
    'hero.feature2.title': '02. True Cross-Platform',
    'hero.feature2.description': 'Develop on SDL2 and flash to ESP32 with zero friction and maximum performance.',
    'hero.feature3.title': '03. Retro-Engineered',
    'hero.feature3.description': 'Built-in NES-style synth and deterministic sprite system for the authentic retro feel.',
    
    // CodeBlock
    'code.title': 'Godot-inspired, C++ Optimized.',
    'code.subtitle': 'PixelRoot32 uses a familiar scene-based architecture that makes game logic intuitive, even on memory-constrained devices.',
    'code.feature1': 'Deterministic game loop control',
    'code.feature2': 'Namespace-organized modular API',
    'code.feature3': 'Automatic memory pooling for actors',
    
    // Features
    'features.title': 'Technical Deep-Dive',
    'features.subtitle': 'A modular toolkit designed for the modern retro developer.',
    'features.scene_system.title': 'Scene System',
    'features.scene_system.description': 'Godot-inspired hierarchy with Scenes, Actors, and PhysicsActors for intuitive entity management.',
    'features.sprite_engine.title': 'Sprite Engine',
    'features.sprite_engine.description': 'Deterministic 1bpp/2bpp/4bpp sprite system with multi-layer support and step-based animations.',
    'features.nes_audio.title': 'NES Audio',
    'features.nes_audio.description': 'Native 4-channel synthesizer (Pulse, Triangle, Noise) for authentic 8-bit soundscapes.',
    'features.ui_toolkit.title': 'UI Toolkit',
    'features.ui_toolkit.description': 'Automatic layouts (Grid, Vertical, Horizontal) and pixel-perfect bitmap font rendering.',
    
    // Showcase
    'showcase.title': 'One Codebase. Two Worlds.',
    'showcase.pc.title': 'PC Simulation (SDL2)',
    'showcase.pc.subtitle': 'Rapid Prototyping',
    'showcase.pc.description': 'Debug your game logic, test physics, and iterate on UI layouts directly on your desktop with full hot-reloading support.',
    'showcase.esp32.title': 'ESP32 Hardware (SPI)',
    'showcase.esp32.subtitle': 'Hardware Deployment',
    'showcase.esp32.description': 'Deploy to resource-constrained microcontrollers. PixelRoot32 leverages DMA and SPI to ensure smooth performance on real hardware.',
    
    // CTA
    'cta.cta1': 'GET STARTED NOW',
    'cta.cta2': 'EXPLORE SAMPLES',
    'cta.title': 'Ready to build for the next generation of retro?',
    
    // BuiltWith
    'builtwith.title': 'Built with PixelRoot32',
    'builtwith.subtitle': 'See what the community is creating with our engine. From retro platformers to arcade classics.',
    'builtwith.submit_question': 'Have a project to showcase?',
    'builtwith.submit': 'Submit Your Project →',
    'builtwith.spaceinvaders': 'Space Invaders',
    'builtwith.spaceinvaders.description': 'Standard 1bpp sprite system reference. Demonstrates scenes, entities, rendering, input, audio, and collisions with NES palette.',
    'builtwith.metroidvania': 'Metroidvania',
    'builtwith.metroidvania.description': 'Advanced 4bpp tilemaps and tile-based collision reference. Features platformer physics, ladders, and dual palette mode.',
    'builtwith.tictactoe': 'Tic-Tac-Toe',
    'builtwith.tictactoe.description': 'Turn-based game reference with AI opponent and custom user-defined "Neon" color palette.',
    'builtwith.by': 'by PixelRoot32 Team',
    'builtwith.view': 'View Project →',
    'builtwith.more_samples': 'View More Samples →',
    
    // Footer
    'footer.text': 'Built with precision for the ESP32 ecosystem.',
    'footer.copyright': '© 2026 PixelRoot32. All rights reserved.',
    'footer.license': 'Licensed under MIT',
    'footer.social.github': 'GitHub',
    'footer.social.discord': 'Discord',
    'footer.social.twitter': 'Twitter',
    
    // Language switcher
    'language.english': 'English',
    'language.spanish': 'Español',
    
    // Tools
    'tools.title': 'Developer Tools',
    'tools.subtitle': 'Powerful utilities to streamline your PixelRoot32 development workflow.',
    'tools.available': 'Available',
    'tools.coming_soon': 'Coming Soon',
    'tools.by': 'by PixelRoot32 Team',
    'tools.view': 'View on GitHub →',
    'tools.sprite_compiler.title': 'Sprite Compiler',
    'tools.sprite_compiler.description': 'Convert PNG sprite sheets into optimized C header files (.h) compatible with PixelRoot32. Supports layered sprites, multiple color depths (1bpp/2bpp/4bpp), and automatic palette detection.',
    'tools.tilemap_editor.title': 'Tilemap Editor',
    'tools.tilemap_editor.description': 'Create multi-layer tile-based maps and scenes for PixelRoot32. Features integrated workspace, smart tile selection, and export to optimized C++ code for ESP32 hardware.'
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.documentation': 'Documentación',
    'nav.samples': 'Ejemplos',
    'nav.github': 'GitHub',
    
    // Hero
    'hero.version': 'v0.1.0-alpha disponible', // This will be replaced dynamically
    'hero.version.available': 'disponible',
    'hero.title': 'Juegos 2D de Alto Rendimiento para ESP32 & PC.',
    'hero.subtitle': 'Un motor de juegos modular en C++17 con arquitectura basada en escenas. Construye una vez, simula en PC y despliega en hardware embebido sin fricción.',
    'hero.cta.start': 'EMPEZAR A CONSTRUIR',
    'hero.cta.view': 'VER CÓDIGO FUENTE',
    'hero.feature1.title': '01. Diseñado para ser Modular',
    'hero.feature1.description': 'Cambia controladores de pantalla, backends de audio o sistemas de entrada sin tocar la lógica central.',
    'hero.feature2.title': '02. Verdaderamente Multiplataforma',
    'hero.feature2.description': 'Desarrolla en SDL2 y flashea a ESP32 sin fricción y con máximo rendimiento.',
    'hero.feature3.title': '03. Diseñado para Retro',
    'hero.feature3.description': 'Sintetizador estilo NES y sistema de sprites determinístico para el auténtico feel retro.',
    
    // CodeBlock
    'code.title': 'Inspirado en Godot, Optimizado en C++.',
    'code.subtitle': 'PixelRoot32 usa una arquitectura familiar basada en escenas que hace que la lógica de juegos sea intuitiva, incluso en dispositivos con poca memoria.',
    'code.feature1': 'Control determinístico del ciclo de juego',
    'code.feature2': 'API modular organizada por namespaces',
    'code.feature3': 'Pooling automático de memoria para actores',
    
    // Features
    'features.title': 'Análisis Técnico',
    'features.subtitle': 'Una herramienta modular diseñada para el desarrollador retro moderno.',
    'features.scene_system.title': 'Sistema de Escenas',
    'features.scene_system.description': 'Jerarquía inspirada en Godot con Scenes, Actors y PhysicsActors para una gestión intuitiva de entidades.',
    'features.sprite_engine.title': 'Motor de Sprites',
    'features.sprite_engine.description': 'Sistema determinístico de sprites 1bpp/2bpp/4bpp con soporte para múltiples capas y animaciones basadas en pasos.',
    'features.nes_audio.title': 'Audio NES',
    'features.nes_audio.description': 'Sintetizador nativo de 4 canales (Pulse, Triangle, Noise) para paisajes sonoros auténticos de 8 bits.',
    'features.ui_toolkit.title': 'Kit de UI',
    'features.ui_toolkit.description': 'Diseños automáticos (Grid, Vertical, Horizontal) y renderizado de fuentes bitmap pixel-perfect.',
    
    // Showcase
    'showcase.title': 'Un Código. <span class="text-secondary">Dos Mundos.</span>',
    'showcase.pc.title': 'Simulación PC (SDL2)',
    'showcase.pc.subtitle': 'Prototipado Rápido',
    'showcase.pc.description': 'Depura tu lógica de juego, prueba físicas e itera en diseños de UI directamente en tu escritorio con soporte completo de recarga en caliente.',
    'showcase.esp32.title': 'Hardware ESP32 (SPI)',
    'showcase.esp32.subtitle': 'Despliegue en Hardware',
    'showcase.esp32.description': 'Despliega en microcontroladores con recursos limitados. PixelRoot32 aprovecha DMA y SPI para garantizar un rendimiento fluido en hardware real.',
    
    // CTA
    'cta.cta1': 'EMPEZAR AHORA',
    'cta.cta2': 'EXPLORAR EJEMPLOS',
    'cta.title': '¿Listo para construir para la próxima generación de retro?',
    
    // BuiltWith
    'builtwith.title': 'Construido con PixelRoot32',
    'builtwith.subtitle': 'Mira lo que está creando la comunidad con nuestro motor. Desde plataformeros retro hasta clásicos de arcade.',
    'builtwith.submit_question': '¿Tienes un proyecto para mostrar?',
    'builtwith.submit': 'Enviar Tu Proyecto →',
    'builtwith.spaceinvaders': 'Space Invaders',
    'builtwith.spaceinvaders.description': 'Referencia del sistema de sprites 1bpp. Demuestra escenas, entidades, renderizado, entrada, audio y colisiones con paleta NES.',
    'builtwith.metroidvania': 'Metroidvania',
    'builtwith.metroidvania.description': 'Referencia de tilemaps 4bpp avanzados y colisiones basadas en tiles. Incluye físicas de plataformas, escaleras y modo de paleta dual.',
    'builtwith.tictactoe': 'Tres en Raya',
    'builtwith.tictactoe.description': 'Referencia de juego por turnos con oponente IA y paleta de colores "Neon" personalizada definida por el usuario.',
    'builtwith.by': 'por Equipo PixelRoot32',
    'builtwith.view': 'Ver Proyecto →',
    'builtwith.more_samples': 'Ver Más Ejemplos →',

    
    // Footer
    'footer.text': 'Construido con precisión para el ecosistema ESP32.',
    'footer.copyright': '© 2026 PixelRoot32. Todos los derechos reservados.',
    'footer.license': 'Licenciado bajo MIT',
    'footer.social.github': 'GitHub',
    'footer.social.discord': 'Discord',
    'footer.social.twitter': 'Twitter',
    
    // Language switcher
    'language.english': 'English',
    'language.spanish': 'Español',
    
    // Tools
    'tools.title': 'Herramientas de Desarrollo',
    'tools.subtitle': 'Utilidades potentes para optimizar tu flujo de trabajo con PixelRoot32.',
    'tools.available': 'Disponible',
    'tools.coming_soon': 'Próximamente',
    'tools.by': 'por Equipo PixelRoot32',
    'tools.view': 'Ver en GitHub →',
    'tools.sprite_compiler.title': 'Compilador de Sprites',
    'tools.sprite_compiler.description': 'Convierte hojas de sprites PNG en archivos de cabecera C optimizados (.h) compatibles con PixelRoot32. Soporta sprites en capas, múltiples profundidades de color (1bpp/2bpp/4bpp) y detección automática de paletas.',
    'tools.tilemap_editor.title': 'Editor de Tilemaps',
    'tools.tilemap_editor.description': 'Crea mapas y escenas basados en tiles multi-capa para PixelRoot32. Incluye espacio de trabajo integrado, selección inteligente de tiles y exportación a código C++ optimizado para hardware ESP32.'
  }
});
