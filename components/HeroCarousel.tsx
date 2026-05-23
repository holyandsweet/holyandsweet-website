"use client";

import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Slide {
  _id: string;
  image: any;
  title?: string;
}

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  // Auto-play feature: switch slides every 5 seconds safely
  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return (
      <div style={{ width: "100%", height: "400px", borderRadius: "24px", background: "var(--ice)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ opacity: 0.3, fontFamily: "var(--serif)" }}>Upload carousel slides in Sanity</span>
      </div>
    );
  }

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "650px", margin: "0 auto" }}>
      {/* Aspect-ratio box matches premium landscape parameters */}
      <div style={{ position: "relative", width: "100%", paddingTop: "62%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)" }}>
        
        {slides.map((slide, index) => (
          <div
            key={slide._id}
            style={{
              position: "absolute",
              inset: 0,
              opacity: index === current ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: index === current ? 1 : 0,
            }}
          >
            <img
              src={urlFor(slide.image).width(800).height(500).url()}
              alt={slide.title || "Holy and Sweet Moment"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}

        {/* CMS Managed Badge */}
        <div style={{ position: "absolute", top: "16px", right: "16px", zIndex: 10, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", padding: "6px 12px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", fontWeight: "600", color: "var(--navy)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
          <span style={{ width: "6px", height: "6px", background: "#10B981", borderRadius: "50%" }}></span>
          Curated Moments
        </div>

        {/* Directional Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button onClick={prevSlide} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(255,255,255,0.2)", border: "none", color: "#ffffff", width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>‹</button>
            <button onClick={nextSlide} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(255,255,255,0.2)", border: "none", color: "#ffffff", width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>›</button>
          </>
        )}

        {/* Navigation Indicator Dots */}
        {slides.length > 1 && (
          <div style={{ position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: "8px" }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  background: index === current ? "#ffffff" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "background 0.3s ease"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}