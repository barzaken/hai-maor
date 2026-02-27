import type { ComponentProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import haiLogo from '@/public/hai-logo.png';

export const LogoIcon = (props: ComponentProps<'svg'>) => (
  <svg fill="currentColor" viewBox="0 0 29 24" aria-hidden="true" {...props}>
    <path d="M0 0h6.7v24H0V0Zm9.7 0H29v7.4H14v5.6h8.1v10.9H9.7V0Z" />
  </svg>
);

type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className, alt = 'לוגו חי מאור' }: LogoProps) {
  return (
    <Image
      src={haiLogo}
      alt={alt}
      className={cn('h-auto w-auto object-contain', className)}
      priority={false}
    />
  );
}
