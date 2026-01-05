function drawBarChart(id, data, labels) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext("2d");
  const w = c.width,
    h = c.height;
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(...data);
  const gap = 12;
  const barW = (w - gap * (data.length + 1)) / data.length;
  data.forEach((v, i) => {
    const x = gap + i * (barW + gap);
    const bh = (v / max) * (h - 24);
    ctx.fillStyle = "#00d1b2";
    ctx.fillRect(x, h - 8 - bh, barW, bh);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(labels[i], x + barW / 2, h - 2);
  });
}

function drawLineChart(id, data, labels) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext("2d");
  const w = c.width,
    h = c.height;
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(...data);
  const padding = 20;
  const step = (w - padding * 2) / (data.length - 1);
  ctx.strokeStyle = "#00d1b2";
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = padding + i * step;
    const y = h - padding - (v / max) * (h - padding * 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  // points
  ctx.fillStyle = "#00d1b2";
  data.forEach((v, i) => {
    const x = padding + i * step;
    const y = h - padding - (v / max) * (h - padding * 2);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px sans-serif";
  ctx.textAlign = "center";
  labels.forEach((lab, i) => {
    ctx.fillText(lab, padding + i * step, h - 4);
  });
}

window.addEventListener("load", () => {
  // Example W3Schools-style simple graphics
  drawBarChart("chart-cloud", [70, 85, 60, 90], ["DB", "FS", "S3", "Blk"]);
  drawLineChart(
    "chart-dev",
    [10, 30, 45, 70, 90],
    ["Plan", "Design", "Dev", "QA", "Ship"]
  );
});
