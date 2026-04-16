import { Link } from 'react-router-dom'

const PlaceholderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
)

const STATUS_LABELS = { available: 'Available', hold: 'On Hold', sold: 'Sold' }

export default function ItemCard({ item, onOfferClick }) {
  const isSold = item.status === 'sold'
  const isHold = item.status === 'hold'
  const images = item.images || (item.image ? [item.image] : [])
  const firstImage = images[0] || null

  return (
    <article className={`item-card${isSold ? ' sold' : ''}`}>
      {/* LEFT: Image Column */}
      <div className="item-card__image-wrap">
        {firstImage ? (
          <img src={firstImage} alt={item.title} loading="lazy" />
        ) : (
          <div className="item-card__placeholder"><PlaceholderIcon /></div>
        )}
        {(isSold || isHold) && (
          <span className={`item-card__badge badge--${item.status}`}>
            {STATUS_LABELS[item.status]}
          </span>
        )}
        {images.length > 1 && (
          <span style={{
            position: 'absolute', bottom: '0.6rem', right: '0.6rem',
            background: 'rgba(26,26,24,0.55)', color: '#fff',
            fontSize: '0.6rem', letterSpacing: '0.08em',
            padding: '0.2rem 0.5rem', backdropFilter: 'blur(4px)',
          }}>
            {images.length} photos
          </span>
        )}
      </div>

      {/* RIGHT: Details Column */}
      <div className="item-card__body">
        <div className="item-card__top">
          <p className="item-card__category">{item.category}</p>
          <h2 className="item-card__title">
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="item-card__desc">{item.description}</p>

          <div className="item-card__badges">
            <span className="item-card__badge-info">{item.condition}</span>
            <span className="item-card__badge-info">{images.length} photo{images.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        <div className="item-card__footer">
          <p className="item-card__price">${item.price.toLocaleString()}</p>
          <button
            className="btn-offer"
            disabled={isSold || isHold}
            onClick={() => !isSold && !isHold && onOfferClick(item)}
          >
            {isSold ? 'Sold' : isHold ? 'On Hold' : 'Make an Offer'}
          </button>
        </div>
      </div>
    </article>
  )
}
