import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import AdminUser from '../models/AdminUser.js';
import { generateToken } from '../utils/generateToken.js';

export const adminLogin = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'יש שגיאות בטופס ההתחברות.',
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    const user = await AdminUser.findOne({ email: email.toLowerCase() });

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'אימייל או סיסמה שגויים.',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'אימייל או סיסמה שגויים.',
      });
    }

    const token = generateToken({ id: user._id, role: user.role });

    return res.status(200).json({
      success: true,
      message: 'התחברת בהצלחה למערכת הניהול.',
      data: {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};
