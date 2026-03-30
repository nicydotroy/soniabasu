import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VVIP Escorts Mumbai | 24/7 Booking Hotline",
  description:
    "Contact VVIP Escorts Mumbai for premium companion bookings available 24/7. Call or WhatsApp +91 70 9158 5737 for instant confirmation. Discreet, professional response guaranteed.",
  alternates: { canonical: "https://vvip-escorts.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,5,0.88) 0%, rgba(26,21,6,0.82) 100%), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Contact VVIP Escorts Mumbai"
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="hero-content">
            <p style={{ color: "var(--primary-color)", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
              ✦ Available 24 Hours, 7 Days a Week
            </p>
            <h1>Contact VVIP Escorts Mumbai</h1>
            <p style={{ color: "#e0d4b0", maxWidth: "540px", margin: "0 auto 1.5rem" }}>
              Reach our dedicated booking team any time. Instant response, complete confidentiality, zero obligation.
            </p>
            <div className="hero-buttons">
              <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>
                📞 Call: +91 70 9158 5737
              </a>
              <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ background: "#0a0a05" }} aria-label="Contact Methods">
        <div className="container">
          <div className="contact-wrapper">
            {/* Form */}
            <div className="contact-form-side">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below. We respond within 15 minutes, completely discreetly.</p>
              </div>
              <form className="contact-form-modern" id="contactForm" autoComplete="off">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name"><span className="icon">👤</span> Your Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone"><span className="icon">📱</span> Phone / WhatsApp *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city"><span className="icon">📍</span> Your City *</label>
                    <select id="city" name="city" required>
                      <option value="">Select city</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="pune">Pune</option>
                      <option value="goa">Goa</option>
                      <option value="chandigarh">Chandigarh</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service"><span className="icon">👑</span> Service Interest</label>
                    <select id="service" name="service">
                      <option value="">Select service type</option>
                      <option value="vip">VIP / High-Profile</option>
                      <option value="russian">Russian / European Models</option>
                      <option value="independent">Independent Escorts</option>
                      <option value="model">Model / Fashion Escorts</option>
                      <option value="college">College Companions</option>
                      <option value="housewife">Mature / Housewife</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="message"><span className="icon">💬</span> Additional Details</label>
                    <textarea id="message" name="message" rows={4} placeholder="Date, timing, preferences, or any special requests..." />
                  </div>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="agree" name="agree" required />
                  <label htmlFor="agree" className="checkbox-label">
                    I confirm I am 18+ years of age and agree to the <a href="#">terms of use</a>.
                  </label>
                </div>
                <button type="submit" className="btn-submit-modern">
                  <span className="btn-text">Submit Enquiry</span>
                  <span className="btn-icon">✦</span>
                </button>
                <p className="form-footer">🔒 Your information is 100% confidential and never shared.</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-side">
              <div className="contact-info-header">
                <h2>Get in Touch Directly</h2>
                <p>Our booking team is on standby 24/7. The fastest way to book is always a direct call or WhatsApp.</p>
              </div>

              <div className="contact-method">
                <span className="method-icon">📞</span>
                <div className="method-details">
                  <h3>Phone Booking</h3>
                  <a href="tel:+917091585737" className="contact-link">+91 70 9158 5737</a>
                  <p>Call anytime — 24 hours, 7 days a week. Instant availability confirmation.</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">💬</span>
                <div className="method-details">
                  <h3>WhatsApp Chat</h3>
                  <a href="https://wa.me/917091585737" className="contact-link" target="_blank" rel="noopener noreferrer">+91 70 9158 5737</a>
                  <p>Send a message, share preferences, or request profiles. We respond within minutes.</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div className="method-details">
                  <h3>Service Area</h3>
                  <p>All Mumbai zones, Navi Mumbai, Thane &amp; 150+ cities across India. Outcall and incall available.</p>
                </div>
              </div>

              <div className="working-hours">
                <h3>⏱️ Service Availability</h3>
                <ul>
                  <li><span>Monday — Friday</span><span>24 Hours</span></li>
                  <li><span>Saturday — Sunday</span><span>24 Hours</span></li>
                  <li><span>Public Holidays</span><span>24 Hours</span></li>
                  <li><span>Same-Day Booking</span><span>✅ Available</span></li>
                </ul>
              </div>

              <div className="why-contact-us">
                <h3>The VVIP Promise</h3>
                <ul className="benefits-list">
                  <li><span className="check-icon">✦</span> Response within 15 minutes</li>
                  <li><span className="check-icon">✦</span> Zero obligation initial enquiry</li>
                  <li><span className="check-icon">✦</span> 100% confidential communications</li>
                  <li><span className="check-icon">✦</span> No advance payment required</li>
                  <li><span className="check-icon">✦</span> Genuine profiles, no fake photos</li>
                  <li><span className="check-icon">✦</span> Professional, discreet service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="quick-contact" style={{ background: "linear-gradient(135deg,#0d0d0d 0,#1a1506 100%)", borderTop: "1px solid rgba(201,168,76,0.3)" }} aria-label="Quick Contact VVIP Escorts">
        <div className="container">
          <h2>Book Your Companion Now</h2>
          <p>Same-day availability across all Mumbai locations. Call or WhatsApp for instant confirmation.</p>
          <div className="contact-buttons">
            <a href="tel:+917091585737" className="btn btn-primary" style={{ background: "var(--primary-color)", color: "#0a0a05", fontWeight: 700 }}>📞 Call +91 70 9158 5737</a>
            <a href="https://wa.me/917091585737" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}>💬 WhatsApp Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
