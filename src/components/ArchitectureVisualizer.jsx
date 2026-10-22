import React, { useState } from 'react';
import { Smartphone, Server, Globe, Cpu, ShieldCheck, ArrowRight, Activity, Zap } from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [activeNode, setActiveNode] = useState('jmap');

  const nodes = [
    {
      id: 'mobile',
      title: 'Mobile Client',
      sub: 'React Native (Expo)',
      icon: <Smartphone size={22} className="emerald" />,
      tag: 'Hermes Bytecode',
      latency: '< 16ms render',
      details: '4-tier glanceable list with preheader sanitization, HSL keyword tag hashing, and 4096-bit RSA keystore hardening.'
    },
    {
      id: 'relay',
      title: 'Push Relay',
      sub: 'TypeScript & FCM',
      icon: <Zap size={22} className="amber" />,
      tag: 'Event Driven',
      latency: '~18ms dispatch',
      details: 'Custom TypeScript push relay bridging Stalwart JMAP push events to Firebase Cloud Messaging (FCM) instantly.'
    },
    {
      id: 'jmap',
      title: 'Stalwart Engine',
      sub: 'JMAP Protocol RFC 8620',
      icon: <Server size={22} className="cyan" />,
      tag: 'Core Protocol',
      latency: '0.12ms query',
      details: 'Next-gen email server protocol replacing IMAP/SMTP with standardized JSON data models and multi-query batching.'
    },
    {
      id: 'webmail',
      title: 'Modern Webmail',
      sub: 'Next.js App Router',
      icon: <Globe size={22} className="indigo" />,
      tag: 'SSR & Virtualized',
      latency: 'Sub-second FCP',
      details: 'Cloudflare Workers (OpenNext) edge deployment with TLS 525 handshake handling, CalDAV, CardDAV, and WebDAV sync.'
    },
    {
      id: 'auth',
      title: 'Auth & SSO',
      sub: 'Authentik OIDC & MFA',
      icon: <ShieldCheck size={22} className="violet" />,
      tag: 'Zero-Trust',
      latency: 'Encrypted Token',
      details: 'Web-to-mobile handover bridge with TOTP MFA, active device dashboard, and postMessage JS credential channel.'
    }
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="arch-visualizer-container glass-card">
      <div className="arch-top-bar">
        <div className="arch-badge">
          <Activity size={14} className="cyan" />
          <span>Interactive Enterprise Architecture Topology</span>
        </div>
        <span className="arch-hint">Click any node to inspect protocol & benchmark data</span>
      </div>

      {/* Nodes Flow Bar */}
      <div className="arch-nodes-grid">
        {nodes.map((node, index) => {
          const isActive = activeNode === node.id;
          return (
            <React.Fragment key={node.id}>
              <div
                className={`arch-node-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveNode(node.id)}
              >
                <div className="node-icon-wrapper">{node.icon}</div>
                <div className="node-info">
                  <span className="node-title">{node.title}</span>
                  <span className="node-sub">{node.sub}</span>
                </div>
                <span className="node-tag">{node.tag}</span>
                {isActive && <div className="node-active-glow" />}
              </div>
              {index < nodes.length - 1 && (
                <div className="flow-connector hide-mobile">
                  <div className="flow-line" />
                  <div className="flow-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Node Deep Inspector */}
      <div className="arch-inspector-panel">
        <div className="inspector-left">
          <div className="inspector-title-row">
            <h4 className="inspector-name">{currentNode.title}</h4>
            <span className="inspector-badge">{currentNode.sub}</span>
            <span className="inspector-latency mono">
              <Zap size={13} className="amber" />
              <span>{currentNode.latency}</span>
            </span>
          </div>
          <p className="inspector-desc">{currentNode.details}</p>
        </div>

        <div className="inspector-status-pill mono">
          <span className="dot-live" />
          <span>TOPOLOGY STATUS: OPERATIONAL</span>
        </div>
      </div>

      <style>{`
        .arch-visualizer-container {
          padding: 2.25rem;
          margin-top: 3.5rem;
          background: rgba(13, 19, 33, 0.75);
          border: 1px solid rgba(56, 189, 248, 0.25);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), 0 0 30px rgba(56, 189, 248, 0.12);
        }

        .arch-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .arch-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .arch-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .arch-nodes-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          gap: 0.75rem;
          overflow-x: auto;
        }

        @media (max-width: 900px) {
          .arch-nodes-grid {
            flex-direction: column;
            align-items: stretch;
          }
          .flow-connector { display: none; }
        }

        .arch-node-card {
          flex: 1;
          min-width: 155px;
          padding: 1.25rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          cursor: pointer;
          position: relative;
          transition: all var(--trans-base);
        }

        .arch-node-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-3px);
        }

        .arch-node-card.active {
          background: rgba(56, 189, 248, 0.12);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
        }

        .node-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          display: block;
        }

        .node-sub {
          font-size: 0.74rem;
          color: var(--text-muted);
          display: block;
        }

        .node-tag {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          margin-top: 0.25rem;
        }

        .flow-connector {
          display: flex;
          align-items: center;
          position: relative;
          width: 32px;
          height: 2px;
        }

        .flow-line {
          width: 100%;
          height: 2px;
          background: rgba(56, 189, 248, 0.3);
        }

        .flow-pulse {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          animation: flowAnim 1.8s infinite ease-in-out;
        }

        @keyframes flowAnim {
          0% { left: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        .arch-inspector-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          margin-top: 0.5rem;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .inspector-left {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          max-width: 650px;
        }

        .inspector-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .inspector-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .inspector-badge {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .inspector-latency {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .inspector-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .inspector-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .dot-live {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
