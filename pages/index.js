import { useRouter } from "next/router";
import en from "../locales/en/index.json";
import pt from "../locales/pt/index.json";

import Head from "next/head";
import { motion } from "framer-motion";

import Icon from "../components/atoms/Icon";
import Banner from "../components/molecules/Banner";
import Header from "../components/molecules/Header";
import Section from "../components/organisms/Section";
import Gallery from "../components/organisms/Gallery";

import { RiArrowDownSLine } from "react-icons/ri";
import Button from "../components/atoms/Button";

const Home = () => {
  const router = useRouter();
  const { locale } = router;

  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "pt":
      t = pt;
      break;
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Quinta Dona Iria | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)",
        }}
      >
        <motion.h1
          initial={{ x: "-4rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white font-serif text-4xl px-8 leading-snug lg:text-5xl max-w-screen-md lg:max-w-screen-lg lg:leading-tight"
        >
          {t.heroTitle}
        </motion.h1>
        <Icon size="xl" mode="dark" mobile>
          <RiArrowDownSLine className="absolute bottom-16 left-1/2 -translate-x-1/2" />
        </Icon>
      </header>

      {/* Lodging Section */}
      <Section
        title={t.lodgingTitle}
        heading={t.lodgingHeading}
        subheading={t.lodgingSubheading}
        image="images/20210820-donairia-009.jpg"
        description={t.lodgingDescription}
        action={t.lodgingAction}
      />

      {/* Experiences Section */}
      <section className="flex flex-col items-center px-6 py-16 gap-16">
        <Header title={t.experiencesTitle} heading={t.experiencesHeading} />
        <Gallery />
        <Button variant="primary" size="lg" mode="light">
          {t.experiencesAction}
        </Button>
      </section>

      {/* Dine Section */}
      <Section
        title={t.restaurantTitle}
        heading={t.restaurantHeading}
        subheading={t.restaurantSubheading}
        image="images/20211003-donairia-050.jpg"
        description={t.restaurantDescription}
        action={t.restaurantAction}
        reverse
      />

      {/* Social Banner */}
      <Banner
        title={t.bannerTitle}
        heading={t.bannerHeading}
        description={t.bannerDescription}
      />
    </div>
  );
};

export default Home;
