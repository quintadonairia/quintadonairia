import { useEffect, useRef, useState } from 'react';

interface UseCrossfadeOptions {
  duration?: number;
}

export function useCrossfade({ duration = 2 }: UseCrossfadeOptions = {}) {
  const lead = useRef<HTMLVideoElement>(null);
  const follow = useRef<HTMLVideoElement>(null);
  const [activeIsLead, setActiveIsLead] = useState(true);
  const [crossfade, setCrossfade] = useState(false);

  useEffect(() => {
    const active = activeIsLead ? lead.current : follow.current;
    const standby = activeIsLead ? follow.current : lead.current;
    if (!active || !standby) return;

    const handleTimeUpdate = () => {
      const remaining = active.duration - active.currentTime;
      if (!isNaN(remaining) && remaining <= duration) {
        standby.currentTime = 0;
        standby.play().catch(() => {});
        setCrossfade(true);
        setActiveIsLead((prev) => !prev);
      }
    };

    active.addEventListener('timeupdate', handleTimeUpdate);
    return () => active.removeEventListener('timeupdate', handleTimeUpdate);
  }, [activeIsLead, duration]);

  return {
    lead,
    follow,
    leadOpacity: activeIsLead ? 1 : 0,
    followOpacity: activeIsLead ? 0 : 1,
    transition: crossfade
      ? { duration, ease: 'easeInOut' as const }
      : { duration: 0 },
  };
}
