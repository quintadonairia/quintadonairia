const Header = ({ kicker, heading, children }) => {
  return (
    <header className="flex flex-col items-center px-6 py-12 gap-8 lg:p-24 text-center">
      <small className="text-xs lg:text-sm uppercase tracking-widest font-semibold">
        {kicker}
      </small>
      <h1 className="text-4xl lg:text-5xl font-serif text-olive-500 lg:max-w-screen-md">
        {heading}
      </h1>
      <p className="leading-relaxed lg:max-w-prose">{children}</p>
    </header>
  );
};

export default Header;
