const Hero = ({ title, image }) => {
  return (
    <header
      className="w-full h-[32rem] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${image}`,
      }}
    >
      <h1 className="text-white font-serif text-3xl px-8 leading-snug lg:text-5xl max-w-screen-md lg:max-w-screen-lg lg:leading-tight">
        {title}
      </h1>
    </header>
  );
};

export default Hero;
