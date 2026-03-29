import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { InputCompact } from "../components/InputCompact";

export interface FormNewsletterProps {
  onSubmit?: (email: string) => void;
}

export function FormNewsletter({ onSubmit }: FormNewsletterProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(email);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch gap-3">
      <div className="flex-1">
        <InputCompact
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="shrink-0 self-stretch">
        Submit
      </Button>
    </form>
  );
}
