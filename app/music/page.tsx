"use client";

import { SONGS, PLATFORMS } from "@/lib/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function MusicPage() {
  return (
    <div className="site">
      <NavBar />
      
      {/* Hide scrollbar for the slideshow to keep it looking premium */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

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
      <section className="section" style={{ background: "var(--navy-dk)", paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="inner">
          
          {/* Platforms (Top Row) */}
          <div className="platform-grid" style={{ marginBottom: "5rem" }}>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="plat-card">
                <div className="plat-logo">
                  {p.logo === "youtube" ? "▶" : "♪"}
                </div>
                <div className="plat-name">{p.name}</div>
                <div className="plat-sub">{p.sub}</div>
              </div>
            ))}
          </div>

          {/* 2-Column Layout: Songs on Left, Slideshow on Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* LEFT COLUMN: Text & Songs */}
            <div>
              <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>
                Featured Songs
              </div>
              <h2 className="sec-title lt" style={{ marginBottom: "2rem" }}>
                Songs for Every Season of Faith
              </h2>

              {/* Songs stacked vertically like a premium playlist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {SONGS.map((s) => (
                  <div
                    key={s.title}
                    className="song-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "1.25rem",
                    }}
                  >
                    <div
                      className="song-thumb"
                      style={{
                        background: s.bg,
                        width: "85px",
                        height: "85px",
                        flexShrink: 0,
                        marginBottom: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="song-tag">{s.tag}</div>
                      <div className="song-title" style={{ fontSize: "1.1rem", marginBottom: ".3rem" }}>
                        {s.title}
                      </div>
                      <div className="song-verse" style={{ fontSize: ".82rem", marginBottom: ".85rem", color: "rgba(238,248,249,.5)" }}>
                        {s.verse}
                      </div>
                      <button
                        style={{
                          background: "var(--teal)",
                          color: "white",
                          border: "none",
                          borderRadius: "24px",
                          padding: ".4rem 1.25rem",
                          fontSize: ".75rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          fontFamily: "var(--sans)",
                          textTransform: "uppercase",
                          letterSpacing: ".05em"
                        }}
                      >
                        Listen ▶
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Nature Slideshow */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "600px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <div
                className="hide-scroll"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {[
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80", // Rolling Green Hills
                  "https://images.unsplash.com/photo-1432405972618-c600f517ba68?auto=format&fit=crop&w=1000&q=80", // Waterfall
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", // Calm Ocean Waves
                  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80"  // Sun Rays in Forest
                ].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="Beautiful Nature Landscape"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      flexShrink: 0,
                      scrollSnapAlign: "center",
                    }}
                  />
                ))}
              </div>

              {/* Premium Dark Gradient Overlay at the bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background: "linear-gradient(to top, rgba(6,18,40,0.9) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Swipe Dots Indicator */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "0.6rem",
                }}
              >
                {[0, 1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: dot === 0 ? "white" : "rgba(255,255,255,0.3)",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.5)"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO / WATCH & SUBSCRIBE SECTION */}
      <section className="section" style={{ background: "var(--navy)", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="eyebrow" style={{ color: "var(--teal-lt)" }}>Featured Video</div>
          <h2 className="sec-title lt" style={{ marginBottom: "1rem" }}>Watch & Subscribe</h2>
          <p style={{ color: "rgba(238,248,249,.7)", fontSize: "1.05rem", marginBottom: "3rem" }}>
            Experience our latest worship sessions and animated stories. Subscribe to our YouTube channel so you never miss a new release.
          </p>

          {/* CMS-Ready Responsive Video Embed Container (16:9 Aspect Ratio) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%", /* 16:9 Ratio */
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              marginBottom: "3rem",
              backgroundColor: "var(--navy-dk)", 
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/cHLxVgBLrXk?si=nNmGXO2AVU_2MO--"
              title="Holy and Sweet Featured Video"
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

          <a href="https://www.youtube.com/@HolyandSweetMedia?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <button className="btn-p" style={{ padding: "1rem 2.5rem", fontSize: ".95rem", boxShadow: "0 8px 24px rgba(10,148,148,0.3)" }}>
              Subscribe on YouTube
            </button>
          </a>
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