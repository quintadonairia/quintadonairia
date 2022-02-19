import Link from "next/link";
import Button from "../atoms/Button";

import { RiArrowRightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start gap-24 py-16 px-8 lg:py-16 lg:px-32 bg-olive-800 text-white">
      <div className="w-full flex flex-col gap-16 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
        <Link href="/">
          <img
            src="/graphics/wordmark-white.svg"
            alt="logo"
            className="w-24 lg:w-40 cursor-pointer"
          />
        </Link>
        <ul className="grid grid-cols-2 gap-5 font-serif text-2xl">
          <li>Lodging</li>
          <li>Experiences</li>
          <li>Dining</li>
          <li>Products</li>
          <li>Our Story</li>
          <li>Contacts</li>
        </ul>
        <div className="flex flex-col gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <p>Rua Central nº35</p>
            <p>Rio de Vide, Miranda do Corvo</p>
            <p>3220-336 Coimbra</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>+351 966 923 278</p>
            <p>domingonaaldeia@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="primary" size="md">
            Book Now
          </Button>
          <a href="" className="flex items-center gap-2">
            Get directions
            <RiArrowRightLine />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col gap-12 lg:items-start lg:gap-0 lg:flex-row lg:justify-between text-sm">
        <div className="flex flex-col gap-2">
          <p>Copyright © 2022 Quinta Dona Iria. All Rights Reserved.</p>
          <ul className="flex gap-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Environmental Policy</li>
          </ul>
        </div>
        <p>
          Made with &hearts; by <a>Gonçalo Dias</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;