import Link from "next/link";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Menu({ handleMenuIsActive, isMenuActive }) {
  const t = useTranslation();

  const routes = [
    {
      name: t.menu.lodging,
      href: "/lodging",
    },
    {
      name: t.menu.experiences,
      href: "/experiences",
    },
    {
      name: t.menu.restaurant,
      href: "/restaurant",
    },
    {
      name: t.menu.contacts,
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
      <ul className="flex cursor-pointer flex-col gap-8 text-center font-serif text-4xl">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <a
              className={`transition-transform duration-[480ms] ${
                isMenuActive ? "translate-y-0" : "-translate-y-4"
              }`}
              onClick={handleMenuIsActive}
            >
              {route.name}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
