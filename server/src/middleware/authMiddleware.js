import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';

export const protectAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';

    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'נדרשת התחברות למערכת הניהול.',
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const adminUser = await AdminUser.findById(decoded.id).select('-password');

    if (!adminUser || !adminUser.isActive) {
      return res.status(401).json({
        success: false,
        message: 'המשתמש אינו מורשה לגשת למערכת.',
      });
    }

    req.user = adminUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'ההתחברות פגה או שהטוקן אינו תקין.',
    });
  }
};
