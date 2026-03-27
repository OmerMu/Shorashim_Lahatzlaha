import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAdminToken } from '../lib/api';

function AdminRoute() {
  const location = useLocation();
  const token = getAdminToken();

  if (!token) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default AdminRoute;
