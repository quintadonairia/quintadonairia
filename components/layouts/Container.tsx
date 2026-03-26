interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="m-auto max-w-(--breakpoint-xl) px-6 py-12 lg:px-12 lg:py-16">
      {children}
    </div>
  );
}
