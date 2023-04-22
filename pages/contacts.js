import Head from "next/head";
import { useRouter } from "next/router";
import {
  RiFacebookCircleFill,
  RiInformationLine,
  RiInstagramLine,
} from "react-icons/ri";
import Tooltip from "../components/atoms/Tooltip";
import Hero from "../components/organisms/Hero";
import en from "../locales/en/pages/contacts.json";
import pt from "../locales/pt/pages/contacts.json";

const Contacts = () => {
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
        <title>Quinta Dona Iria - Enoturismo | Contacts</title>
      </Head>

      {/* Hero Section */}
      <Hero
        title={t.heroTitle}
        image="url(/images/20210903-donairia-003.jpg)"
      />

      {/* Contacts Section */}
      <section className="flex flex-col lg:flex-row items-center gap-16 px-6 py-16 lg:p-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl lg:text-4xl text-olive">
              {t.contactsHeading}
            </h1>
            <p>{t.contactsSubheading}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <small className="uppercase tracking-wider text-xs font-semibold text-olive">
                {t.contactsAddress}
              </small>
              <p className="text-sm">
                Rua Central nº35, Rio de Vide, Miranda do Corvo
              </p>
              <p className="text-sm">3220-336 Coimbra</p>
            </div>
            <div className="flex flex-col gap-1">
              <small className="uppercase tracking-wider text-xs font-semibold text-olive">
                {t.contactsEmail}
              </small>
              <p className="text-sm">hello@quintadonairia.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <small className="uppercase tracking-wider text-xs font-semibold text-olive">
                {t.contactsPhone}
              </small>
              <div className="flex items-center gap-2">
                <p className="text-sm">+351 924 733 556</p>
                <Tooltip text={t.contactsPhoneDisclaimer}>
                  <RiInformationLine className="text-neutral-400" />
                </Tooltip>
              </div>
            </div>
          </div>
          <ul className="flex gap-4">
            <a href="https://www.facebook.com/quintadonairia" target="_blank">
              <RiFacebookCircleFill className="text-xl lg:text-2xl hover:text-olive duration-200" />
            </a>
            <a href="https://www.instagram.com/quintadonairia/" target="_blank">
              <RiInstagramLine className="text-xl lg:text-2xl hover:text-olive duration-200" />
            </a>
          </ul>
        </div>

        <iframe
          className="w-full lg:w-[40rem] h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.921164002513!2d-8.334276185146324!3d40.1440397801037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f170ee4c62c9%3A0xc108f06628ebaecb!2sQuinta%20Dona%20Iria!5e0!3m2!1sen!2spt!4v1648913488549!5m2!1sen!2spt"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacts;
