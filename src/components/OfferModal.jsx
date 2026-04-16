import { useState } from 'react'
import {
  FORMSPREE_ID,
  SELLER_NAME,
  VENMO_HANDLE,
  ZELLE_CONTACT,
  WHATSAPP_NUMBER,
} from '../data/items'

export default function OfferModal({ item, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    offerAmount: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const isConfigured = FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID'

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      ...form,
      itemTitle: item.title,
      itemId: item.id,
      askingPrice: item.price,
      _subject: `Offer on "${item.title}" — $${form.offerAmount}`,
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const waLink = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi! I'm interested in "${item.title}" listed for $${item.price} on your yard sale. I'd like to make an offer.`
      )}`
    : null

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="modal__success">
            <div className="modal__success__icon">✓</div>
            <h3>Offer Sent</h3>
            <p>
              Thank you, {form.name}. {SELLER_NAME} will review your offer and be in touch
              at <strong>{form.email}</strong>{form.phone ? ` or ${form.phone}` : ''} shortly.
            </p>
            {waLink && (
              <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
                Want a faster reply?{' '}
                <a href={waLink} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-pale)' }}>
                  Chat on WhatsApp ↗
                </a>
              </p>
            )}
            <button
              onClick={onClose}
              style={{
                marginTop: '1.75rem',
                background: 'var(--ink)',
                color: 'var(--white)',
                border: 'none',
                padding: '0.65rem 2rem',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Back to listings
            </button>
          </div>
        ) : (
          <>
            <p className="modal__eyebrow">Make an Offer</p>
            <h2 className="modal__title">{item.title}</h2>
            <p className="modal__asking">
              Asking price: <strong>${item.price.toLocaleString()}</strong>
            </p>

            {!isConfigured && (
              <div className="setup-notice" style={{ marginBottom: '1.25rem' }}>
                ⚠ Offer form not yet connected.{' '}
                <a href="https://formspree.io" target="_blank" rel="noreferrer">Set up Formspree</a>{' '}
                and add your form ID to <code>src/data/items.js</code>.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="offer-name">Your Name *</label>
                  <input
                    id="offer-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="offer-phone">Phone / WhatsApp</label>
                  <input
                    id="offer-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="offer-email">Email Address *</label>
                <input
                  id="offer-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="offer-amount">Your Offer (USD) *</label>
                <input
                  id="offer-amount"
                  name="offerAmount"
                  type="number"
                  min="1"
                  required
                  value={form.offerAmount}
                  onChange={handleChange}
                  placeholder={`e.g. ${Math.round(item.price * 0.85)}`}
                />
              </div>

              <div className="form-field">
                <label htmlFor="offer-message">Message (optional)</label>
                <textarea
                  id="offer-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Availability for pickup, questions about the item…"
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'sending' || !isConfigured}
              >
                {status === 'sending' ? 'Sending…' : 'Submit Offer'}
              </button>

              {status === 'error' && (
                <p style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: '#c0392b', textAlign: 'center' }}>
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}
            </form>

            {waLink && (
              <p className="modal__note">
                Prefer to chat?{' '}
                <a href={waLink} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
                  Message on WhatsApp ↗
                </a>{' '}
                — mention the item name and your offer.
              </p>
            )}

            <p className="modal__note" style={{ marginTop: waLink ? '0.5rem' : undefined }}>
              Payment accepted via cash or Venmo ({VENMO_HANDLE}) / Zelle ({ZELLE_CONTACT}).
              Pickup coordination will be arranged upon offer acceptance.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
