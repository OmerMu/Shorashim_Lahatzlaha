import { body } from 'express-validator';

export const validateAdminLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('יש להזין כתובת אימייל')
    .isEmail()
    .withMessage('יש להזין כתובת אימייל תקינה')
    .normalizeEmail(),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('יש להזין סיסמה')
    .isLength({ min: 6 })
    .withMessage('הסיסמה חייבת להכיל לפחות 6 תווים'),
];
