import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-dialog"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          ✕
        </button>

        <div className="modal-image-col">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>

        <div className="modal-body">
          <span className="project-card-badge" style={{ position: 'static', width: 'fit-content', marginBottom: '12px' }}>
            {project.category}
          </span>
          <h2 id="modal-project-title" className="project-card-title" style={{ fontSize: '1.6rem' }}>
            {project.title}
          </h2>

          <div className="modal-meta-row">
            <div className="modal-meta-item">
              <span className="modal-meta-lbl">Organization</span>
              <span className="modal-meta-val">{project.company || 'Personal Project'}</span>
            </div>
            <div className="modal-meta-item">
              <span className="modal-meta-lbl">Client / Target</span>
              <span className="modal-meta-val">{project.client || 'GitHub'}</span>
            </div>
          </div>

          <p className="modal-description">{project.details || project.summary}</p>

          <div className="project-card-tech" style={{ marginBottom: '24px' }}>
            {project.tech?.map((tag) => (
              <span className="tech-tag" key={tag}>{tag}</span>
            ))}
          </div>

          {project.link && project.link !== '#' && (
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
              <a
                className="primary-button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 'fit-content' }}
              >
                <span>Open Project Repository</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
