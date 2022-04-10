import Header from "../molecules/Header";
import Block from "../molecules/Block";

const Section = ({
  kicker,
  heading,
  subheading,
  title,
  imageSrc,
  imageAlt,
  text,
  action,
  label,
}) => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-12 px-6 py-16 lg:p-32">
      <Header kicker={kicker} heading={heading} subheading={subheading} />
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full lg:w-[36rem] aspect-[5/4] lg:aspect-[5/4] object-cover`}
        />
        {action ? (
          <Block title={title} text={text} action={action} label={label} />
        ) : (
          <Block title={title} text={text} />
        )}
      </div>
    </section>
  );
};

export default Section;
