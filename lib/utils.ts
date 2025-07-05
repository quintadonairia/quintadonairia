import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-body-small',
        'text-body-medium',
        'text-body-large',
        'text-title-small',
        'text-title-medium',
        'text-title-large',
        'text-display-small',
        'text-display-medium',
        'text-display-large',
      ],
    },
  },
});

export function mergeTailwindClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
