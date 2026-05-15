import { useParallax } from '@/hooks/use-parallax';
import { motion } from 'motion/react';

export function Parallax({
  children,
  speed = 0.5,
  travel = 40,
}: {
  children: React.ReactNode;
  speed?: number;
  travel?: number;
}) {
  const { ref, y } = useParallax(speed, travel);
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
