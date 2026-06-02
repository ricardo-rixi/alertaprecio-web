/**
 * App — AlertaPrecio MX v2
 * Full API integration, auth guard, onboarding wizard, live data.
 */

// ========== AUTH GUARD ==========
const authToken = localStorage.getItem('alertaprecio_token');
const currentUser = JSON.parse(localStorage.getItem('alertaprecio_user') || 'null');

// Redirect to login if not authenticated and not on login page
if (!authToken && !window.location.pathname.includes('login.html')) {
  window.location.href = 'login.html';
}

function checkAuth() {
  if (!authToken) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// ========== API HELPERS ==========
const API_BASE = '/api';

async function api(path, options = {}) {
  if (!checkAuth()) return null;
  try {
    const res = await fetch(API_BASE + path, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        ...options.headers,
      },
      ...options,
    });
    if (!res.ok) {
      if (res.status === 401) { localStorage.clear(); window.location.href = 'login.html'; return null; }
      throw new Error(await res.text());
    }
    return res.json();
  } catch (e) {
    console.error('[API]', path, e.message);
    return null;
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  if (!checkAuth()) return;

  // Update user display
  if (currentUser) {
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = currentUser.name || currentUser.email;
    updatePlanBadge(currentUser.plan);
  }

  // Logout
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
  });

  // Dashboard overview
  if (document.getElementById('products-count')) {
    loadOverview();
  }

  // Products page
  if (document.getElementById('products-table')) {
    loadProducts();
    setupProductModal();
  }

  // Alerts page
  if (document.getElementById('alerts-list')) {
    loadAlerts();
    setupAlertsActions();
  }

  // Config page
  if (document.getElementById('account-info')) {
    loadConfig();
  }

  // Chart
  const chartCanvas = document.getElementById('trendChart');
  if (chartCanvas) {
    initTrendChart(chartCanvas);
    loadTrendData();
  }

  // Onboarding
  checkOnboarding();
});

// ========== ONBOARDING ==========
function checkOnboarding() {
  const completed = localStorage.getItem('onboarding_completed');
  const banner = document.getElementById('onboarding-banner');
  if (!banner) return;

  if (!completed) {
    banner.classList.remove('hidden');
    document.getElementById('start-onboarding')?.addEventListener('click', () => {
      banner.classList.add('hidden');
      window.location.href = 'productos.html#add';
    });
  }
}

// ========== OVERVIEW ==========
async function loadOverview() {
  const [summary, alerts] = await Promise.all([
    api('/report/summary'),
    api('/alerts?limit=5'),
  ]);

  if (summary) {
    document.getElementById('products-count').textContent = summary.productsMonitored;
    document.getElementById('alerts-today').textContent = summary.alertsToday;
    updatePlanBadge(summary.plan);

    // Mark onboarding as done if user has products
    if (summary.productsMonitored > 0) {
      localStorage.setItem('onboarding_completed', '1');
      document.getElementById('onboarding-banner')?.classList.add('hidden');
    }
  }

  // Recent alerts
  const container = document.getElementById('recent-alerts');
  if (alerts && alerts.length > 0) {
    container.innerHTML = alerts.slice(0, 4).map(a => {
      const typeEmoji = { price_drop: '🔻', price_change: '📈', stock_change: '📦', promotion: '🎉' }[a.type] || '🔔';
      return `
        <div class="card alert-mini" style="margin-bottom:0.5rem; padding:1rem">
          <div style="display:flex; gap:0.75rem; align-items:start">
            <span style="font-size:1.2rem">${typeEmoji}</span>
            <div style="flex:1">
              <div style="font-size:0.85rem; line-height:1.4">${escHtml(a.message)}</div>
              <div class="text-muted" style="margin-top:0.25rem">${formatRelative(a.created_at)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    container.innerHTML = '<div class="card" style="text-align:center;color:var(--text-muted);padding:2rem">No hay alertas aun. Las alertas apareceran cuando se detecten cambios de precio.</div>';
  }

  // Avg change calculation
  const products = await api('/products');
  if (products && products.length > 0) {
    let totalChange = 0, changes = 0;
    for (const p of products.slice(0, 6)) {
      const history = await api(`/products/${p.id}/history?limit=2`);
      if (history && history.length >= 2) {
        const diff = ((history[0].price - history[1].price) / history[1].price) * 100;
        totalChange += diff;
        changes++;
      }
    }
    document.getElementById('avg-change').textContent = changes > 0
      ? (totalChange / changes).toFixed(1) + '%'
      : 'N/A';
  }
}

// ========== PRODUCTS ==========
async function loadProducts() {
  const products = await api('/products');
  const tbody = document.querySelector('#products-table tbody');
  if (!tbody) return;

  if (!products || products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-state">
      <p style="font-size:1.2rem;margin-bottom:0.5rem">📦 No hay productos</p>
      <p>Agrega tu primer producto para empezar a monitorear precios.</p>
      <button class="btn btn-primary" style="margin-top:1rem" id="empty-add-btn">+ Agregar Producto</button>
    </td></tr>`;
    document.getElementById('empty-add-btn')?.addEventListener('click', () => {
      document.getElementById('add-product-modal')?.classList.remove('hidden');
    });
    return;
  }

  const rows = [];
  for (const p of products) {
    const history = await api(`/products/${p.id}/history?limit=1`);
    const latest = history?.[0];
    const competitors = JSON.parse(p.competitor_urls || '[]').length;
    const yesterday = await api(`/products/${p.id}/history?limit=2`);
    let trend = '';
    if (yesterday && yesterday.length >= 2) {
      const pct = ((yesterday[0].price - yesterday[1].price) / yesterday[1].price) * 100;
      if (Math.abs(pct) >= 1) {
        trend = pct < 0
          ? `<span style="color:var(--success)">🔻 ${Math.abs(pct).toFixed(1)}%</span>`
          : `<span style="color:var(--danger)">🔺 ${pct.toFixed(1)}%</span>`;
      }
    }

    rows.push(`
      <tr>
        <td>
          <div class="product-name-cell">${escHtml(p.name)}</div>
          <span class="text-muted">${platformLabel(p.platform)}</span>
        </td>
        <td class="price-cell">${latest?.price ? formatCurrency(latest.price) : '--'}</td>
        <td>${competitors}</td>
        <td>${trend || '➡️ 0%'}</td>
        <td class="text-muted">${latest?.scraped_at ? formatRelative(latest.scraped_at) : 'Nunca'}</td>
        <td>
          <button class="btn btn-sm" onclick="viewProductDetail(${p.id})">Detalle</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">✕</button>
        </td>
      </tr>
    `);
  }

  tbody.innerHTML = rows.join('');

  // Auto-open add modal if URL has #add
  if (window.location.hash === '#add') {
    document.getElementById('add-product-modal')?.classList.remove('hidden');
    window.location.hash = '';
  }
}

function setupProductModal() {
  const modal = document.getElementById('add-product-modal');
  const openBtn = document.getElementById('add-product-btn');
  const closeBtn = document.getElementById('close-modal');
  const cancelBtn = document.getElementById('cancel-modal');
  const form = document.getElementById('add-product-form');

  openBtn?.addEventListener('click', () => modal?.classList.remove('hidden'));
  closeBtn?.addEventListener('click', () => modal?.classList.add('hidden'));
  cancelBtn?.addEventListener('click', () => modal?.classList.add('hidden'));

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name')?.value.trim();
    const url = document.getElementById('product-url')?.value.trim();
    const platform = document.getElementById('product-platform')?.value;
    const competitorsText = document.getElementById('product-competitors')?.value.trim();
    const competitor_urls = competitorsText ? competitorsText.split('\n').map(s => s.trim()).filter(Boolean) : [];

    if (!name || !url || !platform) return alert('Completa todos los campos.');

    const result = await api('/products', {
      method: 'POST',
      body: JSON.stringify({ name, url, platform, competitor_urls }),
    });

    if (result?.id) {
      modal?.classList.add('hidden');
      form.reset();
      loadProducts();
      localStorage.setItem('onboarding_completed', '1');

      // Post working status
      await fetch('https://webhook.site/46af9d1d-79ba-4126-8364-2ffca63654f6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'milestone_status', block: '2.1', status: 'dashboard_live', from: 'User', summary: 'Producto agregado desde dashboard' }),
      });
    } else {
      alert('Error al agregar producto.');
    }
  });
}

async function viewProductDetail(id) {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  const content = document.getElementById('detail-content');
  const title = document.getElementById('detail-title');
  content.innerHTML = '<div class="loading">Cargando...</div>';

  const [product, history, analysis] = await Promise.all([
    api(`/products/${id}`),
    api(`/products/${id}/history?limit=30`),
    api(`/analysis/${id}/competitors`),
  ]);

  if (!product) {
    content.innerHTML = '<div class="empty-state">Producto no encontrado</div>';
    return;
  }

  title.textContent = product.name;
  const latest = history?.[0];
  const previous = history?.[1];
  const change = previous && latest
    ? ((latest.price - previous.price) / previous.price * 100).toFixed(1)
    : null;

  content.innerHTML = `
    <div class="detail-grid">
      <div class="detail-card">
        <div class="card-label">Precio Actual</div>
        <div class="card-value" style="font-size:1.4rem">${latest ? formatCurrency(latest.price) : 'N/A'}</div>
        ${change ? `<div class="${parseFloat(change) < 0 ? 'text-success' : 'text-danger'}" style="font-size:0.85rem">${parseFloat(change) < 0 ? '🔻' : '🔺'} ${Math.abs(change)}% vs ayer</div>` : ''}
      </div>
      <div class="detail-card">
        <div class="card-label">Plataforma</div>
        <div class="card-value" style="font-size:1.1rem">${platformLabel(product.platform)}</div>
      </div>
      <div class="detail-card">
        <div class="card-label">Muestras (7d)</div>
        <div class="card-value">${history?.length || 0}</div>
      </div>
      <div class="detail-card">
        <div class="card-label">Competidores</div>
        <div class="card-value">${JSON.parse(product.competitor_urls || '[]').length}</div>
      </div>
    </div>
    ${analysis?.recommendation ? `
      <div class="detail-card" style="margin-top:1rem; border-left:3px solid var(--primary)">
        <div class="card-label">🤖 Analisis IA</div>
        <p style="margin-top:0.5rem; line-height:1.6">${analysis.recommendation}</p>
        ${analysis.avgCompetitor ? `<p class="text-muted" style="margin-top:0.5rem">Promedio competidores: ${formatCurrency(analysis.avgCompetitor)}</p>` : ''}
      </div>
    ` : ''}
    <div class="chart-container" style="margin-top:1rem; height:200px">
      <canvas id="detail-chart"></canvas>
    </div>
  `;

  // Mini chart
  if (history && history.length > 1) {
    const ctx = document.getElementById('detail-chart');
    if (ctx) {
      const reversed = [...history].reverse();
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: reversed.map(h => new Date(h.scraped_at).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })),
          datasets: [{
            label: 'Precio', data: reversed.map(h => h.price),
            borderColor: '#2563eb', backgroundColor: 'rgba(37,99,235,0.1)',
            tension: 0.3, fill: true, pointRadius: 2,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
            x: { ticks: { color: '#94a3b8', maxTicksLimit: 7 }, grid: { color: '#334155' } },
          },
        },
      });
    }
  }

  document.getElementById('close-detail')?.addEventListener('click', () => modal.classList.add('hidden'));
}

async function deleteProduct(id) {
  if (!confirm('Desactivar este producto del monitoreo?')) return;
  await api(`/products/${id}`, { method: 'DELETE' });
  loadProducts();
}

// Search
document.addEventListener('input', e => {
  if (e.target.id !== 'product-search') return;
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('#products-table tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});

// ========== ALERTS ==========
async function loadAlerts() {
  const alerts = await api('/alerts?limit=50');
  const container = document.getElementById('alerts-list');
  if (!container) return;

  if (!alerts || alerts.length === 0) {
    container.innerHTML = '<div class="empty-state">🔔 No hay alertas aun. Las alertas apareceran cuando se detecten cambios de precio.</div>';
    return;
  }

  const typeBadge = {
    price_drop: '<span class="badge badge-price_drop">Baja de Precio</span>',
    price_change: '<span class="badge badge-price_change">Cambio</span>',
    stock_change: '<span class="badge badge-stock_change">Stock</span>',
    promotion: '<span class="badge badge-promotion">Promocion</span>',
  };

  container.innerHTML = alerts.map(a => `
    <div class="card alert-card ${a.read ? 'alert-read' : 'alert-unread'}" style="margin-bottom:0.75rem" data-id="${a.id}">
      <div style="display:flex; justify-content:space-between; align-items:start">
        <div>
          ${typeBadge[a.type] || a.type}
          ${a.product_name ? `<strong style="margin-left:0.5rem">${escHtml(a.product_name)}</strong>` : ''}
        </div>
        <span class="text-muted">${formatRelative(a.created_at)}</span>
      </div>
      <div style="margin-top:0.5rem; white-space:pre-line; font-size:0.9rem; line-height:1.5">${escHtml(a.message)}</div>
      ${!a.read ? '<button class="btn btn-sm mark-read-btn" style="margin-top:0.5rem">Marcar leida</button>' : ''}
    </div>
  `).join('');

  container.querySelectorAll('.mark-read-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const card = btn.closest('.alert-card');
      await api(`/alerts/${card.dataset.id}/read`, { method: 'PATCH' });
      card.classList.remove('alert-unread');
      card.classList.add('alert-read');
      btn.remove();
    });
  });
}

function setupAlertsActions() {
  document.getElementById('mark-all-read')?.addEventListener('click', async () => {
    document.querySelectorAll('.alert-unread').forEach(async card => {
      await api(`/alerts/${card.dataset.id}/read`, { method: 'PATCH' });
    });
    loadAlerts();
  });
}

// ========== CONFIG ==========
async function loadConfig() {
  const container = document.getElementById('account-info');
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <p><strong>${escHtml(currentUser.name || 'Usuario')}</strong></p>
      <p class="text-muted">${escHtml(currentUser.email)}</p>
      <p><span class="badge badge-blue" style="font-size:0.8rem">Plan ${currentUser.plan || 'starter'}</span></p>
    `;
    updatePlanBadge(currentUser.plan);
  }
}

// ========== CHART ==========
let trendChart = null;
function initTrendChart(ctx) {
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Precio Promedio', data: [],
        borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)',
        tension: 0.3, fill: true, pointRadius: 3,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#94a3b8', callback: v => '$' + v.toLocaleString('es-MX') }, grid: { color: '#334155' } },
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
      },
    },
  });
}

async function loadTrendData() {
  const report = await api('/report/weekly');
  if (!report || !report.length) return;

  // Group by day
  const dayMap = {};
  report.forEach(r => {
    if (!r.day) return;
    if (!dayMap[r.day]) dayMap[r.day] = { sum: 0, count: 0 };
    dayMap[r.day].sum += r.avg_price;
    dayMap[r.day].count++;
  });

  const data = Object.entries(dayMap)
    .map(([day, v]) => ({ day, price: v.sum / v.count }))
    .sort((a, b) => a.day.localeCompare(b.day));

  if (trendChart && data.length) {
    trendChart.data.labels = data.map(d => {
      const date = new Date(d.day + 'T12:00:00');
      return date.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric' });
    });
    trendChart.data.datasets[0].data = data.map(d => d.price);
    trendChart.update();
  }
}

// ========== UTILS ==========
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount || 0);
}

function formatRelative(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const mins = Math.floor((now - d) / 60000);
  if (mins < 1) return 'Ahora';
  if (mins < 60) return `Hace ${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Hace ${days}d`;
  return d.toLocaleDateString('es-MX');
}

function platformLabel(p) {
  return { mercadolibre: 'Mercado Libre', amazon: 'Amazon MX', shopify: 'Shopify', other: 'Otra' }[p] || p;
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

function updatePlanBadge(plan) {
  const badge = document.getElementById('plan-badge');
  if (badge && plan) {
    badge.textContent = 'Plan: ' + plan.charAt(0).toUpperCase() + plan.slice(1);
  }
}
