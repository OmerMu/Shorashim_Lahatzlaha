import SectionHeading from '../components/SectionHeading';

function AboutSection() {
  return (
    <section className="section section--light" id="about">
      <div className="container about">
        <div className="about__image">
          <div className="about__photo-frame">
            <div className="about__photo-placeholder">
              <span>כאן תתווסף בהמשך תמונה מקצועית של שקד</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="אודות"
            title="נעים מאוד, אני שקד מאיר מוסאי"
            description="מורה מוסמכת ומחנכת, בעלת תואר ראשון בחינוך ותעודת הסמכה להוראה מותאמת במתמטיקה ובשפה."
          />

          <p>
            הקמתי את שורשים להצלחה מתוך אמונה שלכל ילד וילדה מגיעה הזדמנות
            ללמוד בקצב שמתאים להם, להרגיש מובנים, ולבנות בסיס לימודי יציב
            מתוך הצלחה אמיתית.
          </p>

          <p>
            אני מעבירה שיעורים פרטיים במתמטיקה ובשפה, עם דגש על צמצום פערים,
            חיזוק מיומנויות למידה ובניית ביטחון עצמי. העבודה נעשית במקביל
            לחומר הנלמד בבית הספר, תוך שימוש במגוון שיטות הוראה והתאמה אישית
            לצרכים של כל תלמיד.
          </p>

          <div className="about__points">
            <div>
              <strong>הוראה מותאמת אישית</strong>
              <span>בניית תהליך לימודי לפי הקצב, היכולת והצרכים של כל ילד</span>
            </div>

            <div>
              <strong>חום, מקצועיות וסבלנות</strong>
              <span>יצירת סביבה בטוחה, נעימה ומקדמת שמחזקת גם ידע וגם ביטחון עצמי</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
