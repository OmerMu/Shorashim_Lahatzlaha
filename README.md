# דף נחיתה Full Stack למורה לשיעורים פרטיים

פרויקט Full Stack מלא בעברית וב־RTL עבור עסק לשיעורים פרטיים ולקבוצות לימוד לילדים בגילאי 7–12.

## טכנולוגיות
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose

## מבנה הפרויקט
- `client` – צד לקוח
- `server` – צד שרת

## התקנה
### 1. התקנת כל התלויות
```bash
npm install
npm run install:all
```

### 2. יצירת קובץ סביבה לשרת
בתיקיית `server` צור קובץ `.env` על בסיס `.env.example`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/private_lessons_landing
CLIENT_URL=http://localhost:5173
```

### 3. הרצה
מהתיקייה הראשית:
```bash
npm run dev
```

- השרת ירוץ ב־`http://localhost:5000`
- הלקוח ירוץ ב־`http://localhost:5173`

## מה הפרויקט כולל
- דף נחיתה מלא בעברית וב־RTL
- אזורי Hero, אודות, שירותים, יתרונות, המלצות, גלריה, FAQ, יצירת קשר ופוטר
- טופס לידים עם ולידציה בצד לקוח ובצד שרת
- שמירת לידים ב־MongoDB
- כפתור WhatsApp צף
- עיצוב מודרני, חם, מקצועי ורספונסיבי

## API
### יצירת ליד
`POST /api/leads`

Body לדוגמה:
```json
{
  "fullName": "ישראל ישראלי",
  "phone": "0501234567",
  "email": "parent@example.com",
  "gradeOrAge": "כיתה ד'",
  "subject": "חשבון",
  "message": "אשמח לשמוע על קבוצת תגבור"
}
```

## הערות
- ניתן לחבר בקלות שליחת מייל, מערכת ניהול לידים, dashboard אדמין ועוד.
- כל הטקסטים באתר נכתבו בעברית מלאה.
