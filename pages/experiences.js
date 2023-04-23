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
        title={t.experiences.title}
        image="url(/images/20211003-donairia-024.jpg)"
      />
      <Container>
        <SectionHeader
          heading={t.experiences.heading}
          subheading={t.experiences.subheading}
        />
      </Container>
      <Split direction="reverse">
        <img
          src="/images/20220306-donairia-001.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block
          title={t.experiences.property.title}
          text={t.experiences.property.description}
        />
      </Split>
      <Split direction="normal">
        <img
          src="/images/20211003-donairia-022.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block
          title={t.experiences.tastings.title}
          text={t.experiences.tastings.description}
        />
      </Split>
      <Split direction="reverse">
        <img
          src="/images/20220319-donairia-006.jpg"
          alt=""
          className="w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover"
        />
        <Block
          title={t.experiences.rooms.title}
          text={t.experiences.rooms.description}
        />
      </Split>
    </div>
  );
};

export default Experiences;
