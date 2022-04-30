const Split = ({ children, direction }) => {
  const directions = {
    normal: "flex-col lg:flex-row",
    reverse: "flex-col lg:flex-row-reverse",
  };

  return (
    <section
      className={`flex items-center justify-between gap-8 lg:gap-24 px-6 py-16 lg:px-12 max-w-screen-xl ${directions[direction]}`}
    >
      {children}
    </section>
  );
};

export default Split;
