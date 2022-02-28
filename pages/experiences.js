import { useRouter } from "next/router";
import en from "../locales/en/experiences.json";
import pt from "../locales/pt/experiences.json";

import Header from "../components/molecules/Header";
import Card from "../components/molecules/Card";

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
    <section className="flex flex-col items-center px-6 py-16 gap-16 lg:gap-24 lg:p-24">
      <Header title={t.experiencesTitle} heading={t.experiencesHeading} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <Card
          image="images/20211003-donairia-024.jpg"
          title={t.firstExperienceTitle}
          description={t.firstExperienceDescription}
        />
        <Card
          image="images/20211003-donairia-048.jpg"
          title={t.secondExperienceTitle}
          description={t.secondExperienceDescription}
        />
        <Card
          image="images/20211003-donairia-022.jpg"
          title={t.thirdExperienceTitle}
          description={t.thirdExperienceDescription}
        />
        <Card
          image="images/20210928-donairia-027.jpg"
          title={t.fourthExperienceTitle}
          description={t.fourthExperienceDescription}
        />
      </div>
    </section>
  );
};

export default Experiences;
