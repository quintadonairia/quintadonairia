import { CallBell } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/TranslationContext";
import Button from "../atoms/Button";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const t = useTranslation();

  const [background, setBackground] = useState(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    window.scrollY >= 192 ? setBackground(true) : setBackground(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-6 ${
        background && "bg-stone-900 opacity-95 duration-500"
      }`}
    >
      <Sidebar />
      <Link href="/">
        <img
          src="/graphics/donairia-wordmark-light.svg"
          alt="logo"
          className="absolute left-1/2 w-28 -translate-x-1/2 cursor-pointer lg:w-36"
        />
      </Link>
      <Button
        className="hidden md:inline-flex"
        href={t.global.booking.link}
        size="sm"
        variant="secondary"
      >
        {t.global.booking.text}
      </Button>
      <a className="text-light md:hidden" href={t.global.booking.link}>
        <CallBell size={20} />
      </a>
    </nav>
  );
};

export default Navigation;
