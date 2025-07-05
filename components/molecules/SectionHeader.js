const SectionHeader = ({ kicker, heading, subheading }) => {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <small className="text-body-medium font-semibold tracking-widest uppercase">
        {kicker}
      </small>
      <h1 className="text-foreground-brand-default text-display-medium lg:text-display-large font-serif lg:max-w-(--breakpoint-md)">
        {heading}
      </h1>
      <p className="leading-relaxed lg:max-w-prose">{subheading}</p>
    </header>
  );
};

export default SectionHeader;
