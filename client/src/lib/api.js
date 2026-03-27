export const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const adminTokenKey = 'shorashim_admin_token';
export const adminUserKey = 'shorashim_admin_user';

export const getAdminToken = () => localStorage.getItem(adminTokenKey);

export const getAdminUser = () => {
  const user = localStorage.getItem(adminUserKey);
  return user ? JSON.parse(user) : null;
};

export const setAdminSession = ({ token, user }) => {
  localStorage.setItem(adminTokenKey, token);
  localStorage.setItem(adminUserKey, JSON.stringify(user));
};

export const clearAdminSession = () => {
  localStorage.removeItem(adminTokenKey);
  localStorage.removeItem(adminUserKey);
};

export const adminFetch = async (path, options = {}) => {
  const token = getAdminToken();

  const response = await fetch(`${apiUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.message || 'אירעה שגיאה בבקשה לשרת.';
    const error = new Error(message);
    error.status = response.status;
    error.payload = data;
    throw error;
  }

  return data;
};
