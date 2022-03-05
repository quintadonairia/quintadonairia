import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header
      className="w-full h-[32rem] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)",
      }}
    >
      <motion.h1
        initial={{ x: "-4rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white font-serif text-3xl px-8 leading-snug lg:text-5xl max-w-screen-md lg:max-w-screen-lg lg:leading-tight"
      >
        {t.heroTitle}
      </motion.h1>
    </header>
  );
};

export default Hero;
