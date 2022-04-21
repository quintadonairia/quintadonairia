import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/restaurant.json";
import pt from "../locales/pt/restaurant.json";

import Hero from "../components/organisms/Hero";

const Restaurant = () => {
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
        <title>Quinta Dona Iria - Enoturismo | Restaurant</title>
      </Head>
      <Hero
        title={t.heroTitle}
        image="url(/images/20211003-donairia-050.jpg)"
      />
    </div>
  );
};

export default Restaurant;
