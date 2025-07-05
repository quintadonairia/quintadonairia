import { mergeTailwindClassNames } from '@/lib/utils';
import Link from 'next/link';

const styles = {
  base: 'inline-flex w-fit cursor-pointer items-center gap-1 text-body-medium font-semibold uppercase tracking-widest duration-200 hover:gap-2',
  size: {
    small: 'px-6 py-3',
    medium: 'px-8 py-4',
    large: 'px-10 py-5',
  },
  variant: {
    brand:
      'border-2 text-foreground-brand-default border-border-brand-default hover:bg-background-brand-default hover:text-foreground-neutral-inverse duration-300',
    neutral:
      'border-2 text-foreground-neutral-inverse border-border-neutral-default hover:bg-background-neutral-default hover:text-foreground-neutral-default duration-300',
  },
};

const Button = ({ children, className, href, size, variant }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={mergeTailwindClassNames(
          `${styles.base} ${styles.variant[variant]} ${styles.size[size]}`,
          `${className}`,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={mergeTailwindClassNames(
        `${styles.base} ${styles.variant[variant]} ${styles.size[size]}`,
        `${className}`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
