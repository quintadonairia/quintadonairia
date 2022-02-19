import { useState, useEffect } from "react";

import Link from "next/link";
import Button from "./atoms/Button";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    window.scrollY >= 720 ? setBackground(true) : setBackground(false);
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
          className="w-40 cursor-pointer"
        />
      </Link>
      <Link href="/stay">
        <Button variant="primary" size="sm" mode="light">
          Book Now
        </Button>
      </Link>
    </nav>
  );
};

export default Navigation;
