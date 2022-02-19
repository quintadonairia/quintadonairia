const Icon = ({ mobile, desktop, children }) => {
  return (
    <i
      className={`text-2xl cursor-pointer ${desktop && "hidden lg:block"} ${
        mobile && "block lg:hidden"
      }`}
    >
      {children}
    </i>
  );
};

export default Icon;
