import { readFileSync } from 'node:fs';
import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '@/lib/metadata';

const font = readFileSync('./app/docs-og/[...slug]/Geist-Regular.ttf');
const fontBold = readFileSync('./app/docs-og/[...slug]/Geist-Bold.ttf');

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'My App',
    fonts: [
      {
        name: 'Mono',
        data: font,
        weight: 400,
      },
      {
        name: 'Mono',
        data: fontBold,
        weight: 600,
      },
    ]
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}