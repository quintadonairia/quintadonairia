import { useRouter } from "next/router";
import en from "../locales/en/index.json";
import pt from "../locales/pt/index.json";

import Header from "../components/molecules/Header";
import Card from "../components/molecules/Card";

const Experiences = () => {
  const router = useRouter();
  const { locale } = router;

  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "pt":
      t = pt;
      break;
  }

  return (
    <section className="flex flex-col items-center px-6 py-16 gap-16 lg:gap-24 lg:p-24">
      <Header title={t.experiencesTitle} heading={t.experiencesHeading} />
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
  );
};

export default Experiences;
