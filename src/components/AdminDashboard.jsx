import { useState, useEffect } from 'react'
import { items as originalItems, ADMIN_PASSWORD, SELLER_NAME } from '../data/items'

const STORAGE_KEY = 'hridaan_yard_sale_status'

function loadStatuses() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function saveStatuses(statuses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses))
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('ys_admin') === '1')
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [statuses, setStatuses] = useState(loadStatuses)

  const items = originalItems.map(item => ({
    ...item,
    status: statuses[item.id] || item.status,
  }))

  function login(e) {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('ys_admin', '1')
      setAuthed(true)
    } else {
      setPwError(true)
      setTimeout(() => setPwError(false), 2000)
    }
  }

  function logout() {
    sessionStorage.removeItem('ys_admin')
    setAuthed(false)
    setPw('')
  }

  function setStatus(id, status) {
    const updated = { ...statuses, [id]: status }
    setStatuses(updated)
    saveStatuses(updated)
  }

  function resetStatus(id) {
    const updated = { ...statuses }
    delete updated[id]
    setStatuses(updated)
    saveStatuses(updated)
  }

  const available = items.filter(i => i.status === 'available').length
  const hold = items.filter(i => i.status === 'hold').length
  const sold = items.filter(i => i.status === 'sold').length
  const totalValue = items.filter(i => i.status === 'available').reduce((s, i) => s + i.price, 0)
  const earnedValue = items.filter(i => i.status === 'sold').reduce((s, i) => s + i.price, 0)

  if (!authed) {
    return (
      <div className="container">
        <div className="admin-login">
          <h2>Seller Access</h2>
          <p>Enter your password to manage listings.</p>
          <form className="admin-login__form" onSubmit={login}>
            <input
              type="password"
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="Password"
              autoFocus
            />
            {pwError && <p className="admin-error">Incorrect password. Try again.</p>}
            <button type="submit" className="btn-submit">Sign In</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Seller Dashboard</h1>
        <button className="admin-logout" onClick={logout}>Sign Out</button>
      </div>

      {/* Stats */}
      <div className="admin-stats">
        <div className="admin-stat">
          <strong>{available}</strong>
          <span>Available</span>
        </div>
        <div className="admin-stat">
          <strong>{hold}</strong>
          <span>On Hold</span>
        </div>
        <div className="admin-stat">
          <strong>{sold}</strong>
          <span>Sold</span>
        </div>
        <div className="admin-stat">
          <strong>${totalValue.toLocaleString()}</strong>
          <span>Remaining Value</span>
        </div>
        <div className="admin-stat">
          <strong>${earnedValue.toLocaleString()}</strong>
          <span>Earned</span>
        </div>
      </div>

      {/* Items */}
      <p className="admin-section-title">All Listings</p>
      <div className="admin-items">
        {items.map(item => (
          <div key={item.id} className="admin-item">
            <div className="admin-item__info">
              <h3>{item.title}</h3>
              <p>${item.price.toLocaleString()} · {item.condition} · {item.category}</p>
            </div>
            <div className="admin-item__controls">
              <button
                className={`status-btn${item.status === 'available' ? ' active-available' : ''}`}
                onClick={() => setStatus(item.id, 'available')}
              >
                Available
              </button>
              <button
                className={`status-btn${item.status === 'hold' ? ' active-hold' : ''}`}
                onClick={() => setStatus(item.id, 'hold')}
              >
                On Hold
              </button>
              <button
                className={`status-btn${item.status === 'sold' ? ' active-sold' : ''}`}
                onClick={() => setStatus(item.id, 'sold')}
              >
                Sold
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <p className="admin-section-title">Quick Reference</p>
      <div className="payment-info">
        <strong>Offers &amp; Coordination</strong>
        New offers arrive in your email via Formspree. Reply directly to accept or decline.
        Once accepted, share your location and coordinate pickup time.
      </div>
      <div className="payment-info">
        <strong>Payment Reminder</strong>
        Cash at pickup, or Venmo / Zelle before item is released.
        Mark items as "Sold" here once payment is received.
      </div>
      <div className="payment-info">
        <strong>Status Persistence</strong>
        Status changes here are saved to this browser only. To update what buyers see,
        edit the <code>status</code> field in <code>src/data/items.js</code> and redeploy.
        (This takes 1 minute on Netlify.)
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
        Logged in as {SELLER_NAME} · Session resets when tab is closed
      </p>
    </div>
  )
}
