# PixelRoot32 Landing Page

Landing page for PixelRoot32, a modular 2D game engine for ESP32 and PC.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       ├── deploy.yml          # GitHub Pages deployment
│       └── check-links.yml     # Link validation CI
├── docs/                       # Documentation
├── public/                     # Static assets
├── scripts/
│   └── check-links.js          # Link checker script
├── src/
│   ├── components/             # Modular components
│   │   ├── Navigation.ts
│   │   ├── Hero.ts
│   │   ├── Features.ts
│   │   ├── CodeBlock.ts
│   │   ├── Showcase.ts
│   │   ├── BuiltWith.ts
│   │   ├── WASMDemo.ts
│   │   ├── CTA.ts
│   │   └── Footer.ts
│   ├── utils/
│   │   └── analytics.ts       # Analytics tracking
│   ├── main.ts                # Entry point
│   └── style.css              # Tailwind CSS styles
└── vite.config.ts             # Vite configuration
```

## 🛠️ Tech Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling with `@tailwindcss/vite` plugin
- **Vanilla JS** - No framework dependencies

## 📊 Features

### ✅ Completed

- Component-based architecture
- Responsive design
- Analytics tracking (automatic CTA monitoring)
- Link validation (CI/CD)
- GitHub Pages deployment workflow
- WASM demo UI structure

### 🔧 Configuration

#### Base Path for GitHub Pages

Update the `base` path in `vite.config.ts` to match your repository name:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

#### Analytics

Analytics are automatically enabled in production. To enable in development:

```bash
VITE_ENABLE_ANALYTICS=true npm run dev
```

For Google Analytics integration, add the gtag script to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔗 Link Checking

Check all external links in the codebase:

```bash
npm run check-links
```

This runs automatically on pull requests via GitHub Actions.

## 🚢 Deployment

### GitHub Pages (Automatic)

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings (use GitHub Actions as source)

### Manual Deployment

```bash
npm run build
# Deploy the `dist` folder to your hosting service
```

## 📝 Development

### Adding New Components

1. Create component in `src/components/ComponentName.ts`
2. Export from `src/components/index.ts`
3. Import and render in `src/main.ts`

### Styling

- Use Tailwind utility classes
- Custom colors defined in `src/style.css` via `@theme`
- Custom utilities in `@layer utilities`

## 📄 License

See LICENSE file for details.
