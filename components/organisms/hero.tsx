import { SectionHeader } from '@/components/molecules/section-header';
import { useCrossfade } from '@/hooks/use-crossfade';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useParallax } from '@/hooks/use-parallax';
import { getBreakpoint } from '@/lib/breakpoint';
import { motion } from 'motion/react';

interface HeroVideo {
  large: string;
  small?: string;
}

interface HeroProps {
  title: string;
  image?: string;
  video?: HeroVideo;
  poster?: string;
}

export function Hero({ title, image, video, poster }: HeroProps) {
  const { ref, y } = useParallax();
  const { lead, follow, leadOpacity, followOpacity, transition } =
    useCrossfade();
  const isMobile = useMediaQuery(`(max-width: ${getBreakpoint('md')})`);

  return (
    <section
      className="after:to-foreground-neutral-default/60 after:from-foreground-neutral-default/40 relative flex h-screen w-full items-center justify-center overflow-hidden after:absolute after:inset-0 after:bg-linear-to-b"
      ref={ref}
    >
      {video ? (
        <>
          <motion.video
            ref={lead}
            src={(isMobile && video?.small) || video.large}
            poster={poster ?? image}
            preload="auto"
            muted
            playsInline
            autoPlay
            initial={false}
            animate={{ opacity: leadOpacity }}
            transition={transition}
            style={{ y, height: '100%' }}
            className="absolute inset-0 w-full object-cover"
          />
          <motion.video
            ref={follow}
            src={(isMobile && video?.small) || video.large}
            poster={poster ?? image}
            preload="auto"
            muted
            playsInline
            initial={false}
            animate={{ opacity: followOpacity }}
            transition={transition}
            style={{ y, height: '100%' }}
            className="absolute inset-0 w-full object-cover"
          />
        </>
      ) : (
        <motion.img
          src={image}
          alt={title}
          style={{ y, height: '100%' }}
          className="absolute inset-0 w-full object-cover"
        />
      )}
      <SectionHeader
        className="text-foreground-neutral-inverse **:data-[slot=heading]:text-foreground-neutral-inverse z-10 max-w-(--breakpoint-md) px-8 font-serif lg:max-w-(--breakpoint-lg)"
        heading={title}
      />
    </section>
  );
}
