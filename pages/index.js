import Head from "next/head";
import Card from "../components/molecules/Card";
import Section from "../components/organisms/Section";
import Icon from "../components/atoms/Icon";

import { RiArrowDownSLine } from "react-icons/ri";
import Header from "../components/molecules/Header";
import Banner from "../components/molecules/Banner";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
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
        <h1 className="text-white font-serif text-4xl px-8 leading-snug lg:text-5xl max-w-screen-md lg:max-w-screen-lg lg:leading-tight">
          A wellness haven, combining wine and olive oil with the rich
          Portuguese cuisine
        </h1>
        <Icon size="xl" mode="dark" mobile>
          <RiArrowDownSLine className="absolute bottom-16 left-1/2 -translate-x-1/2" />
        </Icon>
      </header>

      {/* Stay Section */}
      <Section
        title="Lodging"
        heading="Enveloped in nature and inspired by a passion for
          hospitality."
        subheading="Stay with us"
        image="images/20210820-donairia-009.jpg"
        description="Indulge yourself in the rustic, comfortable environment of our small hotel. With stunning views over the nearby fields and mountains, we want to offer you moments of rest and leisure in the 8 rooms equipped with air conditioning, Wi-Fi and TV."
        action="View Lodging"
      />

      {/* Experience Section */}
      <section className="flex flex-col items-center px-6 py-16 gap-16 lg:gap-24 lg:p-24">
        <Header
          title="Experiences"
          heading="There is always something to enjoy and experience at our place"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
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
        description="In the Safra Restaurant, we explore new tastes and sensations, intersecting tradition and modernity. Whether you are staying in, or just visiting us for the day, we want to offer you a unique and memorable dining experience, rooted on our local and sustainable products."
        action="Make a Reservation"
        reverse
      />

      {/* Social Banner */}
      <Banner />
    </div>
  );
};

export default Home;
