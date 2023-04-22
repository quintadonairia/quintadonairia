import Head from "next/head";
import Container from "../components/layouts/Container";
import Split from "../components/layouts/Split";
import Block from "../components/molecules/Block";
import SectionHeader from "../components/molecules/SectionHeader";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

const Experiences = () => {
  const t = useTranslation();

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
        <SectionHeader heading={t.heading} subheading={t.subheading} />
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
