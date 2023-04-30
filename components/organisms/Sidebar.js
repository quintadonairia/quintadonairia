import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useTranslation } from "../../contexts/TranslationContext";
import Icon from "../atoms/Icon";

const Sidebar = () => {
  const t = useTranslation();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-20 flex min-h-screen w-full items-start justify-between bg-light p-8 text-stone-900 shadow-xl transition-all duration-700 sm:w-1/4 ${
          isSidebarActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="text-olive-900 flex cursor-pointer flex-col gap-8 font-serif text-3xl">
          <Link href="/lodging">
            <li onClick={handleSidebarToggle}>{t.menu.lodging}</li>
          </Link>
          <Link href="/experiences">
            <li onClick={handleSidebarToggle}>{t.menu.experiences}</li>
          </Link>
          <Link href="/restaurant">
            <li onClick={handleSidebarToggle}>{t.menu.restaurant}</li>
          </Link>
          <Link href="/contacts">
            <li onClick={handleSidebarToggle}>{t.menu.contacts}</li>
          </Link>
        </ul>
        <Icon size="xl" mode="light">
          <RiCloseLine onClick={handleSidebarToggle} />
        </Icon>
      </div>
      <Icon size="xl" mode="dark">
        <RiMenuLine onClick={handleSidebarToggle} />
      </Icon>
    </div>
  );
};

export default Sidebar;
