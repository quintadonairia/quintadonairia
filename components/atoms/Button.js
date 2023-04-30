import Link from "next/link";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, className, href, size, variant }, ref) => {
    const sizes = {
      sm: "px-6 py-3 text-xs",
      md: "px-8 py-4 text-xs",
      lg: "px-10 py-4 text-sm",
    };

    const variants = {
      primary:
        "border-2 text-olive border-olive hover:bg-olive hover:text-white duration-300 ",
      secondary:
        "border-2 text-white border-white hover:bg-white hover:text-black duration-300 ",
    };

    if (href) {
      return (
        <Link href={href} passHref>
          <a
            className={`inline-flex w-fit cursor-pointer items-center gap-1 font-bold uppercase tracking-widest duration-200 hover:gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
            ref={ref}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <button
        className={`inline-flex cursor-pointer items-center gap-1 font-bold uppercase tracking-widest duration-200 hover:gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
