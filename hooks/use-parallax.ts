import { useTransform } from 'framer-motion';
import { useScroll } from 'motion/react';
import { useRef } from 'react';
interface UseParallaxOptions {
  speed?: number;
  travel?: number;
}

export function useParallax({
  speed = 0.5,
  travel = 80,
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const range = (1 - speed) * travel;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  return { ref, y };
}
