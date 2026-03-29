import { type ReactNode, FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { InputCompact } from "../components/InputCompact";
import { Select } from "../components/Select";
import { cn } from "../utils/cn";

const INTEREST_OPTIONS = [
  { value: "undergraduate", label: "Undergraduate Programs" },
  { value: "graduate",      label: "Graduate Programs" },
  { value: "doctoral",      label: "Doctoral Programs" },
  { value: "certificate",   label: "Certificate Programs" },
  { value: "online",        label: "Online Learning" },
];

export interface FormLeadSignupValues {
  interest: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface FormLeadSignupProps {
  onSubmit?: (values: FormLeadSignupValues) => void;
  submitLabel?: ReactNode;
  className?: string;
}

export function FormLeadSignup({ onSubmit, submitLabel, className }: FormLeadSignupProps) {
  const [interest, setInterest] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.({ interest, fullName, email, phone });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col gap-8 p-6 bg-white shadow-[0_16px_32px_-4px_rgba(12,12,13,0.1),0_4px_4px_-4px_rgba(12,12,13,0.05)]",
        className ?? "w-80"
      )}
    >
      {/* Intro */}
      <div className="flex flex-col gap-4">
        <h4 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[32px] leading-[1.2] uppercase text-[#003060]">
          We Believe in Your Best
        </h4>
        <p className="font-barlow text-base leading-[1.4] text-steel-dark">
          Learn with us and discover who you can be with an education from National Louis University.
        </p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Select
            placeholder="I am interested in"
            options={INTEREST_OPTIONS}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
          />
          <InputCompact
            label="Full Name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <InputCompact
            label="Email Address"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputCompact
            label="Phone Number (optional)"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Button type="submit" variant="secondary" className="w-full">
          {submitLabel ?? "Submit"}
        </Button>
      </div>
    </form>
  );
}
