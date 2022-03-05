import LayoutPrimary from "../components/layouts/LayoutPrimary";
import Room from "../components/molecules/Room";
import Hero from "../components/organisms/Hero";

const Lodging = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Hero title="Stay with us" image="url(images/20210820-donairia-008.jpg" />
      <LayoutPrimary>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-serif text-olive-500">
            Each room, a special person
          </h1>
          <p>
            In each room we preserved the memory of the people who were part of
            our collective history.
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
      </LayoutPrimary>
    </div>
  );
};

export default Lodging;
