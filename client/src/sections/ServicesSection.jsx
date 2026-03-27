import SectionHeading from '../components/SectionHeading';
import { services } from '../data';

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="השירותים שלנו"
          title="פתרונות למידה מותאמים לילדים ולהורים שרוצים לראות התקדמות"
          description="מבחר מסלולי למידה שנבנו כדי להעניק מענה אישי, מקצועי ונעים לאורך כל הדרך."
          centered
        />

        <div className="cards-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="info-card">
                <div className="info-card__icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
