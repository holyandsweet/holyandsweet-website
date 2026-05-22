"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const DoveIcon = () => (
  <svg width="44" height="44" viewBox="0 0 96 72" fill="none">
    <path d="M29 33 C18 17 5 10 9 24 C13 33 24 36 29 33 Z" fill="#EEF8F9" stroke="#0A9494" strokeWidth="2"/>
    <ellipse cx="47" cy="37" rx="21" ry="9" fill="white" stroke="#0A9494" strokeWidth="2" transform="rotate(-6 47 37)"/>
    <path d="M32 39 C25 45 19 50 21 46 C23 42 28 40 32 39 Z" fill="#EEF8F9"/>
    <circle cx="64" cy="28" r="10" fill="white" stroke="#0A9494" strokeWidth="2"/>
  </svg>
);

export default function AboutPage() {
  return (
    <div className="site">
      <NavBar />
      
      <div className="pg-hero pg-ice" style={{ textAlign: "center", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="tag-row">
          <div className="tag t">Our Mission</div>
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--navy)", fontWeight: 500, marginBottom: ".75rem" }}>
          About Holy and Sweet
        </h1>
        <div className="divider" />
        <p style={{ fontSize: "1.05rem", color: "var(--txt-muted)", maxWidth: 580, margin: "0 auto" }}>
          A Christian media ministry dedicated to sharing uplifting, Spirit-filled content that encourages families and glorifies God.
        </p>
      </div>

      <section className="section" style={{ background: "white" }}>
        <div className="inner">
          <div className="about-grid">
            <div className="story-body">
              <div className="eyebrow">Two Branches, One Root</div>
              <h2 className="sec-title">Music & Media for Every Season</h2>
              <p>
                Holy and Sweet was born from a desire to create a standard of excellence in Christian media. Whether you are seeking a quiet moment of morning worship or looking for a safe, joyful space for your children to learn biblical values, our ministry is here to serve your family.
              </p>
              <p>
                <strong>Holy and Sweet</strong> offers reverent, hopeful, and mature music written from prayer and real ministry experiences. 
              </p>
              <p>
                <strong>Holy and Sweet Kids</strong> is designed to "Train Up A Child," weaving Christian virtues like kindness, courage, and obedience into original animated stories and early learning content.
              </p>
            </div>
            <div className="verse-block">
              <p className="verse-text">
                "Speak to one another with psalms, hymns, and spiritual songs. Sing and make music in your hearts to the Lord."
              </p>
              <div className="verse-ref">Ephesians 5:19</div>
            </div>
          </div>

          <div className="vals-row">
            {[
              ["Spirit-Led", "Created from deep devotion, prayer, and a desire to honor God above all."],
              ["Family-Centered", "A safe, parent-approved environment where children and adults grow together."],
              ["Scripture-Rooted", "Anchored firmly in God's Word, teaching biblical virtues and Truth."],
              ["Excellence", "Crafted with the highest quality to reflect the beauty of our Creator."]
            ].map(([title, desc]) => (
              <div key={title} className="val-card">
                <div className="val-icon"><DoveIcon /></div>
                <div className="val-title">{title}</div>
                <div className="val-text">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
