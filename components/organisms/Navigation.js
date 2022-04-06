import { useRouter } from "next/router";
import en from "../../locales/en/Navigation.json";
import pt from "../../locales/pt/Navigation.json";

import { useState, useEffect } from "react";

import Link from "next/link";
import Button from "../atoms/Button";
import Sidebar from "./Sidebar";
import { RiPhoneFill } from "react-icons/ri";
import Icon from "../atoms/Icon";

const Navigation = () => {
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
      className={`flex items-center justify-between z-10 p-6 fixed top-0 left-0 right-0 ${
        background && "bg-neutral-800 opacity-95 duration-500"
      }`}
    >
      <Sidebar />
      <Link href="/">
        <img
          src="/graphics/wordmark-white.svg"
          alt="logo"
          className="w-28 lg:w-36 cursor-pointer absolute left-1/2 -translate-x-1/2"
        />
      </Link>
      <Link href="/lodging">
        <Button variant="secondary" size="sm" desktop>
          {t.ctaLabel}
        </Button>
      </Link>
      <Icon variant="primary" size="xl" mode="dark" mobile>
        <a href="tel:+351966923278">
          <RiPhoneFill className="text-white" />
        </a>
      </Icon>
    </nav>
  );
};

export default Navigation;
