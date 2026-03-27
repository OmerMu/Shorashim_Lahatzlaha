import express from 'express';
import { createLead, getAllLeads, getLeadById, updateLead } from '../controllers/leadController.js';
import { validateLead } from '../middleware/validateLead.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateLeadAdminUpdate } from '../middleware/validateLeadAdminUpdate.js';

const router = express.Router();

router.post('/', validateLead, createLead);
router.get('/', protectAdmin, getAllLeads);
router.get('/:id', protectAdmin, getLeadById);
router.patch('/:id', protectAdmin, validateLeadAdminUpdate, updateLead);

export default router;
