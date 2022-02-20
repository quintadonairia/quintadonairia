import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

import Icon from "../atoms/Icon";

const Sidebar = () => {
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
            <li onClick={handleClick}>Lodging</li>
          </Link>
          <Link href="/experiences">
            <li onClick={handleClick}>Experiences</li>
          </Link>
          <Link href="/restaurant">
            <li onClick={handleClick}>Restaurant</li>
          </Link>
          <Link href="/products">
            <li onClick={handleClick}>Products</li>
          </Link>
          <Link href="/story">
            <li onClick={handleClick}>Our Story</li>
          </Link>
          <Link href="/contacts">
            <li onClick={handleClick}>Contacts</li>
          </Link>
        </ul>
        <Icon>
          <RiCloseLine onClick={handleClick} />
        </Icon>
      </div>
      <Icon>
        <RiMenuLine onClick={handleClick} className="text-white" />
      </Icon>
    </div>
  );
};

export default Sidebar;
