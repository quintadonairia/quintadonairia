import Link from 'next/link';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Menu({ handleMenuIsActive, isMenuActive }) {
  const t = useTranslation();

  const routes = [
    {
      name: t.navigation.lodging,
      href: '/lodging',
    },
    {
      name: t.navigation.experiences,
      href: '/experiences',
    },
    {
      name: t.navigation.restaurant,
      href: '/restaurant',
    },
    {
      name: t.navigation.contacts,
      href: '/contacts',
    },
  ];

  return (
    <div
      className={`bg-background-neutral-inverse text-foreground-neutral-inverse fixed inset-0 top-0 z-10 grid place-items-center transition-opacity duration-240 ${
        isMenuActive ? 'opacity-100' : 'opacity-0'
      }`}
      inert={isMenuActive ? false : true}
    >
      <ul className="text-display-medium md:text-display-large flex cursor-pointer flex-col gap-8 text-center font-serif md:gap-12">
        {routes.map((route) => (
          <Link
            className={`transition-transform duration-480 ${
              isMenuActive ? 'translate-y-0' : '-translate-y-4'
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
