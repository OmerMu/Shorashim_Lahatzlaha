import { navLinks, socialLinks } from '../data';
import logo from '../images/logo.jpeg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <img src={logo} alt="שורשים להצלחה" className="footer__logo" />
            <div>
              <h3>שורשים להצלחה</h3>
              <p>בהובלת שקד מאיר מוסאי</p>
            </div>
          </div>

          <p>
            שיעורים פרטיים במתמטיקה ובשפה לילדים בגילאי 7–12, עם דגש על
            צמצום פערים, חיזוק מיומנויות למידה ובניית ביטחון עצמי.
          </p>
        </div>

        <div>
          <h4>קישורים מהירים</h4>
          <div className="footer__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>יצירת קשר</h4>
          <div className="footer__links">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <Icon />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© כל הזכויות שמורות לשורשים להצלחה</span>
        <span>פרונטלי במרכז | אונליין בכל הארץ</span>
      </div>
    </footer>
  );
}

export default Footer;
