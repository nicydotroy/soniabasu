'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="Zarina Escorts in Mumbai - Premium Call Girls Service"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
            <li><Link href="/" onClick={closeMenu}>Escorts in Mumbai</Link></li>
            <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link href="/location" onClick={closeMenu}>Location</Link></li>
            <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Website on Rent</Link></li>
          </ul>
          <div
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
