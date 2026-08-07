function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Clause<span>IQ</span>
      </div>

      <ul className="nav-links">
        <li>Features</li>
        <li>How it Works</li>
        <li>About</li>
      </ul>

      <button className="nav-btn">
        Upload PDF
      </button>
    </nav>
  );
}

export default Navbar;