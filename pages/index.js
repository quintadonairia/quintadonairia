import { useRouter } from "next/router";
import en from "../locales/en/index.json";
import pt from "../locales/pt/index.json";

import Head from "next/head";
import Link from "next/link";

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
        kicker={t.lodgingTitle}
        heading={t.lodgingHeading}
        title={t.lodgingSubheading}
        imageSrc="images/20210820-donairia-008.jpg"
        imageAlt="An empty corridor"
        text={t.lodgingDescription}
        action
        label={t.lodgingAction}
      />

      {/* Experiences Section */}
      <section className="flex flex-col items-center px-6 py-16 gap-6 lg:gap-12">
        <Header kicker={t.experiencesTitle} heading={t.experiencesHeading} />
        <Gallery />
        <Link href="/experiences" passHref>
          <a>
            <Button variant="primary" size="lg">
              {t.experiencesAction}
            </Button>
          </a>
        </Link>
      </section>

      {/* Dine Section */}
      <Section
        kicker={t.restaurantTitle}
        heading={t.restaurantHeading}
        title={t.restaurantSubheading}
        imageSrc="images/20211003-donairia-050.jpg"
        imageAlt="A restaurant full of people dining in a cozy environment"
        text={t.restaurantDescription}
        action
        label={t.restaurantAction}
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
