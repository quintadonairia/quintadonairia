import Head from "next/head";
import Container from "../components/layouts/Container";
import SectionHeader from "../components/molecules/SectionHeader";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

const Restaurant = () => {
  const t = useTranslation();

  return (
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Restaurant</title>
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
        <div className="grid grid-flow-col auto-cols-[80%] lg:auto-cols-[40%] gap-8 overflow-x-auto snap-mandatory snap-x no-scrollbar pb-12">
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
};

export default Restaurant;
