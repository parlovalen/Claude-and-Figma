import { FormEvent, useState } from "react";
import "./styles.css";

export interface HeroSectionProps {
  onSubmit?: (data: { email: string; password: string; terms: boolean }) => void;
}

export default function HeroSection({ onSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.({ email, password, terms });
  }

  return (
    <section className="hero" aria-label="Hero section">
      {/* Left: marketing copy */}
      <div className="hero__left">
        <p className="hero__eyebrow">
          START FOR FREE&nbsp;&nbsp;·&nbsp;&nbsp;NO CREDIT CARD REQUIRED
        </p>

        <h1 className="hero__title">
          Build products
          <br />
          your users love.
        </h1>

        <p className="hero__subheading">
          Ship faster, collaborate better, and design with confidence using our
          all-in-one platform.
        </p>

        <div className="button-group" role="group" aria-label="Primary actions">
          <a href="#signup" className="btn btn--primary">
            Get started free
          </a>
          <a href="#demo" className="btn btn--secondary">
            Watch demo
          </a>
        </div>

        <p className="hero__social-proof">
          Trusted by 10,000+ teams at top companies worldwide
        </p>
      </div>

      {/* Right: signup form card */}
      <div className="hero__right">
        <div className="signup-card">
          <div className="signup-card__header">
            <h2 className="signup-card__title">Create your free account</h2>
            <p className="signup-card__subtitle">
              Get started in seconds. No credit card needed.
            </p>
          </div>

          <form
            className="signup-form"
            id="signup"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-field">
              <label className="form-field__label" htmlFor="email">
                Email address
              </label>
              <input
                className="form-field__input"
                type="email"
                id="email"
                name="email"
                placeholder="jane@company.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-field__label" htmlFor="password">
                Password
              </label>
              <input
                className="form-field__input"
                type="password"
                id="password"
                name="password"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-checkbox">
              <input
                className="form-checkbox__input"
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label className="form-checkbox__label" htmlFor="terms">
                I agree to the Terms of Service
              </label>
            </div>

            <button className="btn btn--submit" type="submit">
              Create free account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
