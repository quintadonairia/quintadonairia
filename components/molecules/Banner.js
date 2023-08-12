import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

const Banner = ({ kicker, heading, description }) => {
  return (
    <div
      className="flex w-full flex-col items-center gap-8 p-8 text-white lg:gap-12 lg:p-16"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)",
      }}
    >
      <div className="flex flex-col items-center">
        <small className="pb-2 text-sm font-bold uppercase tracking-widest">
          {kicker}
        </small>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl">{heading}</h1>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      </div>
      <ul className="flex items-center gap-8">
        <a href="https://www.facebook.com/quintadonairia" target="_blank">
          <FacebookLogo className="text-3xl lg:text-4xl" />
        </a>
        <a href="https://www.instagram.com/quintadonairia/" target="_blank">
          <InstagramLogo className="text-3xl lg:text-4xl" />
        </a>
      </ul>
    </div>
  );
};

export default Banner;
