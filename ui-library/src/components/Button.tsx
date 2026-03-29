import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "subtle" | "neutral" | "danger";
export type ButtonSize = "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:   "bg-brand text-white hover:bg-brand-hover",
  secondary: "bg-brand-yellow text-navy hover:bg-brand-yellow-hover",
  subtle:    "border border-steel-light text-steel-dark hover:bg-gray-50",
  neutral:   "bg-steel text-navy hover:bg-steel-dark hover:text-white",
  danger:    "bg-danger text-white hover:bg-red-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-3 py-4",
  sm: "px-2 py-2",
};

export function Button({
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        // Base
        "inline-flex items-center justify-center gap-2",
        "font-barlow font-semibold text-base leading-none",
        "uppercase tracking-[0.02em] whitespace-nowrap",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        // Size
        sizeStyles[size],
        // Variant (only when not disabled)
        !disabled && variantStyles[variant],
        // Disabled state
        disabled && "bg-steel-light text-steel-dark cursor-not-allowed",
        className
      )}
      {...props}
    >
      {iconStart && <span className="size-4 shrink-0 flex items-center justify-center">{iconStart}</span>}
      {children}
      {iconEnd && <span className="size-4 shrink-0 flex items-center justify-center">{iconEnd}</span>}
    </button>
  );
}
