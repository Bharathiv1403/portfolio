import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-logo-wrap">
              <span className="brand-badge-square">BV</span>
              <span className="footer-brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-brand-tagline">
              Frontend Developer & UI/UX Specialist • Crafting scalable SaaS & high-performance email ecosystems.
            </p>
          </div>

          {/* Navigation Quick Links */}
          <div className="footer-nav-group">
            <span className="footer-group-title">Navigation</span>
            <div className="footer-links-grid">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#community">Community</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-group">
            <span className="footer-group-title">Connect</span>
            <div className="footer-social-icons">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href={`tel:${personalInfo.phone}`} className="social-icon-btn" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="footer-tech-stack">
            Crafted with <strong>React</strong>, <strong>Vite</strong> & <strong>Modern CSS</strong>
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          border-top: 1px solid var(--border-subtle);
          background: rgba(7, 9, 14, 0.95);
          padding: 4.5rem 0 2rem 0;
          position: relative;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-width: 420px;
        }

        .brand-logo-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-badge-square {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-brand-tagline {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-group-title {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #ffffff;
          margin-bottom: 1rem;
          display: block;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }

        .footer-links-grid a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color var(--trans-fast);
        }

        .footer-links-grid a:hover {
          color: var(--accent-cyan);
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--trans-fast);
        }

        .social-icon-btn:hover {
          color: #ffffff;
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copy {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-tech-stack {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-tech-stack strong {
          color: var(--accent-cyan);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          transition: all var(--trans-fast);
        }

        .back-to-top-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
