import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaUserGraduate,
  FaUsers,
  FaBrain,
  FaPenFancy,
  FaStar,
  FaRegClock,
  FaHandsHelping,
  FaSeedling,
} from "react-icons/fa";

export const navLinks = [
  { label: "דף הבית", href: "/", to: "/" },
  { label: "אודות", href: "/about", to: "/about" },
  { label: "שירותים", href: "/services", to: "/services" },
  { label: "המלצות", href: "/testimonials", to: "/testimonials" },
  { label: "גלריה", href: "/gallery", to: "/gallery" },
  { label: "שאלות נפוצות", href: "/faq", to: "/faq" },
  { label: "צור קשר", href: "/contact", to: "/contact" },
];

export const stats = [
  { number: "יחס אישי", text: "מותאם לכל תלמיד ותלמידה" },
  { number: "בסיס חזק", text: "בונים שורשים יציבים להמשך הדרך" },
  { number: "למידה עם ביטחון", text: "חיזוק מיומנויות והצלחה לאורך זמן" },
];

export const services = [
  {
    title: "שיעורים פרטיים במתמטיקה",
    description:
      "שיעורים מותאמים אישית להבנה עמוקה, חיזוק הבסיס ותרגול מדויק לפי קצב הילד.",
    icon: FaUserGraduate,
  },
  {
    title: "שיעורים פרטיים בשפה",
    description:
      "קידום קריאה, כתיבה, הבנת הנקרא והבעה בכתב בדרך ברורה, נעימה ומותאמת.",
    icon: FaPenFancy,
  },
  {
    title: "קבוצות לימוד קטנות",
    description:
      "למידה בקבוצה מצומצמת עם יחס אישי, תרגול משותף ואווירה נעימה ומקדמת.",
    icon: FaUsers,
  },
  {
    title: "צמצום פערים לימודיים",
    description:
      "עבודה מסודרת על נושאים מאתגרים והשלמת פערים בצורה סבלנית, הדרגתית ומדויקת.",
    icon: FaBrain,
  },
  {
    title: "חיזוק מיומנויות למידה",
    description:
      "פיתוח אסטרטגיות למידה, ארגון, הבנה, התמדה והרגלים נכונים להצלחה בבית הספר.",
    icon: FaHandsHelping,
  },
  {
    title: "תוכנית מותאמת אישית",
    description:
      "בניית מסלול למידה אישי לפי הכיתה, הקצב, הצרכים והמטרות של כל תלמיד.",
    icon: FaSeedling,
  },
];

export const benefits = [
  "התאמה אישית מלאה לכל תלמיד ולכל תלמידה",
  "שילוב בין מקצועיות, רגישות וסבלנות",
  "עבודה במקביל לחומר הנלמד בבית הספר",
  "דגש על צמצום פערים ובניית בסיס יציב",
  "חיזוק הביטחון העצמי וחוויית ההצלחה",
  "קשר רציף עם ההורים ועדכון על התקדמות",
];

export const testimonials = [
  {
    name: "יעל, אמא לתלמיד בכיתה ד׳",
    text: "מהרגע הראשון הרגשנו שמדובר במורה שרואה את הילד באמת. יש שילוב נדיר של מקצועיות, סבלנות ויכולת לחזק גם את הביטחון העצמי.",
  },
  {
    name: "אורן, אבא לתלמידה בכיתה ה׳",
    text: "הבת שלנו הגיעה עם קושי וחשש גדול ממתמטיקה, ותוך זמן קצר התחילה להגיע לשיעורים בשמחה ולהאמין בעצמה מחדש.",
  },
  {
    name: "מיכל, אמא לתלמיד בכיתה ו׳",
    text: "השיעורים ברורים, מסודרים ומותאמים בדיוק למה שהילד צריך. רואים התקדמות בלימודים וגם הרבה יותר רוגע בבית.",
  },
];

export const galleryItems = [
  {
    title: "למידה באווירה נעימה",
    description:
      "סביבה לימודית רגועה, מזמינה ומקדמת שמאפשרת לילדים להרגיש בטוחים.",
  },
  {
    title: "חומרי לימוד מגוונים",
    description:
      "שילוב של דפי עבודה, עזרים חזותיים ושיטות הוראה מגוונות לפי הצורך.",
  },
  {
    title: "שיעור מותאם אישית",
    description:
      "כל שיעור נבנה מתוך היכרות עם הילד, הקצב שלו והמטרות הלימודיות שלו.",
  },
  {
    title: "התקדמות שמורגשת",
    description: "חיזוק הידע, המיומנויות והביטחון העצמי בדרך עקבית ומעודדת.",
  },
];

export const faqItems = [
  {
    question: "לאילו גילאים השיעורים מתאימים?",
    answer:
      "השיעורים מיועדים לילדים בגילאי 5-12, עם דגש על תלמידי כיתות ד׳–ו׳, בהתאמה אישית לכל רמה וצורך.",
  },
  {
    question: "באילו מקצועות מתקיימים השיעורים?",
    answer:
      "השיעורים מתקיימים בעיקר במתמטיקה ובשפה, עם דגש על חיזוק מיומנויות למידה וצמצום פערים.",
  },
  {
    question: "האם יש אפשרות גם לשיעור פרטי וגם לקבוצה?",
    answer:
      "כן. עיקר העבודה כיום הוא בשיעורים פרטיים, ובנוסף קיימת אפשרות לקבוצות לימוד קטנות לפי התאמה.",
  },
  {
    question: "איך יודעים מה מתאים לילד שלי?",
    answer:
      "לאחר השארת פרטים מתקיימת שיחת היכרות קצרה, ובה נבין את הצרכים, האתגרים והמטרות ונמליץ על המסלול המתאים.",
  },
];

export const socialLinks = [
  {
    label: "וואטסאפ",
    href: "https://wa.me/972509510457",
    icon: FaWhatsapp,
    text: "שליחת הודעה מהירה",
    className: "is-whatsapp",
  },
  {
    label: "אינסטגרם",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    text: "תוכן, השראה ועדכונים",
    className: "is-instagram",
  },
  {
    label: "פייסבוק",
    href: "https://www.facebook.com/profile.php?id=61586730581432",
    icon: FaFacebookF,
    text: "עמוד העסק בפייסבוק",
    className: "is-facebook",
  },
  {
    label: "טלפון",
    href: "tel:0509510457",
    icon: FaPhoneAlt,
    text: "שיחה ישירה לתיאום",
    className: "is-phone",
  },
  {
    label: "אימייל",
    href: "mailto:info@shorashim-learning.co.il",
    icon: FaEnvelope,
    text: "ליצירת קשר במייל",
    className: "is-email",
  },
];

export const contactHighlights = [
  {
    icon: FaRegClock,
    title: "מענה מהיר ואישי",
    text: "נחזור אליכם בהקדם כדי להכיר, להבין את הצורך ולבנות התאמה נכונה.",
  },
  {
    icon: FaHandsHelping,
    title: "ליווי מקצועי ומכיל",
    text: "תהליך לימודי שנבנה מתוך הקשבה, סבלנות ומבט אישי על כל ילד.",
  },
  {
    icon: FaStar,
    title: "דרך בטוחה להתקדמות",
    text: "מקום שמחזק ידע, מיומנויות וביטחון עצמי באווירה נעימה ומעודדת.",
  },
];

export const subjectOptions = [
  "מתמטיקה",
  "שפה",
  "חיזוק מיומנויות למידה",
  "צמצום פערים",
  "קבוצת לימוד קטנה",
  "אחר",
];
