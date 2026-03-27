import SectionHeading from '../components/SectionHeading';
import { benefits } from '../data';

function WhyChooseUsSection() {
  return (
    <section className="section section--accent" id="advantages">
      <div className="container why-us">
        <div>
          <SectionHeading
            eyebrow="למה לבחור דווקא בנו"
            title="כי למידה טובה מתחילה בתחושת ביטחון, יחס אישי ואמון"
            description="אנחנו לא רק מלמדים חומר – אנחנו בונים תהליך שמקדם את הילד בצורה רגועה, חיובית ומדויקת."
          />
        </div>

        <div className="benefits-list">
          {benefits.map((item) => (
            <div key={item} className="benefit-item">
              <span className="benefit-item__check">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
