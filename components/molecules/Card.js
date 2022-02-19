import Button from "../atoms/Button";

const Card = ({ image, title, description }) => {
  return (
    <article className="flex flex-col gap-8">
      <img src={image} alt="" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl text-olive">{title}</h1>
          <p>{description}</p>
        </div>
        <Button variant="link" size="sm">
          Read more
        </Button>
      </div>
    </article>
  );
};

export default Card;
