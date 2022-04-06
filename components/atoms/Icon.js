const Icon = ({ children, size, mode, desktop, mobile }) => {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
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
