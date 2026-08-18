"use client";

import { useState, type FormEvent, type InvalidEvent } from "react";
import {
  FaArrowRotateLeft,
  FaCircleCheck,
  FaPaperPlane,
  FaSpinner,
  FaTriangleExclamation,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import {
  CONTACT_API_TIMEOUT_MS,
  CONTACT_API_URL,
  WHATSAPP_MESSAGE_LINK,
} from "@/lib/constants";
import SectionHeading from "../SectionHeading";

type FieldName = "name" | "email" | "phone" | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

type Status = "idle" | "submitting" | "success" | "error";

type ValidityKey =
  | "valueMissing"
  | "typeMismatch"
  | "patternMismatch"
  | "tooShort";

/** Any control the form validates — the inputs and the message textarea. */
type FormControl = HTMLInputElement | HTMLTextAreaElement;

/**
 * Digits plus the punctuation people actually type. Kept as a JS string so the
 * escapes reach the `pattern` attribute unambiguously.
 */
const PHONE_PATTERN = "\\+?[0-9 \\-\\(\\)]{6,19}";

/**
 * Wording shown in place of the browser's default bubbles. Validation itself
 * stays native — these only rephrase the validity state the browser reports.
 */
const VALIDATION_MESSAGES: Record<
  FieldName,
  Partial<Record<ValidityKey, string>>
> = {
  name: {
    valueMissing: "Please tell us your name.",
    tooShort: "Please enter your full name.",
  },
  email: {
    valueMissing: "We need an email address to reply to.",
    typeMismatch: "Enter a valid email address, e.g. name@company.co.bw",
  },
  phone: {
    patternMismatch:
      "Use digits, spaces, + ( ) or - only, e.g. +267 71 368 178",
  },
  message: {
    valueMissing: "Let us know what you need training on.",
    tooShort: "A little more detail helps us quote accurately.",
  },
};

/** Turn a control's native validity state into our own wording. */
function describeInvalid(field: FormControl): string {
  const messages = VALIDATION_MESSAGES[field.name as FieldName] ?? {};
  const { validity } = field;

  const key: ValidityKey | null = validity.valueMissing
    ? "valueMissing"
    : validity.typeMismatch
      ? "typeMismatch"
      : validity.patternMismatch
        ? "patternMismatch"
        : validity.tooShort
          ? "tooShort"
          : null;

  // Fall back to the browser's own text for anything we haven't phrased.
  return (key && messages[key]) || field.validationMessage;
}

/** Pull the most useful error text the mail service gives us. */
async function readApiError(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (body && typeof body === "object") {
      const { message, error } = body as { message?: string; error?: string };
      if (typeof message === "string" && message) return message;
      if (typeof error === "string" && error) return error;
    }
  } catch {
    // Non-JSON response — fall through to the generic wording below.
  }

  return response.status >= 500
    ? "Our mail service isn't responding right now."
    : "We couldn't send your message.";
}

const FIELD_BASE =
  "mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-base text-heading transition-colors placeholder:text-muted/70 focus:border-brand-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:focus:border-accent-400";

/** The border switches to the warning tone once a field has failed validation. */
function fieldClass(hasError: boolean) {
  return `${FIELD_BASE} ${hasError ? "border-accent-600" : "border-hairline"}`;
}

const LABEL = "font-display text-sm font-semibold text-heading";

const ERROR_TEXT = "mt-2 text-sm text-accent-600 dark:text-accent-400";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const submitting = status === "submitting";

  /**
   * Fired by the browser when a control fails its constraints. Cancelling the
   * event suppresses the native bubble so we can render the message inline.
   */
  function handleInvalid(event: InvalidEvent<FormControl>) {
    event.preventDefault();
    const field = event.currentTarget;
    setFieldErrors((previous) => ({
      ...previous,
      [field.name]: describeInvalid(field),
    }));
  }

  /** Clear a field's message as soon as the user has satisfied its rules. */
  function handleInput(event: FormEvent<FormControl>) {
    const field = event.currentTarget;
    const name = field.name as FieldName;
    if (!fieldErrors[name] || !field.validity.valid) return;

    setFieldErrors((previous) => {
      const next = { ...previous };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Native validation has already gated submission, so the form is valid here.
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: only a bot fills in a field it cannot see.
    if (data.get("website")) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
        signal: AbortSignal.timeout(CONTACT_API_TIMEOUT_MS),
      });

      if (!response.ok) {
        setFormError(await readApiError(response));
        setStatus("error");
        return;
      }

      form.reset();
      setFieldErrors({});
      setStatus("success");
    } catch (error) {
      // Network failure, CORS rejection, or our own timeout aborting the call.
      setFormError(
        error instanceof DOMException && error.name === "TimeoutError"
          ? "The request took too long to complete."
          : "We couldn't reach our mail service — please check your connection.",
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="enquiry-form"
      className="scroll-mt-20 bg-surface-2 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Send an enquiry"
          title="Tell us what you need"
          intro="Fill in the form and we'll get back to you."
        />

        <div className="mt-12 rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
          {status === "success" ? (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-400/15 text-accent-400">
                <FaCircleCheck className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-heading">
                Message sent
              </h3>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-body">
                Thanks for getting in touch — we&apos;ve received your enquiry
                and will reply within one business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface-2"
              >
                <FaArrowRotateLeft className="h-4 w-4" />
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-accent-600/40 bg-accent-400/10 p-4"
                >
                  <FaTriangleExclamation className="mt-0.5 h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" />
                  <div className="text-sm leading-relaxed text-body">
                    <p className="font-semibold text-heading">
                      Your message didn&apos;t send
                    </p>
                    <p className="mt-1">{formError}</p>
                    <p className="mt-2">
                      Please try again, or{" "}
                      <a
                        href={WHATSAPP_MESSAGE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-700 underline underline-offset-2 dark:text-accent-400"
                      >
                        reach us on WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              {/* A fieldset locks every control at once while the call is in flight. */}
              <fieldset disabled={submitting} className="grid gap-5">
                <legend className="sr-only">Enquiry details</legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={LABEL}>
                      Name <span className="text-accent-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={80}
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? "name-error" : undefined
                      }
                      onInvalid={handleInvalid}
                      onInput={handleInput}
                      className={fieldClass(Boolean(fieldErrors.name))}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className={ERROR_TEXT}>
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={LABEL}>
                      Email <span className="text-accent-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="name@company.co.bw"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                      onInvalid={handleInvalid}
                      onInput={handleInput}
                      className={fieldClass(Boolean(fieldErrors.email))}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className={ERROR_TEXT}>
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={LABEL}>
                    Phone number{" "}
                    <span className="font-sans font-normal text-muted">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    pattern={PHONE_PATTERN}
                    maxLength={20}
                    autoComplete="tel"
                    placeholder="+267 71 368 178"
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={
                      fieldErrors.phone ? "phone-error" : undefined
                    }
                    onInvalid={handleInvalid}
                    onInput={handleInput}
                    className={fieldClass(Boolean(fieldErrors.phone))}
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className={ERROR_TEXT}>
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={LABEL}>
                    Message <span className="text-accent-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={10}
                    maxLength={2000}
                    placeholder="Which course are you interested in? Tell us your fleet size, licence categories and preferred dates."
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={
                      fieldErrors.message ? "message-error" : undefined
                    }
                    onInvalid={handleInvalid}
                    onInput={handleInput}
                    className={`${fieldClass(Boolean(fieldErrors.message))} resize-y`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className={ERROR_TEXT}>
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from people and assistive tech alike. */}
                <div aria-hidden className="hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-accent-400 dark:text-brand-990 dark:hover:bg-accent-600"
                  >
                    {submitting ? (
                      <>
                        <FaSpinner className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>

                  <a
                    href={WHATSAPP_MESSAGE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-body transition-colors hover:text-heading"
                  >
                    <IoLogoWhatsapp className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                    Or message us on WhatsApp
                  </a>
                </div>

                {/* Announce the in-flight state to screen readers. */}
                <p aria-live="polite" className="sr-only">
                  {submitting ? "Sending your message." : ""}
                </p>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
