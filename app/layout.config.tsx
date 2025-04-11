import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="/logo.svg"
          width={24}
          height={24}
          alt="Logo"
        />
        DocMoc
      </>
    ),
  },
};