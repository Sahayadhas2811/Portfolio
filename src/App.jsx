import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Achievements } from './components/Achievements'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { Cursor } from './components/Cursor'

import './styles/app.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) return savedTheme
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light'
    }
    return 'dark'
  })

  const [activeProject, setActiveProject] = useState(null)

  // Sync theme with document and localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)

    const root = document.documentElement
    const body = document.body

    if (theme === 'light') {
      root.classList.remove('dark', 'theme-dark')
      root.classList.add('light', 'theme-light')
      body.classList.remove('theme-dark')
      body.classList.add('theme-light')
    } else {
      root.classList.remove('light', 'theme-light')
      root.classList.add('dark', 'theme-dark')
      body.classList.remove('theme-light')
      body.classList.add('theme-dark')
    }
  }, [theme])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.95,
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animId = requestAnimationFrame(raf)

    // Connect Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      cancelAnimationFrame(animId)
      lenis.destroy()
    }
  }, [])

  // GSAP Entrance and Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal sections smoothly
      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          autoAlpha: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true
          }
        })
      })

      // Timeline items staggered entrance
      gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 35,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            once: true
          }
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={`app theme-${theme}`}>
      <Cursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects setActiveProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
