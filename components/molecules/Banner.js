import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const Banner = ({ kicker, heading, description }) => {
  return (
    <div
      className="text-foreground-neutral-inverse flex w-full flex-col items-center gap-8 p-8 lg:gap-12 lg:p-16"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)',
      }}
    >
      <div className="flex flex-col items-center">
        <small className="text-body-small-subtle pb-2 font-bold tracking-widest uppercase">
          {kicker}
        </small>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-display-small lg:text-display-large font-serif">
            {heading}
          </h1>
          <p className="text-body-medium lg:text-body-large">{description}</p>
        </div>
      </div>
      <ul className="flex items-center gap-8">
        <a href="https://www.facebook.com/quintadonairia" target="_blank">
          <FacebookLogo className="text-display-small lg:text-display-medium" />
        </a>
        <a href="https://www.instagram.com/quintadonairia/" target="_blank">
          <InstagramLogo className="text-display-small lg:text-display-medium" />
        </a>
      </ul>
    </div>
  );
};

export default Banner;
