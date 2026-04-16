import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { items, WHATSAPP_NUMBER } from '../data/items'
import OfferModal from './OfferModal'

const PlaceholderIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
)

export default function ItemDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [offerItem, setOfferItem] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  const item = items.find(i => i.id === id)

  if (!item) {
    return (
      <div className="detail-page" style={{ textAlign: 'center', paddingTop: '6rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Item not found.</p>
        <button className="detail-back" onClick={() => navigate('/')}>← Back to all items</button>
      </div>
    )
  }

  const images = item.images || (item.image ? [item.image] : [])
  const isSold = item.status === 'sold'
  const isHold = item.status === 'hold'

  const waLink = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi! I'm interested in "${item.title}" listed for $${item.price}. Can we discuss?`
      )}`
    : null

  return (
    <>
      <div className="detail-page">
        <button className="detail-back" onClick={() => navigate('/')}>← All items</button>

        <div className="detail-inner">
          {/* Gallery */}
          <div>
            <div className="detail-image-wrap">
              {images.length > 0 ? (
                <img src={images[activeImg]} alt={`${item.title} — photo ${activeImg + 1}`} />
              ) : (
                <PlaceholderIcon />
              )}
            </div>

            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      width: '64px', height: '48px', padding: 0, border: 'none',
                      outline: i === activeImg ? '2px solid var(--ink)' : '2px solid transparent',
                      cursor: 'pointer', overflow: 'hidden', flexShrink: 0,
                      opacity: i === activeImg ? 1 : 0.55,
                      transition: 'opacity 0.15s, outline 0.15s',
                    }}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="detail-info">
            <p className="detail-info__category">{item.category}</p>
            <h1 className="detail-info__title">{item.title}</h1>
            <p className="detail-info__condition">{item.condition} condition</p>
            <p className="detail-info__desc">{item.description}</p>

            <div className="detail-meta">
              {item.dimensions && (
                <div className="detail-meta__row">
                  <span>Dimensions</span>
                  <span>{item.dimensions}</span>
                </div>
              )}
              <div className="detail-meta__row">
                <span>Condition</span>
                <span>{item.condition}</span>
              </div>
              <div className="detail-meta__row">
                <span>Category</span>
                <span>{item.category}</span>
              </div>
            </div>

            {item.note && <p className="detail-info__note">📌 {item.note}</p>}

            <p className="detail-info__price">${item.price.toLocaleString()}</p>

            <button
              className="btn-offer"
              style={{ width: '100%', padding: '0.875rem', fontSize: '0.78rem', marginBottom: '0.75rem' }}
              disabled={isSold || isHold}
              onClick={() => setOfferItem(item)}
            >
              {isSold ? 'This item has been sold' : isHold ? 'Currently on hold' : 'Make an Offer'}
            </button>

            {waLink && !isSold && !isHold && (
              <a href={waLink} target="_blank" rel="noreferrer" style={{
                display: 'block', textAlign: 'center', padding: '0.875rem',
                border: '1px solid var(--rule)', fontSize: '0.72rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)',
              }}>
                💬 Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {offerItem && <OfferModal item={offerItem} onClose={() => setOfferItem(null)} />}
    </>
  )
}
