const Hero = ({ title, image }) => {
  return (
    <header
      className="relative flex h-128 w-full items-center justify-center bg-cover bg-center bg-no-repeat lg:h-screen"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${image}`,
      }}
    >
      <h1 className="text-foreground-neutral-inverse text-display-small lg:text-display-large max-w-(--breakpoint-md) px-8 font-serif leading-snug lg:max-w-(--breakpoint-lg) lg:leading-tight">
        {title}
      </h1>
    </header>
  );
};

export default Hero;
