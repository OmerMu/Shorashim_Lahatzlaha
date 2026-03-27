import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data';

function GallerySection() {
  return (
    <section className="section section--light" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="גלריה והשראה"
          title="חוויה לימודית נעימה, צבעונית ומקצועית"
          description="אזור ויזואלי שמעביר תחושה של למידה חיובית, מרחב בטוח והצלחה מתמשכת."
          centered
        />

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article key={item.title} className={`gallery-card gallery-card--${index + 1}`}>
              <div className="gallery-card__overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
