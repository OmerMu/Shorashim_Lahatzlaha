import express from 'express';
import { adminLogin, getAdminProfile } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateAdminLogin } from '../middleware/validateAdminAuth.js';

const router = express.Router();

router.post('/login', validateAdminLogin, adminLogin);
router.get('/me', protectAdmin, getAdminProfile);

export default router;
