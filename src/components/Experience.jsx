import React from 'react'
import { portfolioData } from '../data/portfolioData'

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <span className="section-kicker">02 / Experience</span>
        <h2 className="section-title">Career trajectory & enterprise impact.</h2>
      </div>

      <div className="timeline">
        {portfolioData.experience.map((job) => (
          <div className="timeline-item" key={job.company}>
            <div className="timeline-node"></div>
            <div className="timeline-card">
              <div className="timeline-card-top">
                <div className="timeline-company-info">
                  <div className="timeline-company-row">
                    <span className="timeline-company">{job.company}</span>
                    <span className="timeline-client-badge">Client: {job.client}</span>
                  </div>
                  <h3 className="timeline-role-title">{job.role}</h3>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>

              <ul className="timeline-achievements">
                {job.achievements.map((point) => (
                  <li className="timeline-achievement-item" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
