import Head from "next/head";
import Container from "../components/layouts/Container";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/translation-context";

interface Section {
  title: string;
  description: string;
}

export default function Terms() {
  const t = useTranslation();
  const pageTitle = `${t.global.brand} | ${t.terms.title}`;

  const sections = Object.values(t.terms.sections);

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero
        title={t.terms.title}
        image="url(images/20220319-donairia-005.jpg)"
      />
      <Container>
        <section className="flex flex-col items-center gap-8 px-6 py-16 lg:gap-12 lg:p-32">
          {sections.map((section: Section, index) => (
            <section key={index} className="flex flex-col gap-4">
              <h1 className="font-display text-display-small-regular tracking-tight text-foreground-default">
                {section.title}
              </h1>
              <div className="text-foreground-strong">
                <p>{section.description}</p>
              </div>
            </section>
          ))}
        </section>
      </Container>
    </div>
  );
}
