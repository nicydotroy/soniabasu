import Link from 'next/link';
import Image from 'next/image';

const trustBadges = [
  { icon: '✦', text: '500+ Verified Profiles' },
  { icon: '⭐', text: '4.9 Star Rating' },
  { icon: '🔒', text: '100% Discreet' },
  { icon: '⚡', text: 'Same-Day Booking' },
  { icon: '🕐', text: 'Available 24/7' },
  { icon: '🌍', text: '150+ Cities Covered' },
  { icon: '✅', text: 'Real Verified Photos' },
  { icon: '💼', text: 'Since 2018' },
];

const mumbaiLinks = [
  { href: '/escorts-in-andheri',     label: 'Andheri' },
  { href: '/escorts-in-bandra',      label: 'Bandra' },
  { href: '/escorts-in-juhu',        label: 'Juhu' },
  { href: '/escorts-in-colaba',      label: 'Colaba' },
  { href: '/escorts-in-powai',       label: 'Powai' },
  { href: '/escorts-in-worli',       label: 'Worli' },
  { href: '/escorts-in-lower-parel', label: 'Lower Parel' },
  { href: '/escorts-in-dadar',       label: 'Dadar' },
  { href: '/escorts-in-malad',       label: 'Malad' },
  { href: '/escorts-in-borivali',    label: 'Borivali' },
  { href: '/escorts-in-goregaon',    label: 'Goregaon' },
  { href: '/escorts-in-santacruz',   label: 'Santacruz' },
];

const cityLinks = [
  { href: '/escorts-in-navi-mumbai', label: 'Navi Mumbai' },
  { href: '/escorts-in-thane',       label: 'Thane' },
  { href: '/escorts-in-pune',        label: 'Pune' },
  { href: '/escorts-in-delhi',       label: 'Delhi' },
  { href: '/escorts-in-goa',         label: 'Goa' },
  { href: '/escorts-in-bangalore',   label: 'Bangalore' },
  { href: '/escorts-in-hyderabad',   label: 'Hyderabad' },
  { href: '/escorts-in-chandigarh',  label: 'Chandigarh' },
  { href: '/escorts-in-jaipur',      label: 'Jaipur' },
  { href: '/escorts-in-gurgaon',     label: 'Gurgaon' },
  { href: '/escorts-in-kolkata',     label: 'Kolkata' },
  { href: '/escorts-in-chennai',     label: 'Chennai' },
];

const serviceLinks = [
  { href: '/vip-escorts',           label: 'VIP Escorts' },
  { href: '/russian-escorts',       label: 'Russian Models' },
  { href: '/independent-escorts',   label: 'Independent Escorts' },
  { href: '/model-escorts',         label: 'Fashion Models' },
  { href: '/college-girls-escorts', label: 'College Girls' },
  { href: '/celebrity-escorts',     label: 'Celebrity Escorts' },
  { href: '/air-hostess-escorts',   label: 'Air Hostess' },
  { href: '/high-profile-escorts',  label: 'High Profile' },
  { href: '/house-wife-escorts',    label: 'Mature & Housewife' },
  { href: '/services',              label: '/services' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">

      {/* Trust Badge Ticker Strip */}
      <div className="footer-trust-strip">
        <div className="footer-trust-inner">
          {[...trustBadges, ...trustBadges].map((b, i) => (
            <span key={i} className="footer-trust-badge">
              <span className="ftb-icon">{b.icon}</span>
              {b.text}
            </span>
          ))}
        </div>
      </div>

      {/* Pre-Footer CTA */}
      <div className="footer-cta-band">
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h3>Book Your VVIP Companion Now</h3>
              <p>Same-day availability · 500+ verified profiles · Absolutely discreet</p>
            </div>
            <div className="footer-cta-btns">
              <a href="tel:+917091585737" className="footer-cta-btn footer-cta-btn--call">
                <span>📞</span> +91 70 9158 5737
              </a>
              <a href="https://wa.me/917091585737" target="_blank" rel="noopener noreferrer" className="footer-cta-btn footer-cta-btn--wa">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand-col">
              <Link href="/" aria-label="Sonia Basu Mumbai Home">
                <Image
                  src="/images/logo.png"
                  alt="Sonia Basu — Premium Companion Service"
                  className="footer-logo-img"
                  width={180}
                  height={62}
                  loading="lazy"
                />
              </Link>
              <p className="footer-brand-desc">
                India&apos;s most trusted luxury companion service since 2018. Rigorous verification, complete discretion, and 500+ genuine profiles across Mumbai and 150+ cities.
              </p>
              <div className="footer-social-row">
                <a href="tel:+917091585737" className="footer-social-btn" aria-label="Call Sonia Basu">
                  <span>📞</span>
                  <span className="fsb-label">Call</span>
                </a>
                <a href="https://wa.me/917091585737" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp Sonia Basu">
                  <span>💬</span>
                  <span className="fsb-label">WhatsApp</span>
                </a>
                <a href="https://t.me/+917091585737" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Telegram Sonia Basu">
                  <span>✈️</span>
                  <span className="fsb-label">Telegram</span>
                </a>
              </div>
              <div className="footer-rating-badge">
                <span className="frb-stars">★★★★★</span>
                <span className="frb-text">4.9 / 5 &nbsp;·&nbsp; 583 Reviews</span>
              </div>
            </div>

            {/* Mumbai Locations */}
            <div className="footer-link-col">
              <h4 className="footer-col-title">
                <span className="fct-dot" />
                Mumbai Zones
              </h4>
              <ul>
                {mumbaiLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Cities */}
            <div className="footer-link-col">
              <h4 className="footer-col-title">
                <span className="fct-dot" />
                Pan-India Cities
              </h4>
              <ul>
                {cityLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-link-col">
              <h4 className="footer-col-title">
                <span className="fct-dot" />
                Our Services
              </h4>
              <ul>
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label === '/services' ? '→ All Services' : l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-link-col">
              <h4 className="footer-col-title">
                <span className="fct-dot" />
                Quick Links
              </h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/location">Locations</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <div className="footer-availability-box">
                <span className="fab-dot" />
                <div>
                  <strong>24 / 7 Available</strong>
                  <p>All days including holidays. Same-day booking confirmed.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © 2026 <Link href="/">Sonia Basu Mumbai</Link>. All rights reserved.&nbsp;
              <span className="fbb-sep">|</span>&nbsp;
              <Link href="/escorts-in-mumbai">Escorts in Mumbai</Link>&nbsp;
              <span className="fbb-sep">|</span>&nbsp;
              <Link href="/contact">Book Now</Link>
            </p>
            <p className="footer-disclaimer">
              This site is for adults 18+ only. All companions are consenting adults. We do not condone illegal activity.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
