import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/experiences.json";
import pt from "../locales/pt/experiences.json";

import Hero from "../components/organisms/Hero";

import Split from "../components/layouts/Split";
import Header from "../components/molecules/Header";
import Container from "../components/layouts/Container";
import Block from "../components/molecules/Block";

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
      <Hero
        title={t.heroTitle}
        image="url(/images/20211003-donairia-024.jpg)"
      />
      <Container>
        <Header heading={t.heading} subheading={t.subheading} />
      </Container>
      <Split direction="reverse">
        <img
          src="/images/20220306-donairia-001.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.experienceTitle1} text={t.experienceDescription1} />
      </Split>
      <Split direction="normal">
        <img
          src="/images/20211003-donairia-022.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.experienceTitle2} text={t.experienceDescription2} />
      </Split>
      <Split direction="reverse">
        <img
          src="/images/20220319-donairia-006.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block title={t.experienceTitle3} text={t.experienceDescription3} />
      </Split>
    </div>
  );
};

export default Experiences;
