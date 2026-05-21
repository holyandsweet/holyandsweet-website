"use client";
import Footer from "@/components/Footer";

import NavBar from "@/components/NavBar";

export default function MusicPage() {
  return (
    <div className="site">
      <NavBar />

      <div className="pg-hero pg-navy" style={{ textAlign: "center" }}>
        <a href="/">
          <button className="back-btn">← Back to Home</button>
        </a>

        <div className="tag-row">
          <div className="tag t">Adult Music & Media</div>
        </div>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.5rem,5vw,4rem)",
            color: "var(--ice)",
            fontWeight: 500,
            marginBottom: "1rem",
          }}
        >
          Holy and Sweet Music
        </h1>

        <div className="divider" />

        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.15rem",
            fontStyle: "italic",
            color: "rgba(238,248,249,.6)",
            maxWidth: 560,
            margin: "0 auto 2.5rem",
          }}
        >
          Spirit-filled Christian music that lifts hearts, stirs devotion, and glorifies God.
        </p>

        <div className="hero-btns" style={{ justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://www.youtube.com/@HolyandSweetMedia" target="_blank" rel="noopener noreferrer">
            <button className="btn-p">Watch on YouTube</button>
          </a>

          <a href="https://open.spotify.com/artist/7eMreZIp9dUKEhzaaaysGY" target="_blank" rel="noopener noreferrer">
            <button className="btn-o">Listen on Spotify</button>
          </a>

          <button className="btn-o">Apple Music</button>
        </div>
      </div>

      <section className="section" style={{ background: "var(--navy-dk)" }}>
        <div className="inner">
          <div className="platform-grid" style={{ marginBottom: "2rem" }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="plat-card">
                {p.logo}
                <div className="plat-name">{p.name}</div>
                <div className="plat-sub">{p.sub}</div>
              </div>
            ))}
          </div>

          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>
            Featured Songs
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2.5rem" }}>
            Songs for Every Season of Faith
          </h2>

          <div className="songs-grid">
            {SONGS.map((s) => (
              <div key={s.title} className="song-card">
                <div className="song-thumb" style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <div className="song-tag">{s.tag}</div>
                <div className="song-title">{s.title}</div>
                <div className="song-verse">{s.verse}</div>

                <button
                  style={{
                    marginTop: "1rem",
                    background: "var(--teal)",
                    color: "white",
                    border: "none",
                    borderRadius: "24px",
                    padding: ".5rem 1.25rem",
                    fontSize: ".8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "var(--sans)",
                  }}
                >
                  Listen ▶
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--ice2)" }}>
        <div className="inner">
          <div className="about-grid">
            <div className="story-body">
              <div className="eyebrow">About the Music</div>

              <h2 className="sec-title">Written from Prayer & Scripture</h2>

              <p>
                Every Holy and Sweet song begins in prayer — written from devotion, Scripture,
                and real ministry experiences. The lyrics are fully human-written, drawn from a
                heart seeking to honor God through music.
              </p>

              <p>
                We use modern production tools to bring these melodies to life, stewarding
                technology for righteous purposes. Our goal is simple: to create music that
                draws people closer to Christ — whether in joy, sorrow, worship, or quiet
                morning prayer.
              </p>

              <p>
                From soaring praise anthems to tender devotional ballads, Holy and Sweet music
                speaks to believers in every season of their walk with God.
              </p>
            </div>

            <div className="verse-block">
              <p className="verse-text">
                "Let the message of Christ dwell among you richly as you teach and admonish one
                another with all wisdom through psalms, hymns, and songs from the Spirit."
              </p>
              <div className="verse-ref">Colossians 3:16</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
