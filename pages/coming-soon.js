import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";

const Maintenance = () => {
  return (
    <div className="h-screen max-w-xs lg:max-w-xl m-auto flex flex-col items-center justify-between gap-16 py-24 text-center">
      <header>
        <img
          src="./graphics/lockup-primary.svg"
          alt=""
          className="w-24 lg:w-32"
        />
      </header>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl lg:text-7xl font-serif">Coming Soon</h1>
        <p className="text-lg lg:text-xl">
          We are working on the website and drinking some 🍷
        </p>
      </div>
      <footer className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-serif text-2xl">Meanwhile</h2>
          <p>You can check our social media and get to know us better</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/quintadonairia" target="_blank">
            <RiFacebookCircleFill className="text-2xl lg:text-4xl" />
          </a>
          <a href="https://www.instagram.com/quintadonairia/" target="_blank">
            <RiInstagramLine className="text-2xl lg:text-4xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Maintenance;
