import React from 'react'
import { portfolioData } from '../data/portfolioData'

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span className="section-kicker">05 / Capability Stack</span>
        <h2 className="section-title">Engineering craft & technical domain.</h2>
      </div>

      <div className="skills-grid">
        {portfolioData.skills.map((group) => (
          <article className="skill-category-card" key={group.category}>
            <div className="skill-category-header">
              <span className="skill-cat-icon">{group.icon}</span>
              <h3 className="skill-cat-title">{group.category}</h3>
            </div>
            <div className="skill-pills-wrap">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
