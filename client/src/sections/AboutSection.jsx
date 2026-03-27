import SectionHeading from "../components/SectionHeading";

function AboutSection() {
  return (
    <section className="section section--light" id="about">
      <div className="container about">
        <div className="about__photo-frame">
          <div className="about__photo-placeholder">
            כאן תתווסף תמונה מקצועית של שקד
          </div>
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="אודות"
            title="שורשים להצלחה מתחילים בחיבור אישי, מקצועיות ואמונה בדרך"
            description="מקום שמעניק לילדים קרקע יציבה לצמיחה לימודית ורגשית, מתוך יחס אישי אמיתי ולמידה מותאמת."
          />

          <p>
            אני שקד מאיר מוסאי, מורה מוסמכת ומחנכת, ואני מאמינה שלכל ילד וילדה
            מגיע מרחב לימודי שמבין אותם באמת, מחזק את הביטחון העצמי שלהם ומאפשר
            להם להתקדם בקצב הנכון עבורם.
          </p>

          <p>
            בשורשים להצלחה אני משלבת מקצועיות, הקשבה, רגישות ותכנון מדויק של
            תהליך הלמידה, כדי לאפשר צמיחה אמיתית מהבסיס — לא רק לצורך המבחן הבא,
            אלא להמשך הדרך כולה.
          </p>

          <div className="about__points">
            <div>
              <strong>למידה מותאמת אישית</strong>
              <span>תוכנית שמותאמת לצרכים, לקצב ולחוזקות של כל תלמיד.</span>
            </div>

            <div>
              <strong>חיזוק ביטחון עצמי</strong>
              <span>מקום בטוח שמאפשר לשאול, לטעות, להבין ולהצליח.</span>
            </div>

            <div>
              <strong>מקצועיות עם רגישות</strong>
              <span>שילוב בין דיוק לימודי לבין יחס חם, מכיל ומעודד.</span>
            </div>

            <div>
              <strong>בסיס חזק להמשך</strong>
              <span>בניית שורשים אמיתיים להצלחה בלמידה ובתחושת המסוגלות.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
