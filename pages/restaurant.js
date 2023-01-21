import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../components/layouts/Container";
import Header from "../components/molecules/Header";
import Hero from "../components/organisms/Hero";
import en from "../locales/en/pages/restaurant.json";
import pt from "../locales/pt/pages/restaurant.json";

const Restaurant = () => {
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
        <title>Quinta Dona Iria - Enoturismo | Restaurant</title>
      </Head>
      <Hero
        title={t.heroTitle}
        image="url(/images/20220423-donairia-004.jpg)"
      />

      {/* Reservation Form */}
      <section>
        <Container>
          <Header heading={t.headerHeading} subheading={t.headerSubheading} />
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
