import { ReactLenis, useLenis } from 'lenis/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

function ScrollRouteReset() {
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    function resetScroll() {
      lenis?.scrollTo(0, { immediate: true });
    }

    router.events.on('routeChangeComplete', resetScroll);

    return () => {
      router.events.off('routeChangeComplete', resetScroll);
    };
  }, [lenis, router.events]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [smooth, setSmooth] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    function updateSmooth() {
      setSmooth(!media.matches);
    }

    updateSmooth();
    media.addEventListener('change', updateSmooth);

    return () => {
      media.removeEventListener('change', updateSmooth);
    };
  }, []);

  if (smooth !== true) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4,
        smoothWheel: true,
      }}
    >
      <ScrollRouteReset />
      {children}
    </ReactLenis>
  );
}
