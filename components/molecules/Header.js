const Header = ({ title, heading }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <small className="text-sm uppercase tracking-widest font-bold">
        {title}
      </small>
      <h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="text-4xl lg:text-5xl text-center font-serif text-olive-500 lg:max-w-4xl"
      >
        {heading}
      </h1>
    </div>
  );
};

export default Header;
