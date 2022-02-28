import React from "react";

const Button = ({ children, variant, size, mode, desktop, mobile }) => {
  const sizes = {
    sm: "text-xs px-6 py-3",
    md: "text-xs px-8 py-4",
    lg: "text-sm px-12 py-4",
  };

  const modes = {
    dark: "text-white border-white hover:bg-white hover:text-black",
    light:
      "text-olive-500 border-olive-500 hover:bg-olive-500 hover:text-white",
  };

  const variants = {
    primary: "bg-transparent border-2",
    link: "px-0 pb-2 border-b-2 border-black",
  };

  return (
    <button
      className={`w-fit uppercase font-bold tracking-widest duration-300 ${
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
