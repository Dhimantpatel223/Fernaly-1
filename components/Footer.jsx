import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/Fernaly-logo.svg" alt="Fernaly" className="footer-logo" />
            <p>Your trusted partner for premium, nature-inspired products and an exceptional shopping experience.</p>
            <span className="footer-tagline">"Glow from within. Shine without trying."</span>
          </div>
          <div className="footer-section">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Shop On</h4>
            <ul>
              <li><a href="#">Amazon</a></li>
              <li><a href="#">Flipkart</a></li>
              <li><a href="#">Meesho</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter / X</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Fernaly — All Rights Reserved.</p>
          <p>hellofernaly@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
