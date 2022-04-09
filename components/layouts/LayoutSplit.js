const LayoutSplit = ({ children }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 px-6 py-16 lg:px-40">
      {children}
    </section>
  );
};

export default LayoutSplit;
