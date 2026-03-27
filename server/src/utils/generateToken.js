import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('חסר JWT_SECRET בקובץ הסביבה של השרת.');
  }

  return jwt.sign(payload, secret, {
    expiresIn: '7d',
  });
};
