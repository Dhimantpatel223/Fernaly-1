
'use client';

import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';


function ContactContent() {
  const searchParams = useSearchParams();
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const product = searchParams.get('product');
    const isInterest = searchParams.get('interest') === 'true';

    if (product && isInterest) {
      const subjectEl = document.getElementById('subject');
      if (subjectEl) subjectEl.value = 'product';

      const messageEl = document.getElementById('message');
      if (messageEl) {
        messageEl.value = 'Hi Fernaly,\n\nI am interested in: ' + decodeURIComponent(product) + '\n\nPlease let me know when it\'s available and share pricing details.\n\nThank you!';
      }

      setTimeout(() => {
        const formEl = document.querySelector('.contact-form-container');
        if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);

      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#2a1f1a;color:#FDFAF5;padding:0.9rem 2rem;border-radius:50px;font-family:Jost,sans-serif;font-size:0.78rem;letter-spacing:1.5px;text-transform:uppercase;z-index:9999;animation:fadeInUp 0.4s ease;box-shadow:0 8px 24px rgba(0,0,0,0.15)';
      toast.textContent = '✦  Interested in ' + decodeURIComponent(product).split('—')[0].trim();
      document.body.appendChild(toast);
      setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 3500);
    }
  }, [searchParams]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormStatus({ type: 'success', message: data.message });
        e.target.reset();
      } else {
        setFormStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch {
      setFormStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="page-header">
    <div className="container">
      <div className="page-header-inner">
        <p className="section-eyebrow">Connect</p>
        <h1>Let's <em>Connect</em></h1>
        <p>Have a question, a collaboration idea, or just want to say hi?</p>
      </div>
    </div>
  </section>

  {/*  Contact Section  */}
  <section className="contact-section">
    <div className="container">
      <div className="contact-grid">

        <div className="contact-info">
          <p className="section-eyebrow">Reach Out</p>
          <h2>We'd love to <em>hear from you.</em></h2>
          <p>Whether you're looking for a specific product, want to collaborate, or simply want to say hello — our team is here to help.</p>

          <div className="contact-cards">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 44 44" fill="none" >
                  <rect x="7" y="12" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 15 L22 25 L37 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>hellofernaly@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 44 44" fill="none" >
                  <rect x="14" y="6" width="16" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="22" cy="33" r="2" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 44 44" fill="none" >
                  <circle cx="22" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 10 Q12 10 10 20 Q10 30 22 38 Q34 30 34 20 Q32 10 22 10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Along</h3>
            <div className="social-icons">
              <Link href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </Link>
              <Link href="#" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </Link>
              <Link href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <h2>Send a <em>Message</em></h2>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="How shall we call you?" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="product">Product Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us what's on your mind..." required></textarea>
            </div>
            {formStatus.message && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '16px',
                background: formStatus.type === 'success' ? '#e8f5e9' : '#fbe9e7',
                color: formStatus.type === 'success' ? '#2e7d32' : '#c62828',
                fontSize: '0.9rem',
              }}>
                {formStatus.message}
              </div>
            )}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>

  {/*  FAQ  */}
  <section className="faq-section">
    <div className="container">
      <p className="section-eyebrow">Answers</p>
      <h2 className="section-title">Frequently <em>Asked</em></h2>
      <div className="faq-grid">
        <div className="faq-item">
          <h3>Do you sell products directly?</h3>
          <p>No — we curate products and provide links to trusted platforms like Amazon, Flipkart, and Meesho where you can purchase them.</p>
        </div>
        <div className="faq-item">
          <h3>How do you select products?</h3>
          <p>Our team carefully reviews each product based on quality, natural ingredients, customer reviews, and real value for money.</p>
        </div>
        <div className="faq-item">
          <h3>Can I request specific products?</h3>
          <p>Absolutely! Contact us with your requirements and we'll do our best to find the perfect product for you.</p>
        </div>
        <div className="faq-item">
          <h3>Are the prices accurate?</h3>
          <p>Prices may vary across platforms. We recommend checking the linked platform for the most current pricing before purchasing.</p>
        </div>
      </div>
    </div>
  </section>

  
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}

