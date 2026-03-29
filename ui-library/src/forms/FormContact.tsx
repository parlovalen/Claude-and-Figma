import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { InputCompact } from "../components/InputCompact";
import { Textarea } from "../components/Textarea";

export interface FormContactValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormContactProps {
  onSubmit?: (values: FormContactValues) => void;
}

export function FormContact({ onSubmit }: FormContactProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.({ fullName, email, phone, message });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white border border-steel-light w-80">
      <InputCompact
        label="Full Name"
        autoComplete="name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <InputCompact
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputCompact
        label="Phone"
        type="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Textarea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
