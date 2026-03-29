import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "disabled"> {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, placeholder, options, disabled, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn("font-barlow text-base leading-[1.4]", disabled ? "text-steel-lighter" : "text-navy")}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              "w-full h-12 pl-4 pr-10 appearance-none",
              "font-barlow text-base leading-[1.4]",
              "border outline-none transition-colors duration-150 bg-white",
              !disabled && "border-steel-light text-navy focus:border-brand focus:ring-2 focus:ring-brand/20",
              disabled && "border-steel-lighter bg-steel-light text-steel-dark cursor-not-allowed",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#002e52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
