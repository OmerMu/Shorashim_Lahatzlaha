import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiUrl, setAdminSession } from '../lib/api';

const initialForm = {
  email: '',
  password: '',
};

function AdminLoginPage() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'ההתחברות נכשלה.');
      }

      setAdminSession(data.data);
      const nextPath = location.state?.from || '/admin/leads';
      navigate(nextPath, { replace: true });
    } catch (loginError) {
      setError(loginError.message || 'ההתחברות נכשלה.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <span className="section-heading__eyebrow">כניסה למערכת הניהול</span>
        <h1>ניהול הלידים של שורשים להצלחה</h1>
        <p>
          התחברו עם פרטי המנהל כדי לצפות בפניות, לעדכן סטטוס ולהוסיף הערות טיפול.
        </p>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>אימייל מנהל</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@example.com"
            />
          </label>

          <label className="field">
            <span>סיסמה</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="הקלידו סיסמה"
            />
          </label>

          <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
            {isSubmitting ? 'מתחברים...' : 'כניסה לאזור הניהול'}
          </button>

          {error ? <div className="form-message form-message--error">{error}</div> : null}
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
