import { Link } from "react-router-dom";
import { stats } from "../data";
import logo from "../images/logo.jpeg";

function HeroSection() {
  return (
    <section className="hero hero--almond" id="hero">
      <div className="hero__animated-bg" aria-hidden="true">
        <span className="almond-branch almond-branch--right" />
        <span className="almond-branch almond-branch--left" />
        <span className="almond-blossom almond-blossom--1" />
        <span className="almond-blossom almond-blossom--2" />
        <span className="almond-blossom almond-blossom--3" />
        <span className="almond-blossom almond-blossom--4" />
        <span className="almond-blossom almond-blossom--5" />
        <span className="root-line root-line--1" />
        <span className="root-line root-line--2" />
        <span className="root-line root-line--3" />
      </div>

      <div className="container hero__grid hero__grid--almond">
        <div className="hero__content hero__content--almond">
          <span className="hero__eyebrow hero__eyebrow--almond">
            למידה רגישה, אישית ומדויקת שמצמיחה שורשים להצלחה
          </span>

          <h1>
            בונים <span>שורשים חזקים</span>
            <br />
            ללמידה, לביטחון ולהצלחה
          </h1>

          <p className="hero__lead hero__lead--almond">
            בשורשים להצלחה כל ילד וילדה מקבלים מרחב לימודי שמבין אותם באמת — עם
            בסיס חזק, קצב נכון, חיזוק ביטחון עצמי ודרך שמאפשרת להתקדם לאורך זמן.
          </p>

          <div className="hero__feature-pills">
            <span>מתמטיקה ושפה</span>
            <span>הוראה מותאמת אישית</span>
            <span>יחס חם ומקצועי</span>
            <span>צמיחה מהשורש</span>
          </div>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary btn--hero">
              לקביעת שיחת היכרות
            </Link>

            <Link to="/about" className="btn btn--ghost btn--hero">
              להכיר את שקד
            </Link>
          </div>

          <div className="hero__stats hero__stats--almond">
            {stats.map((stat) => (
              <article key={stat.text} className="stat-card stat-card--hero">
                <strong>{stat.number}</strong>
                <span>{stat.text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__visual hero__visual--almond" aria-hidden="true">
          <div className="hero-brand-card">
            <div className="hero-brand-card__logo-shell">
              <img
                src={logo}
                alt="שורשים להצלחה"
                className="hero-brand-card__logo"
              />
            </div>

            <div className="hero-brand-card__content">
              <span className="hero-brand-card__tag">שורשים להצלחה</span>
              <h3>למידה שמרגישה בטוחה, בוגרת, רגועה ומקדמת</h3>
              <p>
                שילוב בין מקצועיות, הקשבה, רגישות ומבנה לימודי ברור — כדי לאפשר
                התקדמות אמיתית מהבסיס וליצור קרקע יציבה להמשך.
              </p>
            </div>
          </div>

          {/* <div className="hero-floating-card hero-floating-card--top">
            <strong>עץ שקד</strong>
            <span>סמל לצמיחה, פריחה והתחלה חזקה</span>
          </div>

          <div className="hero-floating-card hero-floating-card--middle">
            <strong>ליווי אישי</strong>
            <span>מקום שרואה את הילד באמת</span>
          </div>

          <div className="hero-floating-card hero-floating-card--bottom">
            <strong>יסודות חזקים</strong>
            <span>למידה עם שורשים עמוקים</span>
          </div> */}

          <div className="hero-tree-illustration">
            <span className="hero-tree-illustration__trunk" />
            <span className="hero-tree-illustration__branch hero-tree-illustration__branch--1" />
            <span className="hero-tree-illustration__branch hero-tree-illustration__branch--2" />
            <span className="hero-tree-illustration__branch hero-tree-illustration__branch--3" />
            <span className="hero-tree-illustration__branch hero-tree-illustration__branch--4" />
            <span className="hero-tree-illustration__canopy hero-tree-illustration__canopy--1" />
            <span className="hero-tree-illustration__canopy hero-tree-illustration__canopy--2" />
            <span className="hero-tree-illustration__canopy hero-tree-illustration__canopy--3" />
            <span className="hero-tree-illustration__canopy hero-tree-illustration__canopy--4" />
            <span className="hero-tree-illustration__root hero-tree-illustration__root--1" />
            <span className="hero-tree-illustration__root hero-tree-illustration__root--2" />
            <span className="hero-tree-illustration__root hero-tree-illustration__root--3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
