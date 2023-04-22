import Button from "../atoms/Button";

const Block = ({ title, text, action, label }) => {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-olive text-3xl lg:text-4xl">{title}</h2>
        <p className="leading-relaxed lg:max-w-prose">{text}</p>
      </div>
      {action && (
        <Button variant="primary" size="lg">
          {label}
        </Button>
      )}
    </div>
  );
};

export default Block;
