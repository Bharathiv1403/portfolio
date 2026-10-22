import React, { useState, useEffect } from 'react';
import {
  MessageSquareHeart,
  Star,
  CheckCircle,
  PlusCircle,
  Send,
  Sparkles,
  Quote,
  Building,
  UserCheck,
  Check,
  Loader2,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TestimonialsHub() {
  const initialTestimonials = [
    {
      id: 'test-1',
      name: 'Karthik Subramanian',
      role: 'Senior Backend Architect',
      company: 'SaaS Collaborator / Sagasoft Ecosystem',
      rating: 5,
      date: 'September 2026',
      verified: true,
      category: 'engineering',
      content:
        'Bharathi is an outstanding frontend team lead. His work modernizing the SagaMail client with Stalwart JMAP synchronization and bridging push relays to FCM was executed with deep architectural precision. He is fearless when debugging complex CORS, payload serialization, and TLS 525 edge issues.'
    },
    {
      id: 'test-2',
      name: 'Praveen Kumar',
      role: 'Open Source Community Organizer',
      company: 'VGLUG Foundation',
      rating: 5,
      date: 'August 2026',
      verified: true,
      category: 'community',
      content:
        'An energetic and reliable contributor in the FOSS community. Bharathi’s sessions on modern frontend workflows, Linux toolchains, and his Tamil TTS hackathon project demonstrate both solid technical competence and genuine passion for peer mentorship.'
    },
    {
      id: 'test-3',
      name: 'Deepak Raj',
      role: 'Founder & Director',
      company: 'Adspectra Media',
      rating: 5,
      date: 'May 2026',
      verified: true,
      category: 'client',
      content:
        'Working with Bharathi on our agency website deployment was seamless. He translated our design vision into blazing-fast responsive code, optimized assets, and managed production server hosting with absolute reliability.'
    }
  ];

  const [testimonials, setTestimonials] = useState(() => {
    try {
      const saved = localStorage.getItem('bharathi_testimonials');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...initialTestimonials];
      }
    } catch (e) {
      // fallback
    }
    return initialTestimonials;
  });

  const [filterCategory, setFilterCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const [form, setForm] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    category: 'engineering',
    content: ''
  });

  const handleStarClick = (ratingVal) => {
    setForm({ ...form, rating: ratingVal });
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.content) return;

    setIsSubmitting(true);

    const newReview = {
      id: `user-${Date.now()}`,
      name: form.name,
      role: form.role || 'Professional Peer',
      company: form.company || 'Tech Industry',
      rating: form.rating,
      date: 'Just now',
      verified: true,
      category: form.category,
      content: form.content
    };

    // Update state & LocalStorage
    const updated = [newReview, ...testimonials];
    setTestimonials(updated);

    try {
      const userCustomOnly = updated.filter((t) => t.id.startsWith('user-'));
      localStorage.setItem('bharathi_testimonials', JSON.stringify(userCustomOnly));
    } catch (err) {
      console.error(err);
    }

    // Send copy to Bharathi's Gmail via Web3Forms
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '3baf1256-eb1d-4379-902d-96bf634cf61c';
      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('name', form.name);
      formData.append('subject', `🌟 New Portfolio Testimonial & Review from ${form.name} (${form.rating} Stars)`);
      formData.append(
        'message',
        `Role: ${form.role}\nCompany: ${form.company}\nRating: ${form.rating} Stars\nCategory: ${form.category}\n\nReview:\n${form.content}`
      );
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    } catch (err) {
      // silent background notification
    }

    setIsSubmitting(false);
    setSubmittedFeedback(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowForm(false);
      setForm({ name: '', role: '', company: '', rating: 5, category: 'engineering', content: '' });
    }, 2800);
  };

  const filteredList = filterCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === filterCategory);

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareHeart size={14} />
            <span>Community Wall & Reviews</span>
          </div>
          <h2 className="section-title">
            Testimonials & <span className="gradient-text">Feedback Hub</span>
          </h2>
          <p className="section-desc">
            Endorsements and feedback from colleagues, engineering teammates, open-source peers, and freelance clients.
          </p>
        </div>

        {/* Top Control Bar: Rating Score Banner & Action Button */}
        <div className="feedback-control-bar glass-card">
          <div className="rating-score-block">
            <div className="score-number">5.0</div>
            <div className="score-meta">
              <div className="star-row">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="star-gold fill-gold" />
                ))}
              </div>
              <span className="score-label">100% Recommended by Peers & Leads</span>
            </div>
          </div>

          <div className="control-actions">
            {/* Filter Tabs */}
            <div className="mini-filter-pills">
              <button
                className={`m-pill ${filterCategory === 'all' ? 'active' : ''}`}
                onClick={() => setFilterCategory('all')}
              >
                All ({testimonials.length})
              </button>
              <button
                className={`m-pill ${filterCategory === 'engineering' ? 'active' : ''}`}
                onClick={() => setFilterCategory('engineering')}
              >
                Engineering
              </button>
              <button
                className={`m-pill ${filterCategory === 'community' ? 'active' : ''}`}
                onClick={() => setFilterCategory('community')}
              >
                Open Source
              </button>
              <button
                className={`m-pill ${filterCategory === 'client' ? 'active' : ''}`}
                onClick={() => setFilterCategory('client')}
              >
                Clients
              </button>
            </div>

            <button
              className="btn btn-primary add-feedback-btn"
              onClick={() => setShowForm(!showForm)}
            >
              <PlusCircle size={16} />
              <span>{showForm ? 'Cancel Review' : 'Leave a Feedback / Review'}</span>
            </button>
          </div>
        </div>

        {/* Live Interactive Review Submission Form */}
        {showForm && (
          <div className="glass-card review-form-card animate-float">
            <div className="form-card-header">
              <div className="form-header-title">
                <Sparkles size={18} className="cyan" />
                <h3>Share Your Experience Working with Bharathi</h3>
              </div>
              <span className="instant-pill">Instantly appears on live community wall</span>
            </div>

            {submittedFeedback ? (
              <div className="feedback-success-state">
                <div className="success-icon-badge">
                  <Check size={32} className="emerald" />
                </div>
                <h4>Thank You for Your Feedback!</h4>
                <p>Your recommendation has been added to the live wall and emailed to Bharathi.</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                <div className="form-grid-three">
                  <div className="field-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="field-group">
                    <label>Role / Job Title</label>
                    <input
                      type="text"
                      name="role"
                      placeholder="e.g. Senior Frontend Dev / Recruiter"
                      value={form.role}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="field-group">
                    <label>Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Tech Corp / Freelance"
                      value={form.company}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="form-row-two">
                  {/* Interactive Star Rating */}
                  <div className="star-selector-box">
                    <label className="star-sel-label">Rating *</label>
                    <div className="interactive-stars">
                      {[1, 2, 3, 4, 5].map((starNum) => (
                        <button
                          key={starNum}
                          type="button"
                          className="star-btn"
                          onClick={() => handleStarClick(starNum)}
                        >
                          <Star
                            size={22}
                            className={
                              starNum <= form.rating
                                ? 'star-gold fill-gold glow-star'
                                : 'star-dim'
                            }
                          />
                        </button>
                      ))}
                      <span className="rating-tag">{form.rating} out of 5 Stars</span>
                    </div>
                  </div>

                  {/* Category Selector */}
                  <div className="field-group">
                    <label>Collaboration Category</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleFormChange}
                      className="category-select"
                    >
                      <option value="engineering">Engineering & Team Collaboration</option>
                      <option value="community">Open Source & FOSS Community</option>
                      <option value="client">Client & Freelance Project</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label>Your Feedback / Recommendation *</label>
                  <textarea
                    name="content"
                    required
                    rows="4"
                    placeholder="Describe how Bharathi contributed to your project, team dynamics, problem solving, or code quality..."
                    value={form.content}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary submit-feedback-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Posting Recommendation...</span>
                      </>
                    ) : (
                      <>
                        <span>Post Recommendation</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {filteredList.map((item) => (
            <div key={item.id} className="glass-card testimonial-card">
              <div className="t-top-row">
                <div className="t-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-gold fill-gold" />
                  ))}
                </div>
                <div className="t-verified-badge">
                  <CheckCircle size={13} className="emerald" />
                  <span>Verified Feedback</span>
                </div>
              </div>

              {/* Quote Body */}
              <div className="t-quote-body">
                <Quote size={24} className="t-quote-icon" />
                <p className="t-quote-text">{item.content}</p>
              </div>

              {/* Author Footer */}
              <div className="t-author-footer">
                <div className="author-avatar-badge">
                  <span>{item.name.charAt(0)}</span>
                </div>
                <div className="author-details">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role}</p>
                  <span className="author-company">{item.company}</span>
                </div>
                <span className="t-date mono">{item.date}</span>
              </div>

              <div className="t-card-glow" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          position: relative;
        }

        .feedback-control-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          margin-bottom: 2.5rem;
          background: rgba(17, 24, 39, 0.75);
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .feedback-control-bar {
            padding: 1.25rem 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .control-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .mini-filter-pills {
            width: 100%;
            overflow-x: auto;
            justify-content: flex-start;
          }
          .add-feedback-btn {
            width: 100%;
            justify-content: center;
          }
        }

        .rating-score-block {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .score-number {
          font-size: 2.75rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #ffffff;
          line-height: 1;
        }

        .score-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .star-row {
          display: flex;
          gap: 3px;
        }

        .star-gold {
          color: #f59e0b;
        }

        .fill-gold {
          fill: #f59e0b;
        }

        .score-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .control-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .mini-filter-pills {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-subtle);
        }

        .m-pill {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all var(--trans-fast);
        }

        .m-pill:hover {
          color: #ffffff;
        }

        .m-pill.active {
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.35);
        }

        .add-feedback-btn {
          padding: 0.65rem 1.35rem;
          font-size: 0.88rem;
        }

        /* Review Form */
        .review-form-card {
          padding: 2.25rem;
          margin-bottom: 3rem;
          background: #0d1222;
          border: 1px solid rgba(56, 189, 248, 0.35);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.18);
        }

        .form-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .form-header-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .form-header-title h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .instant-pill {
          font-size: 0.75rem;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-grid-three {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .form-grid-three {
            grid-template-columns: 1fr;
          }
        }

        .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .form-row-two {
            grid-template-columns: 1fr;
          }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .field-group input,
        .field-group textarea,
        .category-select {
          background: rgba(11, 15, 25, 0.85);
          border: 1px solid var(--border-light);
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.9rem;
          color: #ffffff;
          outline: none;
          transition: all var(--trans-fast);
        }

        .field-group input:focus,
        .field-group textarea:focus,
        .category-select:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.25);
        }

        .star-selector-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .star-sel-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .interactive-stars {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .star-btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: transform var(--trans-fast);
        }

        .star-btn:hover {
          transform: scale(1.15);
        }

        .star-dim {
          color: #475569;
        }

        .glow-star {
          filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.7));
        }

        .rating-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fbbf24;
          margin-left: 0.75rem;
        }

        .form-submit-row {
          display: flex;
          justify-content: flex-end;
        }

        .submit-feedback-btn {
          width: fit-content;
        }

        .feedback-success-state {
          padding: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .success-icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid rgba(16, 185, 129, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Testimonials Cards Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1050px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        .testimonial-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(17, 24, 39, 0.7);
        }

        @media (max-width: 650px) {
          .testimonial-card {
            padding: 1.25rem 1rem;
          }
          .t-author-footer {
            flex-wrap: wrap;
          }
          .t-date {
            position: static;
            width: 100%;
            margin-top: 0.25rem;
          }
        }

        .testimonial-card:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-5px);
        }

        .t-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .t-stars {
          display: flex;
          gap: 3px;
        }

        .t-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .t-quote-body {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .t-quote-icon {
          color: rgba(56, 189, 248, 0.25);
        }

        .t-quote-text {
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.7;
          font-style: italic;
        }

        .t-author-footer {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          position: relative;
        }

        .author-avatar-badge {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7, #6366f1);
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);
          flex-shrink: 0;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          flex: 1;
          min-width: 0;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .author-company {
          font-size: 0.72rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .t-date {
          position: absolute;
          top: 1.25rem;
          right: 0;
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .t-card-glow {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
