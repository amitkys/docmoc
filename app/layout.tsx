import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';


export const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"
      className={`${geist.className} ${mono.variable} antialiased`}
      suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
