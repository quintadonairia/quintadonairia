import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";

const Banner = ({ title, heading, description }) => {
  return (
    <div
      className="w-full text-white flex flex-col items-center p-8 lg:p-16 gap-8 lg:gap-12"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)",
      }}
    >
      <div className="flex flex-col items-center">
        <small className="uppercase tracking-widest pb-2 text-sm font-bold">
          {title}
        </small>
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="font-serif text-3xl lg:text-5xl">{heading}</h1>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      </div>
      <ul className="flex items-center gap-8">
        <a href="https://www.facebook.com/quintadonairia" target="_blank">
          <RiFacebookCircleFill className="text-3xl lg:text-4xl" />
        </a>
        <a href="https://www.instagram.com/quintadonairia/" target="_blank">
          <RiInstagramLine className="text-3xl lg:text-4xl" />
        </a>
      </ul>
    </div>
  );
};

export default Banner;
