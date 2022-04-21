import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/lodging.json";
import pt from "../locales/pt/lodging.json";

import LayoutSplit from "../components/layouts/LayoutSplit";
import Room from "../components/molecules/Room";
import Hero from "../components/organisms/Hero";
import Container from "../components/organisms/Container";
import Block from "../components/molecules/Block";
import Header from "../components/molecules/Header";

import {
  RiDropLine,
  RiHotelBedLine,
  RiWifiLine,
  RiTvLine,
  RiWindyLine,
  RiCellphoneLine,
} from "react-icons/ri";

const Lodging = () => {
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
        <title>Quinta Dona Iria - Enoturismo | Lodging</title>
      </Head>
      <Hero
        title={t.heroTitle}
        image="url(/images/20220410-donairia-004.jpg)"
      />
      <Container>
        <Header heading={t.headerHeading} subheading={t.headerSubheading} />
      </Container>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Room
            imageSrc="/images/20220410-donairia-006.jpg"
            imageAlt={t.roomImageAlt1}
            title={t.roomTitle1}
            description={t.roomDescription1}
            buttonLabel={t.roomButtonLabel}
          />
          <Room
            imageSrc="/images/20220410-donairia-010.jpg"
            imageAlt={t.roomImageAlt2}
            title={t.roomTitle2}
            description={t.roomDescription2}
            buttonLabel={t.roomButtonLabel}
          />
        </div>
      </Container>
      {/* Room Features and Amenities */}
      <Container>
        <section className="flex flex-col gap-8 items-center">
          <div>{t.featuresTitle}</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiHotelBedLine className="text-3xl" />
              <p>{t.feature1}</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiDropLine className="text-3xl" />
              <p>{t.feature2}</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiWifiLine className="text-3xl" />
              <p>{t.feature3}</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiWindyLine className="text-3xl" />
              <p>{t.feature4}</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiTvLine className="text-3xl" />
              <p>{t.feature5}</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiCellphoneLine className="text-3xl" />
              <p>{t.feature6}</p>
            </div>
          </div>
        </section>
      </Container>
      <LayoutSplit vDirection="normal">
        <img
          src="/images/senjuti-kundu-GCI8dqi4uWM-unsplash.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.amenitiesTitle1} text={t.amenitiesDescription1} />
      </LayoutSplit>
      <LayoutSplit vDirection="reverse">
        <Block title={t.amenitiesTitle2} text={t.amenitiesDescription2} />
        <img
          src="/images/20220410-donairia-017.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
      </LayoutSplit>
    </div>
  );
};

export default Lodging;
