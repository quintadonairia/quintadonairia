import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

import { RiArrowRightLine } from "react-icons/ri";

const Room2 = ({ imageSrc, imageAlt, title, description, buttonLabel }) => {
  return (
    <article className="flex flex-col gap-8 items-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-[4/3] object-cover w-[32rem]"
      />
      <div className="flex flex-col gap-4 items-center text-center lg:px-16">
        <h1 className="font-serif text-3xl text-olive-500">{title}</h1>
        <h4 className="text-neutral-600 leading-relaxed">{description}</h4>
        <Button size="lg" variant="link" mode="light">
          <Icon size="md">
            <RiArrowRightLine />
          </Icon>
          {buttonLabel}
        </Button>
      </div>
    </article>
  );
};

export default Room2;
