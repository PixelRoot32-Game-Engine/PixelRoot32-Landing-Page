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
- **GitHub (Samples):** `https://github.com/Gperez88/PixelRoot32-Game-Engine-Samples`
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

- **Language:** C++17
- **Platforms:** ESP32/ESP32-S3 (hardware), PC/Native (SDL2)
- **Build:** PlatformIO, CMake

---

## Authority Topics

### Game Engine

1. 2D game development for ESP32 microcontrollers
2. Scene-based game engine architecture (Godot-style)
3. Sprite rendering (1bpp/2bpp/4bpp) and tilemaps
4. "Flat Solver" physics system with AABB/Circle collisions
5. NES-style 4-channel audio (Pulse, Triangle, Noise)
6. Modular compilation with configuration flags
7. Memory optimization (~100KB footprint)
8. Resolution-independent rendering with scaling

### Embedded Development

1. Multi-core programming on ESP32 (Core 0: audio, Core 1: game loop)
2. Fixed16 arithmetic for platforms without FPU
3. DMA pipelining for displays
4. IRAM-cached rendering
5. Lock-free SPSC queues for audio

### Tools

1. Sprite Compiler - PNG to C++ headers conversion
2. Tilemap Editor - Multi-layer map editor

---

## Agent Instructions

### Current Version

- **Engine:** v1.1.0
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
- Audio subsystem (NES-style)
- Memory management guide
- Platform compatibility
- Migration guides
- Testing guidelines

### Sample Projects

- Space Invaders (1bpp sprites, scene system)
- Metroidvania (4bpp tilemaps, platformer physics)
- Tic-Tac-Toe (turn-based, AI, custom palette)

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
