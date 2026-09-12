import React from 'react'
import { portfolioData } from '../data/portfolioData'

export function About() {
  const capabilities = portfolioData.skills.slice(0, 4)

  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span className="section-kicker">01 / About</span>
        <h2 className="section-title">Architecting systems from concept to release.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <div className="about-intro-badge">Profile Overview</div>
          <p className="large-copy">
            {portfolioData.about.bio}
          </p>
          <p className="support-copy">
            {portfolioData.about.story}
          </p>

          <div className="about-meta">
            <div className="meta-box">
              <span className="meta-label">Location</span>
              <span className="meta-value">{portfolioData.profile.location}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Core Focus</span>
              <span className="meta-value">MERN Stack • Full Stack</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Continuously Learning</span>
              <span className="meta-value">AI Engineering & Agents</span>
            </div>
          </div>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((group) => (
            <div className="capability-card" key={group.category}>
              <div className="capability-header">
                <span className="capability-code">{group.icon}</span>
                <span className="capability-name">{group.category}</span>
              </div>
              <div className="capability-skills">
                {group.skills.map((skill) => (
                  <span className="capability-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
