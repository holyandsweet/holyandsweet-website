export default function ShopPage() {
  return (
    <div className="site">
      <style>{styles}</style>
      <NavBar />

      <div className="pg-hero pg-ice" style={{ textAlign: "center" }}>
        /
          <button className="back-btn dk">← Back to Home</button>
        </a>

        <div className="tag-row">
          <div className="tag t">Faith-Centered Goods</div>
        </div>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.5rem,5vw,4rem)",
            color: "var(--navy)",
            fontWeight: 500,
            marginBottom: ".75rem",
          }}
        >
          The Holy & Sweet Shop
        </h1>

        <div className="divider" />

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--txt-muted)",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Premium Christian lifestyle merchandise — thoughtfully designed and gift-worthy for the whole family.
        </p>
      </div>

      <section className="section shop-sec" style={{ paddingTop: "3rem" }}>
        <div className="inner">
          <div className="shop-tabs">
            {[
              ["adult", "For Adults"],
              ["kids", "For Kids"],
              ["bundles", "Gift Bundles"],
            ].map(([t, l]) => (
              <button
                key={t}
                className={`shop-tab${shopTab === t ? " active" : ""}`}
                onClick={() => setShopTab(t as any)}
              >
                {l}
              </button>
            ))}
          </div>

          {shopTab === "bundles" ? (
            <div className="big-grid">
              {[
                ["The Hope Bundle", "Journal, mug, and wall art set.", "$75", "For Adults"],
                ["The Faith Starter Kit", "Devotional notebook, pen set, and calendar.", "$55", "For Adults"],
                ["The Family Bundle", "Devotional book, kids storybook, coloring book, and mugs.", "$95", "Family"],
                ["The Little Lights Set", "Coloring book, flashcards, journal, and plush friend.", "$65", "For Kids"],
              ].map(([n, d, p, t]) => (
                <div key={n} className="big-card" style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <GiftBoxIcon size={56} />
                  </div>

                  <div style={{ fontSize: ".7rem", textTransform: "uppercase", color: "var(--teal)" }}>
                    {t}
                  </div>

                  <h3 style={{ fontFamily: "var(--serif)" }}>{n}</h3>
                  <p style={{ fontSize: ".85rem" }}>{d}</p>

                  <div style={{ fontWeight: 600 }}>{p}</div>

                  <button className="btn-p" style={{ width: "100%" }}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="merch-grid">
                {(shopTab === "adult" ? PRODUCTS_ADULT : PRODUCTS_KIDS).map((p) => (
                  <div key={p.name} className="prod-card">
                    <div className="prod-img" style={{ background: p.bg }}>
                      {p.icon}
                    </div>

                    <div className="prod-info">
                      <div className="prod-tag">{p.tag}</div>
                      <div className="prod-name">{p.name}</div>
                      <div className="prod-price">{p.price}</div>

                      <button
                        style={{
                          marginTop: ".75rem",
                          width: "100%",
                          background: "var(--navy)",
                          color: "var(--ice)",
                          border: "none",
                          borderRadius: "8px",
                          padding: ".6rem",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "3rem",
                  background: "var(--teal-pale)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.5rem" }}>
                  Print-on-Demand Quality
                </div>

                <p style={{ maxWidth: 520, margin: "1rem auto" }}>
                  All Holy and Sweet merchandise is produced on demand — premium quality,
                  fast fulfilment, shipped directly to your door.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
