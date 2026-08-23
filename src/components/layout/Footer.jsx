import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* ================= TOP FOOTER ================= */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">S</span>
              <span className="footer-logo-text">Swapé</span>
            </Link>

            <p className="footer-description">
              Give your pre-loved clothes a second life.
              Discover, exchange and build a more sustainable wardrobe.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>

            <Link to="/explore">Browse Clothes</Link>
            <Link to="/explore">Women</Link>
            <Link to="/explore">Men</Link>
            <Link to="/explore">Accessories</Link>
          </div>

          {/* Swapé */}
          <div className="footer-column">
            <h4>Swapé</h4>

            <Link to="/about">About Us</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="#">List Your Clothes</Link>
            <Link to="/#">Contact</Link>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>

            <Link to="/help">Help Center</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/shipping">Swap Guidelines</Link>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Swapé. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;