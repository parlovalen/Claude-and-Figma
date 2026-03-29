import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { InputCompact } from "../components/InputCompact";

export interface FormLogInValues {
  email: string;
  password: string;
}

export interface FormLogInProps {
  onSubmit?: (values: FormLogInValues) => void;
  onForgotPassword?: () => void;
}

export function FormLogIn({ onSubmit, onForgotPassword }: FormLogInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.({ email, password });
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
      <InputCompact
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      <button
        type="button"
        onClick={onForgotPassword}
        className="font-barlow text-base leading-[1.4] text-navy underline text-left w-fit hover:text-brand transition-colors duration-150"
      >
        Forgot password?
      </button>
    </form>
  );
}
