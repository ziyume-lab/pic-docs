import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata, ResolvingMetadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {

  return {
    icons: { icon: './favicon.ico' },
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
