import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import favicon from '~/public/apple-touch-icon.png';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src={favicon}
          alt="Logo"
          width={24}
          height={24}
        />
        PicImpact
      </>
    ),
  },
  githubUrl: 'https://github.com/besscroft/PicImpact',
};

export const linkOptions: BaseLayoutProps = {
  links: [
    {
      active: 'url',
      text: '快速开始',
      url: '/docs/pic/getting-started',
    },
    {
      active: 'url',
      text: '文档',
      url: '/docs/pic',
    },
    {
      active: 'url',
      text: 'Contributors',
      url: '/docs/pic/other/team',
    },
    {
      text: '关于',
      url: '/about',
      active: 'url',
    },
  ],
}