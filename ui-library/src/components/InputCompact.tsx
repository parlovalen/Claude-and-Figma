import { InputHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "../utils/cn";

export interface InputCompactProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled"> {
  label: string;
  disabled?: boolean;
}

/**
 * Floating-label input variant.
 * The label shrinks and moves up once the field has a value or is focused.
 */
export const InputCompact = forwardRef<HTMLInputElement, InputCompactProps>(
  ({ label, disabled, className, id, value, defaultValue, onChange, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const [isFocused, setIsFocused] = useState(false);
    const [innerValue, setInnerValue] = useState(defaultValue ?? "");

    const controlledValue = value !== undefined ? value : innerValue;
    const hasValue = String(controlledValue).length > 0;
    const isFloating = isFocused || hasValue;

    return (
      <div
        className={cn(
          "relative border min-h-[48px] px-4 pt-1 pb-2 flex flex-col justify-center transition-colors duration-150",
          disabled
            ? "bg-steel-light border-steel-lighter cursor-not-allowed"
            : isFocused
            ? "bg-white border-brand ring-2 ring-brand/20"
            : "bg-white border-steel-light",
          className
        )}
      >
        <label
          htmlFor={inputId}
          className={cn(
            "font-barlow pointer-events-none select-none absolute left-4 transition-all duration-150",
            isFloating
              ? "top-1 text-[11px] text-steel"
              : "top-1/2 -translate-y-1/2 text-base text-steel",
            disabled && "text-steel-dark"
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          value={controlledValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            if (value === undefined) setInnerValue(e.target.value);
            onChange?.(e);
          }}
          className={cn(
            "mt-3 w-full bg-transparent outline-none",
            "font-barlow font-semibold text-base text-navy leading-[1.4]",
            disabled && "text-steel-dark cursor-not-allowed"
          )}
          {...props}
        />
      </div>
    );
  }
);

InputCompact.displayName = "InputCompact";
