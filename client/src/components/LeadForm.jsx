import { useMemo, useState } from 'react';
import { subjectOptions } from '../data';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  gradeOrAge: '',
  subject: '',
  message: '',
};


function LeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const inputFields = useMemo(
    () => [
      { name: 'fullName', label: 'שם מלא', type: 'text', placeholder: 'השם שלכם' },
      { name: 'phone', label: 'טלפון', type: 'tel', placeholder: '050-0000000' },
      { name: 'email', label: 'אימייל', type: 'email', placeholder: 'name@example.com' },
      { name: 'gradeOrAge', label: 'כיתה / גיל הילד', type: 'text', placeholder: 'כיתה ד׳ / גיל 9' },
    ],
    []
  );

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'יש להזין שם מלא תקין';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      nextErrors.phone = 'יש להזין מספר טלפון תקין';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'יש להזין כתובת אימייל תקינה';
    }

    if (!formData.gradeOrAge.trim()) {
      nextErrors.gradeOrAge = 'יש להזין כיתה או גיל';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'יש לבחור מקצוע לימוד';
    }

    if (formData.message.length > 800) {
      nextErrors.message = 'ההודעה ארוכה מדי';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setServerMessage('');

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      setIsSuccess(false);

      const response = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'אירעה שגיאה בשליחת הטופס');
      }

      setServerMessage(data.message);
      setIsSuccess(true);
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      setServerMessage(error.message || 'אירעה שגיאה בשליחת הטופס');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="lead-form__grid">
        {inputFields.map((field) => (
          <label key={field.name} className="field">
            <span>{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
            {errors[field.name] && <small className="field__error">{errors[field.name]}</small>}
          </label>
        ))}

        <label className="field">
          <span>מקצוע לימוד מבוקש</span>
          <select name="subject" value={formData.subject} onChange={handleChange}>
            <option value="">בחרו מקצוע</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && <small className="field__error">{errors.subject}</small>}
        </label>

        <label className="field field--full">
          <span>הודעה / הערות</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ספרו לנו בקצרה על הצורך הלימודי, הקשיים או המטרה שלכם"
            rows="5"
          />
          {errors.message && <small className="field__error">{errors.message}</small>}
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
        {isSubmitting ? 'שולחים...' : 'לתיאום שיחה והשארת פרטים'}
      </button>

      {serverMessage && (
        <div className={`form-message ${isSuccess ? 'form-message--success' : 'form-message--error'}`}>
          {serverMessage}
        </div>
      )}
    </form>
  );
}

export default LeadForm;
