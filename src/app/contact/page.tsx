import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Zarina Escorts Mumbai 24/7 | Call Now",
  description:
    "Contact Zarina Escorts Mumbai for premium call girls service available 24/7. Call +91 90389 76363 or WhatsApp us for instant booking.",
  alternates: { canonical: "https://hotzarina.in/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat",
        }}
        aria-label="Contact Us"
      >
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us - Get in Touch 24/7</h1>
            <p>
              Have questions or need assistance? We&apos;re here to help you
              anytime. Reach out to us via phone or fill out our contact form for
              a quick response.
            </p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">
                📞 Call us at +91 90389 76363
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Form */}
            <div className="contact-form-side">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you within 15 minutes</p>
              </div>
              <form className="contact-form-modern" id="contactForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name"><span className="icon">👤</span> Your Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone"><span className="icon">📱</span> Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email"><span className="icon">📧</span> Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city"><span className="icon">📍</span> City *</label>
                    <select id="city" name="city" required>
                      <option value="">Select your city</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="chennai">Chennai</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="pune">Pune</option>
                      <option value="thane">Thane</option>
                      <option value="navi-mumbai">Navi Mumbai</option>
                      <option value="other">Other City</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service"><span className="icon">⭐</span> Service Type</label>
                    <select id="service" name="service">
                      <option value="">Select service type</option>
                      <option value="vip">VIP Escorts</option>
                      <option value="independent">Independent Escorts</option>
                      <option value="russian">Russian Escorts</option>
                      <option value="model">Model Escorts</option>
                      <option value="college">College Girls</option>
                      <option value="celebrity">Celebrity Escorts</option>
                      <option value="event">Event Companionship</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="message"><span className="icon">💬</span> Your Message *</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell us about your requirements..." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      I agree to the <a href="#">privacy policy</a> and <a href="#">terms of service</a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-submit-modern">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">✉️</span>
                </button>
                <div className="form-footer">
                  <p><span className="icon">🔒</span> Your information is 100% secure and confidential</p>
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="contact-info-side">
              <div className="contact-info-header">
                <h2>Get in Touch</h2>
                <p>We&apos;re available 24/7 to assist you</p>
              </div>
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h3>Phone Support</h3>
                  <a href="tel:+919038976363" className="contact-link">+91 90389 76363</a>
                  <p>Available 24/7 for immediate assistance</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <a href="mailto:sanjanadotsingh@gmail.com" className="contact-link">
                    sanjanadotsingh@gmail.com
                  </a>
                  <p>We&apos;ll respond within 24 hours</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Our Location</h3>
                  <p><strong>Mumbai, Maharashtra, India</strong></p>
                  <p>Serving across 25+ major cities nationwide</p>
                </div>
              </div>
              <div className="working-hours">
                <h3>⏰ Working Hours</h3>
                <ul>
                  <li><span>Monday - Sunday:</span> <span>24/7 Available</span></li>
                  <li><span>Response Time:</span> <span>Under 15 minutes</span></li>
                  <li><span>Booking:</span> <span>Same-day available</span></li>
                </ul>
              </div>
              <div className="why-contact-us">
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  {["100% Verified Profiles","24/7 Customer Support","Discreet & Confidential","Quick Response Time","Transparent Pricing","Safe & Secure Service"].map((b) => (
                    <li key={b}><span className="check-icon">✓</span> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Rental */}
      <section
        style={{
          background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
          padding: "60px 0",
          margin: "40px 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", color: "white", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>🏢</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: 700 }}>
              Website Pages Available for Rent
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "30px", opacity: 0.95 }}>
              Looking to expand your online presence? We offer premium website pages for rent with
              established traffic and SEO rankings. Perfect for businesses looking to boost their
              digital footprint instantly.
            </p>
            <a href="tel:+919038976363" className="btn btn-primary">
              📞 Inquire Now - +91 90389 76363
            </a>
          </div>
        </div>
      </section>

      <Script id="contact-form-script" strategy="afterInteractive">{`
        var f = document.getElementById('contactForm');
        if (f) {
          f.addEventListener('submit', function(e) {
            e.preventDefault();
            var msg = 'Hello! I am interested in your services.\\n\\nName: ' +
              (document.getElementById('name').value || '') +
              '\\nPhone: ' + (document.getElementById('phone').value || '') +
              '\\nCity: ' + (document.getElementById('city').value || '') +
              '\\nService: ' + (document.getElementById('service').value || '') +
              '\\n\\nMessage:\\n' + (document.getElementById('message').value || '');
            window.open('https://wa.me/919038976363?text=' + encodeURIComponent(msg), '_blank');
            f.reset();
          });
        }
      `}</Script>
    </>
  );
}
