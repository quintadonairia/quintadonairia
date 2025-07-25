import Head from 'next/head';
import Button from '../components/atoms/Button';
import Banner from '../components/molecules/Banner';
import SectionHeader from '../components/molecules/SectionHeader';
import Gallery from '../components/organisms/Gallery';
import Hero from '../components/organisms/Hero';
import { useTranslation } from '../contexts/TranslationContext';

export default function Home() {
  const t = useTranslation();
  const pageTitle = `${t.global.brand} | ${t.navigation.home}`;

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero
        title={t.home.title}
        image="url(images/20211013-donairia-004.jpg)"
      />
      <section className="flex flex-col items-center gap-8 px-6 py-16 lg:gap-12 lg:p-32">
        <SectionHeader
          kicker={t.home.lodging.kicker}
          heading={t.home.lodging.heading}
        />
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-24">
          <img
            src="/images/20220410-donairia-004.jpg"
            className="aspect-5/4 w-full object-cover lg:aspect-5/4 lg:w-xl"
          />
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground-brand-default text-display-small font-serif">
                {t.home.lodging.subheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.home.lodging.description}
              </p>
            </div>
            <Button href="/lodging" size="large" variant="brand">
              {t.home.lodging.action}
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 px-6 py-16 lg:gap-12">
        <SectionHeader
          kicker={t.home.experiences.kicker}
          heading={t.home.experiences.heading}
        />
        <Gallery />
        <Button href="/experiences" size="large" variant="brand">
          {t.home.experiences.action}
        </Button>
      </section>
      <section className="flex flex-col items-center gap-8 px-6 py-16 lg:gap-12 lg:p-32">
        <SectionHeader
          kicker={t.home.restaurant.kicker}
          heading={t.home.restaurant.heading}
        />
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-24">
          <img
            src="images/20211003-donairia-050.jpg"
            alt="A restaurant full of people dining in a cozy environment"
            className="aspect-5/4 w-full object-cover lg:aspect-5/4 lg:w-xl"
          />
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground-brand-default text-display-small font-serif">
                {t.home.restaurant.subheading}
              </h2>
              <p className="leading-relaxed lg:max-w-prose">
                {t.home.restaurant.description}
              </p>
            </div>
            <Button href="/restaurant" size="large" variant="brand">
              {t.home.restaurant.action}
            </Button>
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
}
