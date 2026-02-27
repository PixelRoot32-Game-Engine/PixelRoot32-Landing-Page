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
    'hero.version': 'v1.0.0 available',  // This will be replaced dynamically
    'hero.version.available': 'available',
    'hero.title': 'High-Performance 2D Games for ESP32.',
    'hero.subtitle': 'A modular c++17 engine with scene-based architecture. Build for ESP32 hardware and simulate on PC for rapid logic testing and debugging.',
    'hero.cta.start': 'START BUILDING',
    'hero.cta.view': 'VIEW SOURCE',
    'hero.feature1.title': '01. Multi-Core Optimized',
    'hero.feature1.description': 'Audio scheduler on Core 0, game loop on Core 1. Lock-free SPSC queue with sample-accurate timing ensures 60 FPS gameplay with zero audio jitter.',
    'hero.feature2.title': '02. Flat Solver Physics',
    'hero.feature2.description': 'Impulse-based collision with fixed 1/60s timestep. Proper velocity/position separation, CCD for fast objects, and Baumgarte stabilization for stable stacking.',
    'hero.feature3.title': '03. Retro-Engineered',
    'hero.feature3.description': 'True NES audio (Pulse, Triangle, Noise) running on dedicated core, multi-layer sprites with step-based animation, and fixed-timestep physics for arcade precision.',
    
    // CodeBlock
    'code.title': 'Godot-inspired, c++17 Optimized.',
    'code.subtitle': 'PixelRoot32 uses a familiar scene-based architecture that makes game logic intuitive, even on memory-constrained devices.',
    'code.feature1': 'Fixed 1/60s timestep for deterministic physics',
    'code.feature2': 'Multi-core audio scheduler (Core 0) + game loop (Core 1)',
    'code.feature3': 'Platform-agnostic drivers with automatic FPU/Fixed16 selection',
    
    // Features
    'features.title': 'Technical Deep-Dive',
    'features.subtitle': 'A modular toolkit designed for the modern retro developer.',
    'features.scene_system.title': 'Scene System',
    'features.scene_system.description': 'Godot-inspired hierarchy with Scene stack management, Entity lifecycle control, and specialized Actor types (Static, Kinematic, Rigid) for intuitive game structure.',
    'features.multicore_audio.title': 'Multi-Core Audio',
    'features.multicore_audio.description': '4-channel NES synthesizer (Pulse, Triangle, Noise) running on dedicated core with sample-accurate timing, lock-free command queue, and non-linear mixer.',
    'features.physics.title': 'Flat Solver Physics',
    'features.physics.description': 'Impulse-based velocity solver with fixed 1/60s timestep, Spatial Grid broadphase, CCD for fast objects, and Baumgarte position correction for stable simulations.',
    'features.sprite_graphics.title': 'Sprite & Graphics',
    'features.sprite_graphics.description': '1bpp/2bpp/4bpp sprites with multi-layer support, native bitmap font system (Font5x7), dual palette mode, and viewport culling for optimal performance.',
    'features.ui_toolkit.title': 'UI Toolkit',
    'features.ui_toolkit.description': 'Smart layouts (Vertical, Horizontal, Grid, Anchor) with automatic positioning, scroll support, D-pad navigation, and interactive components (Buttons, Labels, Panels).',
    'features.optimization.title': 'Hardware Optimized',
    'features.optimization.description': 'DMA pipelining for displays, IRAM-cached rendering, shared static buffers (~100KB saved), and I2C 1MHz overclocking for sustained 60 FPS on ESP32.', 
    
    // Showcase
    'showcase.title': 'One Codebase. Two Worlds.',
    'showcase.pc.title': 'PC Simulation (SDL2)',
    'showcase.pc.subtitle': 'Rapid Prototyping',
    'showcase.pc.description': 'Test game logic with sample-accurate audio timing and deterministic physics. Same behavior as ESP32 hardware, zero code changes required.',
    'showcase.esp32.title': 'ESP32 Hardware (SPI)',
    'showcase.esp32.subtitle': 'Hardware Deployment',
    'showcase.esp32.description': 'Multi-core architecture (Core 0: audio, Core 1: game loop) with DMA pipelining and IRAM-cached rendering for sustained 60 FPS on resource-constrained hardware.',
    
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
    'tools.tilemap_editor.description': 'Create multi-layer tile-based maps and scenes for PixelRoot32. Features integrated workspace, smart tile selection, and export to optimized c++17 code for ESP32 hardware.'
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.documentation': 'Documentación',
    'nav.samples': 'Ejemplos',
    'nav.github': 'GitHub',
    
    // Hero
    'hero.version': 'v0.2.0-dev disponible', // This will be replaced dynamically
    'hero.version.available': 'disponible',
    'hero.title': 'Juegos 2D de Alto Rendimiento para ESP32.',
    'hero.subtitle': 'Un motor modular en c++17 con arquitectura basada en escenas. Desarrolla para hardware ESP32 y simula en PC para testear lógica y depurar rápidamente.',
    'hero.cta.start': 'EMPEZAR A CONSTRUIR',
    'hero.cta.view': 'VER CÓDIGO FUENTE',
    'hero.feature1.title': '01. Optimizado Multi-Núcleo',
    'hero.feature1.description': 'Planificador de audio en Núcleo 0, bucle de juego en Núcleo 1. Cola SPSC sin bloqueos con timing preciso por muestra garantiza 60 FPS sin jitter de audio.',
    'hero.feature2.title': '02. Físicas Flat Solver',
    'hero.feature2.description': 'Colisiones basadas en impulsos con timestep fijo de 1/60s. Separación adecuada de velocidad/posición, CCD para objetos rápidos, y estabilización Baumgarte para apilamiento estable.',
    'hero.feature3.title': '03. Diseñado para Retro',
    'hero.feature3.description': 'Audio NES auténtico (Pulse, Triangle, Noise) ejecutándose en núcleo dedicado, sprites multi-capa con animación por pasos, y físicas de timestep fijo para precisión arcade.',
    
    // CodeBlock
    'code.title': 'Inspirado en Godot, Optimizado en c++17.',
    'code.subtitle': 'PixelRoot32 usa una arquitectura familiar basada en escenas que hace que la lógica de juegos sea intuitiva, incluso en dispositivos con poca memoria.',
    'code.feature1': 'Timestep fijo de 1/60s para físicas determinísticas',
    'code.feature2': 'Planificador de audio multi-núcleo (Núcleo 0) + bucle de juego (Núcleo 1)',
    'code.feature3': 'Drivers agnósticos de plataforma con selección automática FPU/Fixed16',
    
    // Features
    'features.title': 'Análisis Técnico',
    'features.subtitle': 'Una herramienta modular diseñada para el desarrollador retro moderno.',
    'features.scene_system.title': 'Sistema de Escenas',
    'features.scene_system.description': 'Jerarquía inspirada en Godot con gestión de pila de escenas, control de ciclo de vida de entidades, y tipos especializados de Actor (Static, Kinematic, Rigid) para estructura de juego intuitiva.',
    'features.multicore_audio.title': 'Audio Multi-Núcleo',
    'features.multicore_audio.description': 'Sintetizador NES de 4 canales (Pulse, Triangle, Noise) ejecutándose en núcleo dedicado con timing preciso por muestra, cola de comandos sin bloqueos, y mezclador no lineal.',
    'features.physics.title': 'Físicas Flat Solver',
    'features.physics.description': 'Solucionador de velocidad basado en impulsos con timestep fijo de 1/60s, fase amplia de Cuadrícula Espacial, CCD para objetos rápidos, y corrección de posición Baumgarte para simulaciones estables.',
    'features.sprite_graphics.title': 'Sprites y Gráficos',
    'features.sprite_graphics.description': 'Sprites 1bpp/2bpp/4bpp con soporte multi-capa, sistema de fuentes bitmap nativo (Font5x7), modo de paleta dual, y culling de viewport para rendimiento óptimo.',
    'features.ui_toolkit.title': 'Kit de UI',
    'features.ui_toolkit.description': 'Diseños inteligentes (Vertical, Horizontal, Grid, Anchor) con posicionamiento automático, soporte de scroll, navegación D-pad, y componentes interactivos (Botones, Etiquetas, Paneles).',
    'features.optimization.title': 'Optimizado para Hardware',
    'features.optimization.description': 'Pipelining DMA para pantallas, renderizado en caché IRAM, buffers estáticos compartidos (~100KB ahorrados), y overclocking I2C 1MHz para 60 FPS sostenidos en ESP32.',
    
    // Showcase
    'showcase.title': 'Un Código. <span class="text-secondary">Dos Mundos.</span>',
    'showcase.pc.title': 'Simulación PC (SDL2)',
    'showcase.pc.subtitle': 'Prototipado Rápido',
    'showcase.pc.description': 'Prueba la lógica del juego con timing de audio preciso por muestra y físicas determinísticas. Mismo comportamiento que hardware ESP32, sin cambios de código.',
    'showcase.esp32.title': 'Hardware ESP32 (SPI)',
    'showcase.esp32.subtitle': 'Despliegue en Hardware',
    'showcase.esp32.description': 'Arquitectura multi-núcleo (Núcleo 0: audio, Núcleo 1: bucle de juego) con pipelining DMA y renderizado en caché IRAM para 60 FPS sostenidos en hardware con recursos limitados.',
    
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
    'tools.tilemap_editor.description': 'Crea mapas y escenas basados en tiles multi-capa para PixelRoot32. Incluye espacio de trabajo integrado, selección inteligente de tiles y exportación a código c++17 optimizado para hardware ESP32.'
  }
});
