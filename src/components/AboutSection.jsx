import React from 'react';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Users2,
  Sparkles,
  CheckCircle2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ArchitectureVisualizer from './ArchitectureVisualizer';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Code2 size={24} className="cyan" />,
      title: "Frontend Architecture & Modularity",
      description:
        "Re-engineered frontend ecosystems in Vue.js and Next.js for high performance and maintainability. Designed unified Figma design systems and delivered modular component libraries across 8+ SaaS modules."
    },
    {
      icon: <Cpu size={24} className="indigo" />,
      title: "Mail Protocols & Native Synchronization",
      description:
        "Specialized in modern mail synchronization standards like JMAP, Stalwart Mail Server, and real-time push relays via FCM. Evaluated CalDAV, CardDAV, WebDAV, and lightweight desktop runtimes (Tauri 2)."
    },
    {
      icon: <ShieldCheck size={24} className="emerald" />,
      title: "Enterprise Auth & Zero-Trust Security",
      description:
        "Engineered Authentik OIDC authentication bridges with mobile web-to-native token handover, TOTP MFA, session revocation dashboards, and hardened Cloudflare Pages HTTP security policies."
    },
    {
      icon: <Users2 size={24} className="violet" />,
      title: "Engineering Team Leadership",
      description:
        "Led frontend engineering: mentoring junior engineers, conducting strict code reviews, establishing clean folder conventions, and collaborating with cross-functional product stakeholders."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="section-title">
            Analytical Foundation Meets <br />
            <span className="gradient-text">Enterprise Frontend Scale</span>
          </h2>
          <p className="section-desc">
            Combining a rigorous statistical mindset with full-spectrum modern web development. From complex multi-tenant administration consoles to high-throughput email engines.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card pillar-card interactive-hover">
              <div className="pillar-icon-box">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="about-highlight-box glass-card">
          <div className="highlight-content">
            <div className="terminal-badge">
              <Terminal size={14} />
              <span>Production Milestones</span>
            </div>
            <h4 className="highlight-headline">
              Delivered enterprise email, admin consoles & security bridges used by thousands of active users.
            </h4>
            <p className="highlight-sub">
              Hands-on across the complete lifecycle: wireframing in Figma, coding in React/Next.js/Vue.js, generating 4096-bit RSA store keystores for Google Play & Apple TestFlight, and edge-deploying with Cloudflare Workers.
            </p>
          </div>

          <div className="highlight-quick-list">
            <div className="quick-item">
              <CheckCircle2 size={16} className="cyan" />
              <span>JMAP & Stalwart Mail push relays</span>
            </div>
            <div className="quick-item">
              <CheckCircle2 size={16} className="indigo" />
              <span>Hermes bytecode optimized App Bundles</span>
            </div>
            <div className="quick-item">
              <CheckCircle2 size={16} className="emerald" />
              <span>Client-side PDF invoicing & automated billing</span>
            </div>
            <div className="quick-item">
              <CheckCircle2 size={16} className="violet" />
              <span>FastAPI Python & MySQL backend integrations</span>
            </div>
          </div>
        </div>

        {/* Interactive System Architecture Topology */}
        <ArchitectureVisualizer />
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: all var(--trans-base);
        }

        @media (max-width: 600px) {
          .pillar-card {
            padding: 1.35rem 1.15rem;
          }
        }

        .interactive-hover:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.2);
        }

        .pillar-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-icon-box .cyan { color: var(--accent-cyan); }
        .pillar-icon-box .indigo { color: var(--accent-indigo); }
        .pillar-icon-box .emerald { color: var(--accent-emerald); }
        .pillar-icon-box .violet { color: var(--accent-violet); }

        .pillar-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .pillar-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Highlight Box */
        .about-highlight-box {
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.5rem;
          align-items: center;
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(15, 23, 42, 0.7) 100%);
          border-color: rgba(56, 189, 248, 0.2);
        }

        @media (max-width: 900px) {
          .about-highlight-box {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        @media (max-width: 500px) {
          .about-highlight-box {
            padding: 1.25rem 1rem;
            gap: 1.5rem;
          }
          .highlight-headline {
            font-size: 1.15rem;
          }
          .highlight-quick-list {
            padding: 1rem 0.85rem;
          }
        }

        .highlight-content {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .terminal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.08);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .highlight-headline {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
        }

        .highlight-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .highlight-quick-list {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .quick-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .quick-item .cyan { color: var(--accent-cyan); }
        .quick-item .indigo { color: var(--accent-indigo); }
        .quick-item .emerald { color: var(--accent-emerald); }
        .quick-item .violet { color: var(--accent-violet); }
      `}</style>
    </section>
  );
}
