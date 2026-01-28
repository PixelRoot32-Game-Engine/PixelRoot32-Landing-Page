/**
 * WASM Demo Component
 * Interactive code execution demo (placeholder structure)
 * 
 * Note: Full WASM implementation would require compiling PixelRoot32 engine to WebAssembly
 * This component provides the UI structure for future WASM integration
 */
export function WASMDemo(): string {
  return `<section id="wasm-demo" class="py-24 bg-surface/30 border-y border-border-ui">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="text-3xl lg:text-5xl font-black mb-4 tracking-tight">Try PixelRoot32 <span class="text-primary">in Your Browser</span></h2>
      <p class="text-text-muted text-lg max-w-2xl mx-auto">Experience the engine's API directly in your browser. Edit the code and see it run in real-time.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Code Editor -->
      <div class="bg-surface border-2 border-border-ui shadow-block overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 bg-background border-b border-border-ui">
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-retro/40"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
          </div>
          <span class="text-[10px] font-mono text-text-muted uppercase tracking-widest">main.cpp</span>
          <button class="px-3 py-1 bg-primary text-background text-xs font-mono font-bold hover:bg-primary/80 transition-colors">
            RUN
          </button>
        </div>
        <div class="p-6">
          <textarea 
            id="wasm-code-editor"
            class="w-full h-64 bg-background border border-border-ui p-4 font-mono text-sm text-text-high resize-none focus:outline-none focus:border-primary"
            readonly
          >#include &lt;core/Engine.h&gt;
namespace pr32 = pixelroot32;

pr32::core::Engine engine(display, input, audio);

void setup() {
    engine.init();
    engine.setScene(&mainMenu);
}

void loop() {
    engine.run();
}</textarea>
          <p class="mt-4 text-xs text-text-muted font-mono">
            ⚠️ WASM demo coming soon. This will allow you to run PixelRoot32 code directly in your browser.
          </p>
        </div>
      </div>

      <!-- Output Canvas -->
      <div class="bg-surface border-2 border-border-ui shadow-block overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 bg-background border-b border-border-ui">
          <span class="text-[10px] font-mono text-text-muted uppercase tracking-widest">Output</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono text-text-muted">60 FPS</span>
            <div class="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          </div>
        </div>
        <div class="aspect-square bg-background flex items-center justify-center relative">
          <div class="text-center">
            <div class="text-text-muted font-mono text-sm mb-2">WASM Runtime</div>
            <div class="text-text-muted/50 font-mono text-xs">Interactive demo coming soon</div>
          </div>
          <canvas id="wasm-canvas" class="hidden w-full h-full"></canvas>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center">
      <p class="text-sm text-text-muted mb-4">Want to contribute to the WASM build?</p>
      <a 
        href="https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine" 
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-border-ui hover:border-primary transition-all font-mono font-bold text-sm"
      >
        Check the Roadmap →
      </a>
    </div>
  </div>
</section>`;
}
