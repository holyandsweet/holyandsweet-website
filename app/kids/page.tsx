"use client";
import { TownIcon } from "@/components/icons";
import { KIDS_SERIES, VIDEOS_KIDS } from "@/lib/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function KidsPage() {
  return (
    <div className="site">
      <NavBar />

      <div className="pg-hero pg-kids-bg" style={{ textAlign: "center" }}>
        <a href="/">
          <button className="back-btn">← Back to Home</button>
        </a>

        <div className="kids-badge" style={{ margin: "0 auto 1.5rem" }}>
          ✦ Children's Christian Media
        </div>

        <h1
          style={{
            fontFamily: "var(--kids)",
            fontSize: "clamp(2.5rem,5vw,4rem)",
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
            color: "rgba(255,255,255,.65)",
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}
        >
          Joyful songs, Bible stories, animated original series, and early learning —
          where little hearts grow in love, faith, and wonder.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://www.youtube.com/@HolyandSweet" target="_blank" rel="noopener noreferrer">
            <button className="btn-kids">Watch on YouTube</button>
          </a>

          <a href="/kids">
            <button className="btn-o">Browse All Videos</button>
          </a>
        </div>
        
<div
  style={{
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    opacity: 0.8,
    fontSize: ".85rem",
    color: "rgba(255,255,255,0.8)",
  }}
>
  <span>🎬 Animated Series</span>
  <span>📖 Bible Stories</span>
  <span>🎵 Worship for Kids</span>
</div>

      </div>

      <section className="section kids-sec" style={{ padding: "5rem 2rem" }}>
        <div className="inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow" style={{ color: "var(--aqua)" }}>
            Original Series
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2.5rem" }}>
            Stories That Shape Little Hearts
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
gap: "1.5rem",
 }}>
            {KIDS_SERIES.map((s) => ( <div
  key={s.name}
  className="series-card"
  style={{
    background: s.bg,
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}
onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
 <div
  className="series-icon"
  style={{
    width: 70,
    height: 70,
    borderRadius: "18px",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  }}
>
  {s.icon === "town" && <TownIcon />}
</div>

                <div
                  style={{
                    fontFamily: "var(--kids)",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: s.color,
                    marginBottom: ".5rem",
                  }}
                >
                  {s.name}
                </div>

                <div style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", lineHeight: 1.65 }}>
                  {s.desc}
                </div>

                <div
                  style={{
                    fontSize: ".72rem",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    marginTop: ".85rem",
                    color: s.color,
                    opacity: 0.7,
                  }}
                >
                  {s.episodes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--navy-dk)" }}>
        <div className="inner">
          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>
            Featured Videos
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2.5rem" }}>
            Start Watching Today
          </h2>

          <div className="vid-grid">
            {VIDEOS_KIDS.map((v) => (
              
<div
  key={v.title}
  className="vid-card"
  style={{
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
    transition: "all 0.25s ease",
  }}
>

                <div className="vid-thumb" style={{ background: v.bg }}>
                  {v.icon}
                  <div className="play-btn">▶</div>
                </div>

                <div className="vid-info" style={{ background: "rgba(255,255,255,.04)" }}>
                  <div className="vid-series">{v.series}</div>
                  <div className="vid-title">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
