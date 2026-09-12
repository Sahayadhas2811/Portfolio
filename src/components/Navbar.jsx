import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)

      const sections = ['hero', 'about', 'experience', 'achievements', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer when clicking a link or pressing ESC
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero') }}>
          <span className="brand-mark">SC</span>
          <span className="brand-name">Sahaya Christhu Dhas</span>
        </a>

        <nav className="main-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.id)
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={portfolioData.profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            title="Download Resume PDF"
          >
            <span>Resume</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            >
              <div>
                <div className="mobile-drawer-top">
                  <span className="brand">
                    <span className="brand-mark">SC</span>
                    <span className="brand-name">Menu</span>
                  </span>
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme in menu"
                  >
                    {theme === 'dark' ? '☀' : '☾'}
                  </button>
                </div>

                <nav className="mobile-nav-links">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="mobile-nav-link"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.id)
                      }}
                    >
                      <span>{link.name}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>▹</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mobile-drawer-bottom">
                <a
                  href={portfolioData.profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Download Resume</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17l9.2-9.2M17 17V8H8" />
                  </svg>
                </a>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
                  <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>GitHub</a>
                  <span style={{ color: 'var(--line)' }}>•</span>
                  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>LinkedIn</a>
                  <span style={{ color: 'var(--line)' }}>•</span>
                  <a href={`mailto:${portfolioData.profile.email}`} style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Email</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
