import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-desc">
            Demonstrated trajectory from analytical data modeling to spearheading enterprise frontend engineering and leading dev teams in high-stakes SaaS environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="timeline-item">
                {/* Timeline connector dot */}
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  {idx < experiences.length - 1 && <div className="marker-line" />}
                </div>

                {/* Timeline Content Card */}
                <div className="timeline-content">
                  <div className={`glass-card exp-card ${isExpanded ? 'expanded' : ''}`}>
                    {/* Header bar */}
                    <div className="exp-card-header" onClick={() => toggleExpand(idx)}>
                      <div className="exp-primary-meta">
                        <div className="company-badge-row">
                          <div className="company-icon-box">
                            <Building2 size={18} className="cyan" />
                          </div>
                          <div>
                            <h3 className="exp-role">{exp.role}</h3>
                            <h4 className="exp-company">{exp.company}</h4>
                          </div>
                        </div>

                        <div className="exp-tags-row">
                          <span className="period-pill">
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                          </span>
                          <span className="type-pill">{exp.type}</span>
                          <span className="location-pill">
                            <MapPin size={13} />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      <button
                        className="expand-btn"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {/* Description overview */}
                    <p className="exp-summary">{exp.description}</p>

                    {/* Highlights (Always visible or smoothly expanded) */}
                    <div className="exp-details-body">
                      <h5 className="details-heading">Key Production Contributions:</h5>
                      <ul className="highlights-list">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="highlight-item">
                            <div className="check-bullet">
                              <CheckCircle size={15} />
                            </div>
                            <span className="highlight-text">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
                      <div className="exp-tech-section">
                        <span className="tech-heading">Technologies Utilized:</span>
                        <div className="exp-tech-tags">
                          {exp.tech.map((t, tIdx) => (
                            <span key={tIdx} className="tech-chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 950px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 1.5rem;
          position: relative;
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 24px 1fr;
            gap: 1rem;
          }
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1.75rem;
        }

        .marker-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #0ea5e9;
          border: 4px solid #07090e;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.8);
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, rgba(56, 189, 248, 0.5) 0%, rgba(99, 102, 241, 0.1) 100%);
          margin-top: 0.5rem;
        }

        .exp-card {
          padding: 2rem;
          transition: all var(--trans-base);
        }

        .exp-card.expanded {
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: var(--shadow-md), var(--glow-cyan);
        }

        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          cursor: pointer;
          gap: 1rem;
        }

        .exp-primary-meta {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .company-badge-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .company-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .company-icon-box .cyan {
          color: var(--accent-cyan);
        }

        .exp-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .exp-company {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-top: 0.2rem;
        }

        .exp-tags-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .period-pill,
        .type-pill,
        .location-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }

        .type-pill {
          background: rgba(99, 102, 241, 0.12);
          color: #a5b4fc;
          border-color: rgba(99, 102, 241, 0.3);
          font-weight: 600;
        }

        .expand-btn {
          color: var(--text-muted);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          transition: all var(--trans-fast);
        }

        .expand-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .exp-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .exp-details-body {
          margin-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .details-heading {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .check-bullet {
          color: var(--accent-cyan);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .highlight-text {
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .exp-tech-section {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tech-heading {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
      `}</style>
    </section>
  );
}
