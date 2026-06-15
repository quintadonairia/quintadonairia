import { SectionHeader } from '@/components/molecules/section-header';
import { useParallax } from '@/hooks/use-parallax';
import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  image: string;
}

export function Hero({ title, image }: HeroProps) {
  const { ref, y } = useParallax();

  return (
    <section
      className="after:to-foreground-neutral-default/60 after:from-foreground-neutral-default/40 relative flex h-screen w-full items-center justify-center overflow-hidden after:absolute after:inset-0 after:bg-linear-to-b"
      ref={ref}
    >
      <motion.img
        src={image}
        alt={title}
        style={{ y, height: '120%' }}
        className="absolute inset-0 w-full object-cover"
      />
      <SectionHeader
        className="text-foreground-neutral-inverse **:data-[slot=heading]:text-foreground-neutral-inverse z-10 max-w-(--breakpoint-md) px-8 font-serif lg:max-w-(--breakpoint-lg)"
        heading={title}
      />
    </section>
  );
}
