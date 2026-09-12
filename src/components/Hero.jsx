import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, PerspectiveCamera, MeshTransmissionMaterial } from '@react-three/drei'
import { portfolioData } from '../data/portfolioData'

function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      style={{ pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault fov={45} position={[0, 0, 6.5]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} />
      <pointLight position={[-4, -3, 2]} color="#10b981" intensity={30} />
      <pointLight position={[4, 3, 2]} color="#8b5cf6" intensity={30} />

      {/* Floating central icosahedron */}
      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh position={[0, 0, -0.8]}>
          <icosahedronGeometry args={[2.2, 1]} />
          <MeshTransmissionMaterial
            thickness={0.8}
            roughness={0.15}
            transmission={0.65}
            ior={1.2}
            color="#10b981"
            background={null}
          />
        </mesh>
      </Float>

      {/* Floating Wireframe Cube */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.8, -1.5, 0.5]} rotation={[0.4, 0.7, 0.2]}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial color="#34d399" wireframe />
        </mesh>
      </Float>

      {/* Floating Wireframe Torus */}
      <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2}>
        <mesh position={[2.8, 1.6, 0.5]} rotation={[0.7, 0.3, 0.5]}>
          <torusGeometry args={[0.85, 0.12, 16, 60]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2.2, -1.8, -0.5]} rotation={[0.2, 0.5, 0.8]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </mesh>
      </Float>
    </Canvas>
  )
}

export function Hero() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const rotatingWords = ['Scalable Web Apps', 'Clean REST APIs', 'Microservices', 'Enterprise Platforms', 'Modern UI/UX']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [rotatingWords.length])

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>Available for Full-Stack Opportunities</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line">Engineering high-impact</span>
            <span className="hero-line gradient-text">digital products.</span>
          </h1>

          <div className="hero-word-row">
            {['MERN Stack', 'Full Stack Developer', 'Verizon Platform', 'React & Node.js'].map((tag) => (
              <span className="hero-word" key={tag}>{tag}</span>
            ))}
          </div>

          <p className="hero-intro">
            {portfolioData.profile.intro} Currently building mission-critical enterprise platforms at Prodapt for Verizon with a focus on high reliability, microservices, and modern user experiences.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              <span>Explore Work</span>
              <svg viewBox="0 0 24 24" className="button-icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              className="secondary-button"
              href={portfolioData.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Sahaya_Christhu_Dhas_Resume.pdf"
            >
              <span>Download Resume</span>
              <svg viewBox="0 0 24 24" className="button-icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>

            <a className="ghost-button" href="#contact">
              Let’s Talk
            </a>
          </div>

          <div className="hero-stats">
            {portfolioData.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="canvas-container">
            <Suspense fallback={null}>
              <ThreeScene />
            </Suspense>
          </div>

          <div className="profile-card-wrapper">
            <div className="floating-badge badge-top-left">
              <span style={{ fontSize: '1rem' }}>⚡</span>
              <span>React & Node.js</span>
            </div>

            <div className="profile-frame">
              <img
                src={portfolioData.profile.photo}
                alt={portfolioData.profile.name}
                className="profile-photo"
                loading="eager"
              />
            </div>

            <div className="floating-badge badge-bottom-right">
              <span style={{ fontSize: '1rem' }}>🚀</span>
              <span>Prodapt • Verizon</span>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll down to About section">
        <span className="scroll-cue-dot"></span>
      </a>
    </section>
  )
}
