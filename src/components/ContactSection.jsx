import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Download,
  Clock,
  Sparkles,
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '3baf1256-eb1d-4379-902d-96bf634cf61c';
      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject || `New Portfolio Message from ${formState.name}`);
      formData.append('message', formState.message);
      formData.append('from_name', `Portfolio Contact - ${formState.name}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. You can click below to email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <br />
            <span className="gradient-text">Extraordinary Together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind, need a frontend team lead, or want to discuss SaaS & email architecture? Send me a message below.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Fast Actions */}
          <div className="contact-info-col">
            {/* Email Card */}
            <div className="glass-card contact-card interactive-glow">
              <div className="contact-card-icon cyan-bg">
                <Mail size={22} className="cyan" />
              </div>
              <div className="contact-card-body">
                <span className="card-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="card-value link">
                  {personalInfo.email}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={16} className="emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-card interactive-glow">
              <div className="contact-card-icon emerald-bg">
                <Phone size={22} className="emerald" />
              </div>
              <div className="contact-card-body">
                <span className="card-label">Direct Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`} className="card-value link">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={handleCopyPhone}
                title="Copy phone number to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check size={16} className="emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location & Timezone Card */}
            <div className="glass-card contact-card interactive-glow">
              <div className="contact-card-icon indigo-bg">
                <MapPin size={22} className="indigo" />
              </div>
              <div className="contact-card-body">
                <span className="card-label">Location & Availability</span>
                <span className="card-value">{personalInfo.location}</span>
                <span className="card-sub-info">
                  <Clock size={12} />
                  <span>IST (UTC+5:30) • Open to Onsite & Remote Roles</span>
                </span>
              </div>
            </div>

            {/* Quick Resume Download Banner */}
            <div className="glass-card resume-action-card">
              <div>
                <h4 className="resume-card-title">Looking for offline review?</h4>
                <p className="resume-card-desc">Download my full 2-page detailed technical resume in PDF format.</p>
              </div>
              <a
                href={personalInfo.resumeUrl}
                download="Bharathi-V-Resume.pdf"
                onClick={() => confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } })}
                className="btn btn-secondary resume-download-btn"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Direct-to-Gmail Contact Form */}
          <div className="glass-card contact-form-wrapper">
            <div className="form-header-badge">
              <span className="live-dot" />
              <span>Direct to Inbox via Web3Forms API</span>
            </div>

            <h3 className="form-heading">Send a Direct Message</h3>
            <p className="form-subheading">Messages are instantly delivered to my personal inbox at {personalInfo.email}.</p>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-box animate-float">
                  <Check size={36} className="emerald" />
                </div>
                <h4>Message Received Successfully!</h4>
                <p>
                  Thank you, <strong>{formState.name}</strong>! Your message has been sent directly to Bharathi's Gmail inbox. I will review it and get back to you shortly.
                </p>
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Honeypot to prevent bot spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your project, team requirements, or schedule a quick sync..."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                {errorMessage && (
                  <div className="form-error-banner">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn cta-submit-glow"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending to Bharathi's Inbox...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
        }

        @media (max-width: 992px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(17, 24, 39, 0.65);
          transition: all var(--trans-base);
        }

        .interactive-glow:hover {
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2);
          transform: translateY(-2px);
        }

        .contact-card-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cyan-bg {
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }
        .emerald-bg {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }
        .indigo-bg {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
          min-width: 0;
        }

        .card-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .card-value {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card-value.link:hover {
          color: var(--accent-cyan);
        }

        .card-sub-info {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .copy-btn {
          color: var(--text-muted);
          padding: 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          transition: all var(--trans-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .copy-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }

        .resume-action-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
          border-color: rgba(56, 189, 248, 0.25);
        }

        .resume-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .resume-card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .resume-download-btn {
          width: fit-content;
        }

        /* Form Wrapper */
        .contact-form-wrapper {
          padding: 2.5rem;
          background: rgba(17, 24, 39, 0.7);
        }

        @media (max-width: 600px) {
          .contact-form-wrapper {
            padding: 1.75rem;
          }
        }

        .form-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .form-heading {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
        }

        .form-subheading {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
          margin-bottom: 1.75rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(11, 15, 25, 0.8);
          border: 1px solid var(--border-light);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.92rem;
          color: #ffffff;
          outline: none;
          transition: all var(--trans-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.25);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.35);
          color: #fda4af;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
        }

        .submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        .cta-submit-glow {
          box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .animate-spin {
          animation: spinSlow 1s linear infinite;
        }

        .form-success-state {
          padding: 3rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-box {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid rgba(16, 185, 129, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
        }

        .form-success-state h4 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }

        .form-success-state p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 420px;
          line-height: 1.6;
        }

        .form-success-state strong {
          color: #ffffff;
        }

        .mt-3 {
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}
