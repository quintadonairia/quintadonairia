import { ArrowRight } from "@phosphor-icons/react";
import Button from "../atoms/Button";

const Room2 = ({
  imageSrc,
  imageAlt,
  title,
  price,
  description,
  bookingLink,
  buttonLabel,
}) => {
  return (
    <article className="flex flex-col items-center gap-8">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-4/3 w-lg object-cover"
      />
      <div className="flex flex-col items-center gap-4 text-center lg:px-16">
        <h1 className="font-serif text-3xl text-olive">{title}</h1>
        <div className="rounded-full bg-olive py-2 px-4 text-xs uppercase tracking-widest text-light">
          {price}
        </div>
        <h4 className="leading-relaxed text-stone-600">{description}</h4>
        <a href={bookingLink}>
          <Button size="large">
            <ArrowRight size={20} />
            {buttonLabel}
          </Button>
        </a>
      </div>
    </article>
  );
};

export default Room2;
