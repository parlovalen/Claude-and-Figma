import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export type InputState = "default" | "error" | "disabled";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled"> {
  label?: string;
  description?: string;
  error?: string;
  state?: InputState;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, description, error, state = "default", className, id, ...props }, ref) => {
    const isDisabled = state === "disabled";
    const isError = state === "error";
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "font-barlow text-base leading-[1.4]",
              isDisabled ? "text-steel-lighter" : "text-navy"
            )}
          >
            {label}
          </label>
        )}
        {description && !isError && (
          <p className="font-barlow text-base leading-[1.4] text-steel">{description}</p>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={isDisabled}
          className={cn(
            "w-full px-4 py-3",
            "font-barlow font-semibold text-base uppercase tracking-[0.02em] leading-none",
            "border outline-none transition-colors duration-150",
            // default
            !isDisabled && !isError && [
              "bg-white border-steel-light text-navy",
              "focus:border-brand focus:ring-2 focus:ring-brand/20",
            ],
            // error
            isError && "bg-white border-danger text-navy focus:ring-2 focus:ring-danger/20",
            // disabled
            isDisabled && "bg-steel-light border-steel-lighter text-steel-dark cursor-not-allowed",
            className
          )}
          {...props}
        />
        {isError && error && (
          <p className="font-barlow text-base leading-[1.4] text-danger">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
