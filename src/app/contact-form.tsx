"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:contact@bhimgurung.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" type="tel" placeholder="(402) 000-0000" required /></label>
      </div>
      <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
      <label>How can we help?<textarea name="message" rows={5} placeholder="Tell us a little about your goals..." required /></label>
      <button className="button button--dark" type="submit">Send inquiry <span>↗</span></button>
      {sent && <p className="form-note" role="status">Your email app is opening with your message ready to send.</p>}
    </form>
  );
}
