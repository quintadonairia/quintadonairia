const SectionHeader = ({ kicker, heading, subheading }) => {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <small className="text-xs font-semibold uppercase tracking-widest lg:text-sm">
        {kicker}
      </small>
      <h1 className="font-serif text-4xl text-olive lg:max-w-screen-md lg:text-5xl">
        {heading}
      </h1>
      <p className="leading-relaxed lg:max-w-prose">{subheading}</p>
    </header>
  );
};

export default SectionHeader;
