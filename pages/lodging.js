import Head from "next/head";
import Container from "../components/layouts/Container";
import Split from "../components/layouts/Split";
import Block from "../components/molecules/Block";
import Room from "../components/molecules/Room";
import SectionHeader from "../components/molecules/SectionHeader";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

import {
  RiCellphoneLine,
  RiDropLine,
  RiHotelBedLine,
  RiTvLine,
  RiWifiLine,
  RiWindyLine,
} from "react-icons/ri";

const Lodging = () => {
  const t = useTranslation();

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
        <SectionHeader
          heading={t.headerHeading}
          subheading={t.headerSubheading}
        />
      </Container>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Room
            imageSrc="/images/20220410-donairia-006.jpg"
            imageAlt={t.roomImageAlt1}
            title={t.roomTitle1}
            price={t.roomPrice1}
            description={t.roomDescription1}
            bookingLink={t.roomBookingLink}
            buttonLabel={t.roomButtonLabel}
          />
          <Room
            imageSrc="/images/20220410-donairia-010.jpg"
            imageAlt={t.roomImageAlt2}
            title={t.roomTitle2}
            price={t.roomPrice2}
            description={t.roomDescription2}
            bookingLink={t.roomBookingLink}
            buttonLabel={t.roomButtonLabel}
          />
        </div>
      </Container>
      {/* Room Features and Amenities */}
      <Container>
        <section className="flex flex-col gap-8 items-center">
          <div>{t.featuresTitle}</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
            <RoomFeature icon={RiHotelBedLine} text={t.lodging.features.beds} />
            <RoomFeature icon={RiDropLine} text={t.lodging.features.bathroom} />
            <RoomFeature icon={RiWifiLine} text={t.lodging.features.wiFi} />
            <RoomFeature
              icon={RiWindyLine}
              text={t.lodging.features.airConditioning}
            />
            <RoomFeature icon={RiTvLine} text={t.lodging.features.television} />
            <RoomFeature
              icon={RiCellphoneLine}
              text={t.lodging.features.telephone}
            />
          </div>
        </section>
      </Container>
      <Split direction="normal">
        <img
          src="/images/senjuti-kundu-GCI8dqi4uWM-unsplash.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.amenitiesTitle1} text={t.amenitiesDescription1} />
      </Split>
      <Split direction="reverse">
        <img
          src="/images/20220410-donairia-017.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.amenitiesTitle2} text={t.amenitiesDescription2} />
      </Split>
    </div>
  );
};

export default Lodging;
