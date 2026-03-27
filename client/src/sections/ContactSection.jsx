import SectionHeading from "../components/SectionHeading";
import LeadForm from "../components/LeadForm";
import { contactHighlights, socialLinks } from "../data";

function ContactSection() {
  return (
    <section
      className="section section--contact section--contact-premium"
      id="contact"
    >
      <div className="container contact contact--premium">
        <div className="contact__content">
          <SectionHeading
            eyebrow="יצירת קשר"
            title="רוצים לבדוק איך אפשר לקדם את הילד שלכם בדרך רגועה, אישית ומדויקת?"
            description="אפשר להשאיר פרטים בטופס, או ליצור קשר ישיר דרך וואטסאפ, אינסטגרם, טלפון, מייל ופייסבוק."
          />

          <div className="contact__highlights">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="contact-highlight contact-highlight--premium"
                >
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

          <div className="contact-channels">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`contact-channel ${item.className || ""}`}
                >
                  <div className="contact-channel__icon">
                    <Icon />
                  </div>

                  <div className="contact-channel__content">
                    <strong>{item.label}</strong>
                    <span>{item.text}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact__form-card contact__form-card--premium">
          <div className="contact__form-header">
            <h3>השאירו פרטים ונחזור אליכם</h3>
            <p>
              מלאו את הטופס הקצר, ונחזור אליכם בהקדם עם מענה אישי והכוונה למסלול
              המתאים.
            </p>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
