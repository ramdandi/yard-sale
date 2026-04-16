import { useState, useMemo } from 'react'
import { items, categories, SALE_TITLE, SALE_SUBTITLE, SALE_LOCATION, WHATSAPP_NUMBER, VENMO_HANDLE, ZELLE_CONTACT } from '../data/items'
import ItemCard from './ItemCard'
import OfferModal from './OfferModal'

export default function StoreFront() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showSold, setShowSold] = useState(false)
  const [offerItem, setOfferItem] = useState(null)

  const filtered = useMemo(() => {
    return items.filter(item => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory
      const soldMatch = showSold || item.status !== 'sold'
      return categoryMatch && soldMatch
    })
  }, [activeCategory, showSold])

  const available = items.filter(i => i.status === 'available').length
  const sold = items.filter(i => i.status === 'sold').length
  const hold = items.filter(i => i.status === 'hold').length

  const waLink = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I found your yard sale and have a question.")}`
    : null

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <p className="hero__eyebrow">Moving Sale · All Items Must Go</p>
        <h1 className="hero__title">
          {SALE_TITLE.includes("'s") ? (
            <>
              {SALE_TITLE.split("'s")[0]}<em>'s</em>{SALE_TITLE.split("'s")[1]}
            </>
          ) : (
            <em>{SALE_TITLE}</em>
          )}
        </h1>
        <p className="hero__subtitle">{SALE_SUBTITLE}</p>
        <div className="hero__meta">
          <div className="hero__meta-item">
            <strong>{available}</strong>
            <span>Available</span>
          </div>
          {hold > 0 && (
            <div className="hero__meta-item">
              <strong>{hold}</strong>
              <span>On Hold</span>
            </div>
          )}
          {sold > 0 && (
            <div className="hero__meta-item">
              <strong>{sold}</strong>
              <span>Sold</span>
            </div>
          )}
          <div className="hero__meta-item">
            <strong>{SALE_LOCATION}</strong>
            <span>Pickup</span>
          </div>
        </div>
      </section>

      {/* Sale Conditions Banner */}
      <section className="sale-conditions">
        <div className="container">
          <h2 className="sale-conditions__title">Sale Details & Pickup Information</h2>
          <div className="sale-conditions__grid">
            <div className="sale-conditions__item">
              <p className="sale-conditions__label">Pickup Location</p>
              <p className="sale-conditions__value">Cupertino, CA</p>
            </div>
            <div className="sale-conditions__item">
              <p className="sale-conditions__label">First Come, First Served</p>
              <p className="sale-conditions__value">No holds, please</p>
            </div>
            <div className="sale-conditions__item">
              <p className="sale-conditions__label">Pricing</p>
              <p className="sale-conditions__value">Negotiable • Discounts on bulk purchases</p>
            </div>
            <div className="sale-conditions__item">
              <p className="sale-conditions__label">Payment Methods</p>
              <p className="sale-conditions__value">Cash, Venmo, or Zelle</p>
            </div>
            <div className="sale-conditions__item" style={{ gridColumn: '1 / -1' }}>
              <p className="sale-conditions__label">Questions?</p>
              <p className="sale-conditions__value">WhatsApp: <a href="https://wa.me/919202735672" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>+91-92027-35672</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="filters__inner">
          <span className="filters__label">Filter</span>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <button
            className={`filter-btn${showSold ? ' active' : ''}`}
            onClick={() => setShowSold(s => !s)}
            style={{ marginLeft: 'auto' }}
          >
            {showSold ? 'Hide sold' : 'Show sold'}
          </button>
        </div>
      </div>

      {/* Grid */}
      <section className="items-section">
        <p className="items-count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
        <div className="items-grid">
          {filtered.length > 0 ? (
            filtered.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                onOfferClick={setOfferItem}
              />
            ))
          ) : (
            <div className="no-items">
              <h3>No items found</h3>
              <p>Try a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Payment & Contact Info */}
      <section id="payment" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--gutter) 4rem' }}>
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
            How it works
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {[
              { step: '01', title: 'Browse & Offer', body: 'Find something you love and submit an offer. No obligation — just express interest.' },
              { step: '02', title: 'We Coordinate', body: 'You\'ll hear back by email' + (WHATSAPP_NUMBER ? ' or WhatsApp' : '') + ' to confirm your offer and schedule pickup.' },
              { step: '03', title: 'Pick Up & Pay', body: `Payment by cash or Venmo (${VENMO_HANDLE}) / Zelle (${ZELLE_CONTACT}) at pickup. Location shared upon confirmation.` },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ background: 'var(--white)', padding: '2rem 1.75rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--rule)', marginBottom: '0.75rem' }}>{step}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>

          {waLink && (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--ink)',
                  color: 'var(--white)',
                  padding: '0.75rem 2rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                💬 Questions? Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {offerItem && (
        <OfferModal item={offerItem} onClose={() => setOfferItem(null)} />
      )}
    </>
  )
}
