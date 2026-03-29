import { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export function Checkbox({ label, description, disabled, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id={inputId}
          disabled={disabled}
          className={cn(
            "appearance-none shrink-0 size-4 rounded-[4px] border-0",
            "transition-colors duration-150 cursor-pointer",
            "checked:bg-brand checked:after:content-[''] relative",
            // Checkmark via background SVG
            "checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M3%208l3.5%203.5L13%205%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]",
            "checked:bg-no-repeat checked:bg-center checked:bg-contain",
            !disabled && "bg-steel-light hover:bg-steel",
            disabled && "bg-steel-lighter cursor-not-allowed opacity-60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "font-barlow text-base leading-[1.4] cursor-pointer",
            disabled ? "text-steel-lighter" : "text-navy"
          )}
        >
          {label}
        </label>
      </div>
      {description && (
        <div className="flex gap-3">
          <span className="size-4 shrink-0" aria-hidden="true" />
          <p className="font-barlow text-base leading-[1.4] text-steel">{description}</p>
        </div>
      )}
    </div>
  );
}
