export const metadata = {
  title: 'Our Story | About Fernaly',
  description: 'Learn about Fernaly\'s philosophy. We believe in crafting products that honor the earth, ensuring every formulation is cruelty-free, sustainable, and effective.',
  openGraph: {
    title: 'Our Story | About Fernaly',
    description: 'Learn about Fernaly\'s philosophy. We believe in crafting products that honor the earth, cruelty-free and sustainable.',
    url: 'https://www.fernaly.com/about',
  }
};




import Link from 'next/link';
import RandomLeafParallax from '@/components/RandomLeafParallax';


export default function Page() {
  return (
    <>
      <section className="page-header" style={{position: 'relative', overflow: 'hidden'}}>
        <RandomLeafParallax leafCount={12} />
    <div className="container">
      <div className="page-header-inner">
        <p className="section-eyebrow">Our Story</p>
        <h1>About <em>Fernaly</em></h1>
        <p>Curating excellence, one product at a time</p>
      </div>
    </div>
  </section>

  {/*  About Content  */}
  <section className="about-content" style={{position: 'relative', overflow: 'hidden'}}>
    <RandomLeafParallax leafCount={13} />
    <div className="container">
      <div className="about-grid">
        <div className="about-text">
          <p className="section-eyebrow">The Beginning</p>
          <h2 className="section-title" style={{marginBottom: `2rem`}}>"Where nature meets<br /><em>the art of beauty.</em>"</h2>
          <p>Fernaly was born from a belief that real beauty is effortless — it needs no mask, only the right care. We started with a simple question: why is it so hard to find products that are both beautiful and trustworthy?</p>
          <p>Rooted in natural ingredients and crafted thoughtfully, every Fernaly-curated product is a ritual, not a routine. Our team carefully selects each item, ensuring it meets our high standards for quality, design, and genuine value.</p>
          <p>From nature's quiet confidence to your skin — we're building something beautiful, together.</p>
          <Link href="products.html" className="btn btn-primary" style={{marginTop: `1.5rem`}}>Explore Collection</Link>
        </div>

      </div>
    </div>
  </section>

  {/*  Values  */}
  <section className="values-section" style={{position: 'relative', overflow: 'hidden'}}>
    <RandomLeafParallax leafCount={11} />
    <div className="container">
      <p className="section-eyebrow">What We Stand For</p>
      <h2 className="section-title">Our <em>Values</em></h2>
      <div className="values-grid">
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 44 44" fill="none" >
              <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 22 L20 28 L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Quality First</h3>
          <p>Every product is thoroughly vetted to ensure it meets our strict standards for quality and care.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 44 44" fill="none" >
              <path d="M22 8 Q32 14 36 26 Q28 22 22 22 Q16 22 8 26 Q12 14 22 8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M22 22 Q22 32 22 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 30 Q28 26 34 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <h3>Nature-Rooted</h3>
          <p>We champion products that honour nature — cruelty-free, thoughtfully made, and gently effective.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 44 44" fill="none" >
              <circle cx="22" cy="18" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 36 Q10 28 22 28 Q34 28 34 36" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <h3>Customer Focus</h3>
          <p>Your satisfaction is our priority. We're here to help you find exactly what you need, with care.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 44 44" fill="none" >
              <path d="M22 10 L26 18 L36 19.5 L28.5 26.5 L30.5 36.5 L22 32 L13.5 36.5 L15.5 26.5 L8 19.5 L18 18 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <h3>Trust & Transparency</h3>
          <p>Honest recommendations and transparent partnerships — always in your best interest.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  Philosophy  */}
  <section className="team-section" style={{background: `var(--cream-dark)`, position: 'relative', overflow: 'hidden'}}>
    <RandomLeafParallax leafCount={12} />
    <div className="container">
      <p className="section-eyebrow">Our Promise</p>
      <h2 className="section-title">Built on <em>Belief</em></h2>

      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: `4rem`, marginTop: `4rem`, alignItems: `start`}}>

        <div>
          <p style={{fontFamily: `'Cormorant Garamond',serif`, fontSize: `1.6rem`, fontWeight: 400, fontStyle: `italic`, color: `var(--ink)`, lineHeight: 1.5, marginBottom: `2rem`}}>
            "Real beauty is effortless —<br />it needs no mask,<br />only the right care."
          </p>
          <p style={{fontSize: `0.88rem`, color: `var(--ink-muted)`, letterSpacing: `1px`}}>— Fernaly, Est. 2026</p>
        </div>

        <div style={{display: `flex`, flexDirection: `column`, gap: `2rem`}}>
          <div style={{padding: `1.8rem`, background: `var(--white)`, borderRadius: `8px`, border: `1px solid var(--border-soft)`, borderLeft: `3px solid var(--sage-light)`}}>
            <p style={{fontFamily: `'Cormorant Garamond',serif`, fontSize: `1.1rem`, fontWeight: 500, color: `var(--ink)`, marginBottom: `0.6rem`}}>Nature first, always.</p>
            <p style={{fontSize: `0.87rem`, color: `var(--ink-muted)`, lineHeight: 1.7}}>Every ingredient we choose honours the earth. Cruelty-free, thoughtfully sourced, gently effective.</p>
          </div>
          <div style={{padding: `1.8rem`, background: `var(--white)`, borderRadius: `8px`, border: `1px solid var(--border-soft)`, borderLeft: `3px solid var(--blush-light)`}}>
            <p style={{fontFamily: `'Cormorant Garamond',serif`, fontSize: `1.1rem`, fontWeight: 500, color: `var(--ink)`, marginBottom: `0.6rem`}}>Made for you, not for everyone.</p>
            <p style={{fontSize: `0.87rem`, color: `var(--ink-muted)`, lineHeight: 1.7}}>We take our time. Each product is a ritual — something you reach for because it works, not because it promises.</p>
          </div>
          <div style={{padding: `1.8rem`, background: `var(--white)`, borderRadius: `8px`, border: `1px solid var(--border-soft)`, borderLeft: `3px solid var(--sage-light)`}}>
            <p style={{fontFamily: `'Cormorant Garamond',serif`, fontSize: `1.1rem`, fontWeight: 500, color: `var(--ink)`, marginBottom: `0.6rem`}}>Transparency in everything.</p>
            <p style={{fontSize: `0.87rem`, color: `var(--ink-muted)`, lineHeight: 1.7}}>What's in the bottle, why it's there, and what it does — no mystery, no hidden anything.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  CTA  */}
  <section className="cta-section">
    <div className="container" style={{position: `relative`, zIndex: 1, textAlign: `center`}}>
      <p className="section-eyebrow" style={{justifyContent: `center`, color: `rgba(188,168,159,0.8)`}}>Ready?</p>
      <h2>Discover <em>Amazing</em> Products</h2>
      <p>Browse our curated collection and find your next favourite ritual</p>
      <Link href="products.html" className="btn btn-primary">View Collection</Link>
    </div>
  </section>

  
    </>
  );
}

