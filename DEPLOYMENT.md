# העלאה ל-Production

## Frontend ב-Vercel
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable:
  - `VITE_API_URL=https://YOUR-SERVER-DOMAIN/api`

## Backend ב-Render
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables:
  - `PORT=5000`
  - `MONGO_URI=...`
  - `CLIENT_URL=https://YOUR-CLIENT-DOMAIN`
  - `ADMIN_URL=https://YOUR-CLIENT-DOMAIN`
  - `JWT_SECRET=...`
  - `ADMIN_FULL_NAME=שקד`
  - `ADMIN_EMAIL=admin@shorashim.co.il`
  - `ADMIN_PASSWORD=...`

## בדיקות אחרי העלאה
1. בדוק ש-`/api/health` מחזיר תשובה תקינה.
2. בדוק שליחת ליד מדף הנחיתה.
3. בדוק התחברות ל-`/admin/login`.
4. בדוק שליד חדש מופיע ב-`/admin/leads`.
