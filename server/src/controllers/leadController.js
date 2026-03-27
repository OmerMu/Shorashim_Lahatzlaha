import { validationResult } from 'express-validator';
import Lead from '../models/Lead.js';

export const createLead = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'יש שגיאות בטופס, נא לבדוק את הנתונים שהוזנו.',
        errors: errors.array(),
      });
    }

    const { fullName, phone, email, gradeOrAge, subject, message } = req.body;

    const newLead = await Lead.create({
      fullName,
      phone,
      email,
      gradeOrAge,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: 'הפרטים נקלטו בהצלחה. נחזור אליכם בהקדם.',
      data: {
        id: newLead._id,
        fullName: newLead.fullName,
        createdAt: newLead.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllLeads = async (req, res, next) => {
  try {
    const { search = '', status = 'all' } = req.query;

    const filters = {};

    if (status !== 'all') {
      filters.status = status;
    }

    if (search.trim()) {
      filters.$or = [
        { fullName: { $regex: search.trim(), $options: 'i' } },
        { phone: { $regex: search.trim(), $options: 'i' } },
        { email: { $regex: search.trim(), $options: 'i' } },
        { subject: { $regex: search.trim(), $options: 'i' } },
      ];
    }

    const leads = await Lead.find(filters).sort({ createdAt: -1 });

    const summary = {
      total: await Lead.countDocuments(),
      new: await Lead.countDocuments({ status: 'new' }),
      inProgress: await Lead.countDocuments({ status: 'in_progress' }),
      closed: await Lead.countDocuments({ status: 'closed' }),
    };

    res.status(200).json({
      success: true,
      data: {
        leads,
        summary,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getLeadById = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'הליד המבוקש לא נמצא.',
      });
    }

    if (!lead.isRead) {
      lead.isRead = true;
      await lead.save();
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

export const updateLead = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'יש שגיאה בנתונים שנשלחו לעדכון.',
        errors: errors.array(),
      });
    }

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'הליד המבוקש לא נמצא.',
      });
    }

    const { status, notes, isRead, lastContactAt } = req.body;

    if (typeof status !== 'undefined') {
      lead.status = status;
    }

    if (typeof notes !== 'undefined') {
      lead.notes = notes;
    }

    if (typeof isRead !== 'undefined') {
      lead.isRead = isRead;
    }

    if (typeof lastContactAt !== 'undefined') {
      lead.lastContactAt = lastContactAt || null;
    }

    await lead.save();

    res.status(200).json({
      success: true,
      message: 'הליד עודכן בהצלחה.',
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};
