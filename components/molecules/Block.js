import Button from '../atoms/Button';

const Block = ({ title, text, action, label }) => {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      <div className="flex flex-col gap-4">
        <h2 className="text-foreground-brand-default text-display-small lg:text-display-medium font-serif">
          {title}
        </h2>
        <p className="leading-relaxed lg:max-w-prose">{text}</p>
      </div>
      {action && (
        <Button variant="brand" size="large">
          {label}
        </Button>
      )}
    </div>
  );
};

export default Block;
