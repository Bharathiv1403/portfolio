import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="glass-card resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="resume-modal-header">
          <div className="resume-title-group">
            <div className="resume-icon-box">
              <FileText size={20} className="cyan" />
            </div>
            <div>
              <h3 className="resume-modal-title">Bharathi V — Curriculum Vitae</h3>
              <span className="resume-modal-subtitle">Frontend Lead & Full Stack Developer</span>
            </div>
          </div>

          <div className="resume-header-actions">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
              title="Open in new window"
            >
              <ExternalLink size={16} />
              <span className="hide-mobile">Open Fullscreen</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Bharathi-V-Resume.pdf"
              className="action-btn download-btn"
              title="Download PDF"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <button className="close-btn" onClick={onClose} aria-label="Close resume preview">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="resume-frame-wrapper">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0`}
            title="Bharathi V Resume Preview"
            className="resume-pdf-iframe"
          />
        </div>
      </div>

      <style>{`
        .resume-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 14, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
        }

        .resume-modal-container {
          width: 100%;
          max-width: 960px;
          height: 90vh;
          background: #090e1a;
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.25);
          overflow: hidden;
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .resume-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.5rem;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid var(--border-subtle);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .resume-title-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .resume-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .resume-icon-box .cyan {
          color: var(--accent-cyan);
        }

        .resume-modal-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .resume-modal-subtitle {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .resume-header-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-light);
          transition: all var(--trans-fast);
        }

        .action-btn:hover {
          color: #ffffff;
          border-color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.15);
        }

        .action-btn.download-btn {
          background: var(--grad-primary);
          color: #ffffff;
          border: none;
        }

        .close-btn {
          color: var(--text-secondary);
          padding: 0.45rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          transition: all var(--trans-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: #ffffff;
          background: rgba(239, 68, 68, 0.25);
        }

        .resume-frame-wrapper {
          flex: 1;
          width: 100%;
          height: 100%;
          background: #05070c;
        }

        .resume-pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 640px) {
          .resume-modal-container {
            height: 95vh;
            border-radius: var(--radius-lg);
          }
          .resume-modal-header {
            padding: 0.85rem 1rem;
          }
          .resume-modal-title {
            font-size: 0.95rem;
          }
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
