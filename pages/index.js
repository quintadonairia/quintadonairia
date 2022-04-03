import { useRouter } from "next/router";
import en from "../locales/en/index.json";
import pt from "../locales/pt/index.json";

import Head from "next/head";

import Banner from "../components/molecules/Banner";
import Header from "../components/molecules/Header";
import Section from "../components/organisms/Section";
import Gallery from "../components/organisms/Gallery";

import Button from "../components/atoms/Button";
import Hero from "../components/organisms/Hero";

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
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Home</title>
      </Head>

      {/* Hero Section */}
      <Hero title={t.heroTitle} image="url(images/20211013-donairia-004.jpg)" />

      {/* Lodging Section */}
      <Section
        title={t.lodgingTitle}
        heading={t.lodgingHeading}
        subheading={t.lodgingSubheading}
        image="images/20210820-donairia-008.jpg"
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
