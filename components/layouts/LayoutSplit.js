const LayoutSplit = ({ childrenLeading, childrenTrailing }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-6 py-16 lg:p-32">
      <div>{childrenLeading}</div>
      <div className="flex flex-col gap-4 basis-1/2 lg:gap-8">
        {childrenTrailing}
      </div>
    </section>
  );
};

export default LayoutSplit;
