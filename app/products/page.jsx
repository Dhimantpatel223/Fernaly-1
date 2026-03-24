
'use client';

import Link from 'next/link';
import { useEffect } from 'react';


export default function Page() {
  useEffect(() => {
    const notifyForm = document.getElementById('notifyForm');
    if (notifyForm) {
      notifyForm.onsubmit = (e) => {
        e.preventDefault();
        const email = notifyForm.querySelector('input').value;
        alert('Thank you! We\'ll notify ' + email + ' when we launch.');
        notifyForm.reset();
      };
    }
  }, []);

  return (
    <>
      <section className="products-hero">
    <div className="container">
      <div className="products-hero-inner">
        <div>
          <div className="launch-pill">
            <div className="blink"></div>
            Launching 2026
          </div>
          <h1 className="section-title">Something <em>Beautiful</em><br />is on its way.</h1>
          <p style={{color: `var(--ink-soft)`, fontSize: `0.95rem`, marginTop: `1rem`, maxWidth: `480px`, lineHeight: 1.8, fontWeight: 300}}>
            We're crafting a collection rooted in nature's quiet confidence.
            Each product is a ritual — not just a routine.
          </p>
        </div>
        <div style={{textAlign: `right`}}>
          <p style={{fontFamily: `var(--font-display)`, fontStyle: `italic`, fontSize: `1.1rem`, color: `var(--sage-dark)`, lineHeight: 1.8}}>
            "For skin that speaks softly<br />and glows quietly."
          </p>
        </div>
      </div>
    </div>
  </section>

  {/*  ===== SPOTLIGHT PRODUCT =====  */}
  <section className="featured-spotlight">
    <div className="container">
      <div className="spotlight-grid">

        <div className="spotlight-visual">
          <svg viewBox="0 0 520 580" fill="none" >
            <rect width="520" height="580" rx="14" fill="#F2EAD8"/>
            {/*  Serum bottle  */}
            <rect x="190" y="140" width="140" height="280" rx="70" fill="#E8836E" opacity="0.5"/>
            <rect x="210" y="95"  width="100" height="55"  rx="16" fill="#4f3e36" opacity="0.6"/>
            <rect x="248" y="65"  width="24"  height="36"  rx="6"  fill="#2a1f1a" opacity="0.5"/>
            <ellipse cx="225" cy="210" rx="18" ry="50" fill="white" opacity="0.2"/>
            <rect x="205" y="230" width="110" height="110" rx="8" fill="white" opacity="0.25"/>
            <rect x="220" y="252" width="80" height="4" rx="2" fill="#2a1f1a" opacity="0.4"/>
            <rect x="228" y="264" width="64" height="3" rx="2" fill="#4f3e36" opacity="0.3"/>
            <rect x="220" y="276" width="80" height="2" rx="1" fill="#8c7365" opacity="0.35"/>
            <text x="256" y="314" font-family="Georgia,serif" font-size="22" fill="#2a1f1a" opacity="0.35" text-anchor="middle" font-style={{}}>F</text>
            {/*  botanicals  */}
            <path d="M190 250 Q140 220 108 168 Q158 200 190 250Z" fill="#4f3e36" opacity="0.22"/>
            <path d="M190 315 Q130 292 98 240 Q155 268 190 315Z" fill="#8c7365" opacity="0.2"/>
            <path d="M330 250 Q378 218 412 168 Q362 198 330 250Z" fill="#4f3e36" opacity="0.2"/>
            <path d="M330 320 Q385 295 420 244 Q365 272 330 320Z" fill="#8c7365" opacity="0.18"/>
            <circle cx="136" cy="154" r="16" fill="#F4B8A8" opacity="0.35"/>
            <circle cx="136" cy="154" r="7"  fill="#E8836E" opacity="0.4"/>
            <circle cx="384" cy="154" r="14" fill="#F4B8A8" opacity="0.3"/>
            <circle cx="384" cy="154" r="6"  fill="#E8836E" opacity="0.38"/>
            <circle cx="118" cy="382" r="5"  fill="#E8836E" opacity="0.2"/>
            <circle cx="400" cy="402" r="4"  fill="#4f3e36" opacity="0.25"/>
            <circle cx="158" cy="462" r="3"  fill="#8c7365" opacity="0.3"/>
            <rect x="160" y="478" width="200" height="28" rx="6" fill="#4f3e36" opacity="0.1"/>
            <text x="260" y="497" font-family="Georgia,serif" font-size="11" fill="#2a1f1a" opacity="0.45" text-anchor="middle" letter-spacing="3">FERNALY · SERUM · 30ML</text>
          </svg>
        </div>

        <div>
          <div className="product-number">01</div>
          <span className="coming-soon-tag">Coming Soon · 2026</span>
          <h2 className="spotlight-title"><em>Something</em> Beautiful</h2>
          <p className="spotlight-subtitle">Beauty · Skin Care · Nature-Inspired</p>
          <p className="spotlight-desc">
            Our first product is being carefully crafted — rooted in natural ingredients
            and designed for skin that speaks softly and glows quietly.
            We'll share every detail the moment it's ready.
          </p>
          <div className="spotlight-tags">
            <span className="tag">Natural Ingredients</span>
            <span className="tag">Cruelty Free</span>
            <span className="tag">Skin Care</span>
            <span className="tag">Est. 2026</span>
          </div>
          <div className="price-placeholder">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#4f3e36" strokeWidth="1.2"/>
              <path d="M9 5v4l2.5 2.5" stroke="#4f3e36" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <div>
              <div className="price-placeholder-text">Price to be announced</div>
              <div className="price-placeholder-note">Express interest — be the first to know when it launches</div>
            </div>
          </div>
          <Link href="contact"
             className="btn-interest">
            I'm Interested
            <svg viewBox="0 0 16 16" fill="none" >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </div>
  </section>

  {/*  ===== COMING SOON GRID =====  */}
  <section className="coming-soon-section">
    <div className="container">
      <p className="section-eyebrow">In the Works</p>
      <h2 className="section-title">More <em>Coming Soon</em></h2>
      <div className="coming-soon-grid">

        <div className="coming-card">
          <div className="coming-card-image">
            <svg viewBox="0 0 300 260" fill="none"  width="100%" height="100%">
              <rect width="300" height="260" fill="#F2EAD8"/>
              <rect x="75" y="88" width="150" height="110" rx="55" fill="#E8836E" opacity="0.4"/>
              <ellipse cx="150" cy="88" rx="75" ry="25" fill="#F4B8A8" opacity="0.5"/>
              <ellipse cx="150" cy="85" rx="55" ry="16" fill="white" opacity="0.28"/>
              <path d="M150 62 Q172 50 190 40 Q168 52 150 62Z" fill="#4f3e36" opacity="0.3"/>
              <path d="M150 62 Q128 48 108 38 Q132 50 150 62Z" fill="#8c7365" opacity="0.25"/>
            </svg>
            <div className="coming-overlay">
              <span className="coming-overlay-text">Coming Soon</span>
              <span className="coming-overlay-sub">2026</span>
            </div>
          </div>
          <div className="coming-card-body">
            <h3 className="coming-card-name">Glow Cream</h3>
            <p className="coming-card-desc">A rich yet lightweight moisturiser with botanical extracts for naturally luminous skin.</p>
            <div className="coming-card-footer">
              <span className="coming-card-price">Price TBA</span>
              <Link href="contact.html?product=Glow+Cream&interest=true" className="btn-interest-sm">I'm Interested ↗</Link>
            </div>
          </div>
        </div>

        <div className="coming-card">
          <div className="coming-card-image">
            <svg viewBox="0 0 300 260" fill="none"  width="100%" height="100%">
              <rect width="300" height="260" fill="#FBF7EE"/>
              <rect x="105" y="48" width="90" height="168" rx="18" fill="#8c7365" opacity="0.5"/>
              <rect x="118" y="36" width="64" height="24" rx="10" fill="#4f3e36" opacity="0.45"/>
              <rect x="132" y="24" width="36" height="18" rx="5" fill="#2a1f1a" opacity="0.4"/>
              <rect x="114" y="68" width="14" height="80" rx="7" fill="white" opacity="0.2"/>
              <rect x="116" y="134" width="68" height="60" rx="4" fill="white" opacity="0.2"/>
              <path d="M150 60 Q168 50 182 38 Q162 50 150 60Z" fill="#E8836E" opacity="0.3"/>
            </svg>
            <div className="coming-overlay">
              <span className="coming-overlay-text">Coming Soon</span>
              <span className="coming-overlay-sub">2026</span>
            </div>
          </div>
          <div className="coming-card-body">
            <h3 className="coming-card-name">Botanical Toner</h3>
            <p className="coming-card-desc">A gentle, alcohol-free toner to prep, balance, and refresh your skin with every use.</p>
            <div className="coming-card-footer">
              <span className="coming-card-price">Price TBA</span>
              <Link href="contact.html?product=Botanical+Toner&interest=true" className="btn-interest-sm">I'm Interested ↗</Link>
            </div>
          </div>
        </div>

        <div className="coming-card">
          <div className="coming-card-image">
            <svg viewBox="0 0 300 260" fill="none"  width="100%" height="100%">
              <rect width="300" height="260" fill="#F2EAD8"/>
              <rect x="88" y="78" width="124" height="124" rx="14" fill="#F4B8A8" opacity="0.45"/>
              <path d="M150 78 L160 58 L140 58 Z" fill="#E8836E" opacity="0.5"/>
              <circle cx="150" cy="56" r="7" fill="#4f3e36" opacity="0.45"/>
              <rect x="96" y="92" width="14" height="74" rx="7" fill="white" opacity="0.2"/>
              <rect x="104" y="148" width="92" height="3" rx="1.5" fill="#4f3e36" opacity="0.3"/>
              <rect x="112" y="158" width="76" height="2" rx="1" fill="#8c7365" opacity="0.25"/>
              <path d="M215 92 Q234 80 248 64 Q228 78 215 92Z" fill="#4f3e36" opacity="0.2"/>
            </svg>
            <div className="coming-overlay">
              <span className="coming-overlay-text">Coming Soon</span>
              <span className="coming-overlay-sub">2026</span>
            </div>
          </div>
          <div className="coming-card-body">
            <h3 className="coming-card-name">Eye Care Elixir</h3>
            <p className="coming-card-desc">A delicate formula to soften, brighten, and restore the skin around your eyes.</p>
            <div className="coming-card-footer">
              <span className="coming-card-price">Price TBA</span>
              <Link href="contact.html?product=Eye+Care+Elixir&interest=true" className="btn-interest-sm">I'm Interested ↗</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  Notify Strip  */}
  <section className="notify-strip">
    <div className="container">
      <h3>Be the first to <em>know</em></h3>
      <p>Leave your email and we'll notify you the moment a product launches.</p>
      <form className="notify-form" id="notifyForm">
        <input type="email" placeholder="your@email.com" required />
        <button type="submit" className="btn btn-primary">Notify Me</button>
      </form>
    </div>
  </section>

  
    </>
  );
}

