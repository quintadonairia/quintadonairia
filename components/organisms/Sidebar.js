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
        className={`z-20 flex p-8 bg-light shadow-xl min-h-screen w-full sm:w-1/4 items-start justify-between text-stone-900 fixed top-0 left-0 transition-all duration-700 ${
          isSidebarActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-3xl cursor-pointer font-serif text-olive-900">
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
