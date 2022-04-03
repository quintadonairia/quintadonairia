import LayoutPrimary from "../components/layouts/LayoutPrimary";
import LayoutSplit from "../components/layouts/LayoutSplit";
import Room from "../components/molecules/Room";
import Hero from "../components/organisms/Hero";

const Lodging = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Hero title="Lodging" image="url(images/20210820-donairia-008.jpg" />
      <LayoutPrimary>
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
      </LayoutPrimary>
      <LayoutSplit
        childrenLeading={
          <>
            <img
              src="/images/senjuti-kundu-GCI8dqi4uWM-unsplash.jpg"
              alt=""
              className="w-full lg:w-[28rem] aspect-[5/4] lg:aspect-[4/5] object-cover object-[center,65%]"
            />
          </>
        }
        childrenTrailing={
          <>
            <h1 className="font-serif text-2xl lg:text-4xl">Family Friendly</h1>
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p className="leading-relaxed">
                Making it a family affair? Get in touch to find out about our
                family friendly room styles and options for when you're bringing
                the children along.
              </p>
              <p className="leading-relaxed">
                Of course, we also welcome our four-legged friends in certain
                specific rooms, at a charge of €10 per night.
              </p>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Lodging;
