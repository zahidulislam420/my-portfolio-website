"use client";

import { useRef, useState } from "react";

import { socials } from "@/data/profile";
import { ArrowRightIcon } from "./icons";

type FieldName = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<FieldName, string>>;

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email doesn't look right — try name@example.com.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject so I know what this is about.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A few more words, please (at least 10 characters).";
  }

  return errors;
}

/**
 * Contact form with real validation.
 *
 * There is no email-delivery backend configured for this site, so the form
 * never claims a message was "sent". Instead it validates the input and opens
 * the visitor's default email app with the message pre-filled (mailto
 * fallback), while clearly stating what happened. To enable direct server-side
 * delivery, connect a form/email service to the submit handler.
 */
export function ContactForm() {
  const [values, setValues] = useState<Record<FieldName, string>>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "opened">("idle");
  const submittingRef = useRef(false);

  const setValue = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Guard against duplicate submissions (double click / double Enter).
    if (submittingRef.current) return;

    const found = validate(values);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as FieldName[]).find(
      (key) => found[key],
    );
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    submittingRef.current = true;
    setStatus("opening");

    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");

    const mailto = `mailto:${socials.email}?subject=${encodeURIComponent(
      values.subject.trim(),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("opened");

    window.setTimeout(() => {
      submittingRef.current = false;
    }, 1500);
  };

  const fields: {
    name: FieldName;
    label: string;
    type: string;
    placeholder: string;
    autoComplete: string;
    multiline?: boolean;
  }[] = [
    {
      name: "name",
      label: "Full name",
      type: "text",
      placeholder: "Your name",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      placeholder: "name@example.com",
      autoComplete: "email",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What would you like to talk about?",
      autoComplete: "off",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card flex flex-col gap-5 p-6 sm:p-7"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <Field
            key={field.name}
            {...field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={(value) => setValue(field.name, value)}
          />
        ))}
      </div>

      {fields.slice(2).map((field) => (
        <Field
          key={field.name}
          {...field}
          value={values[field.name]}
          error={errors[field.name]}
          onChange={(value) => setValue(field.name, value)}
        />
      ))}

      <Field
        name="message"
        label="Message"
        type="text"
        placeholder="Tell me about your project, role or idea…"
        autoComplete="off"
        multiline
        value={values.message}
        error={errors.message}
        onChange={(value) => setValue("message", value)}
      />

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "opening"}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "opening" ? "Opening your email app…" : "Send message"}
          {status === "opening" ? null : (
            <ArrowRightIcon width={16} height={16} />
          )}
        </button>

        <p className="text-xs leading-5 text-muted">
          This form opens your default email app with the message pre-filled —
          nothing is sent from this page. Prefer to copy directly?{" "}
          <a
            href={`mailto:${socials.email}`}
            className="text-accent underline-offset-2 hover:underline"
          >
            {socials.email}
          </a>
        </p>

        {/* Honest, non-fake feedback about what just happened. */}
        <div role="status" aria-live="polite">
          {status === "opened" ? (
            <p className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-6 text-txt">
              Your email app should be opening with this message pre-filled.
              If nothing opened, copy your message and send it to{" "}
              <a
                href={`mailto:${socials.email}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {socials.email}
              </a>
              .
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

type FieldProps = {
  name: FieldName;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  value: string;
  error?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
};

function Field({
  name,
  label,
  type,
  placeholder,
  autoComplete,
  value,
  error,
  multiline = false,
  onChange,
}: FieldProps) {
  const errorId = `contact-${name}-error`;
  const describedBy = error ? errorId : undefined;

  const sharedProps = {
    id: `contact-${name}`,
    name,
    value,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={`contact-${name}`}
        className="text-sm font-medium text-txt"
      >
        {label}
        <span aria-hidden="true" className="ml-1 text-accent">
          *
        </span>
      </label>

      {multiline ? (
        <textarea
          {...sharedProps}
          rows={5}
          className="field resize-y"
          autoComplete={autoComplete}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          className="field"
          autoComplete={autoComplete}
        />
      )}

      {error ? (
        <p id={errorId} className="text-xs font-medium text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
