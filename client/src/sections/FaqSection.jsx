import SectionHeading from '../components/SectionHeading';
import { faqItems } from '../data';

function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="שאלות נפוצות"
          title="כמה תשובות קצרות לפני שמתחילים"
          description="כדי לעזור לכם לקבל החלטה בשקט ובביטחון, ריכזנו כמה שאלות נפוצות של הורים."
          centered
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
