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
  return (
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden">
      <Hero title="Lodging" image="url(images/20210820-donairia-008.jpg" />
      <Container>
        <Header
          heading="Indulge yourself with a stay in one of our 8 modern and cozy
          bedrooms."
          subheading="Boasting stunning views coupled with contemporary elegant
          interiors, there is one to suit everyone. Relax in our comfortable
          beds, luxuriate in our stylish bathrooms and enjoy our personal
          touches of Portuguese hospitality."
        />
      </Container>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Room
            imageSrc="images/20220410-donairia-006.jpg"
            imageAlt="Bedroom with flowers."
            title="Olival View Room"
            description="Our best double rooms, with stunning views over the olive grove, garden and pool."
          />
          <Room
            imageSrc="images/20220410-donairia-010.jpg"
            imageAlt="Bedroom with flowers."
            title="Serra View Room"
            description="Elegant and comfortable double rooms, with stunning views over the surrounding mountains."
          />
        </div>
      </Container>
      {/* Room Features and Amenities */}
      <Container>
        <section className="flex flex-col gap-8 items-center">
          <div>All our rooms are equipped with</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg">
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiHotelBedLine className="text-3xl" />
              <p>Double beds</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiDropLine className="text-3xl" />
              <p>Bathroom</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiWifiLine className="text-3xl" />
              <p>Wi-Fi Internet</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiWindyLine className="text-3xl" />
              <p>Air Conditioning</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiTvLine className="text-3xl" />
              <p>Television</p>
            </div>
            <div className="flex flex-col items-center gap-2 font-serif text-xl text-olive-500">
              <RiCellphoneLine className="text-3xl" />
              <p>Telephone</p>
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
        <Block
          title="Family Friendly"
          text="Making it a family affair? Get in touch to find out about our
                family friendly room styles and options for when you're bringing
                the children along."
        />
      </LayoutSplit>
      <LayoutSplit vDirection="reverse">
        <Block
          title="Accessible Accommodations"
          text="Our rooms are prepared to accommodate guests with disabilities. If you have any questions, you can call or email us. We are happy to make special arrangements for you, and some advanced notice will help us have everything ready for your arrival."
        />
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
