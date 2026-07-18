export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export function getBreakpoint(breakpoint: Breakpoint): string {
  if (typeof window === 'undefined') {
    return '0';
  }

  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--breakpoint-${breakpoint}`)
    .trim();
}
