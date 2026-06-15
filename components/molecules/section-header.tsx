import { mergeTailwindClassNames as cn } from '@/lib/utils';

type SectionHeaderVariant = 'large' | 'medium' | 'small';
interface SectionHeaderProps {
  className?: string;
  heading: string;
  kicker?: string;
  size?: SectionHeaderVariant;
  subheading?: string;
}

const headingTags: Record<SectionHeaderVariant, 'h1' | 'h2' | 'h3'> = {
  large: 'h1',
  medium: 'h2',
  small: 'h3',
};

const headingSizes: Record<SectionHeaderVariant, string> = {
  large:
    'text-display-medium lg:text-display-large font-serif lg:max-w-(--breakpoint-lg)',
  medium:
    'text-display-small lg:text-display-medium font-serif lg:max-w-(--breakpoint-md)',
  small: 'text-display-small font-serif lg:max-w-(--breakpoint-sm)',
};

export function SectionHeader({
  className,
  heading,
  kicker,
  size = 'large',
  subheading,
}: SectionHeaderProps) {
  const Heading = headingTags[size];

  return (
    <header
      className={cn('flex flex-col items-center gap-6 text-center', className)}
    >
      <small className="text-body-medium font-semibold tracking-widest uppercase">
        {kicker}
      </small>
      <Heading className={headingSizes[size]}>{heading}</Heading>
      <p className="leading-relaxed lg:max-w-prose">{subheading}</p>
    </header>
  );
}
