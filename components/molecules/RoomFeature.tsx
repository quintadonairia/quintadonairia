import React from 'react';

interface RoomFeatureProps {
  icon: React.ComponentType<{ size?: number }>;
  text: string;
}

export function RoomFeature({ icon: Icon, text }: RoomFeatureProps) {
  return (
    <div className="text-foreground-brand-default text-title-medium flex flex-col items-center gap-2 text-center font-serif">
      <Icon size={32} />
      <p>{text}</p>
    </div>
  );
}
