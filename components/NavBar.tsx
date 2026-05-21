export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <a href="/" className="nav-logo">
          Holy <span>&</span> Sweet
        </a>
        {/* Links */}
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
}
