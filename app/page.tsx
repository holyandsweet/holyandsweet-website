import NewsletterForm from "@/components/NewsLetterForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client"; 
import { urlFor } from "@/sanity/lib/image"; 

// 1. The GROQ query asking Sanity for your Kids Series
const GET_KIDS_SERIES_QUERY = `*[_type == "kidsSeries"] {
  _id,
  title,
  tag,
  description,
  bgColor,
  image
}`;

// 2. The page is 'async' so it can fetch from the database
export default async function HomePage() {
  // Fetching the data from Sanity
  const kidsSeries = await client.fetch(GET_KIDS_SERIES_QUERY);

  return (
    <div className="site">
      <NavBar />

      <div className="pg-hero" style={{ textAlign: "center", padding: "6rem 1rem 4rem" }}>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--navy)" }}>
          Welcome to Holy & Sweet
        </h1>
        <p style={{ color: "var(--txt-muted)", maxWidth: "600px", margin: "1rem auto 0" }}>
          Premium Christian lifestyle media and merchandise for the whole family.
        </p>
      </div>

      <section className="section" style={{ background: "var(--ice)", padding: "4rem 1rem" }}>
        <div className="inner">
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--navy)", marginBottom: "2rem", textAlign: "center" }}>
            Kids Series
          </h2>
          
          {/* 3. Mapping over the Sanity Data */}
          <div className="merch-grid">
            {kidsSeries.map((series: any) => (
              <div key={series._id} className="prod-card">
                <div className="prod-img" style={{ background: series.bgColor || "var(--teal)", position: "relative", minHeight: "200px" }}>
                  {series.image && (
                    <img 
                      src={urlFor(series.image).width(400).url()} 
                      alt={series.title} 
                      style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", inset: 0, padding: "1rem" }}
                    />
                  )}
                </div>
                <div className="prod-info">
                  <div className="prod-tag">{series.tag}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", marginTop: "0.5rem" }}>{series.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--txt-muted)", margin: "0.5rem 0 1rem" }}>{series.description}</p>
                  <button className="btn-s" style={{ width: "100%" }}>Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <div className="inner" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--navy)", marginBottom: "1rem" }}>Stay in the Loop</h2>
          <p style={{ color: "var(--txt-muted)", marginBottom: "2rem" }}>Subscribe to our newsletter for updates on new series, merch, and more.</p>
          
          {/* 4. Your Formspree Newsletter Component */}
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
