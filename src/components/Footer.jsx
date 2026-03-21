import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3>GPU Store</h3>
      <p>High performance graphics cards for gaming and AI</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        © 2026 GPU Store. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;