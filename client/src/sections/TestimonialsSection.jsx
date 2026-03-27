import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data';

function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="המלצות מהורים"
          title="מילים שמספרות על הדרך, ההתקדמות והתחושה בבית"
          description="האמון של ההורים הוא חלק חשוב מההצלחה, ולכן חשוב לנו שכל משפחה תרגיש שיש לה שותפה אמיתית לתהליך."
          centered
        />

        <div className="cards-grid cards-grid--testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="testimonial-card__quote">״</div>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
