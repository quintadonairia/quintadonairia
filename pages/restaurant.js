import Head from 'next/head';
import Container from '../components/layouts/Container';
import SectionHeader from '../components/molecules/SectionHeader';
import Hero from '../components/organisms/Hero';
import { useTranslation } from '../contexts/TranslationContext';

export default function Restaurant() {
  const t = useTranslation();
  const pageTitle = `${t.global.brand} | ${t.navigation.restaurant}`;

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero
        title={t.restaurant.title}
        image="url(/images/20220423-donairia-004.jpg)"
      />
      <section>
        <Container>
          <SectionHeader
            heading={t.restaurant.heading}
            subheading={t.restaurant.subheading}
          />
        </Container>
        <div className="no-scrollbar grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-8 overflow-x-auto pb-12 lg:auto-cols-[40%]">
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220423-donairia-001.jpg" />
          </div>
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220506-donairia-002.jpg" />
          </div>
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220501-donairia-003.jpg" />
          </div>
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220423-donairia-002.jpg" />
          </div>
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220504-donairia-002.jpg" />
          </div>
          <div className="snap-start lg:max-w-lg">
            <img src="/images/20220423-donairia-010.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
}
