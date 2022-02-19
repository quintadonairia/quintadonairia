import React from "react";

const Button = ({ children, variant }) => {
  const variants = {
    primary: "bg-transparent border-stone-300 hover:bg-tan hover:text-white",
  };

  return (
    <button
      className={`uppercase font-bold tracking-widest text-sm border-2  px-4 py-2 duration-300 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
