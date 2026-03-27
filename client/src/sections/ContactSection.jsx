import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import { contactHighlights, socialLinks } from '../data';

function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact">
        <div className="contact__content">
          <SectionHeading
            eyebrow="יצירת קשר"
            title="רוצים לשמוע איך אפשר לקדם את הילד שלכם?"
            description="השאירו פרטים ונחזור אליכם בהקדם עם מענה אישי, הכוונה והצעה שמתאימה בדיוק לצורך שלכם."
          />

          <div className="contact__highlights">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="contact-highlight">
                  <div className="contact-highlight__icon">
                    <Icon />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="social-row">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-chip">
                  <Icon />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact__form-card">
          <div className="contact__form-header">
            <h3>השאירו פרטים ונחזור אליכם</h3>
            <p>
              מלאו את הטופס הקצר, וניצור קשר בהקדם לתיאום שיחה והיכרות.
            </p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
