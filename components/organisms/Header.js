import { CallBell, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/TranslationContext";
import useScrollDirection from "../../hooks/useScrollDirection";
import Button from "../atoms/Button";

export default function Header({ handleMenuIsActive, isMenuActive }) {
  const t = useTranslation();
  const scrollDirection = useScrollDirection();

  const [background, setBackground] = useState(false);

  useEffect(() => {
    const updateBackground = () => {
      const scrollThreshold = 200;

      window.scrollY >= scrollThreshold
        ? setBackground(true)
        : setBackground(false);
    };

    window.addEventListener("scroll", updateBackground);

    return () => {
      window.removeEventListener("scroll", updateBackground);
    };
  }, [background]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between p-6 transition-all duration-500 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${background ? "bg-stone-900" : "bg-transparent"}`}
    >
      {isMenuActive ? (
        <X
          className="cursor-pointer text-light"
          onClick={handleMenuIsActive}
          size={24}
        />
      ) : (
        <List
          className="cursor-pointer text-light"
          onClick={handleMenuIsActive}
          size={24}
        />
      )}
      <Link href="/">
        <img
          src="/graphics/donairia-wordmark-dark.svg"
          alt="logo"
          className="absolute left-1/2 w-28 -translate-x-1/2 cursor-pointer md:w-32 lg:w-36"
        />
      </Link>
      <a className="md:hidden" href={t.global.booking.link}>
        <CallBell className="text-light" size={24} />
      </a>
      <Button
        className="hidden md:inline-flex"
        variant="neutral"
        size="small"
        href={t.global.booking.link}
      >
        {t.global.booking.text}
      </Button>
    </header>
  );
}
