"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="site">
      <NavBar />
      
      <div className="pg-hero pg-ice" style={{ textAlign: "center", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--navy)", fontWeight: 500, marginBottom: ".75rem" }}>
          Get in Touch
        </h1>
        <div className="divider" />
        <p style={{ fontSize: "1.05rem", color: "var(--txt-muted)", maxWidth: 520, margin: "0 auto" }}>
          We would love to hear from you. Whether you have a question about our media, store orders, or ministry partnerships, drop us a message below.
        </p>
      </div>

      <section className="section contact-sec">
        <div className="inner">
          <div className="contact-grid">
            
            {/* Left Side: Info */}
            <div>
              <div className="eyebrow">Connect</div>
              <h2 className="sec-title" style={{ marginBottom: "2rem" }}>We're here to serve.</h2>
              
              <div className="contact-item">
                <div className="c-icon">✉</div>
                <div>
                  <div className="c-label">Email Us</div>
                  <div className="c-val">hello@holyandsweet.com</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="c-icon">▶</div>
                <div>
                  <div className="c-label">YouTube (Adults)</div>
                  <div className="c-val">@HolyandSweetMedia</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="c-icon">★</div>
                <div>
                  <div className="c-label">YouTube (Kids)</div>
                  <div className="c-val">@HolyandSweet</div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="fr">
                  <div className="fg">
                    <label className="fl">First Name</label>
                    <input className="fi" type="text" placeholder="John" />
                  </div>
                  <div className="fg">
                    <label className="fl">Last Name</label>
                    <input className="fi" type="text" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="fg">
                  <label className="fl">Email Address</label>
                  <input className="fi" type="email" placeholder="john@example.com" />
                </div>

                <div className="fg">
                  <label className="fl">Inquiry Type</label>
                  <select className="fi">
                    <option>General Question</option>
                    <option>Store / Order Support</option>
                    <option>Ministry / Partnership</option>
                  </select>
                </div>

                <div className="fg">
                  <label className="fl">Message</label>
                  <textarea className="fi" placeholder="How can we help you?" />
                </div>

                <button className="btn-p" style={{ width: "100%", marginTop: "1rem" }}>Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}