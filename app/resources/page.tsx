"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const DownloadIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function ResourcesPage() {
  const resources = [
    { title: "Family Devotional Guide", desc: "A 7-day walk through the Psalms to encourage your family in daily prayer and worship.", tag: "For Parents" },
    { title: "Fruitful Forest Coloring Book", desc: "Downloadable PDF coloring pages featuring the characters from our original series.", tag: "For Kids" },
    { title: "Bible Verse Flashcards", desc: "Printable cards to help early learners memorize Scripture through joyful imagery.", tag: "For Kids" },
    { title: "Sunday School Toolkit", desc: "Activity sheets and lesson companion guides designed for Christian educators.", tag: "For Teachers" },
    { title: "Worship Lyric Sheets", desc: "Printable chord charts and lyric sheets for our adult worship anthems.", tag: "For Adults" },
    { title: "Character Trait Chart", desc: "A fun sticker-chart printable to encourage kindness, obedience, and sharing.", tag: "For Kids" }
  ];

  return (
    <div className="site">
      <NavBar />
      
      <div className="pg-hero pg-navy" style={{ textAlign: "center" }}>
        <div className="tag-row"><div className="tag t">Free Downloads</div></div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--ice)", fontWeight: 500, marginBottom: "1rem" }}>
          Ministry Resources
        </h1>
        <div className="divider" />
        <p style={{ fontSize: "1.05rem", color: "rgba(238,248,249,.6)", maxWidth: 560, margin: "0 auto" }}>
          Free, beautifully crafted materials to help support your family's faith journey at home, at church, or on the go.
        </p>
      </div>

      <section className="section res-sec">
        <div className="inner">
          <div className="res-grid">
            {resources.map((res) => (
              <div key={res.title} className="res-card">
                <div style={{ fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--teal-lt)", marginBottom: ".5rem" }}>
                  {res.tag}
                </div>
                <div className="res-title">{res.title}</div>
                <div className="res-desc">{res.desc}</div>
                <button className="res-link">
                  <DownloadIcon /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
