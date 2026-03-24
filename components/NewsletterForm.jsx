'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const email = e.currentTarget.querySelector('input')?.value;

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
        e.target.reset();
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {status.message && (
        <p style={{
          marginTop: '12px',
          fontSize: '0.85rem',
          color: status.type === 'success' ? '#2e7d32' : '#c62828',
        }}>
          {status.message}
        </p>
      )}
    </>
  );
}
