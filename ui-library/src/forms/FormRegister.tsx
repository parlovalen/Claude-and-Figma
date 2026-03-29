import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { InputCompact } from "../components/InputCompact";

export interface FormRegisterValues {
  email: string;
  password: string;
  terms: boolean;
}

export interface FormRegisterProps {
  onSubmit?: (values: FormRegisterValues) => void;
}

export function FormRegister({ onSubmit }: FormRegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.({ email, password, terms });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-6 bg-white border border-steel-light w-80"
    >
      <InputCompact
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputCompact
        label="Password"
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Checkbox
        label="I agree to the Terms of Service"
        checked={terms}
        onChange={(e) => setTerms(e.target.checked)}
        required
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
