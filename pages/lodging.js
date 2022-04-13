import LayoutSplit from "../components/layouts/LayoutSplit";
import Room from "../components/molecules/Room";
import Hero from "../components/organisms/Hero";
import Container from "../components/organisms/Container";
import Block from "../components/molecules/Block";
import Header from "../components/molecules/Header";

const Lodging = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Hero title="Lodging" image="url(images/20210820-donairia-008.jpg" />
      <Container>
        <Header
          heading="Indulge yourself with a stay in one of our 8 modern and cozy
          bedrooms."
          subheading="Boasting stunning views coupled with contemporary rustic
          interiors, there is one to suit everyone. Relax in our comfortable
          beds, luxuriate in our stylish bathrooms and enjoy our personal
          touches of Portuguese hospitality."
        />
      </Container>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Room
            imageSrc="images/20220410-donairia-008.jpg"
            imageAlt="Bedroom with flowers."
            title="Suite"
            description="These 400-square-foot guestrooms are situated around our Mediterranean-inspired lagoon."
          />
          <Room
            imageSrc="images/20220410-donairia-008.jpg"
            imageAlt="Bedroom with flowers."
            title="Twin / Double Room"
            description="Take in relaxing resort views of our sandy beach-bottom or lushly landscaped main pool."
          />
        </div>
      </Container>
      {/* Room Features and Amenities */}
      <section className="flex flex-col gap-8 items-center">
        <div>All our rooms are equipped with</div>
        <div className="grid grid-cols-2 gap-8 max-w-screen-lg">
          <div className="font-serif text-2xl text-olive-500 border-b-2 py-4 border-neutral-200">
            Wi-Fi
          </div>
          <div className="font-serif text-2xl text-olive-500 border-b-2 py-4 border-neutral-200">
            Air Conditioning
          </div>
          <div className="font-serif text-2xl text-olive-500 border-b-2 py-4 border-neutral-200">
            TV
          </div>
          <div className="font-serif text-2xl text-olive-500 border-b-2 py-4 border-neutral-200">
            Telephone
          </div>
        </div>
      </section>
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
          text="Quinta Dona Iria also offers rooms to accommodate guests with disabilities. If you have any questions, you can call or email us. We are happy to make special arrangements for you, and some advanced notice will help us have everything ready for your arrival."
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
