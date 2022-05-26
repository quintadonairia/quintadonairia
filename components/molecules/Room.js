import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

import { RiArrowRightLine } from "react-icons/ri";

const Room2 = ({
  imageSrc,
  imageAlt,
  title,
  price,
  description,
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
        <a href="mailto:hello@quintadonairia.com?subject=Pedido de Reserva&body=Olá!%0A%0AObrigado por escolher a Quinta Dona Iria.%0A%0AInformações que precisamos para a reserva:%0A%0A- Dias da estadia%0A- Nº de pessoas%0A- Nome da reserva%0A- Quarto pretendido (Quarto Vista Olival ou Quarto Vista Serra)">
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
