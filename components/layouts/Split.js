const Split = ({ children, direction }) => {
  const directions = {
    normal: 'flex-col lg:flex-row',
    reverse: 'flex-col lg:flex-row-reverse',
  };

  return (
    <section
      className={`flex max-w-(--breakpoint-xl) items-center justify-between gap-8 px-6 py-16 lg:gap-24 lg:px-12 ${directions[direction]}`}
    >
      {children}
    </section>
  );
};

export default Split;
