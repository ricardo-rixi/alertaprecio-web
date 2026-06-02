/**
 * API Client — AlertaPrecio MX
 * Handles all API calls to the backend with optional JWT auth.
 */

const API_BASE = '/api';

async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('alertaprecio_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `API error: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('[API]', path, err.message);
    return null;
  }
}

// Products
const ProductsAPI = {
  list: () => apiFetch('/products'),
  get: (id) => apiFetch(`/products/${id}`),
  history: (id, limit = 30) => apiFetch(`/products/${id}/history?limit=${limit}`),
  create: (data) => apiFetch('/products', { method: 'POST', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/products/${id}`, { method: 'DELETE' }),
};

// Alerts
const AlertsAPI = {
  list: (limit = 50) => apiFetch(`/alerts?limit=${limit}`),
  markRead: (id) => apiFetch(`/alerts/${id}/read`, { method: 'PATCH' }),
};

// Reports
const ReportsAPI = {
  weekly: () => apiFetch('/report/weekly'),
  summary: () => apiFetch('/report/summary'),
};

// Analysis
const AnalysisAPI = {
  competitors: (productId) => apiFetch(`/analysis/${productId}/competitors`),
  trend: (productId) => apiFetch(`/analysis/${productId}/trend`),
};

// Auth
const AuthAPI = {
  login: (email, password) => apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  register: (data) => apiFetch('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
};
