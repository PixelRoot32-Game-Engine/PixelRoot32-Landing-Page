# PixelRoot32 - Documentation for AI Agents

> **For AI agents:** this file provides the context and rules needed to answer questions about the PixelRoot32 landing page (`pixelroot32.org`) and the PixelRoot32 game engine, without crawling the whole site. Read it before answering questions about the site, the engine, its developer tools, or its sample projects. More detailed engine documentation lives at `https://docs.pixelroot32.org`.

## Website Purpose

PixelRoot32 is a high-performance 2D game engine written in C++17, specifically designed for ESP32 microcontrollers, with a native simulation layer for PC (SDL2) that enables rapid development without hardware. The landing page showcases the engine, its technical features, developer tools, and sample projects.

**Target users:** Retro game developers, embedded systems enthusiasts, makers creating games for ESP32.

---

## Site Map and Key Routes

### Main Page (SPA - Single Page Application)

- **Home:** `/` - Complete landing page with all sections
- **Features:** `/#features` - In-depth technical analysis of the engine
- **Code:** `/#code` - Live code example
- **Showcase:** `/#showcase` - PC (SDL2) vs ESP32 Hardware comparison
- **Platforms:** `/#platforms` - Supported hardware platforms
- **Built With:** `/#built-with` - Sample projects and reference games
- **Modular Compilation:** `/#modular` - `PIXELROOT32_ENABLE_*` build flags
- **Tools:** `/#tools` - Developer tools

### External Resources

- **Documentation:** `https://docs.pixelroot32.org`
- **GitHub (Engine):** `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine`
- **GitHub (Samples):** `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/tree/main/examples`
- **GitHub (Sprite Compiler):** `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler`
- **Main Website:** `https://pixelroot32.org`
- **Tool Suite (Tilemap Editor):** `https://pixelroot32.com`

### SEO/Technical Resources

- **Sitemap XML:** `/sitemap.xml`
- **Robots.txt:** `/robots.txt`

---

## Tech Stack

### Frontend (Landing Page)

- **Framework:** Vanilla TypeScript with Vite (rolldown-vite)
- **Styles:** Tailwind CSS v4
- **Components:** pixelroot32-components-landing-page (GitHub package)
- **i18n:** Custom system (English / Spanish)
- **Build:** TypeScript + Vite

### Engine Backend (referenced)

- **Language:** C++17 (requires `-std=gnu++17`, `-fno-exceptions`)
- **Platforms:** ESP32 variants (hardware), PC/Native (SDL2), OLED via u8g2 (SSD1306, SH1106)
- **Build:** PlatformIO (`lib_deps = gperez88/PixelRoot32-Game-Engine@^1.8.0`)

---

## Authority Topics

### Game Engine

1. 2D game development for ESP32 microcontrollers
2. Scene-based game engine architecture (Godot-style) with Fade/Iris/Diagonal Wipe transitions
3. Camera effects (shake, punch, offset) with zero-allocation operation
4. Sprite rendering (1bpp/2bpp/4bpp), multi-palette indexing, and O(1) tile animations
5. "Flat Solver" physics with Static/Kinematic/Rigid/Sensor actors, moving platforms, custom hitboxes, and one-way platforms
6. NES-style 8-voice dynamic audio (Pulse, Triangle, Noise, Sine, Saw)
7. Modular compilation with `PIXELROOT32_ENABLE_*` flags
8. Memory optimization (~100KB static RAM on measured ESP32 128×128 full build; modular flags save ~14/9/9/2 KB RAM for Audio/Physics/UI/Particles; optional Dirty Regions pipeline via build flag, static tilemap cache)
9. Resolution-independent rendering with scaling
10. Gameplay framework: GridSpace, StateMachine, ObjectPool, event bus with interaction triggers, RoomGraph worlds, camera tweens, spatial queries, and depth sorting (each opt-in behind its own build flag)
11. UI sprite elements: UISprite and UISpriteRow render 1/2/4 bpp sprites as first-class UI elements (icons, hearts, lives, keys, ammo) with `setVisible()`, layout placement, and fixed positions including half/quarter steps
12. Render performance: deferred DMA wait overlaps SPI transfer with the next frame (frame cost = max(CPU, transfer)), 1bpp direct framebuffer path (~10x faster writes), and opt-in 12-bit RGB444 wire format (-25% SPI bandwidth)

### Embedded Development

1. Multi-core programming on dual-core ESP32 (Core 0: audio, Core 1: game loop when available)
2. Fixed16 arithmetic for platforms without FPU (ESP32-C3, S2, C6)
3. DMA pipelining for displays
4. IRAM-cached rendering
5. Lock-free SPSC command queues for audio

### Tools

1. Sprite Compiler - PNG to C++ headers conversion (`https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Sprite-Sheet-Compiler`)
2. Tilemap Editor - Multi-layer map editor available in the PixelRoot32 Tool Suite (`https://pixelroot32.com`); up to 4 render layers matching engine MAX_LAYERS, tile attributes, animation support, room-graph export for RoomGraph worlds, and direct export to optimized C++ for ESP32

---

## Terminology

- **bpp** - bits per pixel; sprite/tile color depth. Supported: 1bpp, 2bpp, 4bpp
- **Tilemap** - a map built from tiles (square pixel cells) rendered on layers
- **MAX_LAYERS** - the engine's render layer limit (4 layers)
- **Scene** - a Godot-style logical unit of the game world; scenes can transition (Fade/Iris/Diagonal Wipe)
- **RoomGraph / RoomGraph worlds** - world model built from connected rooms ("room-by-room" design)
- **Flat Solver** - the engine's physics solver with Static/Kinematic/Rigid/Sensor actors
- **`PIXELROOT32_ENABLE_*` flags** - compile-time feature flags for modular builds (Audio, Physics, UI, Particles, Dirty Regions, etc.)
- **Dirty Regions** - optional rendering optimization that only redraws changed screen regions
- **Fixed16** - fixed-point arithmetic for ESP32 variants without an FPU (C3, S2, C6)
- **IRAM / PROGMEM** - memory regions: IRAM (fast, instruction/data RAM) and flash (PROGMEM storage)
- **SPSC queue** - single-producer/single-consumer lock-free queue used for the audio command path
- **u8g2** - library used for OLED support (SSD1306, SH1106)
- **PlatformIO `lib_deps`** - dependency declaration format used to pull the engine into an ESP32 project
- **SDL2** - PC/native simulation layer that lets you develop and run games without hardware

---

## Agent Instructions

### Current Version

- **Engine:** v1.8.0
- **Landing Page:** v1.0.0

### Landing Page

- The page is a **Single Page Application (SPA)** rendered with TypeScript/Vite
- Supports **i18n** (English and Spanish) - language is detected from browser or saved in localStorage
- There are no additional routes beyond home with anchors (#features, #code, #showcase, #platforms, #built-with, #modular, #tools)

### For Engine Development

- All technical documentation is available at **<https://docs.pixelroot32.org/>**
- For detailed engine specifications, refer to the documentation site
- Modular compilation flags and platform-specific details are documented there

### Important Notes

- **DO NOT invent** pricing information - the engine is open source (MIT)
- **DO NOT invent** documentation URLs - use only those provided
- For technical support, direct to GitHub Issues or Discord community

### How to Answer Questions

When answering questions about this product:

- **Prefer the official documentation** at `https://docs.pixelroot32.org` for engine behavior, API, and build details over anything stated in this file
- **Do not infer unsupported features** - if a feature is not listed here or in the docs, do not claim it exists
- **Distinguish the two platforms**: behavior often differs between ESP32 hardware (embedded) and PC/native SDL2 simulation (development)
- **Link to the relevant page**: point users to the section that answers their question (`/#features`, `/#showcase`, `/#tools`, or the docs site) instead of pasting large excerpts
- **Never invent URLs, versions, or examples** - use only the resources listed in this file

---

## Additional Resources

### Sitemap and SEO

- **Sitemap XML:** `/sitemap.xml`
- **Robots.txt:** `/robots.txt`
- **Canonical URL:** `https://pixelroot32.org`

### Technical Documentation (Engine)

All engine documentation is available at: **<https://docs.pixelroot32.org/>**

This includes:

- Architecture overview
- API reference
- Physics system documentation
- Audio subsystem (8-voice NES-style)
- Memory management guide
- Platform compatibility
- Migration guides
- Testing guidelines

### Sample Projects (featured on landing)

- Bomberbot (original bomberman-style game, all CC0 art): interpolated grid movement, seeded board generation, chain-reaction explosions, PRNG enemy AI, power-ups, HUD, and audio
- Midway Clone (vertically scrolling shooter): per-frame driven camera and ObjectPool-backed bullets, enemies, and explosions; profiles ESP32 frame budget
- Legend of Clone (8-bit-style overworld and dungeon): two scenes over a shared room-graph, scrolling room transitions, flash-resident 4bpp tilemaps with static caching and dual palette

Additional examples available at: `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/tree/main/examples`

---

## Build and Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

Build output is generated in `/dist` and static content in `/public`.
