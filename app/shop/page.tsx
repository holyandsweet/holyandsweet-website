"use client";

import { useState } from "react";
import { PRODUCTS_ADULT, PRODUCTS_KIDS } from "@/lib/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function ShopPage() {
  const [shopTab, setShopTab] = useState("adult");

  return (
    <div className="site">
      <NavBar />

      <div className="pg-hero pg-ice" style={{ textAlign: "center", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <a href="/">
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
                      cursor: "pointer",
                      fontWeight: 600,
                      fontFamily: "var(--sans)"
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
              marginTop: "4rem",
              background: "var(--teal-pale)",
              borderRadius: "20px",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--navy)" }}>
              Print-on-Demand Quality
            </div>

            <p style={{ maxWidth: 520, margin: "1rem auto", color: "var(--txt-muted)" }}>
              All Holy and Sweet merchandise is produced on demand — premium quality,
              fast fulfilment, shipped directly to your door.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}