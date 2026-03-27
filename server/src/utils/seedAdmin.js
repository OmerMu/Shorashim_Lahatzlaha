import bcrypt from 'bcryptjs';
import AdminUser from '../models/AdminUser.js';

export const ensureAdminUser = async () => {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD?.trim();
  const fullName = process.env.ADMIN_FULL_NAME?.trim() || 'שקד';

  if (!email || !password) {
    console.warn('Admin seed skipped: ADMIN_EMAIL or ADMIN_PASSWORD is missing');
    return;
  }

  const existingUser = await AdminUser.findOne({ email });

  if (existingUser) {
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await AdminUser.create({
    fullName,
    email,
    password: hashedPassword,
    role: 'admin',
  });

  console.log(`Admin user created for ${email}`);
};
