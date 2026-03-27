import { body } from 'express-validator';

export const validateLeadAdminUpdate = [
  body('status')
    .optional()
    .isIn(['new', 'in_progress', 'closed'])
    .withMessage('סטטוס לא תקין'),
  body('notes')
    .optional()
    .trim()
    .isLength({ max: 1200 })
    .withMessage('הערות יכולות להכיל עד 1200 תווים'),
  body('isRead')
    .optional()
    .isBoolean()
    .withMessage('שדה isRead חייב להיות true או false'),
  body('lastContactAt')
    .optional({ nullable: true })
    .custom((value) => value === null || !Number.isNaN(Date.parse(value)))
    .withMessage('תאריך יצירת קשר אינו תקין'),
];
