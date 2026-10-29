import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Database,
  Globe,
  ExternalLink,
  Cpu,
  MailCheck,
  LayoutDashboard,
  KeyRound,
  Receipt,
  Store,
  CheckCircle2,
  Activity,
  Zap,
  Lock,
  Server,
  Github,
  BookOpen,
  Volume2,
  Code2
} from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'saga-mail-client':
        return <MailCheck size={24} className="cyan" />;
      case 'sagaid-admin-console':
        return <LayoutDashboard size={24} className="indigo" />;
      case 'saga-auth-sso':
        return <KeyRound size={24} className="violet" />;
      case 'sagaid-marketing-site':
        return <Sparkles size={24} className="amber" />;
      case 'saga-billing-erpnext':
        return <Receipt size={24} className="emerald" />;
      case 'adspectra-naama-ooru':
        return <Store size={24} className="rose" />;
      case 'student-management-app':
        return <BookOpen size={24} className="indigo" />;
      case 'tamil-tts-tacotron2':
        return <Volume2 size={24} className="cyan" />;
      case 'react-projects-suite':
        return <Code2 size={24} className="emerald" />;
      case 'personal-application':
        return <Sparkles size={24} className="violet" />;
      case 'vglug-community-portal':
        return <Globe size={24} className="amber" />;
      default:
        return <Cpu size={24} className="cyan" />;
    }
  };

  const renderProjectVisualBanner = (id) => {
    switch (id) {
      case 'saga-mail-client':
        return (
          <div className="project-mockup-banner mail-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">SagaMail • Stalwart JMAP Native</span>
              <span className="mockup-badge-unread">● Real-Time Sync</span>
            </div>
            <div className="mockup-inner-mail">
              <div className="mock-mail-item">
                <div className="mail-avatar-box">SM</div>
                <div className="mail-meta">
                  <div className="mail-sender-row">
                    <span className="mail-sender">Stalwart Mail Server</span>
                    <span className="mail-time">Just now</span>
                  </div>
                  <span className="mail-subject">4096-bit RSA Keystore & JMAP Push Relay Verified</span>
                  <div className="mail-tags">
                    <span className="m-tag cyan">#JMAP</span>
                    <span className="m-tag emerald">#FCM-Relay</span>
                    <span className="m-tag indigo">#Hermes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sagaid-admin-console':
        return (
          <div className="project-mockup-banner admin-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">SagaID Admin • Domain DNS Engine</span>
              <span className="mockup-badge-unread green">● Health 100%</span>
            </div>
            <div className="mockup-dns-grid">
              <div className="dns-pill passed">
                <span className="dns-type">MX:</span>
                <span className="dns-status">mail.domain.com ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">SPF:</span>
                <span className="dns-status">v=spf1 include ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">DKIM:</span>
                <span className="dns-status">2048-bit Active ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">DMARC:</span>
                <span className="dns-status">p=reject ✓</span>
              </div>
            </div>
          </div>
        );

      case 'saga-auth-sso':
        return (
          <div className="project-mockup-banner auth-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Zero-Trust Identity Bridge</span>
              <span className="mockup-badge-unread violet">● OIDC Authentik</span>
            </div>
            <div className="auth-mockup-body">
              <div className="auth-step-row">
                <Lock size={15} className="violet" />
                <span className="auth-text">Web-to-Mobile postMessage Handover Bridge</span>
              </div>
              <div className="totp-box mono">
                <span className="totp-label">TOTP MFA Active:</span>
                <span className="totp-code">849 201</span>
                <span className="totp-timer">● Verified</span>
              </div>
            </div>
          </div>
        );

      case 'sagaid-marketing-site':
        return (
          <div className="project-mockup-banner marketing-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Next.js App Router • OpenNext Cloudflare</span>
              <span className="mockup-badge-unread amber">★ 99 Lighthouse</span>
            </div>
            <div className="marketing-mockup-body">
              <div className="pricing-slider-preview">
                <span className="metric-label">Interactive Savings Matrix:</span>
                <div className="slider-bar">
                  <div className="slider-fill" style={{ width: '75%' }} />
                </div>
                <span className="savings-highlight">Save 60% vs Google Workspace</span>
              </div>
            </div>
          </div>
        );

      case 'saga-billing-erpnext':
        return (
          <div className="project-mockup-banner billing-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Frappe / ERPNext Ledger API</span>
              <span className="mockup-badge-unread emerald">● GST Invoicing</span>
            </div>
            <div className="billing-mockup-body">
              <div className="invoice-meta-row">
                <span className="inv-num mono">#INV-2026-SAGA</span>
                <span className="inv-amount">₹ Paid • Wallet Deduction</span>
              </div>
              <span className="inv-pdf-pill">Client-side PDF Export (jsPDF + html2canvas)</span>
            </div>
          </div>
        );

      case 'student-management-app':
        return (
          <div className="project-mockup-banner admin-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Student Admin • TypeScript Suite</span>
              <span className="mockup-badge-unread indigo">● Open Source</span>
            </div>
            <div className="mockup-dns-grid">
              <div className="dns-pill passed">
                <span className="dns-type">Core:</span>
                <span className="dns-status">TypeScript Strict ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">Modules:</span>
                <span className="dns-status">GPA & Attendance ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">State:</span>
                <span className="dns-status">Modular React ✓</span>
              </div>
              <div className="dns-pill passed">
                <span className="dns-type">Repo:</span>
                <span className="dns-status">GitHub Public ✓</span>
              </div>
            </div>
          </div>
        );

      case 'tamil-tts-tacotron2':
        return (
          <div className="project-mockup-banner mail-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Tamil TTS • Tacotron 2 PyTorch</span>
              <span className="mockup-badge-unread amber">★ FOSS Winner</span>
            </div>
            <div className="mockup-inner-mail">
              <div className="mock-mail-item">
                <div className="mail-avatar-box">TTS</div>
                <div className="mail-meta">
                  <div className="mail-sender-row">
                    <span className="mail-sender">VGLUG FOSS Hackathon</span>
                    <span className="mail-time">PyTorch CUDA</span>
                  </div>
                  <span className="mail-subject">Acoustic Model • Phoneme-to-Spectrogram Synthesis</span>
                  <div className="mail-tags">
                    <span className="m-tag cyan">#PyTorch</span>
                    <span className="m-tag emerald">#Tacotron2</span>
                    <span className="m-tag amber">#TamilVoice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'vglug-community-portal':
        return (
          <div className="project-mockup-banner default-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">VGLUG Community Portal</span>
              <span className="mockup-badge-unread amber">★ 10 Stars</span>
            </div>
            <div className="default-mockup-body">
              <div className="duo-platform-row">
                <span className="platform-tag">Linux Education & FOSS</span>
                <span className="platform-tag">Villupuram GNU/Linux Users Group</span>
              </div>
            </div>
          </div>
        );

      case 'personal-application':
        return (
          <div className="project-mockup-banner mail-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">AAYON Life OS • React Native & Gemini AI</span>
              <span className="mockup-badge-unread emerald">● 99% ATS Match</span>
            </div>
            <div className="mockup-inner-mail">
              <div className="mock-mail-item">
                <div className="mail-avatar-box">OS</div>
                <div className="mail-meta">
                  <div className="mail-sender-row">
                    <span className="mail-sender">CareerPilot • Health Pedometer • Vatti Engine</span>
                    <span className="mail-time">Expo SDK 54</span>
                  </div>
                  <span className="mail-subject">Gemini AI Cover Letters • Hardware Biometrics • 100% Local</span>
                  <div className="mail-tags">
                    <span className="m-tag cyan">#Dashboard</span>
                    <span className="m-tag emerald">#CareerPilot</span>
                    <span className="m-tag amber">#HealthOS</span>
                    <span className="m-tag indigo">#WealthVatti</span>
                    <span className="m-tag rose">#GeminiAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="project-mockup-banner default-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="m-dot red" /><span className="m-dot yellow" /><span className="m-dot green" />
              </div>
              <span className="mockup-title-bar">Full Stack Web Platforms</span>
              <span className="mockup-badge-unread rose">● FastAPI + MySQL</span>
            </div>
            <div className="default-mockup-body">
              <div className="duo-platform-row">
                <span className="platform-tag">adspectra.in (Digital Agency)</span>
                <span className="platform-tag">Naama Ooru (Local Commerce)</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Featured Systems</span>
          </div>
          <h2 className="section-title">
            Production <span className="gradient-text">Architectures</span>
          </h2>
          <p className="section-desc">
            Deep dive into flagship email systems, mobile release engineering, zero-trust SSO authentication, and full-stack web platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-tabs-container">
          <div className="project-tabs">
            {projectCategories.map((cat) => {
              const count = cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="tab-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card project-card ${project.featured ? 'is-featured' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header with Icon Box */}
              <div className="card-top-row">
                <div className="project-icon-and-badge">
                  <div className="project-icon-box">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <span className="project-badge">{project.badge}</span>
                  </div>
                </div>
                <span className="project-period">{project.period}</span>
              </div>

              {/* Rich Visual Mockup Banner */}
              {renderProjectVisualBanner(project.id)}

              {/* Title & Tagline */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              {/* Highlights Preview */}
              <div className="project-highlights-preview">
                {project.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="preview-bullet">
                    <span className="bullet-point">▸</span>
                    <span className="bullet-text">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="project-card-footer">
                <div className="card-tags-list">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tech-chip more-chip">+{project.stack.length - 4}</span>
                  )}
                </div>

                <div className="card-actions-row">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-gh-btn"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}

                  <button
                    className="view-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>Architecture</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          position: relative;
        }

        .project-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 3.25rem;
        }

        @media (max-width: 768px) {
          .project-tabs-container {
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 0.5rem;
            margin-bottom: 2rem;
          }
        }

        .project-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(17, 24, 39, 0.65);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(14px);
          overflow-x: auto;
          max-width: 100%;
        }

        @media (max-width: 600px) {
          .project-tabs {
            padding: 0.3rem;
            gap: 0.35rem;
          }
          .tab-btn {
            padding: 0.45rem 0.85rem;
            font-size: 0.78rem;
          }
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all var(--trans-fast);
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: #ffffff;
        }

        .tab-btn.active {
          background: var(--grad-primary);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(56, 189, 248, 0.35);
        }

        .tab-count {
          font-size: 0.72rem;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.12);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.25rem;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          padding: 2.25rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(17, 24, 39, 0.75);
          transition: all var(--trans-base);
        }

        @media (max-width: 768px) {
          .project-card {
            padding: 1.35rem 1.15rem;
            gap: 1rem;
          }
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: var(--shadow-lg), 0 0 30px rgba(56, 189, 248, 0.25);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 500px) {
          .card-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.65rem;
          }
        }

        .project-icon-and-badge {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .project-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .project-icon-box .cyan { color: var(--accent-cyan); }
        .project-icon-box .indigo { color: var(--accent-indigo); }
        .project-icon-box .violet { color: var(--accent-violet); }
        .project-icon-box .amber { color: var(--accent-amber); }
        .project-icon-box .emerald { color: var(--accent-emerald); }
        .project-icon-box .rose { color: var(--accent-rose); }

        .project-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .project-period {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Mockup Banners */
        .project-mockup-banner {
          background: #090d18;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .mockup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mockup-dots {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .m-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .m-dot.red { background: #ef4444; }
        .m-dot.yellow { background: #f59e0b; }
        .m-dot.green { background: #10b981; }

        .mockup-title-bar {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .mockup-badge-unread {
          font-size: 0.65rem;
          font-weight: 700;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.1);
          padding: 0.1rem 0.45rem;
          border-radius: var(--radius-full);
        }
        .mockup-badge-unread.green { color: #34d399; background: rgba(16, 185, 129, 0.1); }
        .mockup-badge-unread.violet { color: #c084fc; background: rgba(168, 85, 247, 0.1); }
        .mockup-badge-unread.amber { color: #fbbf24; background: rgba(245, 158, 11, 0.1); }
        .mockup-badge-unread.emerald { color: #34d399; background: rgba(16, 185, 129, 0.1); }
        .mockup-badge-unread.rose { color: #fb7185; background: rgba(244, 63, 94, 0.1); }

        .mockup-inner-mail {
          padding: 0.95rem 1rem;
        }

        .mock-mail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .mail-avatar-box {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          color: #fff;
          font-size: 0.78rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mail-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .mail-sender-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mail-sender {
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
        }

        .mail-time {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .mail-subject {
          font-size: 0.76rem;
          color: #cbd5e1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mail-tags {
          display: flex;
          gap: 0.35rem;
          margin-top: 0.25rem;
        }

        .m-tag {
          font-size: 0.65rem;
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-sm);
        }
        .m-tag.cyan { color: #38bdf8; background: rgba(56, 189, 248, 0.12); }
        .m-tag.emerald { color: #34d399; background: rgba(16, 185, 129, 0.12); }
        .m-tag.indigo { color: #a5b4fc; background: rgba(99, 102, 241, 0.12); }

        /* DNS Grid */
        .mockup-dns-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0.85rem 1rem;
        }

        .dns-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dns-type {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .dns-status {
          color: #34d399;
          font-size: 0.7rem;
        }

        /* Auth Body */
        .auth-mockup-body {
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .auth-step-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.76rem;
          color: #cbd5e1;
        }

        .totp-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(168, 85, 247, 0.08);
          border: 1px solid rgba(168, 85, 247, 0.25);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.74rem;
        }

        .totp-label { color: var(--text-muted); }
        .totp-code { font-weight: 800; color: #c084fc; letter-spacing: 2px; }
        .totp-timer { color: #34d399; font-size: 0.68rem; }

        /* Marketing Body */
        .marketing-mockup-body {
          padding: 0.85rem 1rem;
        }

        .pricing-slider-preview {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .metric-label {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .slider-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .slider-fill {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #6366f1);
          border-radius: var(--radius-full);
        }

        .savings-highlight {
          font-size: 0.76rem;
          font-weight: 700;
          color: #34d399;
        }

        /* Billing Body */
        .billing-mockup-body {
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .invoice-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
        }

        .inv-num { font-weight: 700; color: #ffffff; }
        .inv-amount { color: #34d399; font-size: 0.72rem; }
        .inv-pdf-pill { font-size: 0.7rem; color: var(--text-muted); }

        /* Default Body */
        .default-mockup-body {
          padding: 0.85rem 1rem;
        }

        .duo-platform-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .platform-tag {
          font-size: 0.74rem;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .project-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          transition: color var(--trans-fast);
        }

        .project-card:hover .project-title {
          color: var(--accent-cyan);
        }

        .project-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-highlights-preview {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .preview-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .bullet-point {
          color: var(--accent-cyan);
          font-size: 0.95rem;
          line-height: 1.4;
          flex-shrink: 0;
        }

        .bullet-text {
          font-size: 0.86rem;
          color: #cbd5e1;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .project-card-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }
          .view-details-btn {
            width: 100%;
            justify-content: center;
          }
        }

        .card-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .more-chip {
          background: rgba(255, 255, 255, 0.08);
          font-weight: 600;
        }

        .card-actions-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .card-gh-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #d8b4fe;
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          transition: all var(--trans-fast);
        }

        .card-gh-btn:hover {
          background: rgba(168, 85, 247, 0.25);
          border-color: #c084fc;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          transition: all var(--trans-fast);
          flex-shrink: 0;
        }

        .view-details-btn:hover {
          background: var(--accent-cyan);
          color: #000000;
          transform: translateX(2px);
        }

        .card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
