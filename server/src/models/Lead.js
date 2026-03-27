import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'יש להזין שם מלא'],
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    phone: {
      type: String,
      required: [true, 'יש להזין מספר טלפון'],
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, 'יש להזין כתובת אימייל'],
      trim: true,
      lowercase: true,
      maxlength: 120,
    },
    gradeOrAge: {
      type: String,
      required: [true, 'יש להזין כיתה או גיל'],
      trim: true,
      maxlength: 50,
    },
    subject: {
      type: String,
      required: [true, 'יש לבחור מקצוע לימוד'],
      trim: true,
      maxlength: 80,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 800,
      default: '',
    },
    status: {
      type: String,
      enum: ['new', 'in_progress', 'closed'],
      default: 'new',
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 1200,
      default: '',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    lastContactAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Lead', leadSchema);
