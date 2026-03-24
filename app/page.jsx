export const metadata = {
  title: 'Home | Fernaly Premium Skincare',
  description: 'Welcome to Fernaly. Discover our signature Glow Cream, Botanical Toner, and Eye Care Elixir, crafted with nature\'s finest ingredients for your skin rituals.',
  openGraph: {
    title: 'Home | Fernaly Premium Skincare',
    description: 'Welcome to Fernaly. Discover our signature Glow Cream, Botanical Toner, and Eye Care Elixir.',
    url: 'https://www.fernaly.com',
  }
};

import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Fernaly",
            "url": "https://www.fernaly.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.fernaly.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fernaly",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.fernaly.com/favicon.ico"
              }
            }
          })
        }}
      />
      <section className="hero">
        <div className="hero-botanical" aria-hidden="true"></div>

        <div className="hero-accent" aria-hidden="true">
          <svg viewBox="0 0 500 600" fill="none" width="100%">
            <path d="M250 580 Q248 400 252 200" stroke="#4f3e36" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <path d="M252 320 Q320 280 360 200 Q290 240 252 320Z" fill="#4f3e36" opacity="0.18"/>
            <path d="M252 320 Q180 275 140 190 Q215 235 252 320Z" fill="#4f3e36" opacity="0.15"/>
            <path d="M252 420 Q330 375 370 280 Q295 330 252 420Z" fill="#8c7365" opacity="0.2"/>
            <path d="M252 420 Q170 370 130 275 Q210 325 252 420Z" fill="#8c7365" opacity="0.16"/>
            <circle cx="252" cy="170" r="28" fill="#E8836E" opacity="0.25"/>
            <circle cx="252" cy="170" r="14" fill="#E8836E" opacity="0.35"/>
            <ellipse cx="252" cy="142" rx="8" ry="14" fill="#F4B8A8" opacity="0.4"/>
            <ellipse cx="252" cy="198" rx="8" ry="14" fill="#F4B8A8" opacity="0.4"/>
            <ellipse cx="224" cy="170" rx="14" ry="8" fill="#F4B8A8" opacity="0.35"/>
            <ellipse cx="280" cy="170" rx="14" ry="8" fill="#F4B8A8" opacity="0.35"/>
            <circle cx="310" cy="260" r="4" fill="#4f3e36" opacity="0.25"/>
            <circle cx="190" cy="290" r="3" fill="#8c7365" opacity="0.3"/>
            <circle cx="340" cy="360" r="5" fill="#E8836E" opacity="0.18"/>
          </svg>
        </div>

        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">Beauty · Skin · Cosmetics</p>
            <h1 className="hero-title">
              Nature-inspired<br />
              <em>excellence,</em><br />
              curated for you.
            </h1>
            <p className="hero-subtitle">
              Premium products rooted in nature's quiet confidence —
              thoughtfully selected for the modern lifestyle.
            </p>
            <div className="hero-cta">
              <Link href="/products" className="btn btn-primary">Explore Collection</Link>
              <Link href="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-inner">
          <span>Curated with Care</span><span className="dot">✦</span>
          <span>Natural Ingredients</span><span className="dot">✦</span>
          <span>Cruelty Free</span><span className="dot">✦</span>
          <span>Premium Quality</span><span className="dot">✦</span>
          <span>Made for You</span><span className="dot">✦</span>
          <span>Est. 2026</span><span className="dot">✦</span>
          
          <span>Curated with Care</span><span className="dot">✦</span>
          <span>Natural Ingredients</span><span className="dot">✦</span>
          <span>Cruelty Free</span><span className="dot">✦</span>
          <span>Premium Quality</span><span className="dot">✦</span>
          <span>Made for You</span><span className="dot">✦</span>
          <span>Est. 2026</span><span className="dot">✦</span>
        </div>
      </div>

      <section className="categories" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="categories-header" style={{ animation: 'fadeInUp 1s ease 0.4s both' }}>
            <p className="section-eyebrow">Beauty · Skin · Cosmetics</p>
            <h2 className="section-title">A <em>Collection</em> is Coming</h2>
            <p className="section-intro" style={{ marginTop: '0.5rem' }}>Nature-inspired beauty products, thoughtfully crafted. Something beautiful is on its way — launching 2026.</p>
          </div>

          <div className="products-grid" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(2,1fr)', maxWidth: '700px', animation: 'fadeInUp 1s ease 0.6s both' }}>
            <article className="product-card" style={{ cursor: 'default' }}>
              <div className="product-image" style={{ position: 'relative' }}>
                <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
                  <rect width="400" height="400" fill="#FBF7EE"/>
                  <rect x="155" y="110" width="90" height="200" rx="45" fill="#E8836E" opacity="0.38"/>
                  <rect x="168" y="78"  width="64" height="42"  rx="12" fill="#4f3e36" opacity="0.45"/>
                  <rect x="184" y="56"  width="32" height="28"  rx="5"  fill="#2a1f1a" opacity="0.38"/>
                  <ellipse cx="178" cy="185" rx="12" ry="40" fill="white" opacity="0.18"/>
                  <path d="M155 195 Q115 172 92 134 Q130 158 155 195Z" fill="#4f3e36" opacity="0.18"/>
                  <path d="M245 195 Q285 170 308 132 Q270 156 245 195Z" fill="#4f3e36" opacity="0.16"/>
                  <circle cx="108" cy="122" r="12" fill="#F4B8A8" opacity="0.3"/>
                  <circle cx="292" cy="120" r="10" fill="#F4B8A8" opacity="0.25"/>
                </svg>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(245,240,232,0.55)', backdropFilter: 'blur(3px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--sage-dark)', letterSpacing: '1px' }}>Coming Soon</span>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>2026</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name" style={{ color: 'var(--ink-muted)', fontStyle: 'italic', fontSize: '1rem' }}>Something beautiful…</h3>
                <p className="product-desc">A nature-inspired beauty product, crafted with care. Details coming soon.</p>
                <div className="product-footer">
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>Price TBA</span>
                  <Link href="/contact" className="btn-interest-inline">I'm Interested ↗</Link>
                </div>
              </div>
            </article>

            <article className="product-card" style={{ cursor: 'default' }}>
              <div className="product-image" style={{ position: 'relative' }}>
                <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
                  <rect width="400" height="400" fill="#F2EAD8"/>
                  <rect x="118" y="185" width="164" height="118" rx="55" fill="#F4B8A8" opacity="0.42"/>
                  <ellipse cx="200" cy="185" rx="82" ry="28" fill="#E8836E" opacity="0.38"/>
                  <ellipse cx="200" cy="180" rx="60" ry="18" fill="white" opacity="0.22"/>
                  <path d="M200 155 Q228 140 248 122 Q222 138 200 155Z" fill="#4f3e36" opacity="0.22"/>
                  <path d="M200 155 Q172 138 150 120 Q178 138 200 155Z" fill="#8c7365" opacity="0.2"/>
                  <circle cx="264" cy="148" r="9"  fill="#F4B8A8" opacity="0.35"/>
                  <circle cx="136" cy="144" r="8"  fill="#F4B8A8" opacity="0.3"/>
                </svg>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(245,240,232,0.55)', backdropFilter: 'blur(3px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--sage-dark)', letterSpacing: '1px' }}>Coming Soon</span>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>2026</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name" style={{ color: 'var(--ink-muted)', fontStyle: 'italic', fontSize: '1rem' }}>Something beautiful…</h3>
                <p className="product-desc">Rooted in nature's quiet confidence. Crafted for skin that glows softly.</p>
                <div className="product-footer">
                  <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>Price TBA</span>
                  <Link href="/contact" className="btn-interest-inline">I'm Interested ↗</Link>
                </div>
              </div>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/products" className="btn btn-outline">See What's Coming →</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div style={{ animation: 'fadeInUp 1s ease 0.5s both' }}>
            <p className="section-eyebrow">Why Us</p>
            <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>Why Choose <em>Fernaly</em></h2>
          </div>
          <div className="features-grid" style={{ animation: 'fadeInUp 1s ease 0.7s both' }}>
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Curated Selection</h3>
              <p>Hand-picked products from trusted brands, chosen for quality, design, and real value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Quality Assured</h3>
              <p>Every product meets our rigorous botanical standards before it earns a place in the collection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Honest Value</h3>
              <p>We source directly to provide you with the most honest pricing for premium formulations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Expert Support</h3>
              <p>Our team is here to help you find exactly what you need, always with care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay <em>Connected</em></h2>
            <p>Subscribe for new arrivals, special offers, and curated inspiration delivered to your inbox.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
