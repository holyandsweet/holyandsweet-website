"use client";

import { useForm } from '@formspree/react';

export default function NewsletterForm() {
  const [state, handleSubmit] = useForm("mwvzbjqj");

  if (state.succeeded) {
    return (
      <div style={{ padding: "1.5rem 2rem", background: "var(--teal-pale)", borderRadius: "12px", color: "var(--navy)", textAlign: "center", border: "1px solid rgba(56, 212, 224, 0.3)" }}>
        <strong style={{ display: "block", marginBottom: ".5rem", fontFamily: "var(--serif)", fontSize: "1.2rem" }}>Welcome to the family!</strong>
        Thank you for subscribing to our newsletter.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="nl-form">
      <input 
        className="nl-input" 
        type="email" 
        name="email" 
        placeholder="Your email address" 
        required
      />
      <button type="submit" className="btn-p" disabled={state.submitting}>
        {state.submitting ? "Joining..." : "Join Now"}
      </button>
    </form>
  );
}