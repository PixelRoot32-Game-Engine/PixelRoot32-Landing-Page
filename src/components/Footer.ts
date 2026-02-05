import { i18n } from '../i18n';
import { Footer as SharedFooter } from 'pixelroot32-components-landing-page';

export function Footer(): string {
  return SharedFooter({
    logoUrl: '/logo_v2.png',
    logoAlt: 'PixelRoot32 Logo',
    title: 'PIXELROOT32',
    subtitle: 'Game Engine',
    socialLinks: [
      { label: i18n.t('footer.social.github'), href: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine' },
      { label: i18n.t('footer.social.discord'), href: 'https://discord.gg/ytduYfr8' }
    ],
    licenseText: i18n.t('footer.license'),
    licenseHref: 'https://github.com/PixelRoot32-Game-Engine/PixelRoot32-Game-Engine/blob/main/LICENSE',
    footerText: i18n.t('footer.text'),
    copyrightText: i18n.t('footer.copyright'),
    i18n: i18n
  });
}
