import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send, ArrowUpRight, ShieldCheck, Sparkles, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'community', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Community', href: '#community', id: 'community' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand Logo */}
        <a href="#hero" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-avatar-badge">
            <span className="brand-initials">BV</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role">Frontend Lead</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="active-dot" />}
            </a>
          ))}
        </div>

        {/* Desktop Quick Actions */}
        <div className="nav-actions desktop-only">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary nav-btn nav-gh-btn"
            title="GitHub @Bharathiv1403"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Bharathi-V-Resume.pdf"
            className="btn btn-secondary nav-btn"
            title="Download PDF Resume"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <a href="#contact" className="btn btn-primary nav-btn">
            <Send size={15} />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-actions">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github size={16} />
              <span>GitHub (@Bharathiv1403)</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Bharathi-V-Resume.pdf"
              className="btn btn-secondary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send size={16} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          transition: all var(--trans-base);
          padding: 1.1rem 0;
          background: transparent;
        }

        .navbar-wrapper.scrolled {
          background: rgba(11, 15, 25, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.75rem 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-avatar-badge {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .brand-initials {
          font-weight: 800;
          font-size: 1.05rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .brand-role {
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          position: relative;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--trans-fast);
          padding: 0.35rem 0;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }

        .active-dot {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .nav-btn {
          padding: 0.55rem 1.15rem;
          font-size: 0.85rem;
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--text-primary);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 992px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-menu-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(11, 15, 25, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-lg);
          max-height: calc(100vh - 75px);
          overflow-y: auto;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-link.active {
          color: var(--accent-cyan);
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
