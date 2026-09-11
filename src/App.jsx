import { useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, MeshTransmissionMaterial } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { portfolioData } from './data/portfolioData'
import './styles/app.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light')
    document.body.classList.toggle('theme-dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.92,
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.fromTo(element, {
        autoAlpha: 0,
        y: 60
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%'
        }
      })
    })

    gsap.utils.toArray('#timeline .timeline-item').forEach((element, index) => {
      gsap.fromTo(element, {
        autoAlpha: 0,
        x: -50,
        y: 50,
        rotateY: -10,
        scale: 0.98
      }, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1,
        delay: index * 0.22,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true
        }
      })
    })
  }, [])

  return (
    <div className={`app theme-${theme}`}>
      <Cursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects setActiveProject={setActiveProject} />
        <PersonalProjects setActiveProject={setActiveProject} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

function Navbar({ theme, setTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#hero">
        <span className="brand-mark">SC</span>
        <span className="brand-name">Sahaya Christhu Dhas</span>
      </a>

      <nav className="main-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <span className="sun-icon">{theme === 'dark' ? '☀' : '☾'}</span>
      </button>
    </header>
  )
}

function Hero() {
  const words = ['MERN', 'Full Stack', 'AI']

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="kicker">{portfolioData.profile.title} / 5+ years</div>
          <h1 className="hero-title">
            <span className="hero-line">Building</span>
            <span className="hero-line gradient-text">full-stack</span>
            <span className="hero-line">digital products.</span>
          </h1>

          <div className="hero-word-row">
            {words.map((word, index) => (
              <span className="hero-word" key={word} style={{ animationDelay: `${index * 280}ms` }}>{word}</span>
            ))}
          </div>

          <p className="hero-intro">
            {portfolioData.profile.intro}
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              <span>Explore Work</span>
              <svg viewBox="0 0 24 24" className="button-icon">
                <path d="M5 12h14M13 3l9 9-9 9" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a className="ghost-button" href="mailto:hello@portfolio.dev">Let’s Talk</a>
          </div>

          <div className="hero-stats">
            {portfolioData.stats.slice(0,4).map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <img src={portfolioData.profile.photo} alt={portfolioData.profile.name} className="profile-photo" />
          </div>
          <div className="orb-wrap">
            <Canvas camera={{ position: [0,0,7], fov: 45 }}>
              <PerspectiveCamera makeDefault fov={45} position={[0,0,7]} />
              <ambientLight intensity={0.9} />
              <pointLight position={[10,10,4]} intensity={80} />
              <Float speed={1.4} rotationIntensity={1.8} floatIntensity={2}>
                <mesh position={[0,0,0]}>
                  <icosahedronGeometry args={[1.8,1]} />
                  <MeshTransmissionMaterial thickness={0.7} roughness={0.2} transmission={0.45} color="#8b5cf6" />
                </mesh>
              </Float>
              <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-2.5,-1.4,0]} rotation={[0.2,0.8,0.2]}>
                  <boxGeometry args={[1,1,1]} />
                  <meshStandardMaterial color="#b6ff8a" wireframe />
                </mesh>
              </Float>
              <Float speed={2.2} rotationIntensity={1.6} floatIntensity={2}>
                <mesh position={[2.6,1.5,0]} rotation={[0.8,0.2,0.2]}>
                  <torusGeometry args={[0.9,0.10,16,80]} />
                  <meshStandardMaterial color="#9dffef" wireframe />
                </mesh>
              </Float>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
            </Canvas>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span></span>
      </a>
    </section>
  )
}

function About() {
  const capabilities = portfolioData.skills.slice(0, 6)

  return (
    <section id="about" className="section about-section">
      <div className="section-heading reveal">
        <span className="section-kicker">01 / About</span>
        <h2 className="section-title">Engineering the path from idea to product.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal">
          <div className="about-intro">
            <span className="intro-label">Profile Summary</span>
            <p className="large-copy">
              {portfolioData.about.bio}
            </p>
          </div>
          <p className="support-copy">
            {portfolioData.about.story}
          </p>
          <div className="about-meta">
            <div>
              <span className="meta-label">Base</span>
              <span className="meta-value">{portfolioData.profile.location}</span>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <span className="meta-value">MERN Stack • Full Stack</span>
            </div>
            <div>
              <span className="meta-label">Learning</span>
              <span className="meta-value">AI Engineering</span>
            </div>
          </div>
        </div>

        <div className="tech-stack reveal">
          {capabilities.map((group) => (
            <article className="tech-icon" key={group.category}>
              <span className="tech-icon-inner">
                <span className="tech-icon-code">{group.icon}</span>
                <span className="tech-icon-name">{group.category}</span>
              </span>

              <span className="tech-skill-list">
                {group.skills.map((skill) => (
                  <span className="tech-skill-chip" key={skill}>{skill}</span>
                ))}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading reveal">
        <span className="section-kicker">02 / Experience</span>
        <h2 className="section-title">Career Trajectory.</h2>
      </div>

      <div id="timeline" className="timeline">
        {portfolioData.experience.map((job, index) => (
          <div className="timeline-item" key={job.company}>
            <div className="timeline-node"></div>
            <div className="timeline-card">
              <div className="timeline-card-top">
                <div className="timeline-company-wrap">
                  <span className="timeline-company">{job.company}</span>
                  <span className="timeline-client">Client: {job.client}</span>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>

              <div className="timeline-card-body">
                <div className="timeline-role-wrap">
                  <span className="timeline-role-label">Role</span>
                  <h3 className="timeline-role">{job.role}</h3>
                </div>
                <ul className="timeline-list">
                  {job.achievements.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects({ setActiveProject }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading reveal">
        <span className="section-kicker">03 / Selected Work</span>
        <h2 className="section-title">Project systems.</h2>
      </div>

      <div className="project-grid">
        {portfolioData.projects.map((project, index) => (
          <article className="project-card reveal" key={project.title}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="tech-tags">
                {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <button className="view-project" onClick={() => setActiveProject(project)}>Know about more</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PersonalProjects({ setActiveProject }) {
  return (
    <section id="personal-projects" className="section personal-projects-section">
      <div className="section-heading reveal">
        <span className="section-kicker">04 / GitHub Repository Work</span>
        <h2 className="section-title">Personal projects.</h2>
      </div>

      <div className="personal-project-grid">
        {portfolioData.personalProjects.map((project, index) => (
          <article className="personal-project-card reveal" key={project.repoName}>
            <div className="personal-project-card-top">
              <span className="personal-project-category">{project.category}</span>
              <a className="personal-project-link" href={project.link} target="_blank" rel="noreferrer">↗ Repo</a>
            </div>
            <div className="personal-project-content">
              <div className="personal-project-icon-wrap">
                <span className="personal-project-icon">{project.language || 'Code'}</span>
              </div>
              <h3 className="personal-project-title">{project.title}</h3>
              <p className="personal-project-summary">{project.summary}</p>
              <div className="tech-tags personal-tech-tags">
                {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <button className="view-project personal-button" onClick={() => setActiveProject(project)}>Know about more</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading reveal">
        <span className="section-kicker">05 / Capability Stack</span>
        <h2 className="section-title">Engineering craft.</h2>
      </div>

      <div className="skill-grid">
        {portfolioData.skills.map((group, index) => (
          <article className="skill-card reveal" key={group.category}>
            <div className="skill-card-head">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-name">{group.category}</span>
            </div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function submitForm(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-grid">
        <div className="contact-left reveal">
          <span className="section-kicker">05 / Contact</span>
          <h2 className="section-title">Let’s build what’s next.</h2>
          <p className="contact-copy">I’m open to product engineering, frontend architecture, and fast-launch digital experiences.</p>
          <div className="contact-links">
            <a href="mailto:hello@portfolio.dev">hello@portfolio.dev</a>
            <a href={portfolioData.socials.linkedin}>LinkedIn</a>
            <a href={portfolioData.socials.github}>GitHub</a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submitForm}>
          <div className="input-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div className="input-row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="input-row">
            <label htmlFor="message">Project brief</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button className="submit-button" type="submit">
            <span>Send Inquiry</span>
            <span className="submit-arrow">↗</span>
          </button>
          {submitted && <div className="submit-message">Inquiry prepared. Thank you.</div>}
        </form>
      </div>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="project-modal" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }} transition={{ duration: 0.4 }}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image-wrap">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        <div className="modal-content">
          <span className="modal-category">{project.category}</span>
          <h3>{project.title}</h3>
          <div className="modal-project-meta">
            <span className="modal-meta-label">Company</span>
            <span className="modal-meta-value">{project.company || 'Personal Project'}</span>
            <span className="modal-meta-label">Client</span>
            <span className="modal-meta-value">{project.client || 'GitHub Repository'}</span>
          </div>
          <p>{project.details}</p>
          <div className="tech-tags">
            {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {project.mode === 'personal' && (
            <a className="primary-button small" href={project.link} target="_blank" rel="noreferrer">GitHub Profile</a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="brand" href="#hero">
          <span className="brand-mark">S</span>
          <span className="brand-name">S. Developer</span>
        </a>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="copyright">© 2026 · All rights reserved</span>
      </div>
    </footer>
  )
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => setPos({ x: e.clientX, y: e.clientY })
    const hoverables = Array.from(document.querySelectorAll('a, button, input, textarea, .project-card, .tech-icon'))
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => setHover(true))
      el.addEventListener('mouseleave', () => setHover(false))
    })

    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', () => setHover(true))
        el.removeEventListener('mouseleave', () => setHover(false))
      })
    }
  }, [])

  return <div className={`cursor ${hover ? 'cursor-hover' : ''}`} style={{ left: pos.x, top: pos.y }}></div>
}

export default App
