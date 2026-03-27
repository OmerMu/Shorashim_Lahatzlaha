import SectionHeading from "../components/SectionHeading";
import { benefits } from "../data";

function WhyChooseUsSection() {
  return (
    <section
      className="section section--accent section--why-premium"
      id="advantages"
    >
      <div className="container why-us why-us--premium">
        <div className="why-us__content">
          <SectionHeading
            eyebrow="למה דווקא שורשים להצלחה"
            title="כי התקדמות אמיתית מתחילה במקום שנותן לילד שקט, ביטחון ודרך נכונה"
            description="אנחנו לא מחפשים פתרון מהיר בלבד, אלא בונים תהליך לימודי יציב שמצמיח את הילד מבפנים."
          />

          <div className="why-us__quote-card">
            <span className="why-us__quote-mark">״</span>
            <p>
              כשילד מרגיש שמבינים אותו, מתאימים את הדרך אליו ומאמינים בו — הוא
              מתחיל ללמוד אחרת, להתקדם אחרת ולהרגיש אחרת.
            </p>
          </div>
        </div>

        <div className="benefits-list benefits-list--premium">
          {benefits.map((item, index) => (
            <div key={item} className="benefit-item benefit-item--premium">
              <span className="benefit-item__check benefit-item__check--premium">
                0{index + 1}
              </span>
              <div>
                <strong>יתרון משמעותי</strong>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
