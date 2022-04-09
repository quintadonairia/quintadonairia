const Experience = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <article className="flex flex-col gap-8">
      <img src={imageSrc} alt={imageAlt} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl text-olive-500">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Experience;
