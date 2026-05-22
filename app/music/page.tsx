"use client";

import { SONGS, PLATFORMS } from "@/lib/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function MusicPage() {
  return (
    <div className="site">
      <NavBar />

      {/* HERO SECTION */}
      <div className="pg-hero pg-navy" style={{ textAlign: "center", paddingBottom: "4rem" }}>
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

      {/* MUSIC DIRECTORY SECTION */}
      <section className="section" style={{ background: "var(--navy-dk)", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="inner">
          
          {/* Platforms */}
          <div className="platform-grid" style={{ marginBottom: "4rem" }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="plat-card">
                <div className="plat-logo">
                  {p.logo === "youtube" ? "▶" : "♪"} {/* Fallback if icons are broken */}
                </div>
                <div className="plat-name">{p.name}</div>
                <div className="plat-sub">{p.sub}</div>
              </div>
            ))}
          </div>

          {/* Featured Songs */}
          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>
            Featured Songs
          </div>

          <h2 className="sec-title lt" style={{ marginBottom: "2rem" }}>
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
                    marginTop: "1.25rem",
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

      {/* PREMIUM PHOTO GALLERY SLIDESHOW */}
      <section style={{ background: "var(--navy)", padding: "4rem 0" }}>
        <div className="inner" style={{ padding: "0 2rem", marginBottom: "1.5rem" }}>
          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>Ministry in Motion</div>
          <h2 className="sec-title lt" style={{ fontSize: "2rem", marginBottom: 0 }}>The Heart of Worship</h2>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          style={{ 
            display: "flex", 
            gap: "1.5rem", 
            overflowX: "auto", 
            padding: "0 2rem 2rem 2rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {/* Gallery Images (Using Unsplash Placeholders) */}
          {[
            "https://images.unsplash.com/photo-1510915361894-faa8b413c125?auto=format&fit=crop&w=800&q=80", // Acoustic Guitar
            "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&w=800&q=80", // Soundboard
            "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=800&q=80", // Worship Hands
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"  // Studio Mic
          ].map((src, index) => (
            <img 
              key={index}
              src={src}
              alt="Holy and Sweet Worship"
              style={{
                height: "350px",
                width: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                borderRadius: "16px",
                scrollSnapAlign: "center",
                flexShrink: 0,
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)"
              }}
            />
          ))}
        </div>
      </section>

      {/* ABOUT THE MUSIC SECTION */}
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

