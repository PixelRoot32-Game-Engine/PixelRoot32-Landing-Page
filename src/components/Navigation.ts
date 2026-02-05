import { i18n } from '../i18n';
import { Navigation as SharedNavigation, initNavigation as initSharedNavigation } from 'pixelroot32-components-landing-page';

export function Navigation(): string {
  return SharedNavigation({
    logoUrl: '/logo.png',
    logoAlt: 'PixelRoot32 Logo',
    title: 'PIXELROOT32',
    subtitle: 'Game Engine',
    links: [
      { label: i18n.t('nav.features'), href: '#features' },
      { label: i18n.t('nav.documentation'), href: 'https://docs.pixelroot32.org' },
      { label: i18n.t('nav.samples'), href: 'https://github.com/Gperez88/PixelRoot32-Game-Engine-Samples' },
      { label: i18n.t('nav.github'), href: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine', variant: 'outline' }
    ],
    i18n: i18n
  });
}

export const initNavigation = initSharedNavigation;
