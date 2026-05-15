import { useParallax } from '@/hooks/use-parallax';
import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  image: string;
}

export function Hero({ title, image }: HeroProps) {
  const { ref, y } = useParallax(0.4, 80);

  return (
    <section
      className="after:to-foreground-neutral-default/60 after:from-foreground-neutral-default/40 relative flex h-128 w-full items-center justify-center overflow-hidden after:absolute after:inset-0 after:bg-linear-to-b lg:h-screen"
      ref={ref}
    >
      <motion.img
        src={image}
        alt={title}
        style={{ y, height: '120%' }}
        className="absolute inset-0 object-cover"
      />
      <h1 className="text-foreground-neutral-inverse text-display-small lg:text-display-large z-10 max-w-(--breakpoint-md) px-8 font-serif leading-snug lg:max-w-(--breakpoint-lg) lg:leading-tight">
        {title}
      </h1>
    </section>
  );
}
