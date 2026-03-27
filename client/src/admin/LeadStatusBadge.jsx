const labels = {
  new: 'חדש',
  in_progress: 'בטיפול',
  closed: 'נסגר',
};

function LeadStatusBadge({ status }) {
  return <span className={`lead-status lead-status--${status}`}>{labels[status] || status}</span>;
}

export default LeadStatusBadge;
