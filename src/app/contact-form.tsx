"use client";

import { FormEvent, useState } from "react";

const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Feedback = {
  type: "error" | "success";
  message: string;
};

type FieldName = "name" | "email" | "message" | "phone";
type FieldErrors = Partial<Record<FieldName, string>>;

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  const fieldClass = compact
    ? "flex flex-col gap-2 text-sm font-normal tracking-[.01em] text-portfolio-dark-muted"
    : "grid gap-2 text-sm font-medium text-portfolio-ink";
  const controlClass = compact
    ? "min-h-12 w-full rounded-none border border-portfolio-dark-line bg-white/5 px-4 py-3.5 text-base font-normal text-white outline-none transition-colors duration-300 focus:border-portfolio-accent focus:bg-portfolio-accent/5"
    : "min-h-12 w-full rounded-portfolio-sm border border-portfolio-line bg-portfolio-paper px-4 py-3 text-base font-normal text-portfolio-ink outline-none transition placeholder:text-portfolio-muted/70 focus:border-portfolio-accent focus:ring-4 focus:ring-portfolio-accent/15";

  function fieldControlClass(fieldName: FieldName) {
    return `${controlClass} ${
      errors[fieldName] ? "border-portfolio-error-border" : ""
    }`;
  }

  function clearFieldError(fieldName: FieldName) {
    setErrors((current) => {
      if (!current[fieldName]) return current;
      const next = { ...current };
      delete next[fieldName];
      return next;
    });
    setFeedback(null);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (fieldName: string) => {
      const fieldValue = data.get(fieldName);
      return typeof fieldValue === "string" ? fieldValue.trim() : "";
    };
    const name = value("name");
    const email = value("email");
    const message = value("message");
    const phone = value("phone");

    if (value("company")) {
      setFeedback({
        type: "success",
        message: "Thanks — your message has been sent.",
      });
      setErrors({});
      form.reset();
      return;
    }

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "That email doesn’t look right.";
    }
    if (!message) nextErrors.message = "Please add a short message.";
    if (!compact && !phone) nextErrors.phone = "Please enter your phone number.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFeedback({
        type: "error",
        message: "Please review the highlighted fields.",
      });
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const phoneLine = phone ? `\nPhone: ${phone}` : "";
    const body = encodeURIComponent(
      `Name: ${name}${phoneLine}\nEmail: ${email}\n\n${message}`,
    );
    setFeedback({
      type: "success",
      message: "Your email app is opening with your message ready to send.",
    });
    window.location.href = `mailto:contact@bhimgurung.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className={
        compact
          ? "flex flex-col gap-contact-form"
          : "grid gap-6 rounded-portfolio-lg border border-white/15 bg-white p-6 text-portfolio-ink shadow-portfolio-hover sm:p-10"
      }
      noValidate
      onSubmit={submit}
    >
      {compact ? (
        <label className={fieldClass}>
          <span>Name</span>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            className={fieldControlClass("name")}
            id="name"
            name="name"
            onInput={() => clearFieldError("name")}
            type="text"
            autoComplete="name"
            required
          />
          <span className="min-h-4 text-xs text-portfolio-error" id="name-error">
            {errors.name}
          </span>
        </label>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          <label className={fieldClass}>
            <span>Name</span>
            <input
              aria-describedby="name-error"
              aria-invalid={Boolean(errors.name)}
              className={fieldControlClass("name")}
              id="name"
              name="name"
              onInput={() => clearFieldError("name")}
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {errors.name && (
              <span className="text-sm text-portfolio-accent" id="name-error">
                {errors.name}
              </span>
            )}
          </label>
          <label className={fieldClass}>
            <span>Phone</span>
            <input
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-invalid={Boolean(errors.phone)}
              className={fieldControlClass("phone")}
              id="phone"
              name="phone"
              onInput={() => clearFieldError("phone")}
              type="tel"
              placeholder="(402) 000-0000"
              autoComplete="tel"
              required
            />
            {errors.phone && (
              <span className="text-sm text-portfolio-accent" id="phone-error">
                {errors.phone}
              </span>
            )}
          </label>
        </div>
      )}
      <label className={fieldClass}>
        <span>Email</span>
        <input
          aria-describedby={
            compact || errors.email ? "email-error" : undefined
          }
          aria-invalid={Boolean(errors.email)}
          className={fieldControlClass("email")}
          id="email"
          name="email"
          onInput={() => clearFieldError("email")}
          type="email"
          placeholder={compact ? "" : "you@example.com"}
          autoComplete="email"
          required
        />
        {(compact || errors.email) && (
          <span
            className={
              compact
                  ? "min-h-4 text-xs text-portfolio-error"
                : "text-sm text-portfolio-accent"
            }
            id="email-error"
          >
            {errors.email}
          </span>
        )}
      </label>
      <label className={fieldClass}>
        <span>{compact ? "Message" : "How can we help?"}</span>
        <textarea
          aria-describedby={
            compact || errors.message ? "message-error" : undefined
          }
          aria-invalid={Boolean(errors.message)}
          className={`${fieldControlClass("message")} min-h-32 resize-y`}
          id="message"
          name="message"
          onInput={() => clearFieldError("message")}
          rows={compact ? 4 : 5}
          placeholder={compact ? "" : "Tell us a little about your goals..."}
          required
        />
        {(compact || errors.message) && (
          <span
            className={
              compact
                  ? "min-h-4 text-xs text-portfolio-error"
                : "text-sm text-portfolio-accent"
            }
            id="message-error"
          >
            {errors.message}
          </span>
        )}
      </label>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        name="company"
        tabIndex={-1}
        type="text"
      />
      <button
        className={
          compact
            ? "mt-1.5 inline-flex h-[46px] w-fit items-center justify-center bg-portfolio-accent px-6 text-[15px] font-medium tracking-[-.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-portfolio-accent-strong hover:shadow-portfolio-hover active:translate-y-0"
            : "inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-portfolio-pill bg-portfolio-ink px-7 font-medium text-white transition hover:-translate-y-0.5 hover:bg-portfolio-accent max-sm:w-full"
        }
        type="submit"
      >
        {compact ? "Send message" : "Send inquiry"}
        {!compact && <span aria-hidden="true">↗</span>}
      </button>
      {(compact || feedback) && (
        <p
          className={
            compact
              ? `min-h-5 text-sm ${
                  feedback?.type === "error"
                    ? "text-portfolio-error"
                    : "text-portfolio-green"
                }`
              : `text-sm ${
                  feedback?.type === "error"
                    ? "text-portfolio-accent"
                    : "text-portfolio-muted"
                }`
          }
          role={feedback?.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {feedback?.message}
        </p>
      )}
    </form>
  );
}
