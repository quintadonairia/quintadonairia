const Container = ({ children }) => {
  return (
    <div className="m-auto max-w-screen-xl px-6 py-12 lg:px-12 lg:py-16">
      {children}
    </div>
  );
};

export default Container;
