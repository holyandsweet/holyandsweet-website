import {
  YouTubeLogo,
  SpotifyLogo,
  AppleMusicLogo,
  AmazonMusicLogo
} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          
          <div>
            <div className="f-logo">
              Holy <span>&</span> Sweet
            </div>

            <div className="f-tag">
              "Sing and make music in your hearts to the Lord." — Eph. 5:19
            </div>

            <div className="f-social">
              {[
                <YouTubeLogo size={18} />,
                <SpotifyLogo size={18} />,
                <AppleMusicLogo size={18} />,
                <AmazonMusicLogo size={18} />
              ].map((icon, i) => (
                <div key={i} className="soc">{icon}</div>
              ))}
            </div>
          </div>

          {/* ✅ EXPLORE LINKS */}
          <div>
            <div className="f-col-title">Explore</div>

            <a href="/" className="f-link">Home</a>
            <a href="/music" className="f-link">Adult Music</a>
            <a href="/kids" className="f-link">Kids Channel</a>
            <a href="/shop" className="f-link">Shop</a>
          </div>

          {/* ✅ DISCOVER LINKS */}
          <div>
            <div className="f-col-title">Discover</div>

            <a href="/about" className="f-link">About Us</a>
            <a href="/resources" className="f-link">Resources</a>
            <a href="/contact" className="f-link">Contact</a>
            <a href="/contact" className="f-link">Booking</a>
          </div>

          {/* ✅ LISTEN LINKS */}
          <div>
            <div className="f-col-title">Listen</div>

            <a href="https://www.youtube.com/@HolyandSweetMedia" target="_blank" rel="noopener noreferrer" className="f-link">
              YouTube
            </a>

            <a href="https://open.spotify.com/artist/7eMreZIp9dUKEhzaaaysGY" target="_blank" rel="noopener noreferrer" className="f-link">
              Spotify
            </a>

            <div className="f-link">Apple Music</div>
            <div className="f-link">Amazon Music</div>
          </div>

        </div>

        <div className="f-bottom">
          <div className="f-copy">
            © 2025 Holy and Sweet. Faith-filled media for the whole family.
          </div>

          <div className="f-verse">
            Created to encourage families and glorify God.
          </div>
        </div>

      </div>
    </footer>
  );
}
