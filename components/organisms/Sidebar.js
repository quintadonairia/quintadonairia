import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import en from "../../locales/en/components/Sidebar.json";
import pt from "../../locales/pt/components/Sidebar.json";
import Icon from "../atoms/Icon";

const Sidebar = () => {
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

  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div
        className={`z-20 flex p-8 bg-tan-50 shadow-xl min-h-screen w-full sm:w-1/4 items-start justify-between text-gray-900 fixed top-0 left-0 transition-all duration-700 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-3xl cursor-pointer font-serif text-olive-900">
          <Link href="/lodging">
            <li onClick={handleClick}>{t.page1}</li>
          </Link>
          <Link href="/experiences">
            <li onClick={handleClick}>{t.page2}</li>
          </Link>
          <Link href="/restaurant">
            <li onClick={handleClick}>{t.page3}</li>
          </Link>
          <Link href="/contacts">
            <li onClick={handleClick}>{t.page6}</li>
          </Link>
        </ul>
        <Icon size="xl" mode="light">
          <RiCloseLine onClick={handleClick} />
        </Icon>
      </div>
      <Icon size="xl" mode="dark">
        <RiMenuLine onClick={handleClick} />
      </Icon>
    </div>
  );
};

export default Sidebar;
