import LayoutSplit from "../components/layouts/LayoutSplit";
import Room from "../components/molecules/Room";
import Hero from "../components/organisms/Hero";
import Container from "../components/organisms/Container";
import Block from "../components/molecules/Block";

const Lodging = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Hero title="Lodging" image="url(images/20210820-donairia-008.jpg" />
      <Container>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-serif text-olive-500">
            Each room, a special person
          </h1>
          <p>
            We preserve the memory of the people who were part of our collective
            history.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16">
          <Room
            image="url(images/20210820-donairia-009.jpg)"
            name="Room Júlio Pereira"
            description="2 persons, approx. 25m² from 75€"
          />
          <Room
            image="url(images/20210820-donairia-009.jpg)"
            name="Room Isabel Silvestre"
            description="2 persons, approx. 25m² from 75€"
          />
          <Room
            image="url(images/20210820-donairia-009.jpg)"
            name="Room José Afonso"
            description="2 persons, approx. 25m² from 75€"
          />
        </div>
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
    </div>
  );
};

export default Lodging;
