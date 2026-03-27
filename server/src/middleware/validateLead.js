import { body } from 'express-validator';

const phoneRegex = /^[0-9+\-()\s]{9,20}$/;

export const validateLead = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('יש להזין שם מלא')
    .isLength({ min: 2, max: 120 })
    .withMessage('שם מלא חייב להכיל בין 2 ל-120 תווים'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('יש להזין מספר טלפון')
    .matches(phoneRegex)
    .withMessage('יש להזין מספר טלפון תקין'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('יש להזין כתובת אימייל')
    .isEmail()
    .withMessage('יש להזין כתובת אימייל תקינה')
    .normalizeEmail(),

  body('gradeOrAge')
    .trim()
    .notEmpty()
    .withMessage('יש להזין כיתה או גיל')
    .isLength({ min: 1, max: 50 })
    .withMessage('כיתה או גיל חייבים להכיל עד 50 תווים'),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('יש לבחור מקצוע לימוד')
    .isLength({ min: 2, max: 80 })
    .withMessage('מקצוע לימוד חייב להכיל בין 2 ל-80 תווים'),

  body('message')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 800 })
    .withMessage('ההודעה יכולה להכיל עד 800 תווים בלבד'),
];
