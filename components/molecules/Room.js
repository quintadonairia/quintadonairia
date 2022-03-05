import Button from "../atoms/Button";

const Room = ({ image, name, description }) => {
  return (
    <article
      className="p-6 w-96 h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-end relative text-white hover:bg-neutral-900/50 hover:cursor-pointer duration-300"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), ${image}`,
      }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl">{name}</h2>
        <p className="text-sm text-neutral-100">{description}</p>
      </div>
      <div className="flex items-end justify-end">
        <Button size="md" variant="link" mode="dark">
          Book Now
        </Button>
      </div>
    </article>
  );
};

export default Room;
