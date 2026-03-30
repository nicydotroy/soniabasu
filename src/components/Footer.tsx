import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <Image
                src="/images/logo.webp"
                alt="Zarina Escorts Mumbai Logo - Premium Call Girls Service"
                className="footer-logo-img"
                width={180}
                height={60}
                loading="lazy"
              />
              <p>Zarina Escorts Mumbai - Premium call girls service available 24/7. Verified profiles, VIP escorts, Russian models, independent companions. Safe, discreet booking across all Mumbai locations.</p>
            </div>
            <div className="footer-contact">
              <h4>Call Escorts in Mumbai 24/7</h4>
              <a href="tel:+919038976363" aria-label="Call Zarina Escorts Mumbai">📞 +91 90389 76363</a>
              <a href="https://wa.me/919038976363" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Zarina Escorts">💬 WhatsApp</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/" aria-label="Home page">Home</Link></li>
              <li><Link href="/services" aria-label="Escorts services">Services</Link></li>
              <li><Link href="/location" aria-label="Escort locations">Locations</Link></li>
              <li><Link href="/gallery" aria-label="Escorts gallery">Gallery</Link></li>
              <li><Link href="/contact" aria-label="Contact us">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Mumbai Locations</h4>
            <ul>
              <li><Link href="/escorts-in-andheri" aria-label="Andheri escorts">Andheri</Link></li>
              <li><Link href="/escorts-in-bandra" aria-label="Bandra escorts">Bandra</Link></li>
              <li><Link href="/escorts-in-juhu" aria-label="Juhu escorts">Juhu</Link></li>
              <li><Link href="/escorts-in-colaba" aria-label="Colaba escorts">Colaba</Link></li>
              <li><Link href="/escorts-in-powai" aria-label="Powai escorts">Powai</Link></li>
              <li><Link href="/escorts-in-worli" aria-label="Worli escorts">Worli</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Top Escort Services</h4>
            <ul>
              <li><Link href="/vip-escorts" aria-label="VIP escorts Mumbai">VIP Escorts</Link></li>
              <li><Link href="/russian-escorts" aria-label="Russian escorts Mumbai">Russian Escorts</Link></li>
              <li><Link href="/independent-escorts" aria-label="Independent escorts">Independent Escorts</Link></li>
              <li><Link href="/model-escorts" aria-label="Model escorts">Model Escorts</Link></li>
              <li><Link href="/college-girls-escorts" aria-label="College girls escorts">College Girls</Link></li>
              <li><Link href="/high-profile-escorts" aria-label="High profile escorts">High Profile</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 Zarina Escorts Mumbai. All rights reserved | Premium Call Girls Service 24/7 | <Link href="/" style={{ color: '#ba55d3' }}>Escorts in Mumbai</Link></p>
        </div>
      </div>
    </footer>
  );
}
