
"use client";

import { useState, useEffect } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&family=Nunito:wght@400;600;700;800&display=swap');`;

const styles = `
  ${FONTS}
  *{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --ice:#EEF8F9;--ice2:#DAF0F2;--teal:#0A9494;--teal-lt:#18C4C4;
    --teal-pale:#D4F0F2;--navy:#082040;--navy-mid:#113468;
    --navy-dk:#061228;--aqua:#38D4E0;--cyan:#18B8CC;
    --txt:#081420;--txt-mid:#1A3650;--txt-muted:#487080;
    --serif:'Cormorant Garamond',Georgia,serif;
    --sans:'Jost',system-ui,sans-serif;
    --kids:'Nunito',system-ui,sans-serif;
  }
  body{background:var(--ice);font-family:var(--sans);color:var(--txt);}
  .site{min-height:100vh;overflow-x:hidden;}
  /* NAV */
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(238,248,249,0.96);backdrop-filter:blur(8px);border-bottom:1px solid rgba(10,148,148,0.18);}
  .nav-inner{max-width:1200px;margin:0 auto;padding:0 2rem;height:68px;display:flex;align-items:center;justify-content:space-between;}
  .nav-logo{font-family:var(--serif);font-size:1.5rem;font-weight:600;color:var(--navy);cursor:pointer;letter-spacing:.02em;}
  .nav-logo span{color:var(--teal);}
  .nav-links{display:flex;gap:.25rem;align-items:center;}
  .nav-link{background:none;border:none;font-family:var(--sans);font-size:.85rem;font-weight:500;color:var(--txt-mid);padding:.5rem .85rem;cursor:pointer;border-radius:6px;letter-spacing:.06em;text-transform:uppercase;transition:all .2s;}
  .nav-link:hover{color:var(--navy);background:var(--ice2);}
  .nav-link.active{color:var(--teal);}
  .nav-cta{background:var(--navy)!important;color:var(--ice)!important;border-radius:24px;padding:.5rem 1.25rem!important;}
  .nav-cta:hover{background:var(--navy-mid)!important;}
  /* HERO */
  .hero{min-height:100vh;background:var(--navy);position:relative;display:flex;align-items:center;overflow:hidden;padding-top:68px;}
  .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 80% 50%,rgba(10,148,148,.18) 0%,transparent 70%),radial-gradient(ellipse 40% 80% at 10% 80%,rgba(24,196,196,.12) 0%,transparent 60%);pointer-events:none;}
  .hero-dots{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%230A9494' fill-opacity='.06'/%3E%3C/svg%3E");pointer-events:none;}
  .hero-content{max-width:1200px;margin:0 auto;padding:5rem 2rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative;z-index:1;}
  .hero-eyebrow{font-size:.78rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--teal-lt);margin-bottom:1.25rem;}
  .hero-title{font-family:var(--serif);font-size:clamp(3rem,5vw,5rem);font-weight:500;color:var(--ice);line-height:1.08;margin-bottom:1.5rem;}
  .hero-title em{color:#5CDCEC;font-style:italic;font-weight:300;}
  .hero-verse{font-family:var(--serif);font-size:1.05rem;font-style:italic;color:rgba(238,248,249,.7);line-height:1.7;margin-bottom:.5rem;}
  .hero-ref{font-size:.78rem;letter-spacing:.1em;color:var(--teal-lt);text-transform:uppercase;margin-bottom:2.5rem;}
  .hero-btns{display:flex;gap:1rem;flex-wrap:wrap;}
  .btn-p{background:var(--teal);color:white;font-family:var(--sans);font-size:.85rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:.9rem 2rem;border:none;border-radius:40px;cursor:pointer;transition:all .25s;}
  .btn-p:hover{background:var(--teal-lt);transform:translateY(-1px);}
  .btn-o{background:transparent;color:var(--ice);font-family:var(--sans);font-size:.85rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:.9rem 2rem;border:1px solid rgba(238,248,249,.3);border-radius:40px;cursor:pointer;transition:all .25s;}
  .btn-o:hover{border-color:var(--ice);background:rgba(238,248,249,.07);}
  .hero-cards{display:grid;gap:1.25rem;}
  .hero-card{background:rgba(255,255,255,.05);border:1px solid rgba(10,148,148,.25);border-radius:16px;padding:1.75rem;transition:all .3s;cursor:pointer;}
  .hero-card:hover{background:rgba(255,255,255,.08);border-color:rgba(10,148,148,.5);transform:translateX(4px);}
  .hc-label{font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--teal-lt);margin-bottom:.6rem;}
  .hc-title{font-family:var(--serif);font-size:1.5rem;color:var(--ice);font-weight:500;margin-bottom:.5rem;}
  .hc-desc{font-size:.88rem;color:rgba(238,248,249,.6);line-height:1.65;}
  .hc-arrow{font-size:1.2rem;color:var(--teal-lt);margin-top:.75rem;display:block;}
  /* SECTIONS */
  .section{padding:6rem 2rem;}
  .inner{max-width:1200px;margin:0 auto;}
  .eyebrow{font-size:.75rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:.75rem;}
  .sec-title{font-family:var(--serif);font-size:clamp(2rem,3.5vw,3rem);font-weight:500;color:var(--navy);line-height:1.15;margin-bottom:1rem;}
  .sec-title.lt{color:var(--ice);}
  .sec-sub{font-size:1.05rem;color:var(--txt-muted);line-height:1.75;max-width:580px;}
  .sec-sub.lt{color:rgba(238,248,249,.65);}
  /* MISSION */
  .mission-sec{background:var(--ice2);}
  .mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
  .verse-block{background:var(--navy);border-radius:20px;padding:3rem;position:relative;overflow:hidden;}
  .verse-block::before{content:'❝';position:absolute;top:1rem;left:1.5rem;font-size:5rem;color:rgba(10,148,148,.22);font-family:serif;line-height:1;}
  .verse-text{font-family:var(--serif);font-size:1.4rem;font-style:italic;color:var(--ice);line-height:1.65;margin-bottom:1rem;position:relative;z-index:1;}
  .verse-ref{font-size:.78rem;letter-spacing:.12em;color:var(--teal-lt);text-transform:uppercase;}
  .mission-body{font-size:1rem;color:var(--txt-mid);line-height:1.85;margin-bottom:1.5rem;}
  .pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem;}
  .pillar{background:white;border-radius:12px;padding:1.25rem;border-left:3px solid var(--teal);}
  .pillar-title{font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--navy);margin-bottom:.35rem;}
  .pillar-text{font-size:.85rem;color:var(--txt-muted);line-height:1.6;}
  /* MUSIC */
  .music-sec{background:var(--navy-dk);}
  .platform-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:3.5rem;}
  .plat-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.5rem 1rem;text-align:center;cursor:pointer;transition:all .25s;display:flex;flex-direction:column;align-items:center;gap:.75rem;}
  .plat-card:hover{background:rgba(255,255,255,.09);border-color:rgba(10,148,148,.45);transform:translateY(-2px);}
  .plat-name{font-size:.85rem;font-weight:500;color:var(--ice);}
  .plat-sub{font-size:.75rem;color:rgba(238,248,249,.45);}
  .songs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
  .song-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:1.5rem;transition:all .25s;cursor:pointer;}
  .song-card:hover{background:rgba(255,255,255,.07);border-color:rgba(10,148,148,.3);}
  .song-thumb{width:100%;aspect-ratio:1;border-radius:10px;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;}
  .song-title{font-family:var(--serif);font-size:1.2rem;color:var(--ice);font-weight:500;margin-bottom:.4rem;}
  .song-tag{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--teal-lt);margin-bottom:.6rem;}
  .song-verse{font-size:.82rem;color:rgba(238,248,249,.45);font-style:italic;}
  /* KIDS */
  .kids-sec{background:linear-gradient(135deg,#061228 0%,#082040 50%,#0A2848 100%);position:relative;overflow:hidden;}
  .bubble{position:absolute;border-radius:50%;opacity:.07;}
  .kids-hero{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;margin-bottom:4rem;}
  .kids-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(56,212,224,.12);border:1px solid rgba(56,212,224,.22);border-radius:24px;padding:.4rem 1rem;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--aqua);margin-bottom:1.5rem;}
  .kids-title{font-family:var(--kids);font-size:clamp(2.2rem,3.5vw,3.2rem);font-weight:800;color:white;line-height:1.1;margin-bottom:.75rem;}
  .kids-tagline{font-family:var(--serif);font-size:1.3rem;font-style:italic;color:var(--aqua);margin-bottom:1.25rem;}
  .kids-desc{font-size:1rem;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:2rem;}
  .btn-kids{background:var(--aqua);color:#061228;font-family:var(--kids);font-size:.88rem;font-weight:800;letter-spacing:.04em;padding:.9rem 2rem;border:none;border-radius:40px;cursor:pointer;transition:all .25s;}
  .btn-kids:hover{background:#60E4EC;transform:translateY(-1px);}
  .series-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:1rem;}
  .series-card{border-radius:16px;padding:1.75rem;cursor:pointer;transition:all .3s;}
  .series-card:hover{transform:translateY(-3px);}
  .series-icon{margin-bottom:1rem;}
  .series-name{font-family:var(--kids);font-size:1.1rem;font-weight:800;margin-bottom:.5rem;}
  .series-ep{font-size:.72rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-top:.75rem;opacity:.6;}
  /* SHOP */
  .shop-sec{background:var(--ice);}
  .shop-tabs{display:flex;gap:.5rem;margin-bottom:3rem;background:var(--ice2);border-radius:40px;padding:.35rem;width:fit-content;}
  .shop-tab{background:none;border:none;font-family:var(--sans);font-size:.85rem;font-weight:500;padding:.6rem 1.5rem;border-radius:32px;cursor:pointer;transition:all .2s;color:var(--txt-muted);letter-spacing:.04em;}
  .shop-tab.active{background:var(--navy);color:var(--ice);}
  .prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;}
  .prod-card{background:white;border-radius:16px;overflow:hidden;cursor:pointer;transition:all .3s;border:1px solid rgba(0,0,0,.05);}
  .prod-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08);}
  .prod-img{width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;}
  .prod-info{padding:1rem 1.25rem;}
  .prod-tag{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:.35rem;font-weight:500;}
  .prod-name{font-family:var(--serif);font-size:1.1rem;color:var(--txt);margin-bottom:.35rem;font-weight:500;}
  .prod-price span{color:var(--navy);font-weight:600;font-size:.95rem;}
  /* RESOURCES */
  .res-sec{background:var(--navy);}
  .res-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
  .res-card{background:rgba(255,255,255,.05);border:1px solid rgba(10,148,148,.18);border-radius:16px;padding:2rem;transition:all .25s;cursor:pointer;}
  .res-card:hover{background:rgba(255,255,255,.08);border-color:rgba(10,148,148,.35);}
  .res-icon{margin-bottom:1.25rem;}
  .res-title{font-family:var(--serif);font-size:1.3rem;color:var(--ice);margin-bottom:.6rem;font-weight:500;}
  .res-desc{font-size:.88rem;color:rgba(238,248,249,.55);line-height:1.7;}
  .res-link{display:inline-flex;align-items:center;gap:.4rem;font-size:.8rem;color:var(--teal-lt);text-transform:uppercase;letter-spacing:.08em;margin-top:1.25rem;cursor:pointer;border:none;background:none;font-family:var(--sans);font-weight:500;}
  /* NEWSLETTER */
  .nl-sec{background:var(--teal-pale);border-top:1px solid rgba(10,148,148,.22);border-bottom:1px solid rgba(10,148,148,.22);}
  .nl-inner{max-width:640px;margin:0 auto;text-align:center;}
  .nl-title{font-family:var(--serif);font-size:2.5rem;color:var(--navy);margin-bottom:.75rem;font-weight:500;}
  .nl-desc{font-size:1rem;color:var(--txt-mid);line-height:1.75;margin-bottom:2.5rem;}
  .nl-form{display:flex;gap:.75rem;max-width:480px;margin:0 auto;}
  .nl-input{flex:1;padding:.85rem 1.25rem;border:1px solid rgba(10,148,148,.3);border-radius:40px;background:white;font-family:var(--sans);font-size:.9rem;color:var(--txt);outline:none;}
  .nl-input:focus{border-color:var(--teal);}
  .nl-note{font-size:.78rem;color:var(--txt-muted);margin-top:1rem;}
  /* CONTACT */
  .contact-sec{background:var(--ice2);}
  .contact-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:5rem;}
  .contact-item{display:flex;gap:1rem;align-items:flex-start;margin-bottom:2rem;}
  .c-icon{width:44px;height:44px;background:var(--navy);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .c-label{font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--txt-muted);margin-bottom:.2rem;}
  .c-val{font-family:var(--serif);font-size:1.05rem;color:var(--navy);}
  .fg{margin-bottom:1.25rem;}
  .fl{display:block;font-size:.8rem;font-weight:500;color:var(--txt-mid);letter-spacing:.06em;text-transform:uppercase;margin-bottom:.5rem;}
  .fi{width:100%;padding:.8rem 1.1rem;border:1px solid rgba(0,0,0,.12);border-radius:10px;background:white;font-family:var(--sans);font-size:.92rem;color:var(--txt);outline:none;transition:border-color .2s;}
  .fi:focus{border-color:var(--teal);}
  .fr{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
  textarea.fi{min-height:120px;resize:vertical;}
  /* FOOTER */
  .footer{background:var(--txt);}
  .footer-inner{max-width:1200px;margin:0 auto;padding:4rem 2rem 2rem;}
  .footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem;}
  .f-logo{font-family:var(--serif);font-size:1.6rem;font-weight:600;color:var(--ice);margin-bottom:.75rem;}
  .f-logo span{color:var(--teal-lt);}
  .f-tag{font-family:var(--serif);font-size:.95rem;font-style:italic;color:rgba(238,248,249,.5);margin-bottom:1.25rem;line-height:1.6;}
  .f-social{display:flex;gap:.75rem;}
  .soc{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;}
  .soc:hover{background:rgba(10,148,148,.2);border-color:rgba(10,148,148,.4);}
  .f-col-title{font-size:.75rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ice);margin-bottom:1.25rem;}
  .f-link{display:block;font-size:.88rem;color:rgba(238,248,249,.5);margin-bottom:.65rem;cursor:pointer;transition:color .2s;background:none;border:none;text-align:left;font-family:var(--sans);}
  .f-link:hover{color:var(--teal-lt);}
  .f-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;}
  .f-copy{font-size:.8rem;color:rgba(238,248,249,.3);}
  .f-verse{font-family:var(--serif);font-size:.85rem;font-style:italic;color:rgba(238,248,249,.3);}
  /* PAGE HEROES */
  .pg-hero{padding:10rem 2rem 6rem;text-align:center;}
  .pg-navy{background:var(--navy-dk);}
  .pg-deep{background:var(--navy);}
  .pg-kids-bg{background:linear-gradient(135deg,#061228 0%,#082040 100%);}
  .pg-ice{background:var(--ice);padding-top:10rem;}
  .divider{width:60px;height:2px;background:var(--teal);margin:1.5rem auto;}
  .back-btn{background:none;border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.7);font-family:var(--sans);font-size:.82rem;padding:.5rem 1.25rem;border-radius:24px;cursor:pointer;margin-bottom:2rem;transition:all .2s;}
  .back-btn:hover{border-color:var(--teal-lt);color:var(--teal-lt);}
  .back-btn.dk{color:var(--txt-muted);border-color:rgba(0,0,0,.15);}
  .back-btn.dk:hover{border-color:var(--navy);color:var(--navy);}
  .tag-row{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;margin-bottom:1.5rem;}
  .tag{display:inline-block;padding:.3rem .85rem;border-radius:20px;font-size:.72rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;}
  .tag.t{background:rgba(10,148,148,.12);color:var(--teal);border:1px solid rgba(10,148,148,.25);}
  .big-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
  .big-card{background:white;border-radius:20px;padding:2rem;border:1px solid rgba(0,0,0,.05);transition:all .3s;}
  .big-card:hover{transform:translateY(-3px);box-shadow:0 16px 48px rgba(0,0,0,.07);}
  .vid-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
  .vid-card{border-radius:16px;overflow:hidden;cursor:pointer;transition:all .3s;}
  .vid-card:hover{transform:translateY(-3px);}
  .vid-thumb{width:100%;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;position:relative;}
  .play-btn{position:absolute;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:transform .2s;}
  .vid-card:hover .play-btn{transform:scale(1.1);}
  .vid-info{padding:.85rem;}
  .vid-title{font-family:var(--serif);font-size:1rem;color:var(--ice);font-weight:500;line-height:1.3;margin-bottom:.3rem;}
  .vid-series{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--aqua);}
  .merch-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;}
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
  .story-body p{font-size:1.02rem;color:var(--txt-mid);line-height:1.85;margin-bottom:1.25rem;}
  .vals-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-top:4rem;}
  .val-card{text-align:center;padding:2rem 1.25rem;background:white;border-radius:16px;border:1px solid rgba(0,0,0,.05);}
  .val-icon{margin-bottom:1rem;display:flex;justify-content:center;}
  .val-title{font-family:var(--serif);font-size:1.15rem;color:var(--navy);margin-bottom:.5rem;font-weight:600;}
  .val-text{font-size:.85rem;color:var(--txt-muted);line-height:1.65;}
  @media(max-width:768px){
    .hero-content,.mission-grid,.kids-hero,.contact-grid,.footer-top,.about-grid{grid-template-columns:1fr;gap:2.5rem;}
    .platform-grid,.songs-grid,.series-grid,.prod-grid,.res-grid,.big-grid,.vid-grid,.merch-grid,.vals-row{grid-template-columns:1fr 1fr;}
    .nav-links{display:none;}
    .hero-title{font-size:2.6rem;}
  }
`;

/* ═══════════════════════════════════════════
   PLATFORM BRAND LOGOS
═══════════════════════════════════════════ */
const YouTubeLogo = ({ size = 44 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 90 63" fill="none">
    <rect width="90" height="63" rx="13" fill="#FF0000"/>
    <polygon points="36,18 36,45 62,31.5" fill="white"/>
  </svg>
);

const SpotifyLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#1DB954"/>
    <path d="M70 62c-15-9-36-11-52-6-2 1-3-1-2-3 1-1 2-2 4-2 17-5 40-3 57 7 2 1 2 4 0 5-1 0-5 0-7-1z" fill="white"/>
    <path d="M75 51C58 41 33 39 16 44c-2 1-3-2-2-4 1-1 3-2 5-2 19-6 47-3 65 8 2 1 2 3 0 5-2 1-4 1-6-1l2 1z" fill="white"/>
    <path d="M65 73c-12-7-28-8-42-4-2 1-3-1-2-2 1-1 2-2 3-2 15-4 33-3 47 5 1 1 1 3 0 3-1 1-4 1-6 0z" fill="white"/>
  </svg>
);

const AppleMusicLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="22" fill="#FC3C44"/>
    <path d="M67 27L52 32v28c-2-1-5-2-8-2-6 0-11 4-11 9s5 9 11 9 11-4 11-9V40l12-4V27z" fill="white"/>
  </svg>
);

const AmazonMusicLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="22" fill="#1A3A5C"/>
    <path d="M18 62c16-10 48-10 64 0 2 1 1 4-1 3-14-7-46-8-62-1-2 1-3-1-1-2z" fill="#FF9900"/>
    <rect x="34" y="24" width="4" height="22" rx="2" fill="white" opacity=".9"/>
    <rect x="46" y="20" width="4" height="26" rx="2" fill="white" opacity=".9"/>
    <rect x="58" y="24" width="4" height="22" rx="2" fill="white" opacity=".9"/>
  </svg>
);

/* ═══════════════════════════════════════════
   SONG / NATURE ICONS — REALISTIC SVG
═══════════════════════════════════════════ */

/* Realistic flying white dove with olive branch */
const DoveIcon = ({ size = 72 }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 96 72" fill="none">
    <defs>
      <linearGradient id="dWing" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#D8E8D8"/>
      </linearGradient>
    </defs>
    {/* Upper wing sweeping left */}
    <path d="M29 33 C18 17 5 10 9 24 C13 33 24 36 29 33 Z" fill="url(#dWing)" stroke="#C4D0C4" strokeWidth="0.8"/>
    <path d="M11 21 Q18 27 25 29" stroke="#B8C8B8" strokeWidth="0.7" fill="none"/>
    <path d="M10 26 Q17 31 24 32" stroke="#B8C8B8" strokeWidth="0.7" fill="none"/>
    {/* Body */}
    <ellipse cx="47" cy="37" rx="21" ry="9" fill="white" stroke="#D0D8D0" strokeWidth="0.7" transform="rotate(-6 47 37)"/>
    <ellipse cx="43" cy="38" rx="16" ry="6.5" fill="#F6F8F6" opacity="0.5"/>
    {/* Lower wing */}
    <path d="M32 39 C25 45 19 50 21 46 C23 42 28 40 32 39 Z" fill="#E4EDE4"/>
    {/* Tail feathers */}
    <path d="M25 39 C17 44 13 51 16 53 C20 50 24 44 27 40 Z" fill="white" stroke="#C4CCC4" strokeWidth="0.7"/>
    <path d="M28 40 C21 47 18 54 21 56 C24 52 28 45 30 42 Z" fill="#F0F4F0" stroke="#C4CCC4" strokeWidth="0.7"/>
    <path d="M31 41 C26 48 24 55 27 57 C30 53 33 46 34 43 Z" fill="white" stroke="#C4CCC4" strokeWidth="0.7"/>
    {/* Head */}
    <circle cx="64" cy="28" r="10" fill="white" stroke="#D0D0D0" strokeWidth="0.7"/>
    <ellipse cx="61" cy="32" rx="6" ry="4.5" fill="#E8EAE8" opacity="0.45"/>
    {/* Beak */}
    <path d="M73 27 L82 29.5 L73 32 Z" fill="#D4930E"/>
    <line x1="73" y1="29.5" x2="82" y2="29.5" stroke="#A87010" strokeWidth="0.6"/>
    {/* Eye */}
    <circle cx="67" cy="24.5" r="3" fill="#12142A"/>
    <circle cx="68" cy="23.5" r="1.1" fill="white" opacity="0.92"/>
    <circle cx="68.5" cy="23" r="0.5" fill="white"/>
    {/* Olive branch from beak */}
    <path d="M73 32 C69 36 61 39 54 37" stroke="#2A6E1C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <ellipse cx="57" cy="38" rx="4.5" ry="2.3" fill="#368826" transform="rotate(-22 57 38)"/>
    <ellipse cx="62.5" cy="36.5" rx="3.8" ry="2" fill="#2C7820" transform="rotate(-5 62.5 36.5)"/>
    <ellipse cx="68" cy="34.5" rx="3.2" ry="1.8" fill="#449830" transform="rotate(13 68 34.5)"/>
  </svg>
);

/* Realistic African praying hands — dark warm brown skin */
const PrayHandsIcon = ({ size = 72 }) => (
  <svg width={size * 0.68} height={size} viewBox="0 0 56 84" fill="none">
    {/* Deep shadow base */}
    <path d="M28 82 C14 82 9 71 9 60 L9 29 C9 23 13 18 17 17 L39 17 C43 18 47 23 47 29 L47 60 C47 71 42 82 28 82 Z" fill="#2E1406"/>
    {/* Main skin body */}
    <path d="M28 80 C15 80 11 70 11 59 L11 29 C11 24 15 19 19 18 L37 18 C41 19 45 24 45 29 L45 59 C45 70 41 80 28 80 Z" fill="#7A4726"/>
    {/* Left highlight panel */}
    <path d="M19 18 L11 31 L11 57 C11 67 15 74 20 78 L20 18 Z" fill="#8C5838" opacity="0.4"/>
    {/* Right shadow panel */}
    <path d="M37 18 L45 31 L45 57 C45 67 41 74 36 78 L36 18 Z" fill="#4A2010" opacity="0.4"/>
    {/* ── Left fingers (pinky → middle) ── */}
    <path d="M17 20 L13 7 C13 5 15 3 17 3 C19 3 21 5 21 7 L21 20" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    <path d="M21 19 L17 5 C17 3 19 1 21 1 C23 1 25 3 25 5 L25 19" fill="#7E4C2C" stroke="#3E1C08" strokeWidth="0.9"/>
    <path d="M25 18 L21 4 C21 2 23 0 25 0 C27 0 29 2 29 4 L29 18" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    {/* ── Right fingers (middle → pinky) ── */}
    <path d="M31 18 L35 4 C35 2 33 0 31 0 C29 0 27 2 27 4 L27 18" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    <path d="M35 19 L39 5 C39 3 37 1 35 1 C33 1 31 3 31 5 L31 19" fill="#7E4C2C" stroke="#3E1C08" strokeWidth="0.9"/>
    <path d="M39 20 L43 7 C43 5 41 3 39 3 C37 3 35 5 35 7 L35 20" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    {/* Thumbs — outer sides */}
    <path d="M11 36 C7 33 4 38 6 45 C8 49 11 48 11 44 L11 34 Z" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    <path d="M45 36 C49 33 52 38 50 45 C48 49 45 48 45 44 L45 34 Z" fill="#7A4726" stroke="#3E1C08" strokeWidth="0.9"/>
    {/* Fingernails — warm tan */}
    <ellipse cx="17" cy="3.2" rx="2.3" ry="1.5" fill="#C49870"/>
    <ellipse cx="21" cy="1.2" rx="2.3" ry="1.5" fill="#C49870"/>
    <ellipse cx="25" cy="0.2" rx="2.3" ry="1.5" fill="#C49870"/>
    <ellipse cx="31" cy="0.2" rx="2.3" ry="1.5" fill="#C49870"/>
    <ellipse cx="35" cy="1.2" rx="2.3" ry="1.5" fill="#C49870"/>
    <ellipse cx="39" cy="3.2" rx="2.3" ry="1.5" fill="#C49870"/>
    {/* Center prayer seam */}
    <line x1="28" y1="17" x2="28" y2="74" stroke="#3E1C08" strokeWidth="1.3" opacity="0.42"/>
    {/* Knuckle depth lines */}
    <path d="M17 28 Q28 32 39 28" stroke="#3E1C08" strokeWidth="0.9" fill="none" opacity="0.38"/>
    <path d="M15 40 Q28 44 41 40" stroke="#3E1C08" strokeWidth="0.8" fill="none" opacity="0.32"/>
    {/* Warm highlight on knuckle ridges */}
    <ellipse cx="20" cy="38" rx="5.5" ry="11" fill="#9A6038" opacity="0.18"/>
    <ellipse cx="36" cy="38" rx="5.5" ry="11" fill="#9A6038" opacity="0.18"/>
    {/* Palm centre warmth */}
    <ellipse cx="28" cy="55" rx="9" ry="12" fill="#8A5230" opacity="0.18"/>
    {/* Wrist rounding */}
    <ellipse cx="28" cy="72" rx="14" ry="3.5" fill="#9A6040" opacity="0.16"/>
  </svg>
);

/* Radiant golden sun */
const SunIcon = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <radialGradient id="sunG" cx="50%" cy="42%" r="58%">
        <stop offset="0%" stopColor="#FFF9D0"/>
        <stop offset="42%" stopColor="#FFCC22"/>
        <stop offset="100%" stopColor="#E07A08"/>
      </radialGradient>
    </defs>
    {/* Rays */}
    {[
0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => {
  const r = a * Math.PI / 180;
  const inner = 35, outer = i % 3 === 0 ? 50 : 45;

  const x1 = Math.round(50 + inner * Math.cos(r));
  const y1 = Math.round(50 + inner * Math.sin(r));
  const x2 = Math.round(50 + outer * Math.cos(r));
  const y2 = Math.round(50 + outer * Math.sin(r));

  return (
    <line
      key={i}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={i % 3 === 0 ? "#C07808" : "#D09010"}
      strokeWidth={i % 3 === 0 ? 3 : 2}
      strokeLinecap="round"
    />
  );
})}
    {/* Glow halo */}
    <circle cx="50" cy="50" r="35" fill="#FFDD20" opacity="0.16"/>
    {/* Main disc */}
    <circle cx="50" cy="50" r="28" fill="url(#sunG)"/>
    {/* Specular highlight */}
    <ellipse cx="42" cy="42" rx="10" ry="7" fill="#FFF8D8" opacity="0.42"/>
    <ellipse cx="39" cy="39" rx="5" ry="3.5" fill="white" opacity="0.28"/>
  </svg>
);

/* Sailboat on stylised waves */
const SailboatIcon = ({ size = 72 }) => (
  <svg width={size} height={size * 0.82} viewBox="0 0 100 82" fill="none">
    {/* Water layers */}
    <path d="M0 57 C14 52 27 63 43 57 C57 52 69 63 85 58 C92 55 96 59 100 57 L100 82 0 82 Z" fill="#0D6080" opacity="0.28"/>
    <path d="M0 63 C13 57 31 68 49 62 C63 57 77 65 95 61 L100 62 100 82 0 82 Z" fill="#0A4860" opacity="0.48"/>
    <path d="M0 68 C19 63 39 72 59 67 C75 62 87 67 100 64 L100 82 0 82 Z" fill="#083848"/>
    {/* Hull */}
    <path d="M26 57 C26 57 31 68 50 68 C69 68 74 57 74 57 Z" fill="#7A3018"/>
    <path d="M29 57 L71 57 L69 65 C59 70 41 70 31 65 Z" fill="#963C22"/>
    <line x1="29" y1="57" x2="71" y2="57" stroke="#601808" strokeWidth="1.2"/>
    {/* Mast */}
    <line x1="50" y1="14" x2="50" y2="57" stroke="#4E3828" strokeWidth="3" strokeLinecap="round"/>
    {/* Main sail */}
    <path d="M50 16 L50 53 L20 52 C20 52 30 30 50 16 Z" fill="white" stroke="#C4D0D8" strokeWidth="0.9"/>
    <path d="M50 16 C44 26 30 39 20 52 C30 50 42 48 50 52 Z" fill="#E2EAF2" opacity="0.42"/>
    {/* Foresail */}
    <path d="M50 20 L76 51 L50 51 Z" fill="#F2F0EC" stroke="#C8C8C0" strokeWidth="0.9"/>
    <path d="M50 20 C60 31 72 44 76 51 C66 49 56 47 50 51 Z" fill="#E6E6DC" opacity="0.4"/>
    {/* Water reflection */}
    <ellipse cx="50" cy="69" rx="21" ry="2" fill="#0A4860" opacity="0.36"/>
  </svg>
);

/* Botanical leaf branch */
const LeafBranchIcon = ({ size = 72 }) => (
  <svg width={size * 0.78} height={size} viewBox="0 0 56 72" fill="none">
    {/* Main stem */}
    <path d="M28 70 C28 70 24 55 26 38 C28 20 33 10 37 4" stroke="#42300A" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
    {/* Large leaf — lower right */}
    <path d="M26 54 C37 50 48 42 42 32 C36 32 27 41 26 54 Z" fill="#186838"/>
    <path d="M26 54 C32 46 38 39 42 32" stroke="#0E6028" strokeWidth="1" fill="none"/>
    <path d="M28 49 C33 44 37 38 40 34" stroke="#28A850" strokeWidth="0.6" fill="none" opacity="0.55"/>
    {/* Mid leaf — left */}
    <path d="M27 40 C18 36 10 26 16 15 C22 15 28 26 27 40 Z" fill="#1C7838"/>
    <path d="M27 40 C22 32 18 24 16 15" stroke="#126030" strokeWidth="1" fill="none"/>
    <path d="M25 35 C21 29 18 22 17 17" stroke="#2E9850" strokeWidth="0.6" fill="none" opacity="0.55"/>
    {/* Small leaf — upper right */}
    <path d="M31 23 C40 21 47 14 43 8 C38 8 31 15 31 23 Z" fill="#156830"/>
    <path d="M31 23 C36 17 41 12 43 8" stroke="#0E6028" strokeWidth="0.9" fill="none"/>
    {/* Small leaf — upper left */}
    <path d="M29 30 C21 26 17 18 21 12 C25 13 29 21 29 30 Z" fill="#208840"/>
    {/* Highlights */}
    <ellipse cx="36" cy="44" rx="3.5" ry="1.8" fill="#2CB050" opacity="0.38" transform="rotate(-28 36 44)"/>
    <ellipse cx="20" cy="27" rx="2.8" ry="1.5" fill="#2CB050" opacity="0.3" transform="rotate(18 20 27)"/>
  </svg>
);

/* Radiant light rays / divine glory */
const LightRaysIcon = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <radialGradient id="lgCore" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFEF0"/>
        <stop offset="45%" stopColor="#FFE840"/>
        <stop offset="100%" stopColor="#FFA808" stopOpacity="0"/>
      </radialGradient>
    </defs>
    {/* Long primary rays */}
    {[0,45,90,135,180,225,270,315].map((a,i) => {
      const r = a * Math.PI / 180;
      return <line key={i} x1="50" y1="50" x2={50+48*Math.cos(r)} y2={50+48*Math.sin(r)} stroke="#FFD840" strokeWidth="2.4" strokeLinecap="round" opacity="0.52"/>;
    })}
    {/* Secondary diagonal rays */}
    {[22,67,112,157,202,247,292,337].map((a,i) => {
      const r = a * Math.PI / 180;
      return <line key={i} x1="50" y1="50" x2={50+38*Math.cos(r)} y2={50+38*Math.sin(r)} stroke="#FFE860" strokeWidth="1.4" strokeLinecap="round" opacity="0.36"/>;
    })}
    {/* Glow rings */}
    <circle cx="50" cy="50" r="44" fill="none" stroke="#FFE040" strokeWidth="1" opacity="0.17"/>
    <circle cx="50" cy="50" r="34" fill="none" stroke="#FFE880" strokeWidth="1" opacity="0.24"/>
    {/* Central glow */}
    <circle cx="50" cy="50" r="20" fill="url(#lgCore)"/>
    <circle cx="50" cy="50" r="11" fill="#FFEE80" opacity="0.9"/>
    <circle cx="50" cy="50" r="6" fill="white"/>
    <circle cx="46" cy="46" r="3" fill="white" opacity="0.7"/>
  </svg>
);

/* ═══════════════════════════════════════════
   KIDS SERIES ICONS
═══════════════════════════════════════════ */

/* Sweetville Friends — neighbourhood houses */
const TownIcon = ({ size = 56 }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 72 65" fill="none">
    {/* Back-left house */}
    <rect x="3" y="28" width="23" height="27" fill="#C47858" rx="1.5"/>
    <polygon points="3,28 14.5,12 26,28" fill="#DC9070"/>
    <rect x="9" y="41" width="11" height="14" fill="#6A4226" rx="1"/>
    <rect x="5" y="30" width="8" height="8" fill="#A8C8E2" rx="1"/>
    <rect x="17" y="30" width="8" height="8" fill="#A8C8E2" rx="1"/>
    {/* Centre house — largest */}
    <rect x="20" y="22" width="33" height="33" fill="#D48870" rx="1.5"/>
    <polygon points="20,22 36.5,6 53,22" fill="#E8A080"/>
    <rect x="29" y="40" width="15" height="15" fill="#8B5238" rx="1"/>
    <rect x="22" y="25" width="10" height="10" fill="#B8DAEE" rx="1"/>
    <rect x="41" y="25" width="10" height="10" fill="#B8DAEE" rx="1"/>
    <line x1="36.5" y1="6" x2="36.5" y2="0" stroke="#8B5238" strokeWidth="1.5"/>
    <circle cx="36.5" cy="0" r="2" fill="#FFCC30"/>
    {/* Right house */}
    <rect x="47" y="30" width="22" height="25" fill="#C47858" rx="1.5"/>
    <polygon points="47,30 58,17 69,30" fill="#DC9070"/>
    <rect x="53" y="42" width="10" height="13" fill="#6A4226" rx="1"/>
    <rect x="49" y="32" width="8" height="8" fill="#A0C8E2" rx="1"/>
    {/* Ground strip */}
    <rect x="0" y="55" width="72" height="10" fill="#689070" rx="2.5"/>
    <rect x="29" y="55" width="15" height="10" fill="#B0A878"/>
  </svg>
);

/* Fruitful Forest — detailed teal butterfly */
const ButterflyIcon = ({ size = 56 }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 80 72" fill="none">
    <defs>
      <radialGradient id="bwL" cx="30%" cy="38%" r="70%">
        <stop offset="0%" stopColor="#5CD0D8"/>
        <stop offset="100%" stopColor="#1888A0"/>
      </radialGradient>
      <radialGradient id="bwR" cx="70%" cy="38%" r="70%">
        <stop offset="0%" stopColor="#54C8D0"/>
        <stop offset="100%" stopColor="#1880A0"/>
      </radialGradient>
    </defs>
    {/* Upper wings */}
    <path d="M38 35 C32 20 16 10 8 16 C2 22 10 39 25 41 C31 43 37 39 38 35 Z" fill="url(#bwL)" stroke="#0C7080" strokeWidth="0.9"/>
    <path d="M42 35 C48 20 64 10 72 16 C78 22 70 39 55 41 C49 43 43 39 42 35 Z" fill="url(#bwR)" stroke="#0C7080" strokeWidth="0.9"/>
    {/* Lower wings */}
    <path d="M38 38 C30 44 18 53 14 61 C20 65 34 58 38 48 C39 44 39 40 38 38 Z" fill="#1898A8" stroke="#0C7080" strokeWidth="0.9" opacity="0.9"/>
    <path d="M42 38 C50 44 62 53 66 61 C60 65 46 58 42 48 C41 44 41 40 42 38 Z" fill="#1898A8" stroke="#0C7080" strokeWidth="0.9" opacity="0.9"/>
    {/* Wing markings */}
    <circle cx="23" cy="25" r="5" fill="white" opacity="0.26"/>
    <circle cx="57" cy="25" r="5" fill="white" opacity="0.26"/>
    <circle cx="19" cy="52" r="3.5" fill="white" opacity="0.2"/>
    <circle cx="61" cy="52" r="3.5" fill="white" opacity="0.2"/>
    {/* Body */}
    <ellipse cx="40" cy="40" rx="3.2" ry="18" fill="#16404C"/>
    <ellipse cx="40" cy="28" rx="4.5" ry="7" fill="#1C5060"/>
    <circle cx="40" cy="20" r="5.5" fill="#16404C"/>
    {/* Antennae */}
    <path d="M38 16 C34 9 25 5 21 3" stroke="#16404C" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <path d="M42 16 C46 9 55 5 59 3" stroke="#16404C" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <circle cx="20" cy="2.5" r="2.5" fill="#38D0D8"/>
    <circle cx="60" cy="2.5" r="2.5" fill="#38D0D8"/>
  </svg>
);

/* Bible Builders Club — hammer + wrench */
const BuilderIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    {/* Hammer handle */}
    <rect x="8" y="25" width="44" height="8.5" rx="4" fill="#7B4A28" transform="rotate(-42 30 29)"/>
    <rect x="8" y="25" width="44" height="4" rx="3" fill="#9A6038" transform="rotate(-42 30 29)" opacity="0.55"/>
    {/* Hammer head */}
    <rect x="29" y="4" width="24" height="16" rx="4" fill="#58687A" transform="rotate(-42 41 12)"/>
    <rect x="31" y="6" width="16" height="12" rx="3" fill="#6A7A8C" transform="rotate(-42 39 12)"/>
    <rect x="35" y="8" width="7" height="8" rx="2" fill="#8098AC" transform="rotate(-42 38.5 12)" opacity="0.55"/>
    {/* Wrench */}
    <path d="M8 47 C6 45 8 39 12 37 L18 43 C16 47 11 48 8 47 Z" fill="#58687A" stroke="#464E5A" strokeWidth="0.9"/>
    <rect x="16" y="37" width="26" height="6" rx="3" fill="#6A7A8C" transform="rotate(-45 29 40)"/>
    <rect x="20" y="39" width="18" height="4" rx="2" fill="#7888A0" transform="rotate(-45 29 41)" opacity="0.5"/>
  </svg>
);

/* Tiny Praisers — music notes on staff */
const MusicNoteIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    {/* Staff lines */}
    {[22,28,34].map(y => <line key={y} x1="4" y1={y} x2="56" y2={y} stroke="#1A7888" strokeWidth="1" opacity="0.22"/>)}
    {/* Note 1 head */}
    <ellipse cx="18" cy="37" rx="7.5" ry="5.5" fill="#0A7880" transform="rotate(-14 18 37)"/>
    <ellipse cx="17" cy="36" rx="4.5" ry="3" fill="#10A090" transform="rotate(-14 17 36)"/>
    {/* Note 1 stem + flag */}
    <line x1="25" y1="33.5" x2="25" y2="9" stroke="#0A7880" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M25 9 C34 13 36 20 32 27" stroke="#0A7880" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
    {/* Note 2 head */}
    <ellipse cx="40" cy="31" rx="7.5" ry="5.5" fill="#0A7880" transform="rotate(-14 40 31)"/>
    <ellipse cx="39" cy="30" rx="4.5" ry="3" fill="#10A090" transform="rotate(-14 39 30)"/>
    {/* Note 2 stem + flag */}
    <line x1="47" y1="27.5" x2="47" y2="5" stroke="#0A7880" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M47 5 C56 9 58 16 54 23" stroke="#0A7880" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
    {/* Beam connecting stems */}
    <path d="M25 9 L47 5" stroke="#0A7880" strokeWidth="3.8" strokeLinecap="round"/>
    <path d="M25 14.5 L47 10.5" stroke="#0A7880" strokeWidth="3.2" strokeLinecap="round"/>
  </svg>
);

/* Little Lights Academy — stacked books with open book on top */
const BooksStackIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    {/* Book 3 — bottom red */}
    <rect x="5" y="45" width="50" height="13" rx="2.5" fill="#B83820"/>
    <rect x="5" y="45" width="9" height="13" rx="2.5" fill="#922810"/>
    <line x1="14" y1="45" x2="14" y2="58" stroke="#781C08" strokeWidth="0.6"/>
    {/* Book 2 — teal */}
    <rect x="7" y="31" width="46" height="15" rx="2.5" fill="#1A7080"/>
    <rect x="7" y="31" width="8" height="15" rx="2.5" fill="#105868"/>
    <line x1="15" y1="31" x2="15" y2="46" stroke="#084058" strokeWidth="0.6"/>
    <line x1="20" y1="37" x2="46" y2="37" stroke="white" strokeWidth="1.2" opacity="0.28"/>
    <line x1="20" y1="41" x2="42" y2="41" stroke="white" strokeWidth="1.2" opacity="0.28"/>
    {/* Book 1 — amber */}
    <rect x="9" y="19" width="42" height="14" rx="2.5" fill="#C88C18"/>
    <rect x="9" y="19" width="8" height="14" rx="2.5" fill="#A07010"/>
    <line x1="17" y1="19" x2="17" y2="33" stroke="#806010" strokeWidth="0.6"/>
    <line x1="22" y1="24" x2="46" y2="24" stroke="white" strokeWidth="1.2" opacity="0.28"/>
    <line x1="22" y1="28" x2="40" y2="28" stroke="white" strokeWidth="1.2" opacity="0.28"/>
    {/* Open book on top */}
    <path d="M11 7 C20 5 28 7 30 11 C32 7 40 5 49 7 L49 19 C40 17 32 19 30 23 C28 19 20 17 11 19 Z" fill="#F2EAD8"/>
    <line x1="30" y1="11" x2="30" y2="23" stroke="#C0B090" strokeWidth="1.3"/>
    {[10,14].map(y => <line key={y} x1="15" y1={y} x2="28" y2={y} stroke="#A09070" strokeWidth="0.8" opacity="0.5"/>)}
    {[10,14].map(y => <line key={y} x1="32" y1={y} x2="45" y2={y} stroke="#A09070" strokeWidth="0.8" opacity="0.5"/>)}
  </svg>
);

/* Bible Story Time — open Bible with cross & ribbon */
const OpenBibleIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M4 8 C4 6 6 4 8 4 L52 4 C54 4 56 6 56 8 L56 52 C56 54 54 56 52 56 L8 56 C6 56 4 54 4 52 Z" fill="#7A2818"/>
    <path d="M8 10 L30 12.5 L30 54.5 L8 52 Z" fill="#F4EEE2"/>
    <path d="M30 12.5 L52 10 L52 52 L30 54.5 Z" fill="#EDE6D4"/>
    <rect x="28" y="10" width="4" height="44" fill="#681808"/>
    {/* Cross on left page */}
    <rect x="15.5" y="26" width="3.5" height="15" rx="1.5" fill="#C03818" opacity="0.52"/>
    <rect x="10" y="30.5" width="14" height="3.5" rx="1.5" fill="#C03818" opacity="0.52"/>
    {/* Text lines */}
    {[20,24,28,32,36,40,44].map(y => (
      <g key={y}>
        <line x1="11" y1={y} x2="26" y2={y} stroke="#9A9080" strokeWidth="0.8" opacity="0.6"/>
        <line x1="34" y1={y} x2="49" y2={y} stroke="#9A9080" strokeWidth="0.8" opacity="0.6"/>
      </g>
    ))}
    {/* Ribbon bookmark */}
    <line x1="32" y1="54.5" x2="30" y2="63" stroke="#B82818" strokeWidth="2.4" strokeLinecap="round"/>
    <line x1="32" y1="54.5" x2="34" y2="63" stroke="#8E1408" strokeWidth="2.4" strokeLinecap="round"/>
  </svg>
);

/* ═══════════════════════════════════════════
   PRODUCT ICONS
═══════════════════════════════════════════ */
const TShirtIcon = () => (
  <svg width="62" height="58" viewBox="0 0 62 58" fill="none">
    <path d="M13 12 L23 8 Q31 17 39 8 L49 12 L54 26 L44 24 L44 54 L18 54 L18 24 L8 26 Z" fill="#2080A0" stroke="#196880" strokeWidth="0.9"/>
    <path d="M21 8 Q31 18 41 8" fill="none" stroke="#196880" strokeWidth="0.9"/>
    <path d="M14 13 L10 23 L18 23 Z" fill="#1A7090" opacity="0.45"/>
    <path d="M48 13 L52 23 L44 23 Z" fill="#1A7090" opacity="0.45"/>
  </svg>
);
const MugIcon = () => (
  <svg width="60" height="62" viewBox="0 0 60 62" fill="none">
    <path d="M10 18 L10 50 C10 52 12 54 14 54 L42 54 C44 54 46 52 46 50 L46 18 Z" fill="#E6F6F8" stroke="#0A9494" strokeWidth="1.3"/>
    <rect x="10" y="18" width="36" height="7" fill="#0A9494" opacity="0.14"/>
    <path d="M46 27 C54 27 54 43 46 43" stroke="#0A9494" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
    <line x1="16" y1="31" x2="40" y2="31" stroke="#0A9494" strokeWidth="1.2" opacity="0.38"/>
    <path d="M20 37 C24 34 32 34 36 37" stroke="#0A9494" strokeWidth="1.1" fill="none" opacity="0.38" strokeLinecap="round"/>
    <path d="M14 54 C12 56 10 58 10 58 L46 58 C46 58 48 56 46 54 Z" fill="#D4F0F2"/>
  </svg>
);
const JournalIcon = () => (
  <svg width="58" height="62" viewBox="0 0 58 62" fill="none">
    <rect x="10" y="5" width="40" height="52" rx="4" fill="#082040" stroke="#0A3060" strokeWidth="0.9"/>
    <rect x="10" y="5" width="9" height="52" rx="4" fill="#0A2848"/>
    <rect x="17" y="5" width="2" height="52" fill="#061830"/>
    {[15,21,27,33,39,45,51].map(y => <line key={y} x1="23" y1={y} x2="45" y2={y} stroke="#DAF0F2" strokeWidth="0.8" opacity="0.18"/>)}
    <line x1="23" y1="14" x2="45" y2="14" stroke="#DAF0F2" strokeWidth="1" opacity="0.45"/>
    <rect x="27" y="9" width="14" height="3.5" rx="1.7" fill="#0A9494" opacity="0.65"/>
    <path d="M34 40 L38 31 L42 40 L38 37.5 Z" fill="#38D4E0" opacity="0.6" transform="rotate(18 38 36)"/>
    <rect x="36" y="24" width="2.5" height="18" rx="1.2" fill="#38D4E0" opacity="0.6" transform="rotate(18 37 33)"/>
  </svg>
);
const HoodieIcon = () => (
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
    <path d="M8 17 C8 17 14 10 23 9 L25 17 C27 15 31 14 31 14 C31 14 35 15 37 17 L39 9 C48 10 54 17 54 17 L58 32 L47 29 L47 60 L15 60 L15 29 L4 32 Z" fill="#1A5870" stroke="#114860" strokeWidth="0.9"/>
    <path d="M23 9 L25 17 C27 15 31 14 31 14" fill="none" stroke="#0A3848" strokeWidth="0.9"/>
    <path d="M39 9 L37 17 C35 15 31 14 31 14" fill="none" stroke="#0A3848" strokeWidth="0.9"/>
    <path d="M25 17 C25 17 27 23 31 23 C35 23 37 17 37 17" fill="#E0F4F8" stroke="#114860" strokeWidth="0.9"/>
  </svg>
);
const WallArtIcon = () => (
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
    <rect x="6" y="6" width="50" height="50" rx="3.5" fill="#F6FEFF" stroke="#0A9494" strokeWidth="2.2"/>
    <rect x="6" y="6" width="50" height="7" rx="3.5" fill="#0A9494" opacity="0.14"/>
    <path d="M14 42 C18 33 25 29 31 29 C37 29 41 35 45 29" stroke="#0A9494" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="22" cy="22" r="5.5" fill="none" stroke="#DAF0F2" strokeWidth="1.7"/>
    <circle cx="22" cy="22" r="2.5" fill="#DAF0F2"/>
    <line x1="3" y1="11" x2="7" y2="11" stroke="#0A9494" strokeWidth="3" strokeLinecap="round"/>
    <line x1="55" y1="11" x2="59" y2="11" stroke="#0A9494" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
    <rect x="6" y="10" width="50" height="46" rx="5" fill="white" stroke="#0A9494" strokeWidth="1.6"/>
    <rect x="6" y="10" width="50" height="17" rx="5" fill="#082040"/>
    <rect x="6" y="19" width="50" height="8" fill="#082040"/>
    <rect x="15" y="3" width="5" height="13" rx="2.5" fill="#0A9494"/>
    <rect x="42" y="3" width="5" height="13" rx="2.5" fill="#0A9494"/>
    <line x1="6" y1="35" x2="56" y2="35" stroke="#DAF0F2" strokeWidth="0.9" opacity="0.5"/>
    <line x1="6" y1="45" x2="56" y2="45" stroke="#DAF0F2" strokeWidth="0.9" opacity="0.5"/>
    {[[14,41],[24,41],[34,41],[44,41],[14,51],[24,51],[34,51]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.8" fill="#0A9494" opacity="0.38"/>)}
    <circle cx="44" cy="41" r="2.8" fill="#0A9494"/>
    <text x="31" y="28" fontSize="8.5" fill="white" fontFamily="Georgia,serif" fontWeight="600" textAnchor="middle">2025</text>
  </svg>
);
const GiftBoxIcon = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <rect x="8" y="27" width="44" height="28" rx="3" fill="#0A9494"/>
    <rect x="8" y="27" width="44" height="9" rx="3" fill="#088080"/>
    <rect x="6" y="20" width="48" height="11" rx="3.5" fill="#082040"/>
    <line x1="28" y1="20" x2="28" y2="55" stroke="#DAF0F2" strokeWidth="2.8"/>
    <line x1="32" y1="20" x2="32" y2="55" stroke="#DAF0F2" strokeWidth="2.8"/>
    <line x1="6" y1="25.5" x2="54" y2="25.5" stroke="#DAF0F2" strokeWidth="2.8"/>
    <path d="M30 20 C30 20 24 13 24 9 C24 7 26 5 28 6 C30 7 30 12 30 20 Z" fill="#18B4B4"/>
    <path d="M30 20 C30 20 36 13 36 9 C36 7 34 5 32 6 C30 7 30 12 30 20 Z" fill="#38C4C4"/>
    <circle cx="30" cy="20" r="3.2" fill="#DAF0F2"/>
  </svg>
);
const NotebookIcon = () => (
  <svg width="60" height="62" viewBox="0 0 60 62" fill="none">
    <rect x="10" y="4" width="40" height="54" rx="3.5" fill="#EEF8F9" stroke="#0A9494" strokeWidth="1.3"/>
    <rect x="10" y="4" width="9" height="54" rx="3.5" fill="#DAF0F2"/>
    <rect x="17" y="4" width="2.5" height="54" fill="#B4E4EC"/>
    {[14,21,28,35,42,49].map(y => <line key={y} x1="23" y1={y} x2="45" y2={y} stroke="#0A9494" strokeWidth="0.9" opacity="0.22"/>)}
    <line x1="23" y1="13" x2="45" y2="13" stroke="#0A9494" strokeWidth="1.1" opacity="0.48"/>
    <path d="M37 37 L41 28 L45 37 L41 35 Z" fill="#0A9494" opacity="0.65" transform="rotate(22 41 33)"/>
    <rect x="37" y="22" width="2.8" height="19" rx="1.4" fill="#0A9494" opacity="0.65" transform="rotate(22 38.4 31.5)"/>
    <circle cx="4" cy="14" r="3.2" fill="#0A9494" opacity="0.45"/>
    <circle cx="4" cy="31" r="3.2" fill="#0A9494" opacity="0.45"/>
    <circle cx="4" cy="48" r="3.2" fill="#0A9494" opacity="0.45"/>
  </svg>
);

/* Kids products */
const ColoringBookIcon = () => (
  <svg width="60" height="62" viewBox="0 0 60 62" fill="none">
    <rect x="8" y="4" width="44" height="54" rx="3.5" fill="white" stroke="#38D4E0" strokeWidth="1.7"/>
    <rect x="8" y="4" width="10" height="54" rx="3.5" fill="#38D4E0" opacity="0.28"/>
    <circle cx="30" cy="26" r="11" fill="none" stroke="#38D4E0" strokeWidth="1.7" strokeDasharray="3.5 2.5"/>
    <circle cx="30" cy="26" r="6" fill="#DAF0F2"/>
    <path d="M17 40 L23 35 L30 42 L37 35 L43 40" stroke="#18B8CC" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="14" y1="48" x2="46" y2="48" stroke="#38D4E0" strokeWidth="1.1" opacity="0.48"/>
    {/* Pencil */}
    <rect x="44" y="18" width="5" height="22" rx="2.5" fill="#FF8C50" transform="rotate(22 46.5 29)"/>
    <rect x="44" y="17" width="5" height="7" rx="1.5" fill="#F0D880" transform="rotate(22 46.5 29)"/>
    <path d="M44 39 L46.5 44 L49 39" fill="#FF6A30" transform="rotate(22 46.5 29)"/>
  </svg>
);
const StorybookIcon = () => (
  <svg width="60" height="62" viewBox="0 0 60 62" fill="none">
    <path d="M8 7 C8 5 10 3 12 3 L48 3 C50 3 52 5 52 7 L52 55 C52 57 50 59 48 59 L12 59 C10 59 8 57 8 55 Z" fill="#082040"/>
    <path d="M10 9 L30 12 L30 57 L10 55 Z" fill="#F4EEE0"/>
    <path d="M30 12 L50 9 L50 55 L30 57 Z" fill="#EDE6D4"/>
    <rect x="28" y="9" width="4" height="46" fill="#061228"/>
    <circle cx="20" cy="24" r="8" fill="none" stroke="#38D4E0" strokeWidth="1.7"/>
    <circle cx="20" cy="24" r="4" fill="#38D4E0" opacity="0.48"/>
    <path d="M15 36 C17 31 23 30 26 34" stroke="#0A9494" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <path d="M13 42 C16 38 24 37 27 41" stroke="#38D4E0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M34 24 C38 19 45 19 47 24" stroke="#38D4E0" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    {[30,36,42].map(y => <line key={y} x1="34" y1={y} x2="48" y2={y} stroke="#0A9494" strokeWidth="1" opacity="0.45"/>)}
  </svg>
);
const FlashcardsIcon = () => (
  <svg width="62" height="60" viewBox="0 0 62 60" fill="none">
    <rect x="14" y="14" width="42" height="34" rx="4.5" fill="#DAF0F2" stroke="#18B8CC" strokeWidth="1.6" transform="rotate(-6 35 31)"/>
    <rect x="9" y="16" width="42" height="34" rx="4.5" fill="#EEF8F9" stroke="#0A9494" strokeWidth="1.6" transform="rotate(-2 30 33)"/>
    <rect x="10" y="16" width="42" height="34" rx="4.5" fill="white" stroke="#0A9494" strokeWidth="1.6"/>
    <text x="31" y="39" fontSize="18" fill="#082040" fontFamily="Georgia,serif" fontWeight="700" textAnchor="middle" opacity="0.88">A</text>
    <text x="31" y="27" fontSize="7.5" fill="#0A9494" fontFamily="Georgia,serif" textAnchor="middle">Bible Word</text>
    <line x1="16" y1="44" x2="46" y2="44" stroke="#DAF0F2" strokeWidth="1.3"/>
    <text x="31" y="48" fontSize="6.5" fill="#487080" fontFamily="Georgia,serif" textAnchor="middle">Verse Reference</text>
  </svg>
);
const StickerIcon = () => (
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
    <circle cx="31" cy="31" r="25" fill="#EEF8F9" stroke="#38D4E0" strokeWidth="2.3" strokeDasharray="5 3.5"/>
    <circle cx="21" cy="24" r="6.5" fill="#38D4E0" opacity="0.48"/>
    <circle cx="39" cy="22" r="5.5" fill="#18B8CC" opacity="0.42"/>
    <circle cx="28" cy="37" r="7.5" fill="#0A9494" opacity="0.32"/>
    <path d="M20 41 C20 41 25 37 31 38 C37 39 41 43 41 43" stroke="#082040" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
    <circle cx="23" cy="25" r="2" fill="#082040"/>
    <circle cx="39" cy="22" r="2" fill="#082040"/>
    <path d="M24 20 C24 20 26 18 28 19" stroke="#082040" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M37 18 C37 18 39 16 41 17" stroke="#082040" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);
const PlushIcon = () => (
  <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
    <circle cx="21" cy="15" r="10.5" fill="#38D4E0"/>
    <circle cx="41" cy="15" r="10.5" fill="#38D4E0"/>
    <circle cx="21" cy="15" r="8.5" fill="#5AE0E8"/>
    <circle cx="41" cy="15" r="8.5" fill="#5AE0E8"/>
    <ellipse cx="31" cy="38" rx="19" ry="21" fill="#38D4E0"/>
    <ellipse cx="31" cy="38" rx="17" ry="19" fill="#5AE0E8"/>
    <ellipse cx="31" cy="22" rx="15" ry="13" fill="#5AE0E8"/>
    <circle cx="26.5" cy="32" r="2.8" fill="#082040"/>
    <circle cx="35.5" cy="32" r="2.8" fill="#082040"/>
    <circle cx="27.3" cy="31.2" r="1" fill="white"/>
    <circle cx="36.3" cy="31.2" r="1" fill="white"/>
    <ellipse cx="31" cy="37" rx="5.5" ry="3.2" fill="#38D4E0"/>
    <path d="M27 41 C27 41 29 44 31 44 C33 44 35 41 35 41" stroke="#082040" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M16 30 C14 28 11 30 13 33 C15 36 16 34 16 30 Z" fill="#38D4E0" stroke="#28C4CC" strokeWidth="0.9"/>
    <path d="M46 30 C48 28 51 30 49 33 C47 36 46 34 46 30 Z" fill="#38D4E0" stroke="#28C4CC" strokeWidth="0.9"/>
  </svg>
);

/* ═══════════════════════════════════════════
   CONTACT / RESOURCE / VALUE ICONS
═══════════════════════════════════════════ */
const EmailIcon = () => (
  <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
    <rect width="22" height="17" rx="3" stroke="#38D4E0" strokeWidth="1.6" fill="none"/>
    <path d="M1 2 L11 9.5 L21 2" stroke="#38D4E0" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const MicIcon = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
    <rect x="5" y="0" width="8" height="13" rx="4" fill="#38D4E0"/>
    <path d="M2 10 C2 15.5 16 15.5 16 10" stroke="#38D4E0" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    <line x1="9" y1="15.5" x2="9" y2="21" stroke="#38D4E0" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="5" y1="21" x2="13" y2="21" stroke="#38D4E0" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const MediaIcon = () => (
  <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
    <rect width="22" height="17" rx="3" stroke="#38D4E0" strokeWidth="1.6" fill="none"/>
    <circle cx="6" cy="5.5" r="2.5" fill="#38D4E0" opacity="0.7"/>
    <path d="M2 13.5 L7 9 L11 13 L14 10 L20 13.5" stroke="#38D4E0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="#38D4E0" strokeWidth="1.6" fill="none"/>
    <polygon points="8,7 14,10 8,13" fill="#38D4E0"/>
  </svg>
);

/* Value card icons */
const DoveSmIcon = () => <DoveIcon size={50}/>;
const HeartCrossIcon = () => (
  <svg width="50" height="46" viewBox="0 0 54 50" fill="none">
    <path d="M27 46 C27 46 4 32 4 16 C4 9 9 5 15 6 C19 7 23 11 27 15 C31 11 35 7 39 6 C45 5 50 9 50 16 C50 32 27 46 27 46 Z" fill="#E04060" opacity="0.92"/>
    <rect x="24.5" y="9" width="5" height="20" rx="2.5" fill="white" opacity="0.92"/>
    <rect x="16" y="16" width="22" height="5" rx="2.5" fill="white" opacity="0.92"/>
  </svg>
);
const StarCrossIcon = () => (
  <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
    {[0,45,90,135,180,225,270,315].map((a,i) => {
      const r = a * Math.PI / 180;
      return <line key={i} x1="27" y1="27" x2={27+24*Math.cos(r)} y2={27+24*Math.sin(r)} stroke="#FFD820" strokeWidth={i%2===0?2.8:1.8} strokeLinecap="round"/>;
    })}
    <circle cx="27" cy="27" r="11" fill="#FFD820"/>
    <circle cx="27" cy="27" r="6.5" fill="#FFF4A0"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
    <circle cx="27" cy="27" r="22" fill="none" stroke="#0A9494" strokeWidth="2.2"/>
    <ellipse cx="27" cy="27" rx="10" ry="22" fill="none" stroke="#0A9494" strokeWidth="1.7"/>
    <line x1="5" y1="27" x2="49" y2="27" stroke="#0A9494" strokeWidth="1.7"/>
    <path d="M8 18 C13 20 20 21 27 21 C34 21 41 20 46 18" stroke="#0A9494" strokeWidth="1.3" fill="none"/>
    <path d="M8 36 C13 34 20 33 27 33 C34 33 41 34 46 36" stroke="#0A9494" strokeWidth="1.3" fill="none"/>
  </svg>
);

/* ═══════════════════════════════════════════
   DATA ARRAYS  (icon JSX, not emoji strings)
═══════════════════════════════════════════ */
const SONGS = [
  { icon: <DoveIcon/>,       bg:"#083040", title:"Still Waters",    tag:"Worship",      verse:"Psalm 23:2" },
  { icon: <PrayHandsIcon/>,  bg:"#061228", title:"My Refuge",       tag:"Prayer",       verse:"Psalm 91:2" },
  { icon: <SunIcon/>,        bg:"#0A2830", title:"Morning Mercies", tag:"Praise",       verse:"Lamentations 3:23" },
  { icon: <SailboatIcon/>,   bg:"#082040", title:"Peace, Be Still", tag:"Faith",        verse:"Mark 4:39" },
  { icon: <LeafBranchIcon/>, bg:"#062C38", title:"Walk in the Light",tag:"Devotion",    verse:"1 John 1:7" },
  { icon: <LightRaysIcon/>,  bg:"#071830", title:"His Faithfulness",tag:"Thanksgiving", verse:"Psalm 36:5" },
];

const KIDS_SERIES = [
  { icon:<TownIcon/>,       name:"Sweetville Friends",    desc:"Kids and animals learn faith, kindness, and teamwork",   episodes:"8 Episodes",  bg:"#082040", color:"#38D4E0" },
  { icon:<ButterflyIcon/>,  name:"The Fruitful Forest",   desc:"Animal friends explore each Fruit of the Spirit",        episodes:"9 Episodes",  bg:"#062C38", color:"#2CE0C8" },
  { icon:<BuilderIcon/>,    name:"Bible Builders Club",   desc:"Creativity and building teach biblical principles",       episodes:"5 Episodes",  bg:"#071A30", color:"#5CDCEC" },
  { icon:<MusicNoteIcon/>,  name:"Tiny Praisers",         desc:"Short worship songs applied to everyday life",           episodes:"5 Episodes",  bg:"#062038", color:"#60C8F0" },
  { icon:<BooksStackIcon/>, name:"Little Lights Academy", desc:"Early learning woven with Christian values",             episodes:"8 Episodes",  bg:"#082838", color:"#40E0D8" },
  { icon:<OpenBibleIcon/>,  name:"Bible Story Time",      desc:"Classic Bible stories told with joyful animation",       episodes:"15 Episodes", bg:"#061E30", color:"#38CCDC" },
];

const PRODUCTS_ADULT = [
  { icon:<TShirtIcon/>,  bg:"#E4F4F6", name:"Faith & Grace Tee",   tag:"Apparel",    price:"$32" },
  { icon:<MugIcon/>,     bg:"#D8F2F2", name:"Morning Mercies Mug", tag:"Home",       price:"$22" },
  { icon:<JournalIcon/>, bg:"#DAEEf8", name:"Scripture Journal",   tag:"Devotional", price:"$28" },
  { icon:<HoodieIcon/>,  bg:"#D8F0F4", name:"Blessed Hoodie",      tag:"Apparel",    price:"$58" },
  { icon:<WallArtIcon/>, bg:"#DDF4F4", name:"Psalm 23 Wall Art",   tag:"Home Decor", price:"$45" },
  { icon:<CalendarIcon/>,bg:"#D8F2F0", name:"Faith Calendar 2025", tag:"Seasonal",   price:"$18" },
  { icon:<GiftBoxIcon/>, bg:"#E0F4F8", name:"Gift Bundle – Hope",  tag:"Gift Sets",  price:"$75" },
  { icon:<NotebookIcon/>,bg:"#D8EEF8", name:"Devotional Notebook", tag:"Writing",    price:"$24" },
];

const PRODUCTS_KIDS = [
  { icon:<ColoringBookIcon/>,bg:"#DDFAF8", name:"Bible Story Coloring Book",  tag:"Activity",   price:"$16" },
  { icon:<TShirtIcon/>,      bg:"#D8F4F8", name:"God Made Me Tee",            tag:"Apparel",    price:"$24" },
  { icon:<StorybookIcon/>,   bg:"#D8F8F4", name:"Sweetville Storybook",       tag:"Books",      price:"$22" },
  { icon:<FlashcardsIcon/>,  bg:"#D8F8F8", name:"Bible Verse Flashcards",     tag:"Learning",   price:"$14" },
  { icon:<GiftBoxIcon/>,     bg:"#D8F0F8", name:"Fruits of the Spirit Set",   tag:"Gift Set",   price:"$48" },
  { icon:<JournalIcon/>,     bg:"#D8F4F4", name:"My Prayer Journal (Kids)",   tag:"Devotional", price:"$18" },
  { icon:<StickerIcon/>,     bg:"#D8F8F0", name:"Creation Sticker Pack",      tag:"Fun",        price:"$9"  },
  { icon:<PlushIcon/>,       bg:"#DAF0F8", name:"Sweetville Plush Friend",    tag:"Toys",       price:"$32" },
];

const VIDEOS_KIDS = [
  { icon:<SailboatIcon size={58}/>,   bg:"#071830", title:"Noah Obeys God",           series:"Bible Story Time" },
  { icon:<OpenBibleIcon size={48}/>,  bg:"#062830", title:"Daniel & the Lions",       series:"Bible Story Time" },
  { icon:<LightRaysIcon size={52}/>,  bg:"#082040", title:"The Brave Little Esther",  series:"Bible Story Time" },
  { icon:<TownIcon size={50}/>,       bg:"#062038", title:"Forgiving Finley Fox",      series:"Sweetville Friends" },
  { icon:<ButterflyIcon size={50}/>,  bg:"#062C38", title:"Joy in the Rain",           series:"Fruitful Forest" },
  { icon:<BuilderIcon size={48}/>,    bg:"#071428", title:"Build on the Rock",         series:"Bible Builders Club" },
];

const PLATFORMS = [
  { logo:<YouTubeLogo size={48}/>,      name:"YouTube",       sub:"Watch & Subscribe" },
  { logo:<SpotifyLogo size={44}/>,      name:"Spotify",       sub:"Stream Now" },
  { logo:<AppleMusicLogo size={44}/>,   name:"Apple Music",   sub:"Listen on Apple" },
  { logo:<AmazonMusicLogo size={44}/>,  name:"Amazon Music",  sub:"Stream on Amazon" },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function HolyAndSweet() {
  const [page, setPage]       = useState("home");
  const [shopTab, setShopTab] = useState("adult");
  const [email, setEmail]     = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const NavBar = () => (
    <nav className="nav">
      <div className="nav-inner">     
<a href="/" className="nav-logo">
  Holy <span>&</span> Sweet
</a>
        <div className="nav-links">
<a href="/" className="nav-link">Home</a>
<a href="/music" className="nav-link">Music</a>
<a href="/kids" className="nav-link">Kids</a>
<a href="/shop" className="nav-link">Shop</a>
<a href="/about" className="nav-link">About</a>
<a href="/resources" className="nav-link">Resources</a>
<a href="/contact" className="nav-link nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="f-logo">Holy <span>&</span> Sweet</div>
            <div className="f-tag">"Sing and make music in your hearts to the Lord." — Eph. 5:19</div>
            <div className="f-social">
              {[<YouTubeLogo size={18}/>,<SpotifyLogo size={18}/>,<AppleMusicLogo size={18}/>,<AmazonMusicLogo size={18}/>].map((icon,i) => (
                <div key={i} className="soc">{icon}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="f-col-title">Explore</div>
            {[["home","Home"],["music","Adult Music"],["kids","Kids Channel"],["shop","Shop"]].map(([p,l]) => (
              <button key={p} className="f-link" onClick={() => nav(p)}>{l}</button>
            ))}
          </div>
          <div>
            <div className="f-col-title">Discover</div>
            {[["about","About Us"],["resources","Resources"],["contact","Contact"],["contact","Booking"]].map(([p,l],i) => (
              <button key={i} className="f-link" onClick={() => nav(p)}>{l}</button>
            ))}
          </div>
          <div>
            <div className="f-col-title">Listen</div>
            {["YouTube","Spotify","Apple Music","Amazon Music"].map(l => <div key={l} className="f-link">{l}</div>)}
          </div>
        </div>
        <div className="f-bottom">
          <div className="f-copy">© 2025 Holy and Sweet. Faith-filled media for the whole family.</div>
          <div className="f-verse">Created to encourage families and glorify God.</div>
        </div>
      </div>
    </footer>
  );

  /* ── HOME ── */
  if (page === "home") return (
    <div className="site">
      <style>{styles}</style>
      <NavBar/>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"/><div className="hero-dots"/>
        <div className="hero-content">
          <div>
            <div className="hero-eyebrow">Faith-Filled Media for the Whole Family</div>
            <h1 className="hero-title">Music that lifts the heart<br/><em>toward God.</em></h1>
            <p className="hero-verse">"Speak to one another with psalms, hymns, and spiritual songs. Sing and make music in your hearts to the Lord."</p>
            <p className="hero-ref">Ephesians 5:19</p>
            <div className="hero-btns">
              <button className="btn-p" onClick={() => nav("music")}>Listen Now</button>
              <button className="btn-o" onClick={() => nav("kids")}>Holy &amp; Sweet Kids</button>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hero-card" onClick={() => nav("music")}>
              <div className="hc-label">Adult Music &amp; Media</div>
              <div className="hc-title">Holy and Sweet</div>
              <div className="hc-desc">Spirit-filled Christian music, worship playlists, and devotional media for believers, families, and churches.</div>
              <span className="hc-arrow">→</span>
            </div>
            <div className="hero-card" onClick={() => nav("kids")}>
              <div className="hc-label">Children's Christian Media</div>
              <div className="hc-title">Holy and Sweet Kids</div>
              <div className="hc-desc">Joyful songs, Bible stories, original animated series, and early learning for little hearts growing in faith.</div>
              <span className="hc-arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section mission-sec">
        <div className="inner">
          <div className="mission-grid">
            <div>
              <div className="eyebrow">Our Mission</div>
              <h2 className="sec-title">Encouraging families &amp; glorifying God</h2>
              <p className="mission-body">Holy and Sweet is a Christian music and media brand dedicated to sharing uplifting, Spirit-filled content that inspires believers through joy, sorrow, hope, repentance, perseverance, and everyday faith.</p>
              <p className="mission-body">Our music is written from prayer, devotion, Scripture, and real ministry experiences — created to strengthen the body of Christ and draw hearts closer to God.</p>
              <div className="pillars">
                {[["Scripture-Rooted","Every song anchored in God's Word"],["Family-Centered","Safe and uplifting for all ages"],["Spirit-Led","Created from prayer and devotion"],["Ministry-Hearted","Built to serve and encourage"]].map(([t,d]) => (
                  <div key={t} className="pillar"><div className="pillar-title">{t}</div><div className="pillar-text">{d}</div></div>
                ))}
              </div>
            </div>
            <div className="verse-block">
              <p className="verse-text">"Speak to one another with psalms, hymns, and spiritual songs. Sing and make music in your hearts to the Lord, always giving thanks to God the Father for everything."</p>
              <div className="verse-ref">Ephesians 5:19–20</div>
            </div>
          </div>
        </div>
      </section>

      {/* Music preview */}
      <section className="section music-sec">
        <div className="inner">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"3.5rem"}}>
            <div>
              <div className="eyebrow" style={{color:"var(--teal-lt)"}}>Adult Music</div>
              <h2 className="sec-title lt">Featured Songs</h2>
              <p className="sec-sub lt">Songs of worship, prayer, and encouragement — written from Scripture and lived faith.</p>
            </div>
<a href="/music">
  <button className="btn-o">View All Music</button>
</a>
          </div>
          <div className="platform-grid">
            {PLATFORMS.map(p => (
              <div key={p.name} className="plat-card">{p.logo}<div className="plat-name">{p.name}</div><div className="plat-sub">{p.sub}</div></div>
            ))}
          </div>
          <div className="songs-grid">
            {SONGS.map(s => (
              <div key={s.title} className="song-card">
                <div className="song-thumb" style={{background:s.bg}}>{s.icon}</div>
                <div className="song-tag">{s.tag}</div>
                <div className="song-title">{s.title}</div>
                <div className="song-verse">{s.verse}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids preview */}
      <section className="section kids-sec">
        <div className="bubble" style={{width:300,height:300,background:"#38D4E0",top:"-80px",right:"10%"}}/>
        <div className="bubble" style={{width:200,height:200,background:"#18B8CC",bottom:"10%",left:"5%"}}/>
        <div className="inner" style={{position:"relative",zIndex:1}}>
          <div className="kids-hero">
            <div>
              <div className="kids-badge">✦ Children's Christian Media</div>
              <h2 className="kids-title">Holy and Sweet Kids</h2>
              <div className="kids-tagline">Train Up A Child</div>
              <p className="kids-desc">A joyful, nurturing space where children and parents grow together in love, learning, and faith — Bible stories, animated series, worship songs, and early learning woven with Christian values.</p>
              <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>     
<a href="/kids">
  <button className="btn-kids">Explore Kids Channel</button>
</a>
                <button className="btn-o">Watch on YouTube ▶</button>
              </div>
            </div>
            <div className="series-grid">
              {KIDS_SERIES.slice(0,3).map(s => (
                <div key={s.name} className="series-card" style={{background:s.bg}}>
                  <div className="series-icon">{s.icon}</div>
                  <div className="series-name" style={{color:s.color}}>{s.name}</div>
                  <div style={{color:"rgba(255,255,255,0.7)",fontSize:".82rem",lineHeight:1.65}}>{s.desc}</div>
                  <div className="series-ep" style={{color:s.color}}>{s.episodes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop preview */}
      <section className="section shop-sec">
        <div className="inner">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2rem"}}>
            <div>
              <div className="eyebrow">The Store</div>
              <h2 className="sec-title">Faith-centered gifts &amp; goods</h2>
              <p className="sec-sub">Premium Christian lifestyle merchandise for adults and children — thoughtfully crafted and gift-worthy.</p>
            </div>
            <button style={{background:"var(--navy)",color:"var(--ice)",fontFamily:"var(--sans)",fontSize:".85rem",fontWeight:500,padding:".8rem 1.75rem",border:"none",borderRadius:"40px",cursor:"pointer"}} onClick={() => nav("shop")}>Visit the Shop</button>
          </div>
          <div className="shop-tabs">
            {[["adult","For Adults"],["kids","For Kids"]].map(([t,l]) => (
              <button key={t} className={`shop-tab${shopTab===t?" active":""}`} onClick={() => setShopTab(t)}>{l}</button>
            ))}
          </div>
          <div className="prod-grid">
            {(shopTab==="adult"?PRODUCTS_ADULT:PRODUCTS_KIDS).slice(0,4).map(p => (
              <div key={p.name} className="prod-card">
                <div className="prod-img" style={{background:p.bg}}>{p.icon}</div>
                <div className="prod-info">
                  <div className="prod-tag">{p.tag}</div>
                  <div className="prod-name">{p.name}</div>
                  <div className="prod-price"><span>{p.price}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section nl-sec">
        <div className="nl-inner">
          <div className="eyebrow" style={{textAlign:"center"}}>Stay Connected</div>
          <h2 className="nl-title">Join our community</h2>
          <p className="nl-desc">New music, devotional resources, exclusive merch drops, and encouragement for your faith journey — delivered with love.</p>
          {subscribed
            ? <div style={{textAlign:"center",color:"var(--navy)",fontFamily:"var(--serif)",fontSize:"1.3rem",fontStyle:"italic"}}>Welcome to the family! God bless you.</div>
            : <>
                <div className="nl-form">
                  <input className="nl-input" type="email" placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)}/>
                  <button className="btn-p" onClick={() => { if(email) setSubscribed(true); }}>Join Now</button>
                </div>
                <p className="nl-note">No spam, ever. Just faith, music, and encouragement. Unsubscribe anytime.</p>
              </>
          }
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── MUSIC PAGE ── */
  if (page === "music") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-navy" style={{textAlign:"center"}}>
        <button className="back-btn" onClick={() => nav("home")}>← Back to Home</button>
        <div className="tag-row"><div className="tag t">Adult Music &amp; Media</div></div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4rem)",color:"var(--ice)",fontWeight:500,marginBottom:"1rem"}}>Holy and Sweet Music</h1>
        <div className="divider"/>
        <p style={{fontFamily:"var(--serif)",fontSize:"1.15rem",fontStyle:"italic",color:"rgba(238,248,249,.6)",maxWidth:560,margin:"0 auto 2.5rem"}}>Spirit-filled Christian music that lifts hearts, stirs devotion, and glorifies God.</p>
        <div className="hero-btns" style={{justifyContent:"center",flexWrap:"wrap"}}>
<a href="https://www.youtube.com/@HolyandSweetMedia" target="_blank" rel="noopener noreferrer">
  <button className="btn-p">Watch on YouTube</button>
</a>       
<a href="https://open.spotify.com/artist/7eMreZIp9dUKEhzaaaysGY" target="_blank" rel="noopener noreferrer">
  <button className="btn-o">Listen on Spotify</button>
</a>

          <button className="btn-o">Apple Music</button>
        </div>
      </div>
      <section className="section" style={{background:"var(--navy-dk)"}}>
        <div className="inner">
          <div className="platform-grid" style={{marginBottom:"2rem"}}>
            {PLATFORMS.map(p => <div key={p.name} className="plat-card">{p.logo}<div className="plat-name">{p.name}</div><div className="plat-sub">{p.sub}</div></div>)}
          </div>
          <div className="eyebrow" style={{color:"var(--teal-lt)"}}>Featured Songs</div>
          <h2 className="sec-title lt" style={{marginBottom:"2.5rem"}}>Songs for Every Season of Faith</h2>
          <div className="songs-grid">
            {SONGS.map(s => (
              <div key={s.title} className="song-card">
                <div className="song-thumb" style={{background:s.bg}}>{s.icon}</div>
                <div className="song-tag">{s.tag}</div>
                <div className="song-title">{s.title}</div>
                <div className="song-verse">{s.verse}</div>
                <button style={{marginTop:"1rem",background:"var(--teal)",color:"white",border:"none",borderRadius:"24px",padding:".5rem 1.25rem",fontSize:".8rem",fontWeight:600,cursor:"pointer",fontFamily:"var(--sans)"}}>Listen ▶</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{background:"var(--ice2)"}}>
        <div className="inner">
          <div className="about-grid">
            <div className="story-body">
              <div className="eyebrow">About the Music</div>
              <h2 className="sec-title">Written from Prayer &amp; Scripture</h2>
              <p>Every Holy and Sweet song begins in prayer — written from devotion, Scripture, and real ministry experiences. The lyrics are fully human-written, drawn from a heart seeking to honor God through music.</p>
              <p>We use modern production tools to bring these melodies to life, stewarding technology for righteous purposes. Our goal is simple: to create music that draws people closer to Christ — whether in joy, sorrow, worship, or quiet morning prayer.</p>
              <p>From soaring praise anthems to tender devotional ballads, Holy and Sweet music speaks to believers in every season of their walk with God.</p>
            </div>
            <div className="verse-block">
              <p className="verse-text">"Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit."</p>
              <div className="verse-ref">Colossians 3:16</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── KIDS PAGE ── */
  if (page === "kids") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-kids-bg" style={{textAlign:"center"}}>
        <button className="back-btn" onClick={() => nav("home")}>← Back to Home</button>
        <div className="kids-badge" style={{margin:"0 auto 1.5rem"}}>✦ Children's Christian Media</div>
        <h1 style={{fontFamily:"var(--kids)",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,color:"white",marginBottom:".5rem"}}>Holy and Sweet Kids</h1>
        <div style={{fontFamily:"var(--serif)",fontSize:"1.4rem",fontStyle:"italic",color:"var(--aqua)",marginBottom:"1.25rem"}}>Train Up A Child</div>
        <p style={{fontSize:"1rem",color:"rgba(255,255,255,.65)",maxWidth:560,margin:"0 auto 2.5rem",lineHeight:1.8}}>Joyful songs, Bible stories, animated original series, and early learning — where little hearts grow in love, faith, and wonder.</p>
        <div style={{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"}}>  
<a href="https://www.youtube.com/@HolyandSweet" target="_blank" rel="noopener noreferrer">
  <button className="btn-kids">Watch on YouTube</button>
</a>

          <button className="btn-o">Browse All Videos</button>
        </div>
      </div>
      <section className="section kids-sec" style={{padding:"5rem 2rem"}}>
        <div className="inner" style={{position:"relative",zIndex:1}}>
          <div className="eyebrow" style={{color:"var(--aqua)"}}>Original Series</div>
          <h2 className="sec-title lt" style={{marginBottom:"2.5rem"}}>Stories That Shape Little Hearts</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.25rem"}}>
            {KIDS_SERIES.map(s => (
              <div key={s.name} className="series-card" style={{background:s.bg}}>
                <div className="series-icon">{s.icon}</div>
                <div style={{fontFamily:"var(--kids)",fontSize:"1.15rem",fontWeight:800,color:s.color,marginBottom:".5rem"}}>{s.name}</div>
                <div style={{color:"rgba(255,255,255,.7)",fontSize:".85rem",lineHeight:1.65}}>{s.desc}</div>
                <div style={{fontSize:".72rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",marginTop:".85rem",color:s.color,opacity:.7}}>{s.episodes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{background:"var(--navy-dk)"}}>
        <div className="inner">
          <div className="eyebrow" style={{color:"var(--teal-lt)"}}>Featured Videos</div>
          <h2 className="sec-title lt" style={{marginBottom:"2.5rem"}}>Start Watching Today</h2>
          <div className="vid-grid">
            {VIDEOS_KIDS.map(v => (
              <div key={v.title} className="vid-card">
                <div className="vid-thumb" style={{background:v.bg}}>{v.icon}<div className="play-btn">▶</div></div>
                <div className="vid-info" style={{background:"rgba(255,255,255,.04)"}}>
                  <div className="vid-series">{v.series}</div>
                  <div className="vid-title">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{background:"var(--ice2)"}}>
        <div className="inner">
          <div className="eyebrow">For Parents &amp; Educators</div>
          <h2 className="sec-title" style={{marginBottom:".5rem"}}>Resources &amp; Downloads</h2>
          <p className="sec-sub" style={{marginBottom:"2.5rem"}}>Free tools for homeschool families, Sunday school teachers, and Christian parents.</p>
          <div className="big-grid">
            {[["Coloring Pages","Free printable coloring pages for every Bible story episode."],["Activity Sheets","Worksheet bundles to reinforce each episode's virtue and Scripture."],["Discussion Guides","Parent-led discussion questions for after each episode."],["Lesson Plans","Full Sunday school and homeschool lesson plans."],["Song Lyrics & Sheets","Download lyrics and chord charts from Tiny Praisers."],["Resource Bundles","Seasonal bundles for classroom or family devotion time."]].map(([t,d]) => (
              <div key={t} className="big-card">
                <h3 style={{fontFamily:"var(--serif)",fontSize:"1.2rem",color:"var(--navy)",marginBottom:".5rem",fontWeight:600}}>{t}</h3>
                <p style={{fontSize:".88rem",color:"var(--txt-muted)",lineHeight:1.7}}>{d}</p>
                <button style={{marginTop:"1.25rem",background:"none",border:"1px solid rgba(8,32,64,.2)",color:"var(--navy)",fontFamily:"var(--sans)",fontSize:".8rem",fontWeight:500,padding:".5rem 1.25rem",borderRadius:"24px",cursor:"pointer",letterSpacing:".06em",textTransform:"uppercase"}}>Download Free →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── SHOP PAGE ── */
  if (page === "shop") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-ice" style={{textAlign:"center"}}>
        <button className="back-btn dk" onClick={() => nav("home")}>← Back to Home</button>
        <div className="tag-row"><div className="tag t">Faith-Centered Goods</div></div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4rem)",color:"var(--navy)",fontWeight:500,marginBottom:".75rem"}}>The Holy &amp; Sweet Shop</h1>
        <div className="divider"/>
        <p style={{fontSize:"1.05rem",color:"var(--txt-muted)",maxWidth:520,margin:"0 auto"}}>Premium Christian lifestyle merchandise — thoughtfully designed and gift-worthy for the whole family.</p>
      </div>
      <section className="section shop-sec" style={{paddingTop:"3rem"}}>
        <div className="inner">
          <div className="shop-tabs">
            {[["adult","For Adults"],["kids","For Kids"],["bundles","Gift Bundles"]].map(([t,l]) => (
              <button key={t} className={`shop-tab${shopTab===t?" active":""}`} onClick={() => setShopTab(t)}>{l}</button>
            ))}
          </div>
          {shopTab==="bundles"
            ? <div className="big-grid">
                {[["The Hope Bundle","Journal, mug, and wall art set.","$75","For Adults"],["The Faith Starter Kit","Devotional notebook, pen set, and calendar.","$55","For Adults"],["The Family Bundle","Devotional book, kids storybook, coloring book, and mugs.","$95","Family"],["The Little Lights Set","Coloring book, flashcards, journal, and plush friend.","$65","For Kids"],["The Worship Bundle","Worship tee, hoodie, and journal.","$88","For Adults"],["The Teacher's Blessing Box","Lesson resources, devotional, activity sheets, and mug.","$72","For Educators"]].map(([n,d,p,t]) => (
                  <div key={n} className="big-card" style={{textAlign:"center"}}>
                    <div style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}}><GiftBoxIcon size={56}/></div>
                    <div style={{fontSize:".7rem",letterSpacing:".1em",textTransform:"uppercase",color:"var(--teal)",marginBottom:".35rem",fontWeight:500}}>{t}</div>
                    <h3 style={{fontFamily:"var(--serif)",fontSize:"1.2rem",color:"var(--navy)",marginBottom:".5rem",fontWeight:600}}>{n}</h3>
                    <p style={{fontSize:".85rem",color:"var(--txt-muted)",lineHeight:1.65,marginBottom:"1rem"}}>{d}</p>
                    <div style={{fontFamily:"var(--sans)",fontSize:"1.1rem",fontWeight:600,color:"var(--navy)",marginBottom:"1rem"}}>{p}</div>
                    <button className="btn-p" style={{width:"100%"}}>Add to Cart</button>
                  </div>
                ))}
              </div>
            : <>
                <div className="merch-grid">
                  {(shopTab==="adult"?PRODUCTS_ADULT:PRODUCTS_KIDS).map(p => (
                    <div key={p.name} className="prod-card">
                      <div className="prod-img" style={{background:p.bg}}>{p.icon}</div>
                      <div className="prod-info">
                        <div className="prod-tag">{p.tag}</div>
                        <div className="prod-name">{p.name}</div>
                        <div className="prod-price"><span>{p.price}</span></div>
                        <button style={{marginTop:".75rem",width:"100%",background:"var(--navy)",color:"var(--ice)",border:"none",borderRadius:"8px",padding:".6rem",fontSize:".82rem",fontWeight:500,cursor:"pointer",fontFamily:"var(--sans)"}}>Add to Cart</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:"3rem",background:"var(--teal-pale)",borderRadius:"20px",padding:"2.5rem",textAlign:"center",border:"1px solid rgba(10,148,148,.2)"}}>
                  <div style={{fontFamily:"var(--serif)",fontSize:"1.5rem",color:"var(--navy)",marginBottom:".5rem",fontWeight:500}}>Print-on-Demand Quality</div>
                  <p style={{fontSize:".95rem",color:"var(--txt-mid)",maxWidth:520,margin:"0 auto 1.5rem",lineHeight:1.75}}>All Holy and Sweet merchandise is produced on demand — premium quality, fast fulfilment, shipped directly to your door.</p>
                  <div style={{display:"flex",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
                    {["✅ Inventory-Free","🚚 Fast Shipping","🖨️ Premium Print","♻️ Sustainably Made"].map(f => (
                      <div key={f} style={{fontSize:".85rem",color:"var(--txt-mid)",fontWeight:500}}>{f}</div>
                    ))}
                  </div>
                </div>
              </>
          }
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── ABOUT PAGE ── */
  if (page === "about") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-deep" style={{textAlign:"center"}}>
        <button className="back-btn" onClick={() => nav("home")}>← Back to Home</button>
        <div className="tag-row"><div className="tag t">Our Story</div></div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4rem)",color:"var(--ice)",fontWeight:500,marginBottom:"1rem"}}>About Holy and Sweet</h1>
        <div className="divider"/>
        <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontStyle:"italic",color:"rgba(238,248,249,.65)",maxWidth:540,margin:"0 auto"}}>Created to encourage families and glorify God through music, stories, and faith-centered media.</p>
      </div>
      <section className="section" style={{background:"var(--ice)"}}>
        <div className="inner">
          <div className="about-grid">
            <div className="story-body">
              <div className="eyebrow">Our Story</div>
              <h2 className="sec-title">A Ministry Born from Prayer</h2>
              <p>Holy and Sweet began as a simple act of devotion — a desire to create music that truly honors God and speaks to the real experiences of believers. Every song is written from prayer, grounded in Scripture, and shaped by genuine ministry experience.</p>
              <p>As the ministry grew, so did the vision. Holy and Sweet Kids was born from a deep conviction in Proverbs 22:6 — "Train up a child in the way he should go." We believe that planting seeds of faith in young hearts matters eternally.</p>
              <p>Today, Holy and Sweet serves believers across every stage of life — from little ones discovering their first Bible stories to adults seeking encouragement in the depths of daily faith.</p>
            </div>
            <div className="verse-block">
              <p className="verse-text">"Train up a child in the way he should go; even when he is old he will not depart from it."</p>
              <div className="verse-ref">Proverbs 22:6</div>
            </div>
          </div>
          <div className="vals-row">
            {[
              [<DoveSmIcon/>,     "Scripture First", "Every song, story, and resource is anchored in the truth of God's Word."],
              [<HeartCrossIcon/>,"Family at Heart",  "We build content that parents trust and children love — together."],
              [<StarCrossIcon/>, "Excellence for God","We pursue premium quality in everything — because God deserves our best."],
              [<GlobeIcon/>,     "Ministry Minded",  "We use every tool available to reach hearts and glorify Christ."],
            ].map(([icon,t,d]) => (
              <div key={t} className="val-card">
                <div className="val-icon">{icon}</div>
                <div className="val-title">{t}</div>
                <div className="val-text">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── RESOURCES PAGE ── */
  if (page === "resources") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-deep" style={{textAlign:"center"}}>
        <button className="back-btn" onClick={() => nav("home")}>← Back to Home</button>
        <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4rem)",color:"var(--ice)",fontWeight:500,marginBottom:"1rem"}}>Resources</h1>
        <div className="divider"/>
        <p style={{fontFamily:"var(--serif)",fontSize:"1.1rem",fontStyle:"italic",color:"rgba(238,248,249,.65)",maxWidth:500,margin:"0 auto"}}>Free tools, downloads, and guides for families, churches, and educators.</p>
      </div>
      <section className="section res-sec">
        <div className="inner">
          <div className="res-grid">
            {[
              [<OpenBibleIcon size={42}/>, "Sunday School Curriculum","Complete lesson plans built around Holy and Sweet Kids series — ages 3–10.","Download Curriculum"],
              [<BooksStackIcon size={42}/>, "Homeschool Resources","Faith-integrated lesson plans and discussion guides for Christian homeschool families.","Access Resources"],
              [<MusicNoteIcon size={42}/>, "Song Devotionals","Short devotional guides built around each Holy and Sweet song for personal or group study.","Download Devotionals"],
              [<ColoringBookIcon/>, "Kids Coloring Packs","Free printable coloring pages tied to every Bible story and animated series episode.","Download Free"],
              [<JournalIcon/>, "Newsletter Archive","Browse past newsletters packed with new music announcements and faith resources.","Browse Archive"],
              [<MicIcon/>, "Booking & Ministry","Book Holy and Sweet for church events, worship nights, school visits, and ministry appearances.","Contact Us"],
            ].map(([icon,title,desc,link]) => (
              <div key={title} className="res-card">
                <div className="res-icon">{icon}</div>
                <div className="res-title">{title}</div>
                <div className="res-desc">{desc}</div>
                <button className="res-link">{link} →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );

  /* ── CONTACT PAGE ── */
  if (page === "contact") return (
    <div className="site">
      <style>{styles}</style><NavBar/>
      <div className="pg-hero pg-ice" style={{textAlign:"center"}}>
        <button className="back-btn dk" onClick={() => nav("home")}>← Back to Home</button>
        <div className="tag-row"><div className="tag t">Get in Touch</div></div>
        <h1 style={{fontFamily:"var(--serif)",fontSize:"clamp(2.5rem,5vw,4rem)",color:"var(--navy)",fontWeight:500,marginBottom:".75rem"}}>Contact Us</h1>
        <div className="divider"/>
        <p style={{fontSize:"1rem",color:"var(--txt-muted)",maxWidth:480,margin:"0 auto"}}>We'd love to hear from you — whether about music, booking, partnerships, or simply to say hello.</p>
      </div>
      <section className="section contact-sec">
        <div className="inner">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Reach Out</div>
              <h2 className="sec-title" style={{marginBottom:"2rem"}}>We're here for you</h2>
              {[
                [<EmailIcon/>, "Email",             "hello@holyandsweetmusic.com"],
                [<MicIcon/>,   "Booking Inquiries", "booking@holyandsweetmusic.com"],
                [<MediaIcon/>,"Licensing & Media",  "media@holyandsweetmusic.com"],
                [<PlayIcon/>, "YouTube",            "Holy and Sweet / Holy and Sweet Kids"],
              ].map(([icon,label,val]) => (
                <div key={label} className="contact-item">
                  <div className="c-icon">{icon}</div>
                  <div><div className="c-label">{label}</div><div className="c-val">{val}</div></div>
                </div>
              ))}
              <div style={{marginTop:"2rem",background:"var(--teal-pale)",borderRadius:"16px",padding:"1.5rem",border:"1px solid rgba(10,148,148,.18)"}}>
                <div style={{fontFamily:"var(--serif)",fontSize:"1rem",color:"var(--navy)",fontStyle:"italic",lineHeight:1.7}}>"Every message is read with care and prayer. We love hearing from our Holy and Sweet family."</div>
              </div>
            </div>
            <div>
              <div className="eyebrow">Send a Message</div>
              <h2 className="sec-title" style={{marginBottom:"2rem"}}>Inquiry Form</h2>
              <div className="fr">
                <div className="fg"><label className="fl">First Name</label><input className="fi" placeholder="Your first name"/></div>
                <div className="fg"><label className="fl">Last Name</label><input className="fi" placeholder="Your last name"/></div>
              </div>
              <div className="fg"><label className="fl">Email Address</label><input className="fi" type="email" placeholder="your@email.com"/></div>
              <div className="fg"><label className="fl">Subject</label>
                <select className="fi">
                  <option>General Inquiry</option>
                  <option>Booking &amp; Ministry</option>
                  <option>Music Licensing</option>
                  <option>Media &amp; Press</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="fg"><label className="fl">Message</label><textarea className="fi" placeholder="Tell us how we can help or encourage you…"/></div>
              <button className="btn-p" style={{width:"100%",padding:"1rem",fontSize:".9rem"}}>Send Message</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );

  return null;
}
