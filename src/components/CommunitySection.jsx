import React from 'react';
import {
  GraduationCap,
  Award,
  HeartHandshake,
  Calendar,
  Sparkles,
  Terminal,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { education, certifications, fossContributions } from '../data/portfolioData';
import TamilTtsDemo from './TamilTtsDemo';
import GitHubActivity from './GitHubActivity';

export default function CommunitySection() {
  return (
    <section id="community" className="section community-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HeartHandshake size={14} />
            <span>Community & Foundations</span>
          </div>
          <h2 className="section-title">
            Open Source, <span className="gradient-text">Education & Credentials</span>
          </h2>
          <p className="section-desc">
            Deep-rooted commitment to Free and Open Source Software (FOSS), statistical rigor, and lifelong technical curiosity.
          </p>
        </div>

        {/* FOSS Highlight Grid */}
        <div className="foss-contributions-wrapper">
          <h3 className="sub-heading">
            <HeartHandshake size={20} className="cyan" />
            <span>FOSS & Community Engagements</span>
          </h3>

          <div className="foss-grid">
            {fossContributions.map((item, idx) => (
              <div key={idx} className="glass-card foss-card">
                <div className="foss-card-header">
                  <span className="foss-marker">●</span>
                  <h4 className="foss-title">{item.title}</h4>
                  <span className="foss-period">{item.period}</span>
                </div>
                <p className="foss-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Tamil TTS Hackathon Simulator */}
          <TamilTtsDemo />

          {/* Live GitHub Profile & Repositories Showcase */}
          <GitHubActivity />
        </div>

        {/* Education & Certifications 2-Column Section */}
        <div className="credentials-two-col">
          {/* Column 1: Education */}
          <div className="cred-col">
            <h3 className="sub-heading">
              <GraduationCap size={20} className="indigo" />
              <span>Academic Education</span>
            </h3>

            <div className="edu-list">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card edu-card">
                  <div className="edu-header">
                    <div className="edu-brand-row">
                      {edu.logo && (
                        <div className="university-logo-container">
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="university-logo-img"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="edu-degree">{edu.degree}</h4>
                        <h5 className="edu-institution">{edu.institution}</h5>
                      </div>
                    </div>
                    <span className="edu-period mono">{edu.period}</span>
                  </div>
                  <p className="edu-detail">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="cred-col">
            <h3 className="sub-heading">
              <Award size={20} className="emerald" />
              <span>Certifications & Specialized Training</span>
            </h3>

            <div className="cert-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card cert-card">
                  <div className="cert-top">
                    <span className="cert-badge">{cert.badge}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .community-section {
          position: relative;
        }

        .sub-heading {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .sub-heading .cyan { color: var(--accent-cyan); }
        .sub-heading .indigo { color: var(--accent-indigo); }
        .sub-heading .emerald { color: var(--accent-emerald); }

        .foss-contributions-wrapper {
          margin-bottom: 4rem;
        }

        .foss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 992px) {
          .foss-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .foss-grid {
            grid-template-columns: 1fr;
          }
        }

        .foss-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(17, 24, 39, 0.6);
        }

        @media (max-width: 600px) {
          .foss-card {
            padding: 1.25rem 1rem;
          }
        }

        .foss-card-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .foss-marker {
          color: var(--accent-cyan);
          font-size: 0.85rem;
        }

        .foss-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          flex: 1;
        }

        .foss-period {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
        }

        .foss-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Credentials Two Columns */
        .credentials-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .credentials-two-col {
            grid-template-columns: 1fr;
          }
        }

        .cred-col {
          display: flex;
          flex-direction: column;
        }

        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .edu-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        @media (max-width: 600px) {
          .edu-card {
            padding: 1.25rem 1rem;
          }
        }

        .edu-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .edu-header {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }
          .edu-brand-row {
            gap: 0.75rem;
          }
        }

        .edu-brand-row {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }

        .university-logo-container {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #ffffff;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45), 0 0 15px rgba(56, 189, 248, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.25);
          flex-shrink: 0;
          overflow: hidden;
        }

        .university-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .edu-degree {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .edu-institution {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-top: 0.2rem;
        }

        .edu-period {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .edu-detail {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 500px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cert-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .cert-year {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .cert-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .cert-issuer {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
