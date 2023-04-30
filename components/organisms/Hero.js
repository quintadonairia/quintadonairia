const Hero = ({ title, image }) => {
  return (
    <header
      className="relative flex h-[32rem] w-full items-center justify-center bg-cover bg-center bg-no-repeat lg:h-screen"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${image}`,
      }}
    >
      <h1 className="max-w-screen-md px-8 font-serif text-3xl leading-snug text-white lg:max-w-screen-lg lg:text-5xl lg:leading-tight">
        {title}
      </h1>
    </header>
  );
};

export default Hero;
