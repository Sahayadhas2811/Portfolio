import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export function Projects({ setActiveProject }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const allProjects = useMemo(() => {
    return [
      ...portfolioData.projects.map((p) => ({ ...p, isEnterprise: true })),
      ...portfolioData.personalProjects.map((p) => ({ ...p, isEnterprise: false }))
    ]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'enterprise') {
      return allProjects.filter((p) => p.isEnterprise)
    }
    if (activeFilter === 'personal') {
      return allProjects.filter((p) => !p.isEnterprise)
    }
    return allProjects
  }, [activeFilter, allProjects])

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header-wrapper">
        <span className="section-kicker">04 / Selected Work</span>
        <h2 className="section-title">Production systems & repositories.</h2>

        <div className="project-filter-tabs" role="tablist" aria-label="Project Categories">
          <button
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
          >
            All Work ({allProjects.length})
          </button>
          <button
            className={`filter-tab ${activeFilter === 'enterprise' ? 'active' : ''}`}
            onClick={() => setActiveFilter('enterprise')}
            role="tab"
            aria-selected={activeFilter === 'enterprise'}
          >
            Enterprise Platforms ({portfolioData.projects.length})
          </button>
          <button
            className={`filter-tab ${activeFilter === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal')}
            role="tab"
            aria-selected={activeFilter === 'personal'}
          >
            GitHub Repositories ({portfolioData.personalProjects.length})
          </button>
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="project-card"
              key={project.repoName || project.title}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <span className="project-card-badge">
                  {project.isEnterprise ? 'Enterprise' : project.language || 'GitHub'}
                </span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-summary">{project.summary}</p>

                <div className="project-card-tech">
                  {project.tech.slice(0, 4).map((tag) => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="project-card-actions">
                  <button
                    className="card-details-btn"
                    onClick={() => setActiveProject(project)}
                  >
                    <span>Know about more</span>
                    <span>→</span>
                  </button>

                  {project.link && project.link !== '#' && (
                    <a
                      className="card-repo-btn"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                    >
                      <span>Repo</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17l9.2-9.2M17 17V8H8" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
