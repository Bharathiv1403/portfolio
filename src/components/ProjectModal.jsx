import React, { useEffect } from 'react';
import { X, Layers, Wrench, Shield, CheckCircle2, Cpu, ExternalLink, Terminal } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">{project.badge}</span>
            <h3 className="modal-title">{project.title}</h3>
            <span className="modal-period">{project.period}</span>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={16} className="cyan" />
              <span>Project Overview</span>
            </h4>
            <p className="modal-text">{project.overview}</p>
          </div>

          {/* Deep Architectural Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={16} className="indigo" />
              <span>Technical & Architectural Implementation</span>
            </h4>
            <div className="modal-highlights-grid">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-card">
                  <CheckCircle2 size={16} className="cyan flex-shrink-0" />
                  <p className="highlight-desc">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Tools Matrix */}
          <div className="modal-grid-two">
            <div className="modal-box">
              <h5 className="modal-box-title">
                <Terminal size={14} className="emerald" />
                <span>Languages & Frameworks</span>
              </h5>
              <div className="chips-wrap">
                {project.stack.map((item, idx) => (
                  <span key={idx} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-box">
              <h5 className="modal-box-title">
                <Wrench size={14} className="violet" />
                <span>DevOps, Tools & Infrastructure</span>
              </h5>
              <div className="chips-wrap">
                {project.tools.map((item, idx) => (
                  <span key={idx} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            <span>Close Details</span>
          </button>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            <span>Discuss this Project</span>
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 14, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-container {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          background: #0d1220;
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-xl);
          padding: 2.25rem;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.2);
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .modal-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.25);
          width: fit-content;
        }

        .modal-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
        }

        .modal-period {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .modal-close-btn {
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          transition: all var(--trans-fast);
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          padding: 1.75rem 0;
        }

        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .modal-section-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .modal-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-highlights-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .highlight-desc {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .modal-grid-two {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .modal-grid-two {
            grid-template-columns: 1fr;
          }
        }

        .modal-box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .modal-box-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }
      `}</style>
    </div>
  );
}
