import { FacebookLogo, Info, InstagramLogo } from "@phosphor-icons/react";
import Head from "next/head";
import Tooltip from "../components/atoms/Tooltip";
import Hero from "../components/organisms/Hero";
import { useTranslation } from "../contexts/TranslationContext";

export default function Contacts() {
  const t = useTranslation();
  const pageTitle = `${t.global.brand} | ${t.navigation.contacts}`;

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero
        title={t.contacts.title}
        image="url(/images/20210903-donairia-003.jpg)"
      />
      <section className="flex flex-col items-center gap-16 px-6 py-16 lg:flex-row lg:p-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl text-olive lg:text-4xl">
              {t.contacts.heading}
            </h1>
            <p>{t.contacts.subheading}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <small className="text-xs font-semibold uppercase tracking-wider text-olive">
                {t.contacts.address}
              </small>
              <p className="text-sm">
                Rua Central nº35, Rio de Vide, Miranda do Corvo
              </p>
              <p className="text-sm">3220-336 Coimbra</p>
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs font-semibold uppercase tracking-wider text-olive">
                {t.contacts.email}
              </small>
              <p className="text-sm">hello@quintadonairia.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs font-semibold uppercase tracking-wider text-olive">
                {t.contacts.phone}
              </small>
              <div className="flex items-center gap-2">
                <p className="text-sm">+351 924 733 556</p>
                <Tooltip text={t.contacts.phoneDisclaimer}>
                  <Info className="text-stone-400" />
                </Tooltip>
              </div>
            </div>
          </div>
          <ul className="flex gap-4">
            <a href="https://www.facebook.com/quintadonairia" target="_blank">
              <FacebookLogo className="text-xl duration-200 hover:text-olive lg:text-2xl" />
            </a>
            <a href="https://www.instagram.com/quintadonairia/" target="_blank">
              <InstagramLogo className="text-xl duration-200 hover:text-olive lg:text-2xl" />
            </a>
          </ul>
        </div>

        <iframe
          className="h-96 w-full lg:w-[40rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.921164002513!2d-8.334276185146324!3d40.1440397801037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f170ee4c62c9%3A0xc108f06628ebaecb!2sQuinta%20Dona%20Iria!5e0!3m2!1sen!2spt!4v1648913488549!5m2!1sen!2spt"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
