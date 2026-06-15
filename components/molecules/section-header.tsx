import { mergeTailwindClassNames as cn } from '@/lib/utils';

interface SectionHeaderProps {
  className?: string;
  kicker?: string;
  heading: string;
  subheading?: string;
}

export function SectionHeader({
  className,
  kicker,
  heading,
  subheading,
}: SectionHeaderProps) {
  return (
    <header
      className={cn('flex flex-col items-center gap-6 text-center', className)}
    >
      <small className="text-body-medium font-semibold tracking-widest uppercase">
        {kicker}
      </small>
      <h1 className="text-foreground-brand-default text-display-medium lg:text-display-large font-serif lg:max-w-(--breakpoint-md)">
        {heading}
      </h1>
      <p className="leading-relaxed lg:max-w-prose">{subheading}</p>
    </header>
  );
}
