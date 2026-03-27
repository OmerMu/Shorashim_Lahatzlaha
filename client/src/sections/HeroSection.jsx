import { stats } from '../data';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow">שיעורים פרטיים במתמטיקה ובשפה לילדים בגילאי 7–12</span>

          <h1>שורשים להצלחה מתחילים בלמידה מותאמת אישית</h1>

          <p>
            בהובלת שקד מאיר מוסאי, מורה מוסמכת ומחנכת, עם התמחות בהוראה
            מותאמת במתמטיקה ובשפה. השיעורים נבנים לפי הקצב והצרכים של כל
            תלמיד, מתוך מטרה לחזק ידע, מיומנויות למידה וביטחון עצמי.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              השאירו פרטים
            </a>
            <a href="#about" className="btn btn--secondary">
              הכירו את שקד
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <article key={stat.text} className="stat-card">
                <strong>{stat.number}</strong>
                <span>{stat.text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-card hero-card--main">
            <span className="hero-card__tag">למידה שמקדמת באמת</span>
            <h3>חיזוק לימודי, מיומנויות למידה וביטחון עצמי</h3>
            <p>
              עבודה מקצועית במקביל לחומר הנלמד בבית הספר, עם מגוון שיטות
              הוראה והתאמה אישית לכל ילד וילדה.
            </p>
          </div>

          <div className="hero-card hero-card--small hero-card--top">
            שיעורים פרטיים בגישה אישית ומכילה
          </div>

          <div className="hero-card hero-card--small hero-card--bottom">
            פרונטלי במרכז | אונליין בכל הארץ
          </div>

          <div className="hero__illustration">
            <span className="bubble bubble--one"></span>
            <span className="bubble bubble--two"></span>
            <span className="bubble bubble--three"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
