import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  ShieldCheck,
  Database,
  Cloud,
  Figma,
  Search,
  CheckCircle2,
  Cpu,
  Sparkles,
  Bot
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code size={20} className="cyan" />;
      case 'smartphone': return <Smartphone size={20} className="emerald" />;
      case 'shield-check': return <ShieldCheck size={20} className="violet" />;
      case 'sparkles': return <Sparkles size={20} className="amber" />;
      case 'database': return <Database size={20} className="indigo" />;
      case 'cloud': return <Cloud size={20} className="cyan" />;
      case 'figma': return <Figma size={20} className="amber" />;
      default: return <Cpu size={20} className="cyan" />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.highlight.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc">
            A comprehensive, battle-tested engineering stack honed across production mail platforms, security bridges, mobile app bundle optimizations, and agile leadership.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="skills-filter-bar">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Filter skills (e.g., React, TypeScript, JMAP, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                ✕
              </button>
            )}
          </div>

          <div className="category-scroll-strip">
            {categoriesList.map((catName) => (
              <button
                key={catName}
                className={`category-pill ${selectedCategory === catName ? 'active' : ''}`}
                onClick={() => setSelectedCategory(catName)}
              >
                {catName}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="category-header">
                <div className="category-icon-box">{getCategoryIcon(cat.icon)}</div>
                <h3 className="category-name">{cat.category}</h3>
                <span className="skill-counter">{cat.skills.length}</span>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-primary">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`level-badge level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                    <span className="skill-highlight">{skill.highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="no-skills-found glass-card">
            <p>No technologies matched "{searchQuery}". Try searching for React, Next, Vue, or Python.</p>
            <button className="btn btn-secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 850px;
          margin: 0 auto 3rem auto;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .skills-search-input {
          width: 100%;
          background: rgba(17, 24, 39, 0.7);
          border: 1px solid var(--border-light);
          padding: 0.95rem 3rem 0.95rem 3.25rem;
          border-radius: var(--radius-full);
          font-family: inherit;
          font-size: 0.95rem;
          color: #ffffff;
          backdrop-filter: blur(14px);
          outline: none;
          transition: all var(--trans-fast);
        }

        .skills-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.25);
        }

        .skills-search-input::placeholder {
          color: var(--text-muted);
        }

        .clear-search-btn {
          position: absolute;
          right: 1.25rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          padding: 0.25rem;
        }

        .clear-search-btn:hover {
          color: #ffffff;
        }

        .category-scroll-strip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .category-scroll-strip {
            justify-content: flex-start;
          }
        }

        .category-pill {
          padding: 0.4rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          white-space: nowrap;
          transition: all var(--trans-fast);
        }

        .category-pill:hover {
          color: #ffffff;
          border-color: var(--border-light);
        }

        .category-pill.active {
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-cyan);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1100px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-category-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(17, 24, 39, 0.65);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .category-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          flex: 1;
        }

        .skill-counter {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all var(--trans-fast);
        }

        .skill-item-row:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(56, 189, 248, 0.2);
        }

        .skill-primary {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
        }

        .level-badge {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
        }

        .level-expert {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .level-advanced {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .level-intermediate {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .skill-highlight {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .no-skills-found {
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
