import { useTransform } from 'framer-motion';
import { useScroll } from 'motion/react';
import { useRef } from 'react';

export function useParallax(speed = 0.5, travel = 30) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const range = (1 - speed) * travel;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  return { ref, y };
}
