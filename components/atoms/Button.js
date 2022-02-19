import React from "react";

const Button = ({ children, variant, size, mode }) => {
  const sizes = {
    sm: "text-xs px-6 py-3",
    md: "text-xs px-8 py-4",
    lg: "text-sm px-12 py-4",
  };

  const modes = {
    light: "text-white",
    dark: "text-black",
  };

  const variants = {
    primary: "bg-transparent border-stone-300 hover:bg-tan border-2",
    link: "px-0 pb-2 border-b-2 border-black",
  };

  return (
    <button
      className={`w-fit uppercase font-bold tracking-widest text-sm duration-300 ${variants[variant]} ${sizes[size]} ${modes[mode]}`}
    >
      {children}
    </button>
  );
};

export default Button;
