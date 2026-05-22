"use client";

import { TownIcon, ButterflyIcon } from "@/components/icons";
import { KIDS_SERIES } from "@/lib/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function KidsPage() {
  return (
    <div className="site">
      <NavBar />

      {/* HERO */}
      <div
        className="pg-hero pg-kids-bg"
        style={{
          textAlign: "center",
          background:
            "linear-gradient(135deg,#061228 0%,#082040 60%,#0A2848 100%)",
        }}
      >
        <a href="/">
          <button className="back-btn">← Back to Home</button>
        </a>

        <div className="kids-badge" style={{ margin: "0 auto 1.5rem" }}>
          ✦ Children's Christian Media
        </div>

        <h1
          style={{
            fontFamily: "var(--kids)",
            fontSize: "clamp(2.6rem,5vw,4rem)",
            fontWeight: 800,
            color: "white",
            marginBottom: ".5rem",
          }}
        >
          Holy and Sweet Kids
        </h1>

        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.4rem",
            fontStyle: "italic",
            color: "var(--aqua)",
            marginBottom: "1.25rem",
          }}
        >
          Train Up A Child
        </div>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 560,
            margin: "0 auto 2rem",
            lineHeight: 1.8,
          }}
        >
          Joyful songs, Bible stories, animated original series, and early learning —
          where little hearts grow in love, faith, and wonder.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a href="https://www.youtube.com/@HolyandSweet" target="_blank" rel="noopener noreferrer">
            <button
              className="btn-kids"
              style={{
                padding: "1rem 2.2rem",
                fontSize: ".95rem",
                boxShadow: "0 8px 24px rgba(56,212,224,0.35)",
              }}
            >
              ▶ Watch on YouTube
            </button>
          </a>
        </div>

        {/* TRUST ROW */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            fontSize: ".85rem",
            opacity: 0.85,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span>🎬 Animated Series</span>
          <span>📖 Bible Stories</span>
          <span>🎵 Worship for Kids</span>
        </div>
      </div>

      {/* SERIES */}
      <section
        className="section kids-sec"
        style={{
          padding: "5rem 2rem",
          position: "relative",
        }}
      >
        {/* background energy */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "10%",
            width: 200,
            height: 200,
            background: "#38D4E0",
            borderRadius: "50%",
            opacity: 0.08,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "5%",
            width: 160,
            height: 160,
            background: "#18B8CC",
            borderRadius: "50%",
            opacity: 0.08,
          }}
        />

        <div className="inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow" style={{ color: "var(--aqua)" }}>
            Original Series
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2.8rem" }}>
            Stories That Shape Little Hearts
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {KIDS_SERIES.map((s) => (
              <div
                key={s.name}
                style={{
                  background: `linear-gradient(135deg, ${s.bg}, rgba(0,0,0,0.45))`,
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 14px 45px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {s.icon}
                </div>

                <div
                  style={{
                    fontFamily: "var(--kids)",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: s.color,
                    marginBottom: ".6rem",
                  }}
                >
                  {s.name}
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: ".9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </div>

                <div
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 700,
                    marginTop: "1rem",
                    color: s.color,
                    opacity: 0.85,
                  }}
                >
                  {s.episodes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO / WATCH & SUBSCRIBE SECTION */}
      <section className="section" style={{ background: "var(--navy-dk)", textAlign: "center" }}>
        <div className="inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>Featured Video</div>
          <h2 className="sec-title lt" style={{ marginBottom: "1rem" }}>Start Watching Today</h2>
          <p style={{ color: "rgba(238,248,249,.7)", fontSize: "1.05rem", marginBottom: "3rem" }}>
            Join us for joyful Bible stories and worship songs for the whole family.
          </p>

          {/* CMS-Ready Responsive Video Embed Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%", /* 16:9 Ratio */
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              marginBottom: "3rem",
              backgroundColor: "#061228", 
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/jahrQIe2T2Y?si=rZVfWtRsChOhY7Z0"
              title="Holy and Sweet Kids Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>

          <a href="https://www.youtube.com/@HolyandSweet?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <button className="btn-kids" style={{ padding: "1rem 2.5rem", fontSize: ".95rem", boxShadow: "0 8px 24px rgba(56,212,224,0.3)" }}>
              Subscribe to Kids Channel
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}