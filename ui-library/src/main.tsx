import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { InputCompact } from "./components/InputCompact";
import { Checkbox } from "./components/Checkbox";
import { Textarea } from "./components/Textarea";
import { Select } from "./components/Select";
import { FormRegister } from "./forms/FormRegister";
import { FormLogIn } from "./forms/FormLogIn";
import { FormForgotPassword } from "./forms/FormForgotPassword";
import { FormNewsletter } from "./forms/FormNewsletter";
import { FormContact } from "./forms/FormContact";
import { FormLeadSignup } from "./forms/FormLeadSignup";

const NAV_ITEMS = [
  { id: "buttons-variants",      label: "Buttons — Variants" },
  { id: "buttons-sizes",         label: "Buttons — Sizes" },
  { id: "input-standard",        label: "Input — Standard" },
  { id: "input-compact",         label: "Input — Compact" },
  { id: "textarea",              label: "Textarea" },
  { id: "select",                label: "Select" },
  { id: "checkbox",              label: "Checkbox" },
  { id: "form-register",         label: "Form — Register" },
  { id: "form-login",            label: "Form — Log In" },
  { id: "form-forgot-password",  label: "Form — Forgot Password" },
  { id: "form-newsletter",       label: "Form — Newsletter" },
  { id: "form-contact",          label: "Form — Contact" },
  { id: "form-lead-signup",      label: "Form — Lead Signup" },
];

function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-52 bg-white border-r border-steel-light flex flex-col pt-8 px-4">
      <p className="font-barlow font-semibold text-navy text-xs uppercase tracking-widest mb-6 px-2">
        Components
      </p>
      <ul className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block font-barlow text-sm text-steel hover:text-navy hover:bg-steel-light/40 px-2 py-1.5 transition-colors duration-100"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="font-barlow font-semibold text-navy text-xl uppercase tracking-wide mb-6 pb-2 border-b border-steel-light">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3 mb-4">{children}</div>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sidebar />
    <div className="pl-52">
      <div className="p-10 max-w-3xl font-barlow">
        <h1 className="text-3xl font-bold text-navy uppercase tracking-wide mb-10">UI Library</h1>

        {/* ── Buttons ── */}
        <Section id="buttons-variants" title="Buttons — Variants">
          <Row>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="danger">Danger</Button>
          </Row>
          <Row>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="subtle" disabled>Subtle</Button>
            <Button variant="neutral" disabled>Neutral</Button>
            <Button variant="danger" disabled>Danger</Button>
          </Row>
        </Section>

        <Section id="buttons-sizes" title="Buttons — Sizes">
          <Row>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
          </Row>
        </Section>

        {/* ── Inputs ── */}
        <Section id="input-standard" title="Input — Standard">
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <Input label="Default" placeholder="Enter value" />
            <Input label="With value" defaultValue="Jane Smith" />
            <Input label="Description" description="Helper text here" placeholder="Enter value" />
            <Input label="Error" state="error" defaultValue="bad@" error="Enter a valid email" />
            <Input label="Disabled" state="disabled" defaultValue="Locked value" />
          </div>
        </Section>

        <Section id="input-compact" title="Input — Compact (floating label)">
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <InputCompact label="Email" type="email" />
            <InputCompact label="Filled" defaultValue="name@email.com" type="email" />
            <InputCompact label="Password" type="password" defaultValue="••••••••" />
            <InputCompact label="Disabled" disabled defaultValue="locked" />
          </div>
        </Section>

        {/* ── Checkbox ── */}
        <Section id="checkbox" title="Checkbox">
          <div className="flex flex-col gap-4 max-w-sm">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked by default" defaultChecked />
            <Checkbox label="With description" description="Additional context goes here." />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </div>
        </Section>

        {/* ── Textarea ── */}
        <Section id="textarea" title="Textarea">
          <div className="flex flex-col gap-6 max-w-sm">
            <Textarea label="Message" placeholder="Enter your message…" />
            <Textarea label="With value" defaultValue="Hello there!" />
            <Textarea label="Error" state="error" error="Message is required" />
            <Textarea label="Disabled" state="disabled" defaultValue="Locked" />
          </div>
        </Section>

        {/* ── Select ── */}
        <Section id="select" title="Select">
          <div className="flex flex-col gap-6 max-w-sm">
            <Select
              label="Program"
              placeholder="Select a program"
              options={[
                { value: "ug", label: "Undergraduate" },
                { value: "grad", label: "Graduate" },
                { value: "doc", label: "Doctoral" },
              ]}
            />
            <Select
              label="Disabled"
              disabled
              placeholder="Select a program"
              options={[{ value: "ug", label: "Undergraduate" }]}
            />
          </div>
        </Section>

        {/* ── Forms ── */}
        <Section id="form-register" title="Form — Register">
          <FormRegister onSubmit={(v) => console.log("Submit:", v)} />
        </Section>

        <Section id="form-login" title="Form — Log In">
          <FormLogIn
            onSubmit={(v) => console.log("Login:", v)}
            onForgotPassword={() => console.log("Forgot password")}
          />
        </Section>

        <Section id="form-forgot-password" title="Form — Forgot Password">
          <FormForgotPassword
            onSubmit={(email) => console.log("Reset:", email)}
            onCancel={() => console.log("Cancel")}
          />
        </Section>

        <Section id="form-newsletter" title="Form — Newsletter">
          <div className="max-w-sm">
            <FormNewsletter onSubmit={(email) => console.log("Newsletter:", email)} />
          </div>
        </Section>

        <Section id="form-contact" title="Form — Contact">
          <FormContact onSubmit={(v) => console.log("Contact:", v)} />
        </Section>

        <Section id="form-lead-signup" title="Form — Lead Signup">
          <FormLeadSignup onSubmit={(v) => console.log("Lead:", v)} />
        </Section>
      </div>
    </div>
  </StrictMode>
);
