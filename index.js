* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f5f7fa;
  color: #1a1a2e;
  min-height: 100vh;
}

/* NAV */
.nav {
  background: #1F4E79;
  padding: 0 1.25rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.nav-brand { display: flex; align-items: center; gap: 10px; }
.nav-logo {
  width: 36px; height: 36px;
  background: rgba(255,255,255,0.15);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 16px;
}
.nav-title { color: #fff; font-size: 16px; font-weight: 600; }
.nav-sub { color: rgba(255,255,255,0.6); font-size: 12px; }
.nav-right { display: flex; align-items: center; gap: 10px; }
.logout-btn {
  background: rgba(255,255,255,0.15);
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: background .2s;
}
.logout-btn:hover { background: rgba(255,255,255,0.25); }

/* LAYOUT */
.page { max-width: 800px; margin: 0 auto; padding: 1.25rem; }

/* CARDS */
.card {
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;
}
.card-title { font-size: 14px; font-weight: 600; color: #555; margin-bottom: 14px; text-transform: uppercase; letter-spacing: .04em; }

/* METRIC GRID */
.metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1rem; }
.metric-card {
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 10px;
  padding: 14px;
  text-align: center;
}
.metric-label { font-size: 11px; color: #888; margin-bottom: 6px; }
.metric-value { font-size: 22px; font-weight: 600; }
.metric-badge {
  display: inline-block;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
}
.badge-green { background: #C6EFCE; color: #1F7A4A; }
.badge-yellow { background: #FFEB9C; color: #9C6500; }
.badge-red { background: #FFC7CE; color: #9C0006; }

/* PROGRESS BARS */
.progress-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.progress-label { font-size: 13px; color: #555; width: 90px; flex-shrink: 0; }
.progress-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; border-radius: 4px; transition: width .5s; }
.progress-val { font-size: 12px; font-weight: 600; width: 56px; text-align: right; }

/* TABLE */
.data-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.data-table th {
  text-align: left;
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: .04em;
  border-bottom: 1px solid #eee;
  background: #fafbfc;
}
.data-table td {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
}
.data-table tr:last-child td { border: none; }
.data-table tr:hover td { background: #fafbfc; }

/* FORM */
.form-group { margin-bottom: 14px; }
.form-group label { display: block; font-size: 13px; font-weight: 500; color: #555; margin-bottom: 5px; }
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  transition: border-color .2s;
}
.form-group input:focus,
.form-group select:focus { outline: none; border-color: #2E75B6; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* BUTTONS */
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all .2s;
}
.btn-primary { background: #1F4E79; color: #fff; }
.btn-primary:hover { background: #2E75B6; }
.btn-secondary { background: #f0f4f8; color: #444; }
.btn-secondary:hover { background: #e2e8f0; }
.btn-danger { background: #FFC7CE; color: #9C0006; }
.btn-danger:hover { background: #ffb3bc; }
.btn-success { background: #C6EFCE; color: #1F7A4A; }
.btn-sm { padding: 6px 12px; font-size: 12px; }
.btn-full { width: 100%; }

/* TABS */
.tabs { display: flex; gap: 4px; border-bottom: 1px solid #e5e9f0; margin-bottom: 1.25rem; }
.tab {
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  color: #888;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all .2s;
}
.tab.active { color: #1F4E79; border-bottom-color: #1F4E79; }
.tab:hover:not(.active) { color: #555; }

/* ALERT ITEMS */
.alert-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 10px;
  margin-bottom: 8px;
}
.alert-name { font-size: 14px; font-weight: 500; }
.alert-detail { font-size: 12px; color: #888; margin-top: 3px; }
.priority-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
}

/* PLAYER LIST */
.player-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: border-color .2s;
}
.player-item:hover { border-color: #2E75B6; }
.player-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #D6E4F0;
  display: flex; align-items: center; justify-content: center;
  font-weight: 600; font-size: 14px; color: #1F4E79;
  flex-shrink: 0;
}

/* LOGIN */
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1F4E79 0%, #2E75B6 100%);
  padding: 1rem;
}
.login-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 360px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}
.login-logo {
  text-align: center;
  margin-bottom: 1.5rem;
}
.login-logo-circle {
  width: 56px; height: 56px;
  background: #1F4E79;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
.login-title { font-size: 20px; font-weight: 700; text-align: center; margin-bottom: 4px; }
.login-sub { font-size: 13px; color: #888; text-align: center; margin-bottom: 1.5rem; }
.login-divider { text-align: center; font-size: 12px; color: #aaa; margin: 12px 0; }
.admin-link { text-align: center; font-size: 13px; color: #888; margin-top: 1rem; }
.admin-link span { color: #2E75B6; cursor: pointer; font-weight: 500; }

/* MODAL */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 200;
  padding: 1rem;
}
.modal {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-title { font-size: 18px; font-weight: 600; margin-bottom: 1.25rem; }
.modal-footer { display: flex; gap: 10px; justify-content: flex-end; margin-top: 1.25rem; }

/* SECTION TITLE */
.section-title {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 10px;
  margin-top: 1.25rem;
}

/* STATS GRID */
.stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 1rem; }
.stat-card {
  background: #fff;
  border: 1px solid #e5e9f0;
  border-radius: 10px;
  padding: 14px 16px;
}
.stat-label { font-size: 12px; color: #888; margin-bottom: 6px; }
.stat-value { font-size: 24px; font-weight: 600; color: #1F4E79; }
.stat-sub { font-size: 11px; color: #aaa; margin-top: 2px; }

/* ERROR / SUCCESS MSG */
.msg-error { background: #FFC7CE; color: #9C0006; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 12px; }
.msg-success { background: #C6EFCE; color: #1F7A4A; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 12px; }

/* BACK BTN */
.back-btn {
  background: none;
  border: none;
  color: #2E75B6;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 1rem;
  padding: 0;
}

/* CHART */
.chart-wrap { width: 100%; height: 200px; margin-top: .5rem; }

/* MOBILE */
@media (max-width: 480px) {
  .metric-grid { grid-template-columns: 1fr 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
