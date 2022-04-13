const LayoutSplit = ({ children, vDirection }) => {
  const vDirections = {
    normal: "flex-col",
    reverse: "flex-col-reverse",
  };

  return (
    <section
      className={`flex lg:flex-row items-center justify-between gap-8 lg:gap-24 px-6 py-16 lg:px-12 max-w-screen-xl ${vDirections[vDirection]}`}
    >
      {children}
    </section>
  );
};

export default LayoutSplit;
