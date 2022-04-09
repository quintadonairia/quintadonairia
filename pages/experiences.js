import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/experiences.json";
import pt from "../locales/pt/experiences.json";

import Header from "../components/molecules/Header";
import Hero from "../components/organisms/Hero";
import Experience from "../components/molecules/Experience";

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
        <Header title={t.experiencesTitle} heading={t.experiencesHeading} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
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
        </div>
      </section>
    </div>
  );
};

export default Experiences;
