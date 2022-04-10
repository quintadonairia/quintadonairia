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
      <Hero title={t.heroTitle} image="url(images/20211003-donairia-024.jpg)" />
      <section className="flex flex-col items-center px-6 py-16 gap-16 lg:gap-24 lg:p-24">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl lg:text-4xl font-serif text-olive-500">
            {t.heading}
          </h1>
          <p className="leading-relaxed lg:max-w-prose lg:text-center">
            {t.subheading}
          </p>
        </div>
      </section>
      <LayoutSplit vDirection="reverse">
        <div
          className="flex 
        flex-col gap-4 lg:w-1/2 lg:gap-6"
        >
          <h1 className="font-serif text-olive-500 text-2xl lg:text-3xl">
            {t.experienceTitle1}
          </h1>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="leading-relaxed">{t.experienceDescription1}</p>
          </div>
        </div>
        <img
          src="/images/20220306-donairia-001.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
      </LayoutSplit>
      <LayoutSplit vDirection="normal">
        <img
          src="/images/20211003-donairia-022.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-6">
          <h1 className="font-serif text-olive-500 text-2xl lg:text-3xl">
            {t.experienceTitle2}
          </h1>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="leading-relaxed">{t.experienceDescription2}</p>
          </div>
        </div>
      </LayoutSplit>
      <LayoutSplit vDirection="reverse">
        <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-6">
          <h1 className="font-serif text-olive-500 text-2xl lg:text-3xl">
            {t.experienceTitle3}
          </h1>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="leading-relaxed">{t.experienceDescription3}</p>
          </div>
        </div>
        <img
          src="/images/20220319-donairia-006.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
      </LayoutSplit>
    </div>
  );
};

export default Experiences;
