import Link from "next/link";

import Button from "../atoms/Button";
import Header from "../molecules/Header";

const Section = ({
  title,
  heading,
  subheading,
  image,
  description,
  action,
  reverse,
}) => {
  return (
    <section className="flex flex-col items-center gap-16 px-6 py-16 lg:p-24">
      <Header title={title} heading={heading} />
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
      >
        <img src={image} alt="" className={`${reverse && `order-last`}`} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl lg:text-4xl">{subheading}</h2>
            <p>{description}</p>
          </div>
          <Button variant="primary" size="lg">
            {action}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section;
