"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const token = process.env.NEXT_PUBLIC_PUSHOVER_TOKEN;
    const user = process.env.NEXT_PUBLIC_PUSHOVER_USER_KEY;

    if (!token || !user) {
      setState("error");
      setErrorMsg(
        "Notification service is not configured yet. Please email Patrick directly."
      );
      return;
    }

    const body = new URLSearchParams({
      token,
      user,
      title: `New booking inquiry from ${name}`,
      message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      url: `mailto:${email}`,
      url_title: "Reply via email",
    });

    try {
      const res = await fetch("https://api.pushover.net/1/messages.json", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.errors?.join(", ") || `Status ${res.status}`);
      }
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <p className="text-2xl">🎹</p>
        <h2 className="mt-3 text-xl font-semibold text-green-900">
          Message received!
        </h2>
        <p className="mt-2 text-green-700">
          Patrick will be in touch soon. Thank you for reaching out.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-stone-700"
        >
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
          placeholder="(615) 555-0100"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700"
        >
          Tell me about your event
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 block w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
          placeholder="Date, venue, type of event, any special pieces you have in mind..."
        />
      </div>

      {state === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
