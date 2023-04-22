import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/atoms/Button";
import Banner from "../components/molecules/Banner";
import SectionHeader from "../components/molecules/SectionHeader";
import Gallery from "../components/organisms/Gallery";
import Hero from "../components/organisms/Hero";
import en from "../locales/en/pages/index.json";
import pt from "../locales/pt/pages/index.json";

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
      <Hero title={t.heroTitle} image="url(images/20211013-donairia-004.jpg)" />
      <section className="flex flex-col items-center gap-8 lg:gap-12 px-6 py-16 lg:p-32">
        <SectionHeader kicker={t.lodgingKicker} heading={t.lodgingHeading} />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
          <img
            src="/images/20220410-donairia-004.jpg"
            className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
          />
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-olive text-3xl lg:text-4xl">
                {t.lodgingSubheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.lodgingDescription}
              </p>
            </div>
            <Link href="/lodging" passHref>
              <a>
                <Button variant="primary" size="lg">
                  {t.lodgingAction}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-6 py-16 gap-6 lg:gap-12">
        <SectionHeader
          kicker={t.experiencesKicker}
          heading={t.experiencesHeading}
        />
        <Gallery />
        <Link href="/experiences" passHref>
          <a>
            <Button variant="primary" size="lg">
              {t.experiencesAction}
            </Button>
          </a>
        </Link>
      </section>
      <section className="flex flex-col items-center gap-8 lg:gap-12 px-6 py-16 lg:p-32">
        <SectionHeader
          kicker={t.restaurantKicker}
          heading={t.restaurantHeading}
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
                {t.restaurantSubheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.restaurantDescription}
              </p>
            </div>
            <Link href="/restaurant" passHref>
              <a>
                <Button variant="primary" size="lg">
                  {t.restaurantAction}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Banner */}
      <Banner
        kicker={t.bannerKicker}
        heading={t.bannerHeading}
        description={t.bannerDescription}
      />
    </div>
  );
};

export default Home;
