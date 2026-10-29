import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, RotateCcw, Sparkles, Terminal, Mic, Github, ExternalLink } from 'lucide-react';

export default function TamilTtsDemo() {
  const [text, setText] = useState('வணக்கம்! என் பெயர் பாரதி. நான் ஒரு Frontend Developer.');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.95);
  const [hasVoice, setHasVoice] = useState(false);
  const [activePreset, setActivePreset] = useState(0);

  const presets = [
    {
      label: 'அறிமுகம் (Intro)',
      text: 'வணக்கம்! என் பெயர் பாரதி. நான் ஒரு Frontend Lead மற்றும் Full Stack Developer.'
    },
    {
      label: 'தொழில்நுட்பம் (Tech)',
      text: 'React, Next.js, JMAP மற்றும் Cloudflare கொண்டு நவீன மென்பொருட்களை உருவாக்குகிறேன்.'
    },
    {
      label: 'திறந்த மூலம் (FOSS)',
      text: 'VGLUG மூலமாக தமிழ் கணிமை மற்றும் கட்டற்ற மென்பொருள் விழிப்புணர்வை முன்னெடுக்கிறேன்.'
    }
  ];

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setHasVoice(true);
    }
  }, []);

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Detect Tamil voice or fallback to default
    const voices = window.speechSynthesis.getVoices();
    const tamilVoice = voices.find((v) => v.lang.includes('ta') || v.lang.includes('Tamil'));
    if (tamilVoice) {
      utterance.voice = tamilVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleSelectPreset = (idx) => {
    setActivePreset(idx);
    setText(presets[idx].text);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="tamil-tts-container glass-card">
      <div className="tts-header">
        <div className="tts-title-row">
          <div className="tts-badge-icon">
            <Mic size={18} className="cyan" />
          </div>
          <div>
            <h4 className="tts-heading">Tamil TTS Speech Engine • Live Interactive Simulator</h4>
            <p className="tts-sub">
              Interactive demo inspired by Bharathi's FOSS Tamil Speech Synthesis Hackathon Winner Project.
            </p>
          </div>
        </div>
        <div className="tts-header-actions">
          <a
            href="https://github.com/Bharathiv1403/Tamil-TTS-Using-tacotron2"
            target="_blank"
            rel="noopener noreferrer"
            className="tts-gh-link"
            title="View Model on GitHub"
          >
            <Github size={14} />
            <span>Tacotron 2 Repo</span>
            <ExternalLink size={12} />
          </a>
          <span className="tts-live-tag">● Web Speech Engine</span>
        </div>
      </div>

      {/* Preset Pills */}
      <div className="tts-presets-bar">
        <span className="presets-label">மாதிரி உரையாடல் (Sample Presets):</span>
        <div className="preset-buttons">
          {presets.map((p, idx) => (
            <button
              key={idx}
              className={`preset-btn ${activePreset === idx ? 'active' : ''}`}
              onClick={() => handleSelectPreset(idx)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Text Area Input */}
      <div className="tts-input-box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="இங்கே தமிழில் தட்டச்சு செய்யுங்கள் (Type or edit Tamil text here)..."
          rows={3}
          className="tts-textarea"
        />
      </div>

      {/* Waveform / Visualizer */}
      <div className="tts-playback-bar">
        <div className="wave-bars">
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className={`wave-bar ${isSpeaking ? 'active' : ''}`}
              style={{
                animationDelay: `${i * 0.08}s`,
                height: isSpeaking ? `${Math.floor(Math.random() * 24 + 8)}px` : '4px'
              }}
            />
          ))}
        </div>

        <div className="playback-actions">
          <button
            onClick={handleSpeak}
            className={`btn btn-speak ${isSpeaking ? 'speaking' : ''}`}
          >
            {isSpeaking ? (
              <>
                <VolumeX size={16} />
                <span>நிறுத்து (Stop)</span>
              </>
            ) : (
              <>
                <Volume2 size={16} />
                <span>உரையாடு (Speak Now)</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .tamil-tts-container {
          padding: 1.75rem;
          margin-top: 2.5rem;
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(11, 16, 27, 0.9) 100%);
          border: 1px solid rgba(56, 189, 248, 0.28);
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.12);
        }

        .tts-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .tts-title-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .tts-badge-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tts-badge-icon .cyan {
          color: var(--accent-cyan);
        }

        .tts-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .tts-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .tts-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .tts-gh-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #d8b4fe;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.35);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all var(--trans-fast);
        }

        .tts-gh-link:hover {
          background: rgba(168, 85, 247, 0.25);
          border-color: #c084fc;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .tts-live-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #34d399;
          background: rgba(16, 185, 129, 0.12);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .tts-presets-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1.25rem 0 0.85rem 0;
          flex-wrap: wrap;
        }

        .presets-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .preset-buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .preset-btn {
          font-size: 0.76rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          transition: all var(--trans-fast);
        }

        .preset-btn:hover {
          color: #ffffff;
          border-color: var(--accent-cyan);
        }

        .preset-btn.active {
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-cyan);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .tts-input-box {
          margin-bottom: 1rem;
        }

        .tts-textarea {
          width: 100%;
          background: rgba(8, 12, 20, 0.85);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          font-family: inherit;
          font-size: 0.95rem;
          color: #ffffff;
          line-height: 1.6;
          resize: none;
          outline: none;
          transition: border-color var(--trans-fast);
        }

        .tts-textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
        }

        .tts-playback-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .wave-bars {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 32px;
        }

        .wave-bar {
          width: 4px;
          background: rgba(56, 189, 248, 0.3);
          border-radius: 2px;
          transition: height 0.15s ease, background 0.2s ease;
        }

        .wave-bar.active {
          background: var(--accent-cyan);
          animation: wavePulse 0.5s infinite ease-in-out alternate;
        }

        @keyframes wavePulse {
          from { height: 6px; }
          to { height: 26px; }
        }

        .btn-speak {
          background: var(--grad-primary);
          color: #ffffff;
          padding: 0.65rem 1.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: var(--radius-full);
          transition: all var(--trans-base);
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
        }

        .btn-speak.speaking {
          background: #ef4444;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }

        .btn-speak:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        @media (max-width: 600px) {
          .tamil-tts-container {
            padding: 1.25rem 1rem;
          }
          .tts-playback-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-speak {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
