import { ArrowRight } from '@phosphor-icons/react';
import Button from '../atoms/Button';

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
        <h1 className="text-foreground-brand-default text-display-small font-serif">
          {title}
        </h1>
        <div className="bg-background-brand-default text-foreground-neutral-inverse text-body-small rounded-full px-4 py-2 tracking-widest uppercase">
          {price}
        </div>
        <h4 className="text-foreground-neutral-subtle leading-relaxed">
          {description}
        </h4>
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
