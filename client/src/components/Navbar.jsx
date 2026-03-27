import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navLinks } from '../data';
import logo from '../images/logo.jpeg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="brand" onClick={handleLinkClick}>
          <img src={logo} alt="שורשים להצלחה" className="brand__logo" />
          <div className="brand__text">
            <strong>שורשים להצלחה</strong>
            <span>שיעורים פרטיים במתמטיקה ובשפה לילדים בגילאי 7–12</span>
          </div>
        </a>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-label={isOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className={`navbar__menu ${isOpen ? 'is-open' : ''}`}>
          <nav className="nav-links" aria-label="ניווט ראשי">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn--primary btn--small navbar__cta" onClick={handleLinkClick}>
            לתיאום שיחה
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
