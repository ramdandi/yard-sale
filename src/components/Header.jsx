import { Link, useNavigate } from 'react-router-dom'
import { SALE_TITLE } from '../data/items'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          {SALE_TITLE.split("'s")[0]}<span>'s</span>{SALE_TITLE.includes("'s") ? SALE_TITLE.split("'s")[1] : ''}
        </Link>
        <nav className="site-header__nav">
          <Link to="/">Shop</Link>
          <a href="#payment">Payment</a>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => navigate('/admin')}
            title="Seller Access"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ink-muted)', verticalAlign: 'middle' }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
