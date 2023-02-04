const SectionHeader = ({ kicker, heading, subheading }) => {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <small className="text-xs lg:text-sm uppercase tracking-widest font-semibold">
        {kicker}
      </small>
      <h1 className="text-4xl lg:text-5xl font-serif text-olive-500 lg:max-w-screen-md">
        {heading}
      </h1>
      <p className="leading-relaxed lg:max-w-prose">{subheading}</p>
    </header>
  );
};

export default SectionHeader;
