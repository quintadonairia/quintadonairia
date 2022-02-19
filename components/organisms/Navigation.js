import { useState, useEffect } from "react";

import Link from "next/link";
import Button from "../atoms/Button";
import Sidebar from "./Sidebar";
import { RiPhoneFill } from "react-icons/ri";
import Icon from "../atoms/Icon";

const Navigation = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    window.scrollY >= 192 ? setBackground(true) : setBackground(false);
  };

  return (
    <nav
      className={`flex items-center justify-between z-10 p-8 fixed top-0 left-0 right-0 ${
        background && "bg-neutral-800 duration-500"
      }`}
    >
      <Sidebar />
      <Link href="/">
        <img
          src="/graphics/wordmark-white.svg"
          alt="logo"
          className="w-32 lg:w-40 cursor-pointer absolute left-1/2 -translate-x-1/2"
        />
      </Link>
      <Link href="/stay">
        <Button variant="primary" size="sm" mode="dark" desktop>
          Book Now
        </Button>
      </Link>
      <Icon variant="primary" size="sm" mode="dark" mobile>
        <RiPhoneFill className="text-white" />
      </Icon>
    </nav>
  );
};

export default Navigation;
