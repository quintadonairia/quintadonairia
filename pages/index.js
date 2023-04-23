import Head from "next/head";
import Link from "next/link";
import Button from "../components/atoms/Button";
import Banner from "../components/molecules/Banner";
import SectionHeader from "../components/molecules/SectionHeader";
import Gallery from "../components/organisms/Gallery";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

const Home = () => {
  const t = useTranslation();

  return (
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Home</title>
      </Head>
      <Hero
        title={t.home.title}
        image="url(images/20211013-donairia-004.jpg)"
      />
      <section className="flex flex-col items-center gap-8 lg:gap-12 px-6 py-16 lg:p-32">
        <SectionHeader
          kicker={t.home.lodging.kicker}
          heading={t.home.lodging.heading}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
          <img
            src="/images/20220410-donairia-004.jpg"
            className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
          />
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-olive text-3xl lg:text-4xl">
                {t.home.lodging.subheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.home.lodging.description}
              </p>
            </div>
            <Link href="/lodging" passHref>
              <a>
                <Button variant="primary" size="lg">
                  {t.home.lodging.action}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-6 py-16 gap-6 lg:gap-12">
        <SectionHeader
          kicker={t.home.experiences.kicker}
          heading={t.home.experiences.heading}
        />
        <Gallery />
        <Link href="/experiences" passHref>
          <a>
            <Button variant="primary" size="lg">
              {t.home.experiences.action}
            </Button>
          </a>
        </Link>
      </section>
      <section className="flex flex-col items-center gap-8 lg:gap-12 px-6 py-16 lg:p-32">
        <SectionHeader
          kicker={t.home.restaurant.kicker}
          heading={t.home.restaurant.heading}
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
          <img
            src="images/20211003-donairia-050.jpg"
            alt="A restaurant full of people dining in a cozy environment"
            className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
          />
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-olive text-3xl lg:text-4xl">
                {t.home.restaurant.subheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.home.restaurant.description}
              </p>
            </div>
            <Link href="/restaurant" passHref>
              <a>
                <Button variant="primary" size="lg">
                  {t.home.restaurant.action}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Banner
        kicker={t.home.banner.kicker}
        heading={t.home.banner.heading}
        description={t.home.banner.description}
      />
    </div>
  );
};

export default Home;
