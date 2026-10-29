import React, { useState, useEffect } from 'react';
import { Github, Star, ExternalLink, GitBranch, Terminal, Sparkles, BookOpen, Layers } from 'lucide-react';

const FALLBACK_REPOS = [
  {
    name: 'personal_application',
    description: 'Cross-platform productivity and task management suite engineered with TypeScript & React.',
    html_url: 'https://github.com/Bharathiv1403/personal_application',
    language: 'TypeScript',
    stargazers_count: 1
  },
  {
    name: 'student-management-app',
    description: 'Full-stack academic administration suite with student progress tracking, courses, and GPA analytics.',
    html_url: 'https://github.com/Bharathiv1403/student-management-app',
    language: 'TypeScript',
    stargazers_count: 4
  },
  {
    name: 'react_projects',
    description: 'Production React architectures, reusable custom hooks, responsive layout patterns, and UI state models.',
    html_url: 'https://github.com/Bharathiv1403/react_projects',
    language: 'TypeScript',
    stargazers_count: 3
  },
  {
    name: 'Tamil-TTS-Using-tacotron2',
    description: 'PyTorch deep learning speech synthesis adapting Tacotron 2 for Tamil phoneme acoustic modeling.',
    html_url: 'https://github.com/Bharathiv1403/Tamil-TTS-Using-tacotron2',
    language: 'Python',
    stargazers_count: 1
  },
  {
    name: 'VGLUG-',
    description: 'Official open-source web portal and workshop archive for Villupuram GNU/Linux Users Group.',
    html_url: 'https://github.com/Bharathiv1403/VGLUG-',
    language: 'HTML',
    stargazers_count: 10
  },
  {
    name: 'Saga_Chat_app',
    description: 'Enterprise real-time chat application frontend with channel management, emoji reactions, and thread sync.',
    html_url: 'https://github.com/Bharathiv1403/Saga_Chat_app',
    language: 'JavaScript',
    stargazers_count: 2
  }
];

const LANGUAGE_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95'
};

export default function GitHubActivity() {
  const [stats, setStats] = useState({
    repos: 40,
    followers: 15,
    following: 7,
    login: 'Bharathiv1403',
    name: 'Bharathi V',
    avatar: 'https://avatars.githubusercontent.com/u/128215224?v=4',
    url: 'https://github.com/Bharathiv1403'
  });

  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live user stats
    fetch('https://api.github.com/users/Bharathiv1403')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.login) {
          setStats((prev) => ({
            ...prev,
            repos: data.public_repos ?? prev.repos,
            followers: data.followers ?? prev.followers,
            following: data.following ?? prev.following,
            login: data.login,
            name: data.name || prev.name,
            avatar: data.avatar_url || prev.avatar,
            url: data.html_url || prev.url
          }));
        }
      })
      .catch(() => {
        // Keep fallback stats
      });

    // Fetch latest updated public repos
    fetch('https://api.github.com/users/Bharathiv1403/repos?per_page=6&sort=updated')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((repo) => ({
            name: repo.name,
            description: repo.description || 'Open source project by Bharathi V',
            html_url: repo.html_url,
            language: repo.language || 'Code',
            stargazers_count: repo.stargazers_count || 0
          }));
          setRepos(formatted);
        }
      })
      .catch(() => {
        // Keep curated fallback repos
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="github-section-card glass-card">
      {/* Top Banner / User Bar */}
      <div className="gh-header-bar">
        <div className="gh-user-left">
          <div className="gh-avatar-frame">
            <img
              src={stats.avatar}
              alt={stats.name}
              className="gh-avatar-img"
              loading="lazy"
            />
            <span className="gh-online-indicator" />
          </div>

          <div className="gh-identity">
            <div className="gh-name-row">
              <h4 className="gh-name">{stats.name}</h4>
              <a
                href={stats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-handle"
              >
                @{stats.login}
              </a>
              <span className="gh-active-tag">
                <span className="gh-pulse-dot" />
                <span>Active FOSS Contributor</span>
              </span>
            </div>
            <p className="gh-tagline">
              Open source developer building modern TypeScript, React, Next.js, and FOSS voice engines.
            </p>
          </div>
        </div>

        {/* Live Counters & CTA */}
        <div className="gh-user-right">
          <div className="gh-counter-strip">
            <div className="counter-item">
              <span className="counter-val">{stats.repos}+</span>
              <span className="counter-key">Repositories</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className="counter-val">{stats.followers}</span>
              <span className="counter-key">Followers</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className="counter-val">{stats.following}</span>
              <span className="counter-key">Following</span>
            </div>
          </div>

          <a
            href={stats.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gh-cta"
            title="Open GitHub Profile"
          >
            <Github size={16} />
            <span>Follow @{stats.login}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="gh-repos-container">
        <div className="gh-repos-heading-row">
          <div className="gh-repos-title">
            <GitBranch size={16} className="cyan" />
            <span>Featured Open Source Repositories</span>
          </div>
          <span className="gh-live-badge">Live GitHub API Sync</span>
        </div>

        <div className="gh-repo-grid">
          {repos.map((repo, idx) => {
            const langColor = LANGUAGE_COLORS[repo.language] || '#94a3b8';

            return (
              <a
                key={idx}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-repo-card"
                title={`View ${repo.name} on GitHub`}
              >
                <div className="repo-card-top">
                  <div className="repo-name-group">
                    <Terminal size={15} className="repo-icon" />
                    <span className="repo-name">{repo.name}</span>
                  </div>
                  <div className="repo-stars">
                    <Star size={13} className="star-icon" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>

                <p className="repo-desc">{repo.description}</p>

                <div className="repo-footer">
                  <span className="repo-lang">
                    <span
                      className="lang-color-dot"
                      style={{ backgroundColor: langColor }}
                    />
                    <span>{repo.language}</span>
                  </span>

                  <span className="repo-view-link">
                    <span>Inspect</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="gh-repos-footer-bar">
          <a
            href={stats.url}
            target="_blank"
            rel="noopener noreferrer"
            className="all-repos-link"
          >
            <span>Explore all {stats.repos}+ repositories on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .github-section-card {
          margin-top: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(13, 18, 30, 0.85) 0%, rgba(8, 11, 20, 0.95) 100%);
          border: 1px solid rgba(168, 85, 247, 0.28);
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(168, 85, 247, 0.1);
        }

        .gh-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .gh-user-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .gh-avatar-frame {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 2px solid rgba(168, 85, 247, 0.6);
          padding: 2px;
          background: rgba(168, 85, 247, 0.15);
          flex-shrink: 0;
        }

        .gh-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .gh-online-indicator {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #0d1220;
          box-shadow: 0 0 8px #10b981;
        }

        .gh-identity {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .gh-name-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .gh-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .gh-handle {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          color: #a78bfa;
          transition: color var(--trans-fast);
        }

        .gh-handle:hover {
          color: #c084fc;
          text-decoration: underline;
        }

        .gh-active-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .gh-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 1.8s infinite;
        }

        .gh-tagline {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .gh-user-right {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .gh-counter-strip {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 0.65rem 1.15rem;
        }

        .counter-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .counter-val {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }

        .counter-key {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .counter-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
        }

        .btn-gh-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
          transition: all var(--trans-fast);
        }

        .btn-gh-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.55);
        }

        .gh-repos-container {
          margin-top: 1.75rem;
        }

        .gh-repos-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .gh-repos-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .gh-repos-title .cyan { color: var(--accent-cyan); }

        .gh-live-badge {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .gh-repo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 992px) {
          .gh-repo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gh-repo-grid {
            grid-template-columns: 1fr;
          }
        }

        .gh-repo-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          transition: all var(--trans-fast);
          text-decoration: none;
          min-height: 145px;
        }

        .gh-repo-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(168, 85, 247, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(168, 85, 247, 0.15);
        }

        .repo-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }

        .repo-name-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          overflow: hidden;
        }

        .repo-icon {
          color: #a78bfa;
          flex-shrink: 0;
        }

        .repo-name {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .repo-stars {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-full);
          flex-shrink: 0;
        }

        .star-icon {
          fill: #fbbf24;
        }

        .repo-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0.85rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .repo-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.75rem;
        }

        .repo-lang {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .lang-color-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .repo-view-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--accent-cyan);
          font-weight: 600;
          opacity: 0.8;
          transition: opacity var(--trans-fast);
        }

        .gh-repo-card:hover .repo-view-link {
          opacity: 1;
        }

        .gh-repos-footer-bar {
          margin-top: 1.5rem;
          text-align: center;
        }

        .all-repos-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: #c084fc;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(168, 85, 247, 0.08);
          border: 1px solid rgba(168, 85, 247, 0.25);
          transition: all var(--trans-fast);
        }

        .all-repos-link:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: #a855f7;
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .github-section-card {
            padding: 1.35rem 1rem;
          }
          .gh-header-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
          }
          .gh-user-right {
            justify-content: space-between;
          }
          .btn-gh-cta {
            width: 100%;
            justify-content: center;
          }
          .gh-counter-strip {
            width: 100%;
            justify-content: space-around;
          }
        }
      `}</style>
    </div>
  );
}
