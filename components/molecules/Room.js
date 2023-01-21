import { RiArrowRightLine } from "react-icons/ri";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

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
    <article className="flex flex-col gap-8 items-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-[4/3] object-cover w-[32rem]"
      />
      <div className="flex flex-col gap-4 items-center text-center lg:px-16">
        <h1 className="font-serif text-3xl text-olive-500">{title}</h1>
        <h3 className="bg-olive-500 text-tan-50 py-2 px-4 rounded-full uppercase text-xs tracking-widest">
          {price}
        </h3>
        <h4 className="text-neutral-600 leading-relaxed">{description}</h4>
        <a href={bookingLink}>
          <Button size="lg" variant="link" mode="light">
            <Icon size="md">
              <RiArrowRightLine />
            </Icon>
            {buttonLabel}
          </Button>
        </a>
      </div>
    </article>
  );
};

export default Room2;
