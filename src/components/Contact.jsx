import React, { useState } from 'react'
import { portfolioData } from '../data/portfolioData'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(portfolioData.profile.email).catch(() => {
          fallbackCopy()
        })
      } else {
        fallbackCopy()
      }
    } catch {
      fallbackCopy()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const fallbackCopy = () => {
    const el = document.createElement('textarea')
    el.value = portfolioData.profile.email
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.warn('Fallback copy failed', err)
    }
    document.body.removeChild(el)
  }

  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyPhone = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(portfolioData.profile.rawPhone).catch(() => {
          fallbackCopyText(portfolioData.profile.rawPhone)
        })
      } else {
        fallbackCopyText(portfolioData.profile.rawPhone)
      }
    } catch {
      fallbackCopyText(portfolioData.profile.rawPhone)
    }
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const fallbackCopyText = (text) => {
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.warn('Fallback copy failed', err)
    }
    document.body.removeChild(el)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-grid">
        <div className="contact-info-col">
          <div>
            <span className="section-kicker">06 / Contact</span>
            <h2 className="section-title">Let’s build something extraordinary.</h2>
          </div>

          <p className="contact-lead">
            Whether you have an upcoming project, are looking for a senior full-stack engineer, or simply want to connect, feel free to reach out directly.
          </p>

          <div className="contact-channels">
            {/* Direct Email */}
            <div className="channel-card">
              <div className="channel-left">
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <span className="channel-title">Direct Email</span>
                  <a href={`mailto:${portfolioData.profile.email}`} className="channel-value" style={{ color: 'inherit' }}>
                    {portfolioData.profile.email}
                  </a>
                </div>
              </div>
              <button
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Direct Phone */}
            <div className="channel-card">
              <div className="channel-left">
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="channel-title">Phone / Mobile</span>
                  <a href={`tel:${portfolioData.profile.rawPhone}`} className="channel-value" style={{ color: 'inherit' }}>
                    {portfolioData.profile.phone}
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={`tel:${portfolioData.profile.rawPhone}`}
                  className="copy-button"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                >
                  Call
                </a>
                <button
                  className={`copy-button ${copiedPhone ? 'copied' : ''}`}
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                >
                  {copiedPhone ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div className="channel-left">
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="channel-title">LinkedIn</span>
                  <span className="channel-value">linkedin.com/in/sahayachristhudhas</span>
                </div>
              </div>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>Connect ↗</span>
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div className="channel-left">
                <div className="channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <span className="channel-title">GitHub</span>
                  <span className="channel-value">github.com/Sahayadhas2811</span>
                </div>
              </div>
              <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600 }}>Explore ↗</span>
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                id="contact-name"
                type="text"
                className="form-input"
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Project Brief or Message</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Tell me about your project, timeline, or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="form-submit-btn">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {submitted && (
              <div className="form-success-banner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>Thank you! Your message has been received. I’ll get back to you shortly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
