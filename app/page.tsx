import NewsletterForm from "@/components/NewsLetterForm";
import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client"; 
import { urlFor } from "@/sanity/lib/image"; 

// Querying both datasets simultaneously
const HOME_DATA_QUERY = `{
  "kidsSeries": *[_type == "kidsSeries"] {
    _id,
    title,
    tag,
    description,
    bgColor,
    image
  },
  "heroSlides": *[_type == "heroSlide"] | order(order asc) {
    _id,
    title,
    image
  }
}`;

export default async function HomePage() {
  const { kidsSeries, heroSlides } = await client.fetch(HOME_DATA_QUERY);

  return (
    <div className="site" style={{ backgroundColor: "#ffffff", color: "var(--navy)" }}>
      <NavBar />

      {/* --- PREMIUM HERO SECTION --- */}
      <section style={{ padding: "6rem 2rem 5rem", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
          
          {/* Hero Story Telling Component */}
          <div style={{ textAlign: "left" }}>
            <span style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem", color: "var(--teal)", fontWeight: "bold", display: "block", marginBottom: "1rem" }}>
              Now Streaming
            </span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)", color: "var(--navy)", lineHeight: "1.15", marginBottom: "1.5rem" }}>
              Wholesome media for your little lights.
            </h1>
            <p style={{ color: "var(--txt-muted)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2.5rem", maxWidth: "520px" }}>
              Premium Christian lifestyle media, engaging animated series, and curated merchandise crafted deliberately for the modern faithful family.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button className="btn-p" style={{ padding: "1rem 2.5rem" }}>Explore Series</button>
              <button className="btn-s" style={{ padding: "1rem 2rem", background: "transparent", border: "1px solid var(--navy)" }}>Our Mission</button>
            </div>
          </div>

          {/* New Dynamic Interactive Carousel replaces the old placeholder block */}
          <div>
            <HeroCarousel slides={heroSlides} />
          </div>

        </div>
      </section>

      {/* --- CURATED KIDS SERIES SECTION --- */}
      <section className="section" style={{ background: "var(--ice)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1.5rem" }}>
            <div>
              <span style={{ textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.8rem", color: "var(--txt-muted)", display: "block", marginBottom: "0.5rem" }}>
                Original Productions
              </span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", color: "var(--navy)", margin: 0 }}>
                Kids Series
              </h2>
            </div>
            <span style={{ color: "var(--teal)", fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" }}>View All Series →</span>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2.5rem" }}>
            {kidsSeries.map((series: any) => (
              <div key={series._id} style={{ backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.04)" }}>
                
                <div style={{ background: series.bgColor || "var(--teal)", position: "relative", paddingTop: "60%", overflow: "hidden" }}>
                  {series.image && (
                    <img 
                      src={urlFor(series.image).width(500).url()} 
                      alt={series.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                    />
                  )}
                </div>

                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", color: "var(--teal)", fontWeight: "bold" }}>
                    {series.tag || "Original"}
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", margin: "0.6rem 0", color: "var(--navy)" }}>
                    {series.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--txt-muted)", margin: "0 0 2rem", lineHeight: "1.6" }}>
                    {series.description}
                  </p>
                  
                  <div style={{ marginTop: "auto" }}>
                    <button className="btn-s" style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "transparent", border: "1px solid var(--navy)", color: "var(--navy)", fontWeight: "600" }}>
                      Watch Now
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER EXPERIENCE --- */}
      <section style={{ padding: "7rem 2rem", backgroundColor: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: "550px", margin: "0 auto", padding: "3rem 2rem", borderRadius: "24px", background: "linear-gradient(to bottom, #ffffff, var(--ice))", border: "1px solid rgba(56, 212, 224, 0.15)" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", color: "var(--navy)", marginBottom: "0.75rem" }}>
            Join the Family Circle
          </h2>
          <p style={{ color: "var(--txt-muted)", marginBottom: "2.5rem", fontSize: "1rem", lineHeight: "1.5" }}>
            Subscribe to receive exclusive drops, early access to new series releases, and community updates.
          </p>
          
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}