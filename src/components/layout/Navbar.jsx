import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const menuItems = [
  {
    label: "Explore",
    path: "/explore",
  },
  {
    label: "How It Works",
    path: "/how-it-works",
  },
  {
    label: "About",
    path: "/about",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          className="brand-logo"
          onClick={closeMobileMenu}
          aria-label="Swapé Home"
        >
          <span className="brand-logo-mark">
            S
          </span>

          <span className="brand-logo-text">
            Swapé
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="desktop-navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* =========================
            DESKTOP ACTIONS
        ========================== */}
        <div className="navbar-actions">

          {/* Search */}
          <button
            type="button"
            className="navbar-search"
            aria-label="Search"
          >
            <FiSearch />
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="navbar-login"
          >
            Login
          </Link>

          {/* Join */}
          <Link
            to="/register"
            className="navbar-join"
          >
            Join Swapé
            <FiArrowUpRight />
          </Link>
        </div>

        {/* =========================
            MOBILE TOGGLE
        ========================== */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`mobile-navigation ${
          mobileMenuOpen ? "mobile-navigation-open" : ""
        }`}
      >
        <div className="mobile-navigation-inner">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `mobile-navbar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span>{item.label}</span>
              <FiArrowUpRight />
            </NavLink>
          ))}

          <div className="mobile-navigation-divider" />

          <Link
            to="/login"
            onClick={closeMobileMenu}
            className="mobile-login-button"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={closeMobileMenu}
            className="mobile-join-button"
          >
            Join Swapé
            <FiArrowUpRight />
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;