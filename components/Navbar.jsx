'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target) &&
        navLinksRef.current &&
        !navLinksRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className="navbar"
      ref={navRef}
      style={{
        boxShadow: isScrolled
          ? '0 4px 20px rgba(0,0,0,0.1)'
          : '0 2px 10px rgba(0,0,0,0.08)',
      }}
    >
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <img src="/Fernaly-logo.svg" alt="Fernaly" className="logo-img" />
          </Link>
          <div
            className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            id="navLinks"
            ref={navLinksRef}
          >
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/products" className="nav-link">Products</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          <div
            className="hamburger"
            id="hamburger"
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              style={
                isMenuOpen
                  ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                  : { transform: 'none' }
              }
            ></span>
            <span
              style={
                isMenuOpen ? { opacity: '0' } : { opacity: '1' }
              }
            ></span>
            <span
              style={
                isMenuOpen
                  ? { transform: 'rotate(-45deg) translate(7px, -6px)' }
                  : { transform: 'none' }
              }
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
