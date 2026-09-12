import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="achievements" className="section achievements-section">
      <div className="section-heading">
        <span className="section-kicker">03 / Honors & Recognition</span>
        <h2 className="section-title">Client & enterprise achievements.</h2>
        <p className="achievements-subtitle">
          Recognized by Prodapt and Verizon leadership for engineering excellence, rapid defect resolution, and critical platform stability enhancements.
        </p>
      </div>

      <div className="achievements-grid">
        {portfolioData.achievements.map((item) => (
          <article className="achievement-card" key={item.id}>
            <div
              className="achievement-image-wrap"
              onClick={() => setSelectedCert(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="achievement-image"
                loading="lazy"
              />
              <div className="achievement-image-overlay">
                <span className="zoom-indicator">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Click to Enlarge Certificate</span>
                </span>
              </div>
              <span className="achievement-metric-pill">{item.metric}</span>
            </div>

            <div className="achievement-content">
              <div className="achievement-header-meta">
                <span className="achievement-issuer">{item.issuer}</span>
                <span className="achievement-date">{item.date}</span>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>

              <div className="achievement-tags">
                {item.tags.map((tag) => (
                  <span className="achievement-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="achievement-footer">
                <button
                  className="view-cert-btn"
                  onClick={() => setSelectedCert(item)}
                >
                  <span>View Certificate</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17l9.2-9.2M17 17V8H8" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Modal for Certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="cert-lightbox"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate lightbox"
              >
                ✕
              </button>

              <div className="cert-lightbox-image-wrap">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-lightbox-image"
                />
              </div>

              <div className="cert-lightbox-meta">
                <div className="cert-lightbox-title-row">
                  <div>
                    <span className="achievement-issuer">{selectedCert.issuer}</span>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: '4px 0 8px' }}>
                      {selectedCert.title}
                    </h3>
                  </div>
                  <span className="achievement-date" style={{ alignSelf: 'flex-start' }}>{selectedCert.date}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                  {selectedCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
