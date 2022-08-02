import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/lodging.json";
import pt from "../locales/pt/lodging.json";

import SocialButton from "../components/atoms/SocialButton";

const Home = () => {
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
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden p-8 gap-24 bg-tan-50">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Home</title>
      </Head>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <img
            src="./graphics/donairia-brandmark-primary.svg"
            alt="Quinta Dona Iria logo"
            className="w-16 h-16 border-2 rounded-full p-2"
          />
          <div>
            <h1 className="font-semibold">Quinta Dona Iria</h1>
            <p className="text-neutral-500">@quintadonairia</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SocialButton
            theme="airbnb"
            label="Airbnb"
            href="https://www.airbnb.com/users/show/463284648"
            icon="airbnb"
          />
          <SocialButton
            theme="instagram"
            label="Instagram"
            href="https://instagram.com/quintadonairia"
            icon="instagram"
          />
          <SocialButton
            theme="facebook"
            label="Facebook"
            href="https://facebook.com/quintadonairia"
            icon="facebook"
          />
          <SocialButton
            theme="website"
            label="Website"
            href="https://www.quintadonairia.com"
            icon="website"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/images/safra-wordmark-primary_clear.jpg"
            alt="Safra Restaurante logo"
            className="w-16 h-16 border-2 rounded-full"
          />
          <div>
            <h1 className="font-semibold">Safra Restaurante</h1>
            <p className="text-neutral-500">@safrarestaurante</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SocialButton
            theme="instagram"
            label="Instagram"
            href="https://instagram.com/safrarestaurante"
            icon="instagram"
          />
          <SocialButton
            theme="facebook"
            label="Facebook"
            href="https://facebook.com/restaurantesafra"
            icon="facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
