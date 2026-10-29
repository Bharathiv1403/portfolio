import React, { useState, useEffect } from 'react';
import {
  Download,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Code,
  Smartphone,
  ShieldCheck,
  Terminal,
  Cpu,
  Linkedin,
  Github
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const roles = [
    'Frontend Team Lead & Architect',
    'React & Next.js Specialist',
    'JMAP & Stalwart Mail Protocol Engineer',
    'React Native & Expo Release Engineer',
    'Vue.js & Pinia Ecosystem Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Dynamic Typewriter */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="availability-badge">
            <span className="pulse-indicator">
              <span className="pulse-dot" />
              <span className="pulse-ring" />
            </span>
            <span>Available for Frontend & Full-Stack Leadership</span>
          </div>

          {/* Main Headline with Dynamic Typing */}
          <div className="headline-block">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <div className="dynamic-role-box">
              <span className="role-prefix">I build as a </span>
              <span className="typewriter-text">{displayText}</span>
              <span className="blinking-caret">|</span>
            </div>
          </div>

          {/* Subtitle / Bio summary */}
          <p className="hero-description">
            Frontend Developer & <strong>Frontend Team Lead</strong> with 2+ years of production experience scaling enterprise SaaS platforms. Architecting <strong>React, Next.js, Vue.js, TypeScript, and React Native</strong> apps—from Stalwart JMAP email push relays and Authentik OIDC/MFA zero-trust security to Cloudflare Workers edge deployments.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary cta-glow-btn">
              <span>Explore Production Architectures</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Bharathi-V-Resume.pdf"
              onClick={handleResumeDownload}
              className="btn btn-secondary cta-resume-btn"
            >
              <Download size={18} />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Quick Contact & Location Badges */}
          <div className="hero-meta-strip">
            <div className="meta-item">
              <MapPin size={16} className="meta-icon cyan" />
              <span>{personalInfo.location}</span>
            </div>

            <a href={`mailto:${personalInfo.email}`} className="meta-item linkable">
              <Mail size={16} className="meta-icon indigo" />
              <span>{personalInfo.email}</span>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="meta-item linkable">
              <Phone size={16} className="meta-icon emerald" />
              <span>{personalInfo.phone}</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="meta-item linkable linkedin-badge-pill"
              title="View LinkedIn Profile"
            >
              <Linkedin size={16} className="meta-icon cyan" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="meta-item linkable github-badge-pill"
              title="View GitHub Profile (@Bharathiv1403)"
            >
              <Github size={16} className="meta-icon violet" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Technology Highlights Ribbon */}
          <div className="hero-tech-ribbon">
            <span className="ribbon-label">Engineered With:</span>
            <div className="ribbon-tags">
              <span className="tech-chip glow-tag">React 18 / 19</span>
              <span className="tech-chip glow-tag">Next.js (App Router)</span>
              <span className="tech-chip glow-tag">Vue.js (Pinia)</span>
              <span className="tech-chip glow-tag">React Native (Expo)</span>
              <span className="tech-chip glow-tag">TypeScript</span>
              <span className="tech-chip glow-tag">JMAP & Stalwart</span>
              <span className="tech-chip glow-tag">FastAPI & MySQL</span>
              <span className="tech-chip glow-tag">Cloudflare Workers</span>
            </div>
          </div>
        </div>

        {/* Right Column: Cyberpunk Avatar & Live Interactive Terminal */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            {/* Ambient Backlight Glows */}
            <div className="aura-glow aura-cyan" />
            <div className="aura-glow aura-indigo" />

            <div className="avatar-glass-card">
              <div className="image-frame">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="profile-img"
                    loading="eager"
                    decoding="async"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="profile-fallback">
                    <div className="fallback-avatar-ring">
                      <span className="fallback-initials">BV</span>
                    </div>
                    <span className="fallback-name">{personalInfo.name}</span>
                    <span className="fallback-role">{personalInfo.role}</span>
                  </div>
                )}
                <div className="image-overlay-gradient" />
                <div className="hologram-scanline" />
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-badge badge-top-right animate-float">
                <Code size={16} className="cyan" />
                <div>
                  <span className="badge-title">React & Next.js</span>
                  <span className="badge-sub">App Router & SSR</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left animate-float" style={{ animationDelay: '1.5s' }}>
                <Smartphone size={16} className="emerald" />
                <div>
                  <span className="badge-title">React Native</span>
                  <span className="badge-sub">Expo & Hermes AAB</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-right animate-float" style={{ animationDelay: '2.5s' }}>
                <ShieldCheck size={16} className="violet" />
                <div>
                  <span className="badge-title">OIDC & MFA</span>
                  <span className="badge-sub">Zero-Trust Tokens</span>
                </div>
              </div>

              {/* Experience Mini Pill */}
              <div className="experience-corner-pill">
                <span className="exp-num">2+</span>
                <span className="exp-text">Years Production Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom: Interactive Terminal & Code Simulation Runner */}
      <div className="container terminal-section-wrap">
        <div className="terminal-intro">
          <div className="terminal-badge">
            <Terminal size={14} />
            <span>Live Interactive Architecture Engine</span>
          </div>
          <span className="terminal-intro-sub">
            Explore and simulate actual production logic from Stalwart JMAP push relays to Android keystore generation.
          </span>
        </div>
        <InteractiveTerminal />
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 4.5rem;
          position: relative;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 5.5rem;
            padding-bottom: 2.5rem;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        @media (max-width: 992px) {
          .hero-content {
            align-items: center;
          }
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.45rem 1.15rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .pulse-indicator {
          position: relative;
          width: 9px;
          height: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #10b981;
          animation: pulseGlow 2s infinite ease-out;
        }

        .headline-block {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .hero-title {
          font-size: 3.4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.35rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.95rem;
            line-height: 1.18;
          }
        }

        .dynamic-role-box {
          font-size: 1.55rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .dynamic-role-box {
            justify-content: center;
            font-size: 1.3rem;
          }
        }

        .role-prefix {
          color: var(--text-muted);
          font-weight: 500;
        }

        .typewriter-text {
          color: var(--accent-cyan);
          text-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
        }

        .blinking-caret {
          color: var(--accent-cyan);
          animation: blink 0.9s infinite;
          font-weight: 300;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 640px;
        }

        .hero-description strong {
          color: #ffffff;
          font-weight: 600;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        @media (max-width: 576px) {
          .hero-cta-group {
            width: 100%;
            flex-direction: column;
            gap: 0.75rem;
          }
          .hero-cta-group .btn {
            width: 100%;
          }
        }

        .cta-glow-btn {
          box-shadow: 0 4px 20px rgba(56, 189, 248, 0.45);
        }

        .hero-meta-strip {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .hero-meta-strip {
            justify-content: center;
            gap: 1rem;
          }
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: color var(--trans-fast);
        }

        .meta-item.linkable:hover {
          color: var(--accent-cyan);
        }

        .meta-icon.cyan { color: var(--accent-cyan); }
        .meta-icon.indigo { color: var(--accent-indigo); }
        .meta-icon.emerald { color: var(--accent-emerald); }
        .meta-icon.violet { color: #a78bfa; }

        .hero-tech-ribbon {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .ribbon-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .ribbon-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        @media (max-width: 992px) {
          .ribbon-tags {
            justify-content: center;
          }
        }

        .glow-tag:hover {
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.35);
        }

        /* Right Column Visuals */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
          width: 100%;
        }

        .visual-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
        }

        @media (max-width: 480px) {
          .visual-card-wrapper {
            max-width: 320px;
          }
        }

        .aura-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.4;
          pointer-events: none;
        }

        .aura-cyan {
          top: -10%;
          left: -10%;
          width: 260px;
          height: 260px;
          background: #0ea5e9;
        }

        .aura-indigo {
          bottom: -10%;
          right: -10%;
          width: 280px;
          height: 280px;
          background: #6366f1;
        }

        @media (max-width: 768px) {
          .aura-cyan, .aura-indigo {
            width: 180px;
            height: 180px;
            filter: blur(40px);
          }
        }

        .avatar-glass-card {
          position: relative;
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 25px rgba(56, 189, 248, 0.2);
        }

        @media (max-width: 480px) {
          .avatar-glass-card {
            padding: 0.85rem;
            border-radius: var(--radius-lg);
          }
        }

        .image-frame {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 640px) {
          .image-frame {
            height: 340px;
          }
        }

        @media (max-width: 400px) {
          .image-frame {
            height: 290px;
          }
        }

        .profile-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #0f172a 0%, #030712 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 1.5rem;
          text-align: center;
        }

        .fallback-avatar-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.5);
        }

        .fallback-initials {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
        }

        .fallback-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .fallback-role {
          font-size: 0.82rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.5s ease;
        }

        .image-frame:hover .profile-img {
          transform: scale(1.04);
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(11, 15, 25, 0.85) 100%);
        }

        .hologram-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(56, 189, 248, 0.05) 51%, rgba(255, 255, 255, 0) 52%);
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.6;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 0.65rem 0.95rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25);
          z-index: 10;
        }

        .badge-top-right {
          top: 1.5rem;
          right: -1.75rem;
        }

        .badge-bottom-left {
          bottom: 3.5rem;
          left: -1.75rem;
        }

        .badge-bottom-right {
          bottom: -1.25rem;
          right: 1.5rem;
        }

        @media (max-width: 992px) {
          .badge-top-right {
            right: 0.75rem;
            top: 0.75rem;
          }
          .badge-bottom-left {
            left: 0.75rem;
            bottom: 0.75rem;
          }
          .badge-bottom-right {
            display: none;
          }
          .floating-badge {
            padding: 0.45rem 0.75rem;
            gap: 0.45rem;
          }
          .badge-title {
            font-size: 0.75rem;
          }
          .badge-sub {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 480px) {
          .experience-corner-pill {
            top: 0.75rem;
            left: 0.75rem;
            padding: 0.25rem 0.65rem;
          }
          .exp-num {
            font-size: 0.85rem;
          }
          .exp-text {
            font-size: 0.65rem;
          }
        }

        .badge-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          display: block;
          line-height: 1.2;
        }

        .badge-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
          display: block;
        }

        .floating-badge .cyan { color: #38bdf8; }
        .floating-badge .emerald { color: #34d399; }
        .floating-badge .violet { color: #c084fc; }

        .experience-corner-pill {
          position: absolute;
          top: 1.75rem;
          left: 1.75rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: var(--radius-full);
          padding: 0.35rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .exp-num {
          font-size: 0.95rem;
          font-weight: 800;
          color: #38bdf8;
        }

        .exp-text {
          font-size: 0.72rem;
          font-weight: 600;
          color: #e2e8f0;
          letter-spacing: 0.02em;
        }

        /* Terminal Wrap */
        .terminal-section-wrap {
          margin-top: 4.5rem;
        }

        .terminal-intro {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .terminal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .terminal-intro-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
