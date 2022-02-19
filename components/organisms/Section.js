import Link from "next/link";
import Button from "../atoms/Button";

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
    <section className="flex flex-col items-center gap-16 p-8 lg:p-24">
      <div className="flex flex-col gap-4 items-center">
        <small className="text-sm uppercase tracking-widest font-bold">
          {title}
        </small>
        <h1 className="text-4xl lg:text-5xl text-center font-serif text-olive">
          {heading}
        </h1>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
        <img src={image} alt="" className={`${reverse && `order-last`}`} />
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-3xl lg:text-4xl">{subheading}</h2>
          <p>{description}</p>
          <Link href="/stay">
            <Button variant="primary">{action}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
