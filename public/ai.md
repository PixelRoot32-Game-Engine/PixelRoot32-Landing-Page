# PixelRoot32 - Documentation for AI Agents

## Website Purpose

PixelRoot32 is a high-performance 2D game engine written in C++17, specifically designed for ESP32 microcontrollers, with a native simulation layer for PC (SDL2) that enables rapid development without hardware. The landing page showcases the engine, its technical features, developer tools, and sample projects.

**Target users:** Retro game developers, embedded systems enthusiasts, makers creating games for ESP32.

---

## Site Map and Key Routes

### Main Page (SPA - Single Page Application)

- **Home:** `/` - Complete landing page with all sections
- **Features:** `/#features` - In-depth technical analysis of the engine
- **Showcase:** `/#showcase` - PC (SDL2) vs ESP32 Hardware comparison
- **Tools:** `/#tools` - Developer tools

### External Resources

- **Documentation:** `https://docs.pixelroot32.org`
- **GitHub (Engine):** `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine`
- **GitHub (Samples):** `https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/tree/main/examples`
- **Main Website:** `https://pixelroot32.org`

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
- **Build:** PlatformIO (`lib_deps = gperez88/PixelRoot32-Game-Engine@^1.6.0`)

---

## Authority Topics

### Game Engine

1. 2D game development for ESP32 microcontrollers
2. Scene-based game engine architecture (Godot-style) with Fade/Iris/Diagonal Wipe transitions
3. Camera effects (shake, punch, offset) with zero-allocation operation
4. Sprite rendering (1bpp/2bpp/4bpp), multi-palette indexing, and O(1) tile animations
5. "Flat Solver" physics with moving platforms, custom hitboxes, and one-way platforms
6. NES-style 8-voice dynamic audio (Pulse, Triangle, Noise, Sine, Saw)
7. Modular compilation with `PIXELROOT32_ENABLE_*` flags
8. Memory optimization (~100KB footprint, Dirty Regions pipeline, static tilemap cache)
9. Resolution-independent rendering with scaling

### Embedded Development

1. Multi-core programming on ESP32 (Core 0: audio, Core 1: game loop)
2. Fixed16 arithmetic for platforms without FPU (ESP32-C3, S2, C6)
3. DMA pipelining for displays
4. IRAM-cached rendering
5. Lock-free SPSC queues for audio

### Tools

1. Sprite Compiler - PNG to C++ headers conversion
2. Tilemap Editor - Multi-layer map editor (coming soon)

---

## Agent Instructions

### Current Version

- **Engine:** v1.6.0
- **Landing Page:** v1.0.0

### Landing Page

- The page is a **Single Page Application (SPA)** rendered with TypeScript/Vite
- Supports **i18n** (English and Spanish) - language is detected from browser or saved in localStorage
- There are no additional routes beyond home with anchors (#features, #showcase, #tools)

### For Engine Development

- All technical documentation is available at **<https://docs.pixelroot32.org/>**
- For detailed engine specifications, refer to the documentation site
- Modular compilation flags and platform-specific details are documented there

### Important Notes

- **DO NOT invent** pricing information - the engine is open source (MIT)
- **DO NOT invent** documentation URLs - use only those provided
- For technical support, direct to GitHub Issues or Discord community

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

- Space Invaders (1bpp sprites, scene system)
- Metroidvania (4bpp tilemaps, platformer physics)
- Tic-Tac-Toe (turn-based, AI, custom palette)

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
