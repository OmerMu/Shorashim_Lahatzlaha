import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../data";
import logo from "../images/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar navbar--orchard ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="container navbar__inner">
        <Link to="/" className="brand brand--orchard">
          <div className="brand__logo-shell">
            <img src={logo} alt="שורשים להצלחה" className="brand__logo" />
            <span className="brand__logo-ring" />
          </div>

          <div className="brand__text">
            <strong>שורשים להצלחה</strong>
          </div>
        </Link>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className={`navbar__menu ${isOpen ? "is-open" : ""}`}>
          <nav className="nav-links nav-links--route" aria-label="ניווט ראשי">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            {/* <Link to="/contact" className="btn btn--secondary btn--small">
              יצירת קשר
            </Link> */}

            <Link
              to="/contact"
              className="btn btn--primary btn--small navbar__cta"
            >
              לתיאום שיחת היכרות
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
