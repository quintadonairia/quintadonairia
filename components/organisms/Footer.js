import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowRightLine } from "react-icons/ri";
import en from "../../locales/en/components/Footer.json";
import pt from "../../locales/pt/components/Footer.json";

const Footer = () => {
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

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="flex flex-col items-start gap-24 py-12 px-8 lg:py-16 lg:px-32 bg-stone-900 text-white">
      <div className="w-full flex flex-col gap-16 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24">
          <div className="flex flex-col gap-16">
            <Link href="/">
              <img
                src="/graphics/donairia-wordmark-white.svg"
                alt="logo"
                className="w-32 lg:w-36 cursor-pointer"
              />
            </Link>
            <div className="flex flex-col justify-start items-start gap-4">
              <a
                href="https://www.google.com/maps/dir//Quinta+Dona+Iria,+R.+Central+n%C2%BA35,+3220-336+Coimbra/@40.1713618,-8.3993411,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd22f170ee4c62c9:0xc108f06628ebaecb!2m2!1d-8.3320875!2d40.1440357"
                target="_blank"
                className="flex items-center gap-1 hover:gap-2 duration-200 text-sm"
              >
                <RiArrowRightLine />
                <p>{t.link1}</p>
              </a>
              <a
                href="mailto:hello@quintadonairia.com"
                className="flex items-center gap-1 hover:gap-2 duration-200 text-sm"
              >
                <RiArrowRightLine />
                {t.link2}
              </a>
              <a
                href="tel:+351924733556"
                className="flex items-center gap-1 hover:gap-2 duration-200 text-sm"
              >
                <RiArrowRightLine className="text-white" />
                {t.link3}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex items-center gap-8">
            <a
              href="https://greenkey.abae.pt/empreendimento/quinta-dona-iria/"
              target="_blank"
            >
              <img
                src="/graphics/green-key-logo.svg"
                alt="Green Key logo"
                className="w-16"
              />
            </a>
            <a
              href="https://portugalcleanandsafe.com/place/1654747"
              target="_blank"
            >
              <img
                src="/graphics/clean-safe-logo.svg"
                alt="Clean & Safe logo"
                className="w-20"
              />
            </a>
          </div>
          <a href="https://www.centerofportugal.com/" target="_blank">
            <img
              src="/images/visit-center-of-portugal.png"
              alt="Center of Portugal logo"
              className="w-64"
            />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col gap-12 lg:items-start lg:gap-0 lg:flex-row lg:justify-between text-sm">
        <div className="flex flex-col gap-2">
          <p>© {year} Quinta Dona Iria</p>
          <a
            href="https://rnt.turismodeportugal.pt/RNT/RNET.aspx?nr=10101"
            target="_blank"
          >
            RNET - 10101
          </a>
          <ul className="flex gap-2">
            <li>{t.legalTerms}</li>
            <li>{t.legalPrivacy}</li>
            <li>
              <a href="https://www.livroreclamacoes.pt/Pedido/Reclamacao">
                {t.legalComplaintsBook}
              </a>
            </li>
          </ul>
        </div>
        <p>
          {t.signature}
          <a> Gonçalo Dias</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
