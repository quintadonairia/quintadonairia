import Link from "next/link";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, href, size, variant, mode, desktop, mobile }, ref) => {
    const sizes = {
      sm: "px-6 py-3 text-xs",
      md: "px-8 py-4 text-xs",
      lg: "px-10 py-4 text-sm",
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

    if (href) {
      return (
        <Link href={href} passHref>
          <a
            className={`flex w-fit cursor-pointer flex-row items-center gap-1 font-bold uppercase tracking-widest ${
              variants[variant]
            } ${sizes[size]} ${modes[mode]} ${desktop && "hidden lg:block"} ${
              mobile && "block lg:hidden"
            }`}
            ref={ref}
          >
            {children}
          </a>
        </Link>
      );
    }

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
  }
);

export default Button;
