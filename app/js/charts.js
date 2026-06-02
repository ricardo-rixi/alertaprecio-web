/**
 * Charts — AlertaPrecio MX
 * Chart.js configurations
 */

let trendChart = null;

function initTrendChart(ctx) {
  if (trendChart) trendChart.destroy();

  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
      datasets: [{
        label: 'Precio Promedio',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.3,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' },
        },
        x: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' },
        },
      },
    },
  });
}

function updateTrendChart(data) {
  if (!trendChart) return;
  trendChart.data.labels = data.map(d => d.day);
  trendChart.data.datasets[0].data = data.map(d => d.avg_price);
  trendChart.update();
}
