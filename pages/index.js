import Head from "next/head";
import Card from "../components/molecules/Card";
import Section from "../components/organisms/Section";

import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";

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
        image="images/20210820-donairia-009.jpg"
        description="Indulge yourself in the luxury of one of Aberdeenshire's most
            historic hotels. Nestled on the banks of the River Dee, many of our
            40 bedrooms boasts stunning views coupled with contemporary Scottish
            interiors. Relax in our comfortable beds, luxuriate in our stylish
            bathrooms and enjoy our personal touches of Scottish hospitality."
        action="View Lodging"
      />

      <img src="images/20210820-donairia-008.jpg" alt="" />

      {/* Experience Section */}
      <section className="flex flex-col items-center p-16 gap-16 lg:gap-0">
        <h1 className="text-4xl lg:text-6xl font-serif text-olive">
          Experiences
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 lg:p-32">
          <Card
            image="images/20211003-donairia-024.jpg"
            title="Guided Tour and Tasting"
            description="Visit the wine cellar, the olive press, the regional products store and other spaces on the farm. Enjoy
          the silence of nature, the chirping of the birds, contemplating
          the landscape of vineyards, olive groves and surrounding
          mountains. To accompany the tasting, taste the region
          products: Rabaçal cheese, honey and farm nut bread, olives and
          sausages."
          />
          <Card
            image="images/20211003-donairia-048.jpg"
            title="Visit and Lunch"
            description="In a lunch filled with our local gastronomy, we highlight the
          wedding soup, the tiborna of bacalhau as in our mill, the
          octopus à lagareiro, the chicken from the farm, the suckling
          piglet, the chanfana of our village, or the goatling roasted in the
          oven of firewood"
          />
          <Card
            image="images/20211003-donairia-022.jpg"
            title="Picnic at the Farm"
            description="Basket with regional products (ham, salpicão, chorizo, cheese, nuts, pataniscas, and piglet sandwiches), Dona Iria olive oil and Tocata Wine."
          />
          <Card
            image="images/20210928-donairia-027.jpg"
            title="Grape Harvest"
            description="In September, guests and visitors of the farm are challenged to
            work on the grape harvest, with a break to eat the “bucha”.
            After work comes rest and reward, with a lunch fulfilled with
            local cuisine and harmonized with the house wines."
          />
        </div>
      </section>

      {/* Dine Section */}
      <Section
        title="Restaurant"
        heading="Taste the traditional Portuguese cuisine"
        subheading="Dine with us"
        image="images/20211003-donairia-050.jpg"
        description="Enjoying good food and company in our atmospheric Poachers Brasserie with views of the river is a quintessential part of the Maryculter House experience. Inspired by the abundance of fine produce from our local larder, our Head Chef, Alan Clarke and his team carefully prepare delicious dishes from seasonal, local ingredients."
        action="Make a Reservation"
        reverse
      />

      {/* Social Section */}
      <div className="bg-olive w-full h-96 text-white flex flex-col items-center p-16 gap-12">
        <div className="flex flex-col items-center">
          <small className="uppercase tracking-widest pb-2 text-sm font-bold">
            Social
          </small>
          <h1 className="font-serif text-5xl">Stay connected with us</h1>
        </div>
        <ul className="flex items-center gap-8">
          <a href="https://www.facebook.com/quintadonairia" target="_blank">
            <RiFacebookCircleFill className="text-4xl" />
          </a>
          <a href="https://www.instagram.com/quintadonairia/" target="_blank">
            <RiInstagramLine className="text-4xl" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Home;
