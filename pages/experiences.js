import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/experiences.json";
import pt from "../locales/pt/experiences.json";

import Hero from "../components/organisms/Hero";
import Experience from "../components/molecules/Experience";

import LayoutSplit from "../components/layouts/LayoutSplit";

const Experiences = () => {
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
        <title>Quinta Dona Iria - Enoturismo | Experiences</title>
      </Head>
      {/* Hero Section */}
      <Hero title={t.heroTitle} image="url(images/20211003-donairia-024.jpg)" />
      <section className="flex flex-col items-center px-6 py-16 gap-16 lg:gap-24 lg:p-24">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl lg:text-4xl font-serif text-olive-500">
            Far more than just a stopping point
          </h1>
          <p className="leading-relaxed lg:max-w-prose lg:text-center">
            Quinta Dona Iria may be a great place to stay, but it is far more
            than just a stopping point. From our onsite amenities like our pool
            and gardens, to the stunning vineyards and olive tree fields, to our
            custom planned trips and excursions - there is always something to
            experience at our place.
          </p>
        </div>
      </section>
      <LayoutSplit>
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-6">
          <h1 className="font-serif text-2xl lg:text-3xl">
            Property Amenities
          </h1>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="leading-relaxed">
              Our property includes all sorts of on-site amenities for whatever
              you seek out when getting away from it all. Take a dip in the
              pool, stroll through the gardens, visit the vineyards, and gaze
              upon our clear night sky.
            </p>
          </div>
        </div>
        <img
          src="/images/20220306-donairia-001.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
      </LayoutSplit>
      <LayoutSplit>
        <img
          src="/images/20220306-donairia-001.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-6">
          <h1 className="font-serif text-2xl lg:text-3xl">
            Custom and curated experiences and in-room amenities
          </h1>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="leading-relaxed">
              Quinta Dona Iria's on-site concierge is there to set up your
              in-room services as well as planning custom excursions and
              adventures.
            </p>
          </div>
        </div>
      </LayoutSplit>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <Experience
          imageSrc="images/20211003-donairia-024.jpg"
          imageAlt="A group of people next to a olive tree field."
          title={t.ExperienceTitle1}
          description={t.ExperienceDescription1}
        />
        <Experience
          imageSrc="images/20211003-donairia-048.jpg"
          imageAlt="A group of people sitted in a restaurant, clapping and smiling."
          title={t.ExperienceTitle2}
          description={t.ExperienceDescription2}
        />
        <Experience
          imageSrc="images/20211003-donairia-022.jpg"
          imageAlt="A group of people hanging out on an outdoor terrace."
          title={t.ExperienceTitle3}
          description={t.ExperienceDescription3}
        />
        <Experience
          imageSrc="images/20210928-donairia-027.jpg"
          imageAlt="A person harvesting grapes by hand."
          title={t.ExperienceTitle4}
          description={t.ExperienceDescription4}
        />
      </div> */}
    </div>
  );
};

export default Experiences;
