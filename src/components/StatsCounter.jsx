import React from 'react';
import { Briefcase, Layers, Users, Award, ShieldCheck, Zap } from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function StatsCounter() {
  const statIcons = [
    <Briefcase className="stat-icon-svg cyan" size={26} />,
    <Layers className="stat-icon-svg indigo" size={26} />,
    <Users className="stat-icon-svg emerald" size={26} />,
    <Award className="stat-icon-svg amber" size={26} />
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="glass-card stat-card">
              <div className="stat-icon-wrapper">
                {statIcons[index % statIcons.length]}
              </div>
              <div className="stat-info">
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
                <p className="stat-desc">{item.desc}</p>
              </div>
              <div className="card-ambient-light" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 2rem 0 4rem 0;
          position: relative;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          position: relative;
          background: rgba(17, 24, 39, 0.6);
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-svg.cyan { color: var(--accent-cyan); }
        .stat-icon-svg.indigo { color: var(--accent-indigo); }
        .stat-icon-svg.emerald { color: var(--accent-emerald); }
        .stat-icon-svg.amber { color: var(--accent-amber); }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2.35rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 0.35rem;
        }

        .stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          line-height: 1.4;
        }

        .card-ambient-light {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
