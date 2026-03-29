import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { InputCompact } from "../components/InputCompact";

export interface FormForgotPasswordProps {
  onSubmit?: (email: string) => void;
  onCancel?: () => void;
}

export function FormForgotPassword({ onSubmit, onCancel }: FormForgotPasswordProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white border border-steel-light w-80">
      <InputCompact
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="flex gap-4 items-center">
        <Button type="button" variant="subtle" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          Reset Password
        </Button>
      </div>
    </form>
  );
}
