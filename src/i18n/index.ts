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
    'hero.title': '60 FPS on ESP32. ~100KB RAM. Zero compromises.',
    'hero.subtitle': 'A modular C++17 engine with scene-based architecture. Build for ESP32 hardware and simulate on PC for rapid logic testing and debugging.',
    'hero.cta.start': 'START BUILDING',
    'hero.cta.view': 'VIEW SOURCE',
    'hero.feature1.title': '01. ~100KB RAM Footprint',
    'hero.feature1.description': 'Resolution Scaling reduces memory by 72%. Shared static buffers. C++17 RAII for deterministic cleanup. Fits in constrained ESP32 variants.',
    'hero.feature2.title': '02. 60 FPS on Hardware',
    'hero.feature2.description': 'Lock-free SPSC queue for sample-accurate audio (Core 0). Dedicated game loop on Core 1. IRAM-cached rendering. Zero audio jitter.',
    'hero.feature3.title': '03. Modular Compilation',
    'hero.feature3.description': 'Compile only what you need. Disable Audio (~8KB RAM), Physics (~12KB), UI (~4KB), or Particles (~6KB) via build flags.',
    
    // CodeBlock
    'code.title': 'Godot-inspired, c++17 Optimized.',
    'code.subtitle': 'PixelRoot32 uses a familiar scene-based architecture that makes game logic intuitive, even on memory-constrained devices.',
    'code.feature1': 'Fixed 1/60s timestep for deterministic physics',
    'code.feature2': 'Multi-core audio scheduler (Core 0) + game loop (Core 1)',
    'code.feature3': 'Platform-agnostic drivers with automatic FPU/Fixed16 selection',
    
    // Features
    'features.title': 'Technical Deep-Dive',
    'features.subtitle': 'A modular toolkit designed for embedded game development on resource-constrained hardware.',
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
    'features.optimization.title': 'Memory Architecture',
    'features.optimization.description': 'Resolution Scaling (72% RAM savings). DMA pipelining for displays. IRAM-cached rendering. Flash abstraction for PROGMEM access. ~100KB game loop footprint.', 
    
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
    'builtwith.title': 'Sample Projects',
    'builtwith.subtitle': 'Reference implementations demonstrating engine capabilities. From basic sprites to advanced tilemap systems.',
    'builtwith.submit_question': 'Want to contribute a sample?',
    'builtwith.submit': 'Submit Your Project →',
    'builtwith.spaceinvaders': 'Space Invaders',
    'builtwith.spaceinvaders.description': '1bpp sprite reference. Demonstrates scenes, entities, rendering, input, audio, and collisions with NES palette.',
    'builtwith.metroidvania': 'Metroidvania',
    'builtwith.metroidvania.description': '4bpp tilemap reference with platformer physics, ladders, and dual palette mode.',
    'builtwith.tictactoe': 'Tic-Tac-Toe',
    'builtwith.tictactoe.description': 'Turn-based game reference with AI opponent and custom "Neon" color palette.',
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
    
    // Platforms
    'platforms.title': 'Supported Platforms',
    'platforms.subtitle': 'Target multiple ESP32 variants and native PC with a single codebase. Automatic scalar type selection based on hardware capabilities.',
    'platforms.table.platform': 'Platform',
    'platforms.table.fpu': 'FPU',
    'platforms.table.cores': 'Cores',
    'platforms.table.scalar': 'Scalar',
    'platforms.table.audio': 'Audio',
    'platforms.note': 'FPU = Floating Point Unit. Fixed16 = 16.16 fixed-point arithmetic for platforms without FPU. All ESP32 variants support I2S audio.',
    
    // Modular
    'modular.title': 'Modular Compilation',
    'modular.subtitle': 'Compile only what you need. Disable unused subsystems via build flags to maximize available memory.',
    'modular.table.subsystem': 'Subsystem',
    'modular.table.ram': 'RAM Saved',
    'modular.table.flash': 'Flash Saved',
    'modular.table.flag': 'Build Flag',
    'modular.audio': 'Audio',
    'modular.physics': 'Physics',
    'modular.ui': 'UI System',
    'modular.particles': 'Particles',
    'modular.all': 'ALL DISABLED',
    'modular.all_flags': 'All flags set to 0',
    'modular.benefit1.title': '~100KB Total Footprint',
    'modular.benefit1.description': 'With all subsystems enabled, the core game loop uses approximately 100KB of RAM, leaving plenty of room for your game assets.',
    'modular.benefit2.title': 'Zero-Overhead When Disabled',
    'modular.benefit2.description': 'Disabled subsystems are completely compiled out. No runtime checks, no conditional branches—just pure code for what you use.',
    'modular.benefit3.title': 'Flexible Trade-offs',
    'modular.benefit3.description': 'Need more physics? Disable particles. Need UI but not audio? Disable audio. Customize your build for each project.',
    
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
    'tools.learn_more': 'pixelroot32.com →',
    'tools.sprite_compiler.title': 'Sprite Compiler',
    'tools.sprite_compiler.description': 'Convert PNG sprite sheets into optimized C header files (.h) compatible with PixelRoot32. Supports layered sprites, multiple color depths (1bpp/2bpp/4bpp), and automatic palette detection.',
    'tools.tilemap_editor.title': 'Tilemap Editor',
    'tools.tilemap_editor.description': 'Create multi-layer tile-based maps for PixelRoot32. Features: 8-layer maps, tile attributes, animation support, and direct export to optimized C++ for ESP32 hardware.'
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
    'hero.title': '60 FPS en ESP32. ~100KB RAM. Sin compromisos.',
    'hero.subtitle': 'Un motor modular en C++17 con arquitectura basada en escenas. Desarrolla para hardware ESP32 y simula en PC para testear lógica y depurar rápidamente.',
    'hero.cta.start': 'EMPEZAR A CONSTRUIR',
    'hero.cta.view': 'VER CÓDIGO FUENTE',
    'hero.feature1.title': '01. ~100KB Huella de RAM',
    'hero.feature1.description': 'Resolution Scaling reduce memoria en 72%. Buffers estáticos compartidos. C++17 RAII para cleanup determinístico. Funciona en variantes ESP32 limitadas.',
    'hero.feature2.title': '02. 60 FPS en Hardware',
    'hero.feature2.description': 'Cola SPSC sin bloqueos para audio preciso por muestra (Núcleo 0). Bucle de juego dedicado en Núcleo 1. Rendering en caché IRAM. Sin jitter de audio.',
    'hero.feature3.title': '03. Compilación Modular',
    'hero.feature3.description': 'Compila solo lo que necesitas. Desactiva Audio (~8KB RAM), Física (~12KB), UI (~4KB), o Partículas (~6KB) mediante flags de compilación.',
    
    // CodeBlock
    'code.title': 'Inspirado en Godot, Optimizado en c++17.',
    'code.subtitle': 'PixelRoot32 usa una arquitectura familiar basada en escenas que hace que la lógica de juegos sea intuitiva, incluso en dispositivos con poca memoria.',
    'code.feature1': 'Timestep fijo de 1/60s para físicas determinísticas',
    'code.feature2': 'Planificador de audio multi-núcleo (Núcleo 0) + bucle de juego (Núcleo 1)',
    'code.feature3': 'Drivers agnósticos de plataforma con selección automática FPU/Fixed16',
    
    // Features
    'features.title': 'Análisis Técnico',
    'features.subtitle': 'Un toolkit modular diseñado para desarrollo de juegos embebidos en hardware con recursos limitados.',
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
    'features.optimization.title': 'Arquitectura de Memoria',
    'features.optimization.description': 'Resolution Scaling (72% ahorro de RAM). Pipelining DMA para displays. Rendering en caché IRAM. Abstracción Flash para acceso PROGMEM. ~100KB footprint del bucle de juego.',
    
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
    'builtwith.title': 'Proyectos de Ejemplo',
    'builtwith.subtitle': 'Implementaciones de referencia demostrando capacidades del motor. Desde sprites básicos hasta sistemas de tilemap avanzados.',
    'builtwith.submit_question': '¿Quieres contribuir con un ejemplo?',
    'builtwith.submit': 'Enviar Tu Proyecto →',
    'builtwith.spaceinvaders': 'Space Invaders',
    'builtwith.spaceinvaders.description': 'Referencia de sprites 1bpp. Demuestra escenas, entidades, renderizado, entrada, audio y colisiones con paleta NES.',
    'builtwith.metroidvania': 'Metroidvania',
    'builtwith.metroidvania.description': 'Referencia de tilemaps 4bpp con físicas de plataformas, escaleras y modo de paleta dual.',
    'builtwith.tictactoe': 'Tres en Raya',
    'builtwith.tictactoe.description': 'Referencia de juego por turnos con oponente IA y paleta de colores "Neon" personalizada.',
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
    
    // Platforms
    'platforms.title': 'Plataformas Soportadas',
    'platforms.subtitle': 'Dirígete a múltiples variantes ESP32 y PC nativo con un único código base. Selección automática de tipo scalar según capacidades del hardware.',
    'platforms.table.platform': 'Plataforma',
    'platforms.table.fpu': 'FPU',
    'platforms.table.cores': 'Núcleos',
    'platforms.table.scalar': 'Scalar',
    'platforms.table.audio': 'Audio',
    'platforms.note': 'FPU = Unidad de Punto Flotante. Fixed16 = Aritmética de punto fijo 16.16 para plataformas sin FPU. Todas las variantes ESP32 soportan audio I2S.',
    
    // Modular
    'modular.title': 'Compilación Modular',
    'modular.subtitle': 'Compila solo lo que necesitas. Desactiva subsistemas no utilizados mediante flags de compilación para maximizar la memoria disponible.',
    'modular.table.subsystem': 'Subsistema',
    'modular.table.ram': 'RAM Ahorrado',
    'modular.table.flash': 'Flash Ahorrado',
    'modular.table.flag': 'Flag de Compilación',
    'modular.audio': 'Audio',
    'modular.physics': 'Física',
    'modular.ui': 'Sistema UI',
    'modular.particles': 'Partículas',
    'modular.all': 'TODOS DESACTIVADOS',
    'modular.all_flags': 'Todos los flags en 0',
    'modular.benefit1.title': '~100KB de Huella Total',
    'modular.benefit1.description': 'Con todos los subsistemas habilitados, el bucle principal del juego usa aproximadamente 100KB de RAM, dejando amplio espacio para los recursos de tu juego.',
    'modular.benefit2.title': 'Sin Sobrecarga Cuando Está Desactivado',
    'modular.benefit2.description': 'Los subsistemas desactivados se compilan completamente. Sin verificaciones en tiempo de ejecución, sin ramas condicionales—código puro para lo que usas.',
    'modular.benefit3.title': 'Compensaciones Flexibles',
    'modular.benefit3.description': '¿Necesitas más física? Desactiva partículas. ¿Necesitas UI pero no audio? Desactiva audio. Personaliza tu compilación para cada proyecto.',
    
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
    'tools.learn_more': 'pixelroot32.com →',
    'tools.sprite_compiler.title': 'Compilador de Sprites',
    'tools.sprite_compiler.description': 'Convierte hojas de sprites PNG en archivos de cabecera C optimizados (.h) compatibles con PixelRoot32. Soporta sprites en capas, múltiples profundidades de color (1bpp/2bpp/4bpp) y detección automática de paletas.',
    'tools.tilemap_editor.title': 'Editor de Tilemaps',
    'tools.tilemap_editor.description': 'Crea mapas basados en tiles multi-capa para PixelRoot32. Características: 8 capas de mapas, atributos de tiles, soporte de animación y exportación directa a C++ optimizado para hardware ESP32.'
  }
});
