import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaClipboardList, FaRightFromBracket } from 'react-icons/fa6';
import { clearAdminSession, getAdminUser } from '../lib/api';

function AdminLayout() {
  const navigate = useNavigate();
  const user = getAdminUser();

  const handleLogout = () => {
    clearAdminSession();
    navigate('/admin/login');
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <strong>שורשים להצלחה</strong>
          <span>מערכת ניהול לידים</span>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/leads" className={({ isActive }) => `admin-nav__link ${isActive ? 'is-active' : ''}`}>
            <FaClipboardList />
            <span>לידים</span>
          </NavLink>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div>
            <h1>אזור ניהול</h1>
            <p>שלום {user?.fullName || 'שקד'}, כאן ניתן לצפות בלידים ולעדכן את הטיפול בהם.</p>
          </div>

          <button type="button" className="btn btn--secondary admin-logout" onClick={handleLogout}>
            <FaRightFromBracket />
            <span>התנתקות</span>
          </button>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
