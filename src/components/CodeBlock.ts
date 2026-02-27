/**
 * CodeBlock Component
 * Live code example section showing the API in action
 */
import { i18n } from '../i18n';

export function CodeBlock(): string {
  return `<section id="code" class="py-24 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row items-center gap-16">
      <div class="lg:w-1/2">
        <h2 class="text-3xl lg:text-5xl font-black mb-6 tracking-tight">${i18n.t('code.title')}</h2>
        <p class="text-text-muted text-lg mb-8 leading-relaxed">
          ${i18n.t('code.subtitle')}
        </p>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <div class="mt-1 w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm font-medium">${i18n.t('code.feature1')}</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="mt-1 w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm font-medium">${i18n.t('code.feature2')}</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="mt-1 w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm font-medium">${i18n.t('code.feature3')}</span>
          </li>
        </ul>
      </div>

      <div class="lg:w-1/2 w-full">
        <div class="bg-surface border border-border-ui shadow-block overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-background border-b border-border-ui">
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-retro/40"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
            </div>
            <span class="text-[10px] font-mono text-text-muted uppercase tracking-widest">main.cpp</span>
          </div>
          <div class="p-6 font-mono text-sm overflow-x-auto leading-relaxed">
            <pre class="text-text-high"><span class="text-retro">#include</span> <span class="text-secondary">&lt;core/Engine.h&gt;</span>
<span class="text-retro">#include</span> <span class="text-secondary">&lt;graphics/DisplayConfig.h&gt;</span>
<span class="text-retro">#include</span> <span class="text-secondary">&lt;input/InputConfig.h&gt;</span>
<span class="text-retro">#include</span> <span class="text-secondary">&lt;audio/AudioConfig.h&gt;</span>

<span class="text-primary">using namespace</span> pixelroot32;

<span class="text-text-muted">// Configure subsystems</span>
graphics::<span class="text-primary">DisplayConfig</span> display = <span class="text-text-muted">/* ... */</span>;
input::<span class="text-primary">InputConfig</span> input(<span class="text-secondary">3</span>, <span class="text-secondary">12</span>, <span class="text-secondary">14</span>, <span class="text-secondary">27</span>);
audio::<span class="text-primary">AudioConfig</span> audio = <span class="text-text-muted">/* ... */</span>;

<span class="text-text-muted">// Multi-core: Core 0 (audio) + Core 1 (game)</span>
core::<span class="text-primary">Engine</span> engine(display, input, audio);

<span class="text-primary">void</span> <span class="text-secondary">setup</span>() {
    engine.<span class="text-secondary">init</span>();
    engine.<span class="text-secondary">setScene</span>(&gameScene);
}

<span class="text-primary">void</span> <span class="text-secondary">loop</span>() {
    engine.<span class="text-secondary">run</span>(); <span class="text-text-muted">// Fixed 1/60s timestep</span>
}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
