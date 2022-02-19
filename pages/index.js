import Head from "next/head";
import Link from "next/link";

import Button from "../components/atoms/Button";
import Section from "../components/organisms/Section";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-8">
      <Head>
        <title>Quinta Dona Iria | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/20211013-donairia-004.jpg)",
        }}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-48 text-white font-serif text-4xl lg:text-6xl">
          <li className="hover:border-b-2 hover:border-white py-4 lg:py-8 cursor-pointer">
            Stay
          </li>
          <li className="hover:border-b-2 hover:border-white py-4 lg:py-8 cursor-pointer">
            Experience
          </li>
          <li className="hover:border-b-2 hover:border-white py-4 lg:py-8 cursor-pointer">
            Dine
          </li>
        </ul>
      </header>

      {/* Stay Section */}
      <Section
        title="Lodging"
        heading="Steeped in history, enveloped in nature and inspired by a passion for
          hospitality."
        subheading="Stay with us"
        description="Indulge yourself in the luxury of one of Aberdeenshire's most
            historic hotels. Nestled on the banks of the River Dee, many of our
            40 bedrooms boasts stunning views coupled with contemporary Scottish
            interiors. Relax in our comfortable beds, luxuriate in our stylish
            bathrooms and enjoy our personal touches of Scottish hospitality."
      />

      {/* Dine Section */}
      <Section
        title="Dine"
        heading="Taste the traditional Portuguese cuisine"
        subheading="Dine with us"
        description="Enjoying good food and company in our atmospheric Poachers Brasserie with views of the river is a quintessential part of the Maryculter House experience. Inspired by the abundance of fine produce from our local larder, our Head Chef, Alan Clarke and his team carefully prepare delicious dishes from seasonal, local ingredients."
        reverse
      />
    </div>
  );
};

export default Home;
