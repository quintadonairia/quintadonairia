import Head from "next/head";
import {
  RiCellphoneLine,
  RiDropLine,
  RiHotelBedLine,
  RiTvLine,
  RiWifiLine,
  RiWindyLine,
} from "react-icons/ri";
import Container from "../components/layouts/Container";
import Split from "../components/layouts/Split";
import Block from "../components/molecules/Block";
import Room from "../components/molecules/Room";
import RoomFeature from "../components/molecules/RoomFeature";
import SectionHeader from "../components/molecules/SectionHeader";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

const Lodging = () => {
  const t = useTranslation();

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Lodging</title>
      </Head>
      <Hero
        title={t.lodging.title}
        image="url(/images/20220410-donairia-004.jpg)"
      />
      <Container>
        <SectionHeader
          heading={t.lodging.heading}
          subheading={t.lodging.subheading}
        />
      </Container>
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Room
            imageSrc="/images/20220410-donairia-006.jpg"
            imageAlt={t.lodging.rooms.standard.image}
            title={t.lodging.rooms.standard.title}
            price={t.lodging.rooms.standard.price}
            description={t.lodging.rooms.standard.description}
            bookingLink={t.global.booking.link}
            buttonLabel={t.global.booking.text}
          />
          <Room
            imageSrc="/images/20220410-donairia-010.jpg"
            imageAlt={t.lodging.rooms.superior.image}
            title={t.lodging.rooms.superior.title}
            price={t.lodging.rooms.superior.price}
            description={t.lodging.rooms.superior.description}
            bookingLink={t.global.booking.link}
            buttonLabel={t.global.booking.text}
          />
        </div>
      </Container>
      <Container>
        <section className="flex flex-col items-center gap-8">
          <div>{t.lodging.features.title}</div>
          <div className="grid max-w-screen-lg grid-cols-2 gap-16 lg:grid-cols-3">
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
          className="aspect-[5/4] w-full object-cover lg:aspect-[5/4] lg:w-[36rem]"
        />
        <Block
          title={t.lodging.amenities.family.title}
          text={t.lodging.amenities.family.description}
        />
      </Split>
      <Split direction="reverse">
        <img
          src="/images/20220410-donairia-017.jpg"
          alt=""
          className="aspect-[5/4] w-full object-cover lg:aspect-[5/4] lg:w-[36rem]"
        />
        <Block
          title={t.lodging.amenities.accessibility.title}
          text={t.lodging.amenities.accessibility.description}
        />
      </Split>
    </div>
  );
};

export default Lodging;
