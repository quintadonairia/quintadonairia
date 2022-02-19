import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-8">
      <div className="flex items-center gap-4">
        <a href="https://www.facebook.com/quintadonairia" target="_blank">
          <RiFacebookCircleFill className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/quintadonairia/" target="_blank">
          <RiInstagramLine className="text-2xl" />
        </a>
      </div>
      <p className="text-sm">
        <span>&copy;</span> 2021 - Quinta Dona Iria
      </p>
    </footer>
  );
};

export default Footer;
