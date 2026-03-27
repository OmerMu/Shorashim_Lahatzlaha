import { useEffect, useMemo, useState } from 'react';
import { FaEnvelope, FaMagnifyingGlass, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { adminFetch, clearAdminSession } from '../lib/api';
import LeadStatusBadge from './LeadStatusBadge';

const emptySummary = { total: 0, new: 0, inProgress: 0, closed: 0 };

const statusOptions = [
  { value: 'all', label: 'כל הסטטוסים' },
  { value: 'new', label: 'חדש' },
  { value: 'in_progress', label: 'בטיפול' },
  { value: 'closed', label: 'נסגר' },
];

function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [summary, setSummary] = useState(emptySummary);
  const [selectedLead, setSelectedLead] = useState(null);
  const [filters, setFilters] = useState({ search: '', status: 'all' });
  const [draft, setDraft] = useState({ status: 'new', notes: '', isRead: true, lastContactAt: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [pageError, setPageError] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    if (filters.search.trim()) params.set('search', filters.search.trim());
    if (filters.status && filters.status !== 'all') params.set('status', filters.status);
    const result = params.toString();
    return result ? `?${result}` : '';
  }, [filters]);

  const syncDraftWithLead = (lead) => {
    setDraft({
      status: lead.status,
      notes: lead.notes || '',
      isRead: lead.isRead,
      lastContactAt: lead.lastContactAt ? lead.lastContactAt.slice(0, 10) : '',
    });
  };

  const loadLeads = async () => {
    try {
      setIsLoading(true);
      setPageError('');
      const data = await adminFetch(`/leads${queryString}`);
      const nextLeads = data.data.leads;

      setLeads(nextLeads);
      setSummary(data.data.summary);

      if (!nextLeads.length) {
        setSelectedLead(null);
        return;
      }

      if (selectedLead) {
        const updatedLead = nextLeads.find((lead) => lead._id === selectedLead._id);
        if (updatedLead) {
          setSelectedLead(updatedLead);
          syncDraftWithLead(updatedLead);
          return;
        }
      }

      setSelectedLead(nextLeads[0]);
      syncDraftWithLead(nextLeads[0]);
    } catch (error) {
      if (error.status === 401) {
        clearAdminSession();
        window.location.href = '/admin/login';
        return;
      }

      setPageError(error.message || 'לא הצלחנו לטעון את הלידים.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [queryString]);

  const openLead = async (lead) => {
    try {
      const data = await adminFetch(`/leads/${lead._id}`);
      setSelectedLead(data.data);
      syncDraftWithLead(data.data);
      setSaveMessage('');
    } catch (error) {
      setPageError(error.message || 'לא הצלחנו לפתוח את פרטי הליד.');
    }
  };

  const handleDraftChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDraft((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setSaveMessage('');
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (!selectedLead) return;

    try {
      setIsSaving(true);
      const payload = {
        status: draft.status,
        notes: draft.notes,
        isRead: draft.isRead,
        lastContactAt: draft.lastContactAt || null,
      };

      const data = await adminFetch(`/leads/${selectedLead._id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });

      setSelectedLead(data.data);
      syncDraftWithLead(data.data);
      setSaveMessage(data.message);
      await loadLeads();
    } catch (error) {
      setSaveMessage(error.message || 'שמירת העדכון נכשלה.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-leads-page">
      <section className="admin-summary-grid">
        <article className="admin-summary-card"><span>סה"כ לידים</span><strong>{summary.total}</strong></article>
        <article className="admin-summary-card"><span>חדשים</span><strong>{summary.new}</strong></article>
        <article className="admin-summary-card"><span>בטיפול</span><strong>{summary.inProgress}</strong></article>
        <article className="admin-summary-card"><span>נסגרו</span><strong>{summary.closed}</strong></article>
      </section>

      <section className="admin-panel">
        <div className="admin-panel__header">
          <div>
            <h2>רשימת לידים</h2>
            <p>צפייה בפניות מהאתר, חיפוש מהיר ועדכון הטיפול בכל ליד.</p>
          </div>

          <div className="admin-filters">
            <label className="admin-search">
              <FaMagnifyingGlass />
              <input
                type="text"
                value={filters.search}
                onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
                placeholder="חיפוש לפי שם, טלפון, אימייל או מקצוע"
              />
            </label>

            <select value={filters.status} onChange={(event) => setFilters((prev) => ({ ...prev, status: event.target.value }))}>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {pageError ? <div className="form-message form-message--error">{pageError}</div> : null}

        <div className="admin-leads-layout">
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>שם</th>
                  <th>טלפון</th>
                  <th>מקצוע</th>
                  <th>כיתה / גיל</th>
                  <th>תאריך</th>
                  <th>סטטוס</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr><td colSpan="6">טוען לידים...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan="6">לא נמצאו לידים לפי הסינון שבחרת.</td></tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} onClick={() => openLead(lead)} className={selectedLead?._id === lead._id ? 'is-selected' : ''}>
                      <td><div className="admin-table__name"><strong>{lead.fullName}</strong>{!lead.isRead ? <span className="admin-dot" /> : null}</div></td>
                      <td>{lead.phone}</td>
                      <td>{lead.subject}</td>
                      <td>{lead.gradeOrAge}</td>
                      <td>{new Date(lead.createdAt).toLocaleDateString('he-IL')}</td>
                      <td><LeadStatusBadge status={lead.status} /></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <div className="admin-mobile-leads">
              {isLoading ? (
                <div className="admin-empty-state"><p>טוען לידים...</p></div>
              ) : leads.length === 0 ? (
                <div className="admin-empty-state"><p>לא נמצאו לידים לפי הסינון שבחרת.</p></div>
              ) : (
                leads.map((lead) => (
                  <button type="button" key={lead._id} className={`admin-mobile-card ${selectedLead?._id === lead._id ? 'is-selected' : ''}`} onClick={() => openLead(lead)}>
                    <div className="admin-mobile-card__top">
                      <div>
                        <strong>{lead.fullName}</strong>
                        <span>{lead.subject} · {lead.gradeOrAge}</span>
                      </div>
                      <LeadStatusBadge status={lead.status} />
                    </div>
                    <div className="admin-mobile-card__meta">
                      <span>{lead.phone}</span>
                      <span>{new Date(lead.createdAt).toLocaleDateString('he-IL')}</span>
                    </div>
                    {!lead.isRead ? <span className="admin-mobile-card__new">חדש</span> : null}
                  </button>
                ))
              )}
            </div>
          </div>

          <aside className="admin-lead-details">
            {selectedLead ? (
              <>
                <div className="admin-lead-details__header">
                  <div>
                    <h3>{selectedLead.fullName}</h3>
                    <p>התקבל בתאריך {new Date(selectedLead.createdAt).toLocaleString('he-IL')}</p>
                  </div>
                  <LeadStatusBadge status={selectedLead.status} />
                </div>

                <div className="admin-contact-links">
                  <a href={`tel:${selectedLead.phone}`} className="social-chip"><FaPhone /><span>חיוג</span></a>
                  <a href={`mailto:${selectedLead.email}`} className="social-chip"><FaEnvelope /><span>מייל</span></a>
                  <a href={`https://wa.me/972${selectedLead.phone.replace(/\D/g, '').replace(/^0/, '')}`} target="_blank" rel="noreferrer" className="social-chip"><FaWhatsapp /><span>וואטסאפ</span></a>
                </div>

                <div className="admin-info-list">
                  <div><strong>טלפון:</strong> <span>{selectedLead.phone}</span></div>
                  <div><strong>אימייל:</strong> <span>{selectedLead.email}</span></div>
                  <div><strong>כיתה / גיל:</strong> <span>{selectedLead.gradeOrAge}</span></div>
                  <div><strong>תחום לימוד:</strong> <span>{selectedLead.subject}</span></div>
                  <div><strong>הודעת הפנייה:</strong> <span>{selectedLead.message || 'לא הוזנה הודעה.'}</span></div>
                </div>

                <form className="admin-update-form" onSubmit={handleSave}>
                  <label className="field">
                    <span>סטטוס טיפול</span>
                    <select name="status" value={draft.status} onChange={handleDraftChange}>
                      {statusOptions.filter((option) => option.value !== 'all').map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>

                  <label className="field">
                    <span>תאריך יצירת קשר אחרון</span>
                    <input type="date" name="lastContactAt" value={draft.lastContactAt} onChange={handleDraftChange} />
                  </label>

                  <label className="field">
                    <span>הערות פנימיות</span>
                    <textarea name="notes" rows="5" value={draft.notes} onChange={handleDraftChange} placeholder="למשל: שוחחתי עם ההורה, נקבעה שיחת התאמה ליום ראשון" />
                  </label>

                  <label className="admin-checkbox">
                    <input type="checkbox" name="isRead" checked={draft.isRead} onChange={handleDraftChange} />
                    <span>סמן ליד כנקרא</span>
                  </label>

                  <button type="submit" className="btn btn--primary" disabled={isSaving}>
                    {isSaving ? 'שומר...' : 'שמירת שינויים'}
                  </button>

                  {saveMessage ? (
                    <div className={`form-message ${saveMessage.includes('נכשל') ? 'form-message--error' : 'form-message--success'}`}>
                      {saveMessage}
                    </div>
                  ) : null}
                </form>
              </>
            ) : (
              <div className="admin-empty-state">
                <h3>בחרו ליד לצפייה</h3>
                <p>ניתן ללחוץ על אחד הלידים מהרשימה כדי לצפות בפרטים ולעדכן את הטיפול.</p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

export default LeadsPage;
