import Link from "next/link";
import { useTranslation } from "../../contexts/translation-context";

export default function Menu({ handleMenuIsActive, isMenuActive }) {
  const t = useTranslation();

  const routes = [
    {
      name: t.navigation.lodging,
      href: "/lodging",
    },
    {
      name: t.navigation.experiences,
      href: "/experiences",
    },
    {
      name: t.navigation.restaurant,
      href: "/restaurant",
    },
    {
      name: t.navigation.contacts,
      href: "/contacts",
    },
  ];

  return (
    <div
      className={`fixed inset-0 top-0 z-10 grid place-items-center bg-stone-900 text-light transition-opacity duration-[240ms] ${
        isMenuActive ? "opacity-100" : "opacity-0"
      }`}
      inert={isMenuActive ? null : ""}
    >
      <ul className="flex cursor-pointer flex-col gap-8 text-center font-serif text-3xl md:gap-12 md:text-5xl">
        {routes.map((route) => (
          <Link
            className={`transition-transform duration-[480ms] ${
              isMenuActive ? "translate-y-0" : "-translate-y-4"
            }`}
            href={route.href}
            key={route.href}
            onClick={handleMenuIsActive}
          >
            {route.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
