import Link from "next/link";
import { useEffect, useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import { useTranslation } from "../../contexts/TranslationContext";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
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
      <a href={t.global.booking.link}>
        <Button variant="secondary" size="sm" desktop>
          {t.global.booking.text}
        </Button>
      </a>
      <Icon variant="primary" size="xl" mode="dark" mobile>
        <a href="tel:+351924733556">
          <RiPhoneFill className="text-white" />
        </a>
      </Icon>
    </nav>
  );
};

export default Navigation;
