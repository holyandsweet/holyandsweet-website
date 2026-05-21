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
      </div>

      <section className="section kids-sec" style={{ padding: "5rem 2rem" }}>
        <div className="inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow" style={{ color: "var(--aqua)" }}>
            Original Series
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2.5rem" }}>
            Stories That Shape Little Hearts
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {KIDS_SERIES.map((s) => (
              <div key={s.name} className="series-card" style={{ background: s.bg }}>
                <div className="series-icon">{s.icon}</div>

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
              <div key={v.title} className="vid-card">
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
