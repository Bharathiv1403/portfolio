import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    color: '#38bdf8',
    cyan: '#38bdf8',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)'
  },
  {
    id: 'emerald',
    name: 'Matrix Emerald',
    color: '#10b981',
    cyan: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)'
  },
  {
    id: 'violet',
    name: 'Hyper Violet',
    color: '#a855f7',
    cyan: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%)'
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    color: '#f59e0b',
    cyan: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #a855f7 100%)'
  }
];

export default function ThemeAccentPicker() {
  const [activeTheme, setActiveTheme] = useState('cyan');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bharathi_theme_accent');
    if (saved && themes.find((t) => t.id === saved)) {
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (themeId) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;
    setActiveTheme(themeId);
    document.documentElement.style.setProperty('--accent-cyan', theme.cyan);
    document.documentElement.style.setProperty('--grad-primary', theme.gradient);
    localStorage.setItem('bharathi_theme_accent', themeId);
  };

  return (
    <div className="theme-picker-wrapper">
      <button
        className="palette-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Theme Accent"
        aria-label="Customize theme accent color"
      >
        <Palette size={16} />
        <span
          className="active-color-dot"
          style={{ background: themes.find((t) => t.id === activeTheme)?.color }}
        />
      </button>

      {isOpen && (
        <div className="palette-dropdown glass-card">
          <span className="dropdown-title">Theme Accent</span>
          <div className="palette-options">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-dot-btn ${activeTheme === t.id ? 'active' : ''}`}
                style={{ '--dot-color': t.color }}
                onClick={() => {
                  applyTheme(t.id);
                  setIsOpen(false);
                }}
                title={t.name}
              >
                <span className="dot-inner" style={{ background: t.color }} />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .theme-picker-wrapper {
          position: relative;
        }

        .palette-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          transition: all var(--trans-fast);
        }

        .palette-btn:hover {
          color: #ffffff;
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.1);
        }

        .active-color-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          box-shadow: 0 0 8px currentColor;
        }

        .palette-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          padding: 0.75rem;
          background: #0d1222;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 140px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
          z-index: 1001;
        }

        .dropdown-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .palette-options {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .theme-dot-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--trans-fast);
        }

        .theme-dot-btn:hover {
          transform: scale(1.15);
        }

        .theme-dot-btn.active {
          border-color: #ffffff;
        }

        .dot-inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
