const Icon = ({ size, mode, mobile, desktop, children }) => {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const modes = {
    light: "text-black",
    dark: "text-white",
  };

  return (
    <i
      className={`cursor-pointer ${sizes[size]} ${modes[mode]} ${
        desktop && "hidden lg:block"
      } ${mobile && "block lg:hidden"}`}
    >
      {children}
    </i>
  );
};

export default Icon;
