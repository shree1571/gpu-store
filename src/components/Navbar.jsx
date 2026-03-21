import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ function to close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        GPU Store
      </Link>

      {/* Hamburger Icon */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

        <li>
          <Link to="/login" className="login-btn" onClick={closeMenu}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn" onClick={closeMenu}>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;