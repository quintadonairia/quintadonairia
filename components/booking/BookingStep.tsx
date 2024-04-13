type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const BookingStep = ({ title, subtitle, children }: Props) => {
  return (
    <main className="flex flex-col gap-10">
      <h1 className="font-display font-light text-3xl">{title}</h1>
      {subtitle && <p className="text-foreground-subtle">{subtitle}</p>}
      <div className="flex flex-col gap-5">{children}</div>
    </main>
  );
};

export default BookingStep;
