import * as React from "react";

import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-transparent border-b flex h-10 w-full border-bottom-2 px-3 py-2 outline-none focus-visible:border-border-inverse transition-all disabled:cursor-not-allowed disabled:opacity-50",
          error &&
            "border-border-negative focus-visible:border-border-negative",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
