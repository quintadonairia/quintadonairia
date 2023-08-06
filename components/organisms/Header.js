import { CallBell, List } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../../contexts/TranslationContext";
import useScrollDirection from "../../hooks/useScrollDirection";

export default function Header({ handleMenuIsActive, isMenuActive }) {
  const t = useTranslation();
  const scrollDirection = useScrollDirection();

  const [background, setBackground] = useState(false);

  useEffect(() => {
    const updateBackground = () => {
      const scrollThreshold = 80;

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
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between p-6 transition-all duration-500 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${background ? "bg-stone-900" : "bg-transparent"}`}
    >
      <List className="text-light" size={20} />
      <Link href="/">
        <img
          src="/graphics/donairia-wordmark-light.svg"
          alt="logo"
          className="w-28 cursor-pointer lg:w-36"
        />
      </Link>
      <a href={t.global.booking.link}>
        <CallBell className="text-light" size={24} />
      </a>
    </header>
  );
}
