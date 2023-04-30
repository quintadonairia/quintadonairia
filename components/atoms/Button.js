const Button = ({ children, size, variant, mode, desktop, mobile }) => {
  const sizes = {
    sm: "text-xs px-6 py-3",
    md: "text-xs px-8 py-4",
    lg: "text-sm px-10 py-4",
  };

  const variants = {
    primary:
      "bg-transparent border-2 text-olive border-olive hover:bg-olive hover:text-white duration-300 ",
    secondary:
      "bg-transparent border-2 text-white border-white hover:bg-white hover:text-black duration-300 ",
    link: "bg-transparent hover:gap-2 duration-200",
  };

  const modes = {
    light: "text-black border-black",
    dark: "text-white border-white",
  };

  return (
    <button
      className={`flex w-fit cursor-pointer flex-row items-center gap-1 font-bold uppercase tracking-widest ${
        variants[variant]
      } ${sizes[size]} ${modes[mode]} ${desktop && "hidden lg:block"} ${
        mobile && "block lg:hidden"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
