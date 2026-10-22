import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, RefreshCw, Cpu, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('relay');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState('');

  const snippets = {
    relay: {
      filename: 'JmapPushRelay.ts',
      badge: 'JMAP & Stalwart',
      code: `// Stalwart JMAP Push Event Relay to Firebase Cloud Messaging (FCM)
import { StalwartJmapClient } from '@saga/jmap-engine';
import { sendFCMNotification } from './fcm-provider';

export async function onJmapPushEvent(event: JmapPushPayload) {
  const { accountId, stateChange, changedFolders } = event;
  console.log(\`[PUSH] JMAP State Updated: account=\${accountId}\`);
  
  // Real-time background sync with 4-tier glanceable list
  return await sendFCMNotification({
    topic: \`user-\${accountId}\`,
    priority: 'high',
    data: { state: stateChange, syncType: 'incremental' }
  });
}`
    },
    auth: {
      filename: 'OidcMobileBridge.tsx',
      badge: 'Zero-Trust SSO',
      code: `// Web-to-Native OIDC Handover Bridge with Authentik & TOTP MFA
export function handleOidcCallback(redirectUrl: URL, isMobileApp: boolean) {
  const authCode = redirectUrl.searchParams.get('code');
  
  if (isMobileApp && window.ReactNativeWebView) {
    // Intercept redirect & dispatch token securely via postMessage channel
    window.ReactNativeWebView.postMessage(JSON.stringify({
      type: 'OIDC_EXCHANGE_SUCCESS',
      code: authCode,
      timestamp: Date.now()
    }));
    return { status: 'HANDED_OFF_TO_NATIVE' };
  }
}`
    },
    keystore: {
      filename: 'StoreRelease.sh',
      badge: 'Release Engineering',
      code: `#!/usr/bin/env bash
# 4096-bit RSA Keystore Generation & Hermes AAB Optimization
keytool -genkeypair -v -keystore saga-release.keystore \\
  -alias sagamail -keyalg RSA -keysize 4096 -validity 10000

# Hermes bytecode bundle compilation & shrink
cd android && ./gradlew bundleRelease -Dorg.gradle.jvmargs="-Xmx4g"
echo "✓ Optimized .aab generated with Android manifest hardening."`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = () => {
    setIsRunning(true);
    setConsoleOutput('Initializing simulation runner...');

    setTimeout(() => {
      if (activeTab === 'relay') {
        setConsoleOutput('[RUNNER] Connecting to Stalwart Mail Server (JMAP)... [OK]\n[RUNNER] Simulating incoming email event on port 443...\n[SUCCESS] Push dispatched to FCM in 18ms! Webmail synced.');
      } else if (activeTab === 'auth') {
        setConsoleOutput('[RUNNER] Authentik OIDC callback intercepted...\n[RUNNER] Validating active device TOTP session...\n[SUCCESS] Mobile token handover completed via postMessage channel.');
      } else {
        setConsoleOutput('[RUNNER] Auditing AndroidManifest.xml permissions...\n[RUNNER] Stripping debug symbols with Hermes engine...\n[SUCCESS] 4096-bit RSA verified. .AAB bundle ready for Google Play.');
      }
      setIsRunning(false);

      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 800);
  };

  return (
    <div className="terminal-container glass-card">
      {/* Window Titlebar */}
      <div className="terminal-header">
        <div className="window-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        {/* Tabs */}
        <div className="terminal-tabs">
          {Object.keys(snippets).map((key) => (
            <button
              key={key}
              className={`t-tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(key);
                setConsoleOutput('');
              }}
            >
              <span className="tab-filename">{snippets[key].filename}</span>
              <span className="tab-pill">{snippets[key].badge}</span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="terminal-actions">
          <button className="term-btn" onClick={runSimulation} disabled={isRunning} title="Run Simulation">
            {isRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} className="emerald" />}
            <span>{isRunning ? 'Running...' : 'Simulate'}</span>
          </button>
          <button className="term-btn" onClick={handleCopy} title="Copy Snippet">
            {copied ? <Check size={14} className="emerald" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="terminal-code-body">
        <pre className="code-pre mono">
          <code>{snippets[activeTab].code}</code>
        </pre>
      </div>

      {/* Live Interactive Terminal Output */}
      {consoleOutput && (
        <div className="terminal-console-output mono">
          <div className="output-header">
            <Cpu size={13} className="cyan" />
            <span>Interactive Architecture Output:</span>
          </div>
          <pre className="output-text">{consoleOutput}</pre>
        </div>
      )}

      {/* Footer Status Bar */}
      <div className="terminal-statusbar mono">
        <div className="status-item">
          <span className="live-blink" />
          <span>STALWART JMAP: ACTIVE (0.12ms)</span>
        </div>
        <div className="status-item">
          <span>BRANCH: production-main</span>
        </div>
        <div className="status-item hide-mobile">
          <span>ENCRYPTION: 4096-BIT RSA</span>
        </div>
      </div>

      <style>{`
        .terminal-container {
          background: #090d16;
          border: 1px solid rgba(56, 189, 248, 0.25);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.75), 0 0 35px rgba(56, 189, 248, 0.15);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-top: 1.5rem;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid var(--border-subtle);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .window-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .terminal-tabs {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          overflow-x: auto;
        }

        .t-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--text-muted);
          background: transparent;
          transition: all var(--trans-fast);
        }

        .t-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .t-tab-btn.active {
          color: #ffffff;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .tab-filename {
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .tab-pill {
          font-size: 0.65rem;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-full);
          color: var(--accent-cyan);
        }

        .terminal-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .term-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-sm);
          transition: all var(--trans-fast);
        }

        .term-btn:hover {
          color: #ffffff;
          border-color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.12);
        }

        .terminal-code-body {
          padding: 1.25rem 1.5rem;
          max-height: 280px;
          overflow-y: auto;
          background: #080c14;
        }

        .code-pre {
          font-size: 0.84rem;
          color: #e2e8f0;
          line-height: 1.65;
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .terminal-console-output {
          background: #04070d;
          border-top: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.85rem 1.25rem;
          animation: slideUp 0.2s ease-out;
        }

        .output-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
          text-transform: uppercase;
        }

        .output-text {
          font-size: 0.78rem;
          color: #34d399;
          line-height: 1.5;
          margin: 0;
          white-space: pre-wrap;
        }

        .terminal-statusbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1.25rem;
          background: #0b111e;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .live-blink {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 2s infinite;
        }

        @media (max-width: 600px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </div>
  );
}
