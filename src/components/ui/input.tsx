import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, type, label, error, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1", className)}>
        <label className="text-sm" htmlFor={props.name}>{label}</label>

        <input
          id={props.name}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-muted bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-card",
            inputClassName,
            { 'border-2 border-red-500': error }
          )}
          ref={ref}
          {...props}
        />

        {error && (
          <p className="text-[13px] ml-1 text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input };

