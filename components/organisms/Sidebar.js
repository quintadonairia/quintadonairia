import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div
        className={`flex p-8 bg-merino shadow-xl min-h-screen w-full sm:w-1/4 items-start justify-between text-gray-900 fixed top-0 left-0 transition-all duration-700 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 text-xl cursor-pointer">
          <Link href="/experiences">
            <li onClick={handleClick}>Experiences</li>
          </Link>
          <Link href="/lodging">
            <li onClick={handleClick}>Lodging</li>
          </Link>
          <Link href="/products">
            <li onClick={handleClick}>Products</li>
          </Link>
          <Link href="/restaurant">
            <li onClick={handleClick}>Restaurant</li>
          </Link>
          <Link href="/contacts">
            <li onClick={handleClick}>Contacts</li>
          </Link>
        </ul>
        <RiCloseLine className="text-xl cursor-pointer" onClick={handleClick} />
      </div>
      <RiMenuLine
        className="text-white text-2xl cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default Sidebar;
