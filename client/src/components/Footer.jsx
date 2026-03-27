import { navLinks, socialLinks } from "../data";
import logo from "../images/logo.jpeg";

function Footer() {
  return (
    <footer className="footer footer--premium">
      <div className="footer__roots" aria-hidden="true">
        <span className="footer__root footer__root--1" />
        <span className="footer__root footer__root--2" />
        <span className="footer__root footer__root--3" />
      </div>

      <div className="container footer__grid footer__grid--premium">
        <div className="footer__intro">
          <div className="footer__brand">
            <div className="footer__logo-shell">
              <img src={logo} alt="שורשים להצלחה" className="footer__logo" />
            </div>

            <div>
              <h3>שורשים להצלחה</h3>
              <p>בהובלת שקד מאיר מוסאי</p>
            </div>
          </div>

          <p className="footer__description">
            שיעורים פרטיים במתמטיקה ובשפה לילדים בגילאי 7–12, עם דגש על צמיחה
            אישית, חיזוק ביטחון עצמי ובניית בסיס יציב להמשך הדרך.
          </p>

          <div className="footer__tagline">
            <span>לומדים</span>
            <span>מתחזקים</span>
            <span>מצליחים</span>
          </div>
        </div>

        <div>
          <h4>ניווט מהיר</h4>
          <div className="footer__links footer__links--premium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <span className="footer__link-dot" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>בואו נדבר</h4>
          <div className="footer__links footer__links--premium">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container footer__bottom footer__bottom--premium">
        <span>© כל הזכויות שמורות לשורשים להצלחה</span>
        <span>פרונטלי במרכז | אונליין בכל הארץ</span>
      </div>
    </footer>
  );
}

export default Footer;
