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
    'nav.platforms': 'Platforms',
    'nav.modular': 'Modular',
    'nav.samples': 'Samples',
    'nav.tools': 'Tools',
    'nav.documentation': 'Documentation',
    'nav.github': 'GitHub',
    'nav.language': 'Language',
    
    // Hero
    'hero.version': 'v1.14.0 available',  // This will be replaced dynamically
    'hero.version.available': 'available',
    'hero.title': '60 FPS on ESP32. ~100KB static RAM. Zero compromises.',
    'hero.subtitle': 'A modular C++17 engine with Godot-inspired scenes, camera effects, and scene transitions — now rendering isometric and oblique worlds through the same path as orthogonal ones. Build for ESP32 hardware and simulate on PC for rapid testing.',
    'hero.cta.start': 'START BUILDING',
    'hero.cta.view': 'VIEW SOURCE',
    'hero.feature1.title': '01. ~100KB Static RAM',
    'hero.feature1.description': 'Measured ~100KB static RAM on ESP32 at 128×128 with all subsystems linked. Resolution Scaling cuts framebuffer use by up to 72%. Audio scheduler adds ~13KB heap when enabled.',
    'hero.feature2.title': '02. 60 FPS on Hardware',
    'hero.feature2.description': 'Lock-free SPSC queue for sample-accurate audio. On dual-core ESP32, audio runs on Core 0 with the game loop on Core 1. IRAM-cached rendering. Low audio jitter.',
    'hero.feature3.title': '03. Modular Compilation',
    'hero.feature3.description': 'Compile only what you need. Disable Audio (~14KB RAM), Physics (~9KB), UI (~9KB), or Particles (~2KB) via build flags—measured on ESP32.',
    
    // CodeBlock
    'code.title': 'Godot-inspired, c++17 Optimized.',
    'code.subtitle': 'PixelRoot32 uses a familiar scene-based architecture that makes game logic intuitive, even on memory-constrained devices.',
    'code.feature1': 'Fixed 1/60s timestep for deterministic physics',
    'code.feature2': 'Dual-core audio scheduler (Core 0) + game loop (Core 1) when available',
    'code.feature3': 'Platform-agnostic drivers with automatic FPU/Fixed16 selection',
    
    // Features
    // Headline and subtitle carry the two claims that disqualify other engines
    // first: the memory floor and the opt-in default. The cards then only need
    // to defend those claims with specifics.
    'features.title': 'A complete 2D engine in ~100 KB of RAM.',
    'features.more': 'Full feature reference →',
    'features.subtitle': 'PixelRoot32 targets the ESP32 you already own: no PSRAM, no external RAM, and no emulator between your code and the panel. Persistence, ESP-NOW networking, dialogs and the gameplay framework are opt-in behind PIXELROOT32_ENABLE_* flags that default to 0 and contribute no symbols when off.',
    'features.memory.title': 'No PSRAM Required',
    'features.memory.description': 'A measured 128×128 build with every subsystem linked takes about 100 KB of RAM; compiling audio, physics, UI and particles out drops it to about 80 KB, and the 128×128 preset on its own takes ~72% off the framebuffer. On FPU-less parts (ESP32-C3, C2, S2 and C6) Scalar becomes Fixed16 instead of float, so the same game code builds for the cheapest chips. External PSRAM is not required, and Dirty Regions and static tilemap caches are opt-in.',
    'features.native.title': 'Prototype Without Flashing',
    'features.native.description': 'The same game code builds as a native SDL2 application with pio run -e native; only the display and input drivers are platform-specific. You iterate with a real debugger and threads, test saves against host files, then flash the same scenes to the board. Audio switches to the SDL2 backend automatically, and the APU runs the same sequencing math on both targets.',
    'features.audio.title': 'Audio That Keeps Time',
    'features.audio.description': 'Eight dynamically pooled voices — Pulse, Triangle, Sine, Saw and Noise — split into a fixed 4+4 partition for music against percussion and SFX. The sequencer runs on sample time inside the APU, commands cross a lock-free 64-slot SPSC queue, and the render block is 512 samples on FPU targets or 1024 without one: 23.2 ms and 46.4 ms of latency at 22 050 Hz. Legacy, Nes and Hybrid profiles change the character on the same material.',
    'features.physics.title': 'Physics Built for Platformers',
    'features.physics.description': 'The Flat Solver steps at a fixed 1/60 s with Godot-style Kinematic and Rigid actors, one-way platforms, moving platforms whose velocity the character inherits, custom hitboxes and arbitrary-angle segment colliders for ramps and cushions. A uniform-grid broadphase, CCD for fast circles and Baumgarte correction keep stacks and slopes stable.',
    'features.persistence.title': 'Saves That Survive a Reboot',
    'features.persistence.description': 'An optional module (PIXELROOT32_ENABLE_PERSISTENCE, default off) separates storage models from media: named key-value settings and numbered save slots behind one contract. Every call returns a typed StoreResult, every read takes a capacity and never writes past it, and each record carries a 16-byte CRC-32 envelope with a schema version. NVS, host-file and in-memory adapters ship, and the service itself costs 16 bytes of static RAM.',
    'features.networking.title': 'Multiplayer Without a Router',
    'features.networking.description': 'ESP-NOW gives two or more boards a peer-to-peer link with no access point: broadcast discovery, a fixed peer table, and per-message ACK, bounded retry and a 64-bit duplicate window. A Scene event hook drains from the update loop, NetCounter converges idempotent state across a reboot, and a native loopback transport injects loss, duplication and reordering so the module is testable without hardware. Opt-in behind PIXELROOT32_ENABLE_NETWORKING, default 0.',
    
    // Showcase
    'showcase.title': 'One Codebase. Two Worlds.',
    'showcase.pc.title': 'PC Simulation (SDL2)',
    'showcase.pc.subtitle': 'Rapid Prototyping',
    'showcase.pc.description': 'Test game logic with sample-accurate audio timing and deterministic physics. Same game code as ESP32 hardware—only platform display/input config changes.',
    'showcase.esp32.title': 'ESP32 Hardware (SPI)',
    'showcase.esp32.subtitle': 'Hardware Deployment',
    'showcase.esp32.description': 'On dual-core chips, audio runs on Core 0 and the game loop on Core 1, with DMA pipelining and IRAM-cached rendering for sustained 60 FPS on resource-constrained hardware.',
    
    // CTA
    'cta.cta1': 'GET STARTED NOW',
    'cta.cta2': 'EXPLORE SAMPLES',
    'cta.title': 'Ready to build for the next generation of retro?',
    
    // BuiltWith
    'builtwith.title': 'Sample Projects',
    'builtwith.subtitle': 'Reference implementations demonstrating engine capabilities. From basic sprites to advanced tilemap systems.',
    'builtwith.submit_question': 'Want to contribute a sample?',
    'builtwith.submit': 'Submit Your Project →',
    'builtwith.iso_dungeon': 'Iso Dungeon',
    'builtwith.iso_dungeon.description': 'A 2:1 isometric dungeon where the engine has no isometric mode: the view is one ProjectionSpec — six integers — and every other system is the same projection-blind code an axis-aligned game runs. Tile-to-tile GridMotion, depth ordering by compareByDepthKey, rooms wired by a RoomGraph.',
    'builtwith.top_down_city': 'Top-Down City',
    'builtwith.top_down_city.description': 'An open world on a microcontroller (all CC0 art): one 128×128-tile island across five districts, drivable traffic, a streamed crowd with police, interiors and a day-night cycle — in 8.8% of the ESP32 RAM.',
    'builtwith.music_sequencer': 'Music Sequencer',
    'builtwith.music_sequencer.description': 'A four-track sequencer — lead, second voice, bass and percussion — re-timed mid-loop from six buttons. MusicTrack chains up to four streams over one pattern, and the APU maps melodic track N to voice N, so a dense arrangement can never push the bass onto the lead; drum hits use the shared SFX voices instead. Durations are beats, not seconds: both patterns are exactly 8.0 beats, which is what keeps four independent streams looping in step.',
    'builtwith.legend_of_clone': 'Legend of Clone',
    'builtwith.legend_of_clone.description': '8-bit-style screen-by-screen overworld and dungeon: two scenes over a shared room-graph, scrolling room transitions, flash-resident 4bpp tilemaps with static caching and dual palette.',
    'builtwith.chess': 'Chess',
    'builtwith.chess.description': 'Touch-driven chess with every rule implemented, from castling to threefold repetition. Rules are pure functions with no engine dependency, verified on the host with perft against published positions.',
    'builtwith.space_invaders': 'Space Invaders',
    'builtwith.space_invaders.description': 'Fixed-shooter clone: marching formation, degradable bunkers and a bass line that speeds up. Arena, projectile pool and explosion slots are sized at compile time — zero runtime allocation.',
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
    'platforms.note': 'FPU = Floating Point Unit. Fixed16 = 16.16 fixed-point arithmetic for platforms without FPU. All ESP32 variants support I2S audio. Monochrome OLED displays (SSD1306, SH1106) supported via u8g2.',
    
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
    'modular.also.title': 'Also opt-in, on the same rule',
    'modular.also.networking': '~2 KB of module static RAM, with a 2.5 KB hard gate the types are asserted against; the IDF Wi-Fi and ESP-NOW stacks are excluded from that figure',
    'modular.also.persistence': '16 B for the service and 24 B per NVS key-value store, plus the record headers the game chooses',
    'modular.also.note': 'These two shipped after the A/B bench behind the table, which measures the four subsystems above on esp32dev at 128×128. Their figures come from the type budget of each module instead of being folded into those deltas. The dialog system and the gameplay framework follow the same default-off rule.',
    'modular.benefit1.title': '~100KB Static Footprint',
    'modular.benefit1.description': 'On a measured ESP32 128×128 build with all subsystems linked, static RAM is about 100KB—leaving headroom for assets and heap (audio scheduler adds ~13KB when enabled).',
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
    'tools.tilemap_editor.description': 'Create multi-layer tile-based maps for PixelRoot32. Features: up to 4 render layers (engine MAX_LAYERS), tile attributes, animation support, room-graph export for RoomGraph worlds, and direct export to optimized C++ for ESP32 hardware.'
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.platforms': 'Plataformas',
    'nav.modular': 'Modular',
    'nav.samples': 'Ejemplos',
    'nav.tools': 'Herramientas',
    'nav.documentation': 'Documentación',
    'nav.github': 'GitHub',
    'nav.language': 'Idioma',
    
    // Hero
    'hero.version': 'v1.14.0 disponible', // This will be replaced dynamically
    'hero.version.available': 'disponible',
    'hero.title': '60 FPS en ESP32. ~100KB RAM estática. Sin compromisos.',
    'hero.subtitle': 'Motor modular en C++17 con escenas estilo Godot, efectos de cámara y transiciones de escena — ahora renderiza mundos isométricos y oblicuos por la misma ruta que los ortogonales. Desarrolla para ESP32 y simula en PC para testear rápidamente.',
    'hero.cta.start': 'EMPEZAR A CONSTRUIR',
    'hero.cta.view': 'VER CÓDIGO FUENTE',
    'hero.feature1.title': '01. ~100KB RAM Estática',
    'hero.feature1.description': 'Medido ~100KB de RAM estática en ESP32 a 128×128 con todos los subsistemas enlazados. Resolution Scaling reduce el framebuffer hasta un 72%. El scheduler de audio suma ~13KB de heap cuando está activo.',
    'hero.feature2.title': '02. 60 FPS en Hardware',
    'hero.feature2.description': 'Cola SPSC sin bloqueos para audio preciso por muestra. En ESP32 dual-core, el audio corre en el Núcleo 0 y el bucle de juego en el Núcleo 1. Rendering en caché IRAM. Bajo jitter de audio.',
    'hero.feature3.title': '03. Compilación Modular',
    'hero.feature3.description': 'Compila solo lo que necesitas. Desactiva Audio (~14KB RAM), Física (~9KB), UI (~9KB) o Partículas (~2KB) mediante flags—medido en ESP32.',
    
    // CodeBlock
    'code.title': 'Inspirado en Godot, Optimizado en c++17.',
    'code.subtitle': 'PixelRoot32 usa una arquitectura familiar basada en escenas que hace que la lógica de juegos sea intuitiva, incluso en dispositivos con poca memoria.',
    'code.feature1': 'Timestep fijo de 1/60s para físicas determinísticas',
    'code.feature2': 'Planificador de audio dual-core (Núcleo 0) + bucle de juego (Núcleo 1) cuando está disponible',
    'code.feature3': 'Drivers agnósticos de plataforma con selección automática FPU/Fixed16',
    
    // Features
    // El titular y el subtítulo llevan primero las dos afirmaciones que
    // descartan a otros motores: el suelo de memoria y el opt-in por defecto.
    // Las tarjetas solo tienen que defenderlas con datos concretos.
    'features.title': 'Un motor 2D completo en ~100 KB de RAM.',
    'features.more': 'Referencia completa de capacidades →',
    'features.subtitle': 'PixelRoot32 apunta al ESP32 que ya tienes: sin PSRAM, sin RAM externa y sin emulador entre tu código y la pantalla. Persistencia, red ESP-NOW, diálogos y el framework de gameplay son opcionales tras flags PIXELROOT32_ENABLE_* que vienen en 0 y no aportan símbolos cuando están apagados.',
    'features.memory.title': 'Sin necesidad de PSRAM',
    'features.memory.description': 'Una compilación medida de 128×128 con todos los subsistemas enlazados ocupa unos 100 KB de RAM; al compilar fuera audio, físicas, UI y partículas baja a unos 80 KB, y el preset de 128×128 por sí solo recorta cerca del 72% del framebuffer. En chips sin FPU (ESP32-C3, C2, S2 y C6) Scalar pasa a Fixed16 en vez de float, así que el mismo código compila para las placas más baratas. La PSRAM externa no hace falta, y Dirty Regions y las cachés estáticas de tilemap son opcionales.',
    'features.native.title': 'Prototipa sin flashear',
    'features.native.description': 'El mismo código de juego compila como aplicación nativa SDL2 con pio run -e native; solo los drivers de pantalla y entrada son específicos de cada plataforma. Iteras con depurador e hilos reales, pruebas las partidas contra archivos del host y después flasheas las mismas escenas a la placa. El audio pasa solo al backend SDL2, y el APU ejecuta la misma lógica de secuenciación en ambos destinos.',
    'features.audio.title': 'Audio que no pierde el tempo',
    'features.audio.description': 'Ocho voces asignadas dinámicamente — Pulse, Triangle, Sine, Saw y Noise — repartidas en una partición fija 4+4 entre música y percusión/SFX. El secuenciador corre en tiempo de muestra dentro del APU, los comandos cruzan una cola SPSC de 64 ranuras sin bloqueos, y el bloque de render es de 512 muestras en destinos con FPU o de 1024 sin ella: 23,2 ms y 46,4 ms de latencia a 22 050 Hz. Los perfiles Legacy, Nes e Hybrid cambian el carácter sobre el mismo material.',
    'features.physics.title': 'Físicas hechas para plataformas',
    'features.physics.description': 'El Flat Solver avanza en pasos fijos de 1/60 s con actores Kinematic y Rigid al estilo Godot, plataformas unidireccionales, plataformas móviles cuya velocidad hereda el personaje, hitboxes personalizados y colisionadores de segmento en cualquier ángulo para rampas y bandas. Una broadphase de cuadrícula uniforme, CCD para círculos rápidos y corrección de Baumgarte mantienen estables las pilas y las cuestas.',
    'features.persistence.title': 'Partidas que sobreviven al reinicio',
    'features.persistence.description': 'Un módulo opcional (PIXELROOT32_ENABLE_PERSISTENCE, apagado por defecto) separa los modelos de almacenamiento del medio físico: ajustes clave-valor con nombre y ranuras de guardado numeradas bajo un mismo contrato. Cada llamada devuelve un StoreResult tipado, cada lectura recibe una capacidad y nunca escribe más allá, y cada registro lleva una envoltura de 16 bytes con CRC-32 y versión de esquema. Se incluyen adaptadores NVS, de archivo en host y en memoria, y el servicio ocupa 16 bytes de RAM estática.',
    'features.networking.title': 'Multijugador sin router',
    'features.networking.description': 'ESP-NOW conecta dos o más placas entre iguales sin punto de acceso: descubrimiento por broadcast, tabla de pares fija y, por mensaje, ACK, reintento acotado y una ventana de duplicados de 64 bits. Un hook de eventos de escena se drena en el update, NetCounter demuestra el modelo de convergencia —operaciones idempotentes y resincronización por snapshot tras un reinicio— y un transporte loopback nativo inyecta pérdidas, duplicados y reordenamientos para probar el módulo sin hardware. Opt-in tras PIXELROOT32_ENABLE_NETWORKING, en 0 por defecto.',
    
    // Showcase
    'showcase.title': 'Un Código. <span class="text-secondary">Dos Mundos.</span>',
    'showcase.pc.title': 'Simulación PC (SDL2)',
    'showcase.pc.subtitle': 'Prototipado Rápido',
    'showcase.pc.description': 'Prueba la lógica del juego con timing de audio preciso por muestra y físicas determinísticas. El mismo código de juego que en ESP32—solo cambia la config de display/input de plataforma.',
    'showcase.esp32.title': 'Hardware ESP32 (SPI)',
    'showcase.esp32.subtitle': 'Despliegue en Hardware',
    'showcase.esp32.description': 'En chips dual-core, el audio corre en el Núcleo 0 y el bucle de juego en el Núcleo 1, con pipelining DMA y renderizado en caché IRAM para 60 FPS sostenidos en hardware con recursos limitados.',
    
    // CTA
    'cta.cta1': 'EMPEZAR AHORA',
    'cta.cta2': 'EXPLORAR EJEMPLOS',
    'cta.title': '¿Listo para construir para la próxima generación de retro?',
    
    // BuiltWith
    'builtwith.title': 'Proyectos de Ejemplo',
    'builtwith.subtitle': 'Implementaciones de referencia demostrando capacidades del motor. Desde sprites básicos hasta sistemas de tilemap avanzados.',
    'builtwith.submit_question': '¿Quieres contribuir con un ejemplo?',
    'builtwith.submit': 'Enviar Tu Proyecto →',
    'builtwith.iso_dungeon': 'Iso Dungeon',
    'builtwith.iso_dungeon.description': 'Una mazmorra isométrica 2:1 donde el motor no tiene modo isométrico: la vista es un ProjectionSpec — seis enteros — y el resto de los sistemas es el mismo código ciego a la proyección que corre un juego ortogonal. GridMotion de celda a celda, orden de profundidad con compareByDepthKey y salas conectadas por RoomGraph.',
    'builtwith.top_down_city': 'Top-Down City',
    'builtwith.top_down_city.description': 'Un mundo abierto en un microcontrolador (todo el arte CC0): una isla de 128×128 tiles con cinco distritos, tráfico conducible, multitud con policía, interiores y ciclo día-noche — en el 8.8% de la RAM del ESP32.',
    'builtwith.music_sequencer': 'Secuenciador Musical',
    'builtwith.music_sequencer.description': 'Un secuenciador de cuatro pistas — melodía, segunda voz, bajo y percusión — cuyo tempo se reajusta a mitad de bucle desde seis botones. MusicTrack encadena hasta cuatro flujos sobre un mismo patrón, y el APU asigna la pista melódica N a la voz N, así que un arreglo denso nunca puede empujar el bajo a la voz de la melodía; la percusión usa en cambio las voces compartidas de efectos. Las duraciones se miden en tiempos, no en segundos: ambos patrones duran exactamente 8.0 tiempos, y eso es lo que hace que cuatro flujos independientes ciclen sincronizados.',
    'builtwith.legend_of_clone': 'Legend of Clone',
    'builtwith.legend_of_clone.description': 'Overworld y mazmorra pantalla a pantalla estilo 8-bit: dos escenas sobre un room-graph compartido, transiciones con scroll, tilemaps 4bpp en flash con caché estática y paleta dual.',
    'builtwith.chess': 'Ajedrez',
    'builtwith.chess.description': 'Ajedrez táctil con todas las reglas implementadas, del enroque a la repetición triple. Las reglas son funciones puras sin dependencia del motor, verificadas en el host con perft contra posiciones de referencia.',
    'builtwith.space_invaders': 'Space Invaders',
    'builtwith.space_invaders.description': 'Clon del shooter fijo: formación que avanza, búnkeres degradables y una línea de bajo que acelera. Arena, pool de proyectiles y slots de explosión dimensionados en compilación — cero asignación en runtime.',
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
    'platforms.note': 'FPU = Unidad de Punto Flotante. Fixed16 = Aritmética de punto fijo 16.16 para plataformas sin FPU. Todas las variantes ESP32 soportan audio I2S. Displays OLED monocromo (SSD1306, SH1106) vía u8g2.',
    
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
    'modular.also.title': 'También opcionales, con la misma regla',
    'modular.also.networking': '~2 KB de RAM estática del módulo, con un tope duro de 2,5 KB contra el que se verifican los tipos; no incluye las pilas Wi-Fi y ESP-NOW del IDF',
    'modular.also.persistence': '16 B para el servicio y 24 B por almacén clave-valor NVS, más las cabeceras de registro que elija el juego',
    'modular.also.note': 'Estos dos llegaron después del banco A/B que sostiene la tabla, que mide los cuatro subsistemas de arriba en esp32dev a 128×128. Sus cifras vienen del presupuesto de tipos de cada módulo en lugar de sumarse a esos deltas. El sistema de diálogo y el framework de gameplay siguen la misma regla, apagados por defecto.',
    'modular.benefit1.title': '~100KB de Huella Estática',
    'modular.benefit1.description': 'En un build ESP32 128×128 medido con todos los subsistemas enlazados, la RAM estática es ~100KB—queda margen para assets y heap (el scheduler de audio suma ~13KB cuando está activo).',
    'modular.benefit2.title': 'Sin Sobrecarga Cuando Está Desactivado',
    'modular.benefit2.description': 'Los subsistemas desactivados se excluyen por completo de la compilación. Sin verificaciones en tiempo de ejecución, sin ramas condicionales—código puro para lo que usas.',
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
    'tools.tilemap_editor.description': 'Crea mapas basados en tiles multi-capa para PixelRoot32. Características: hasta 4 capas de render (MAX_LAYERS del engine), atributos de tiles, soporte de animación, exportación de room-graph para mundos RoomGraph y exportación directa a C++ optimizado para hardware ESP32.'
  }
});
