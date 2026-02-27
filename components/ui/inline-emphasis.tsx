import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type InlineEmphasisProps = {
  children: ReactNode;
  className?: string;
  tone?: 'amber' | 'blue' | 'green' | 'rose';
  variant?: 'underline' | 'highlight';
};

const toneStyles = {
  amber: {
    underline: 'bg-[linear-gradient(#f59e0b,#f59e0b)]',
    highlight: 'bg-amber-100/80 dark:bg-amber-500/25',
  },
  blue: {
    underline: 'bg-[linear-gradient(#38bdf8,#38bdf8)]',
    highlight: 'bg-sky-100/80 dark:bg-sky-500/25',
  },
  green: {
    underline: 'bg-[linear-gradient(#4ade80,#4ade80)]',
    highlight: 'bg-emerald-100/85 dark:bg-emerald-500/25',
  },
  rose: {
    underline: 'bg-[linear-gradient(#fb7185,#fb7185)]',
    highlight: 'bg-rose-100/80 dark:bg-rose-500/25',
  },
};

export function InlineEmphasis({
  children,
  className,
  tone = 'amber',
  variant = 'underline',
}: InlineEmphasisProps) {
  if (variant === 'highlight') {
    return (
      <span
        className={cn(
          'inline rounded-[2px] px-0.5 text-foreground',
          toneStyles[tone].highlight,
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline bg-[length:100%_2px] bg-no-repeat pb-0.5',
        toneStyles[tone].underline,
        className
      )}
      style={{ backgroundPosition: 'right 100%' }}
    >
      {children}
    </span>
  );
}
