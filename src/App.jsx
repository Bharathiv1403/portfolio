import ScrollProgress from './components/ScrollProgress';
import ParticleNetwork from './components/ParticleNetwork';
import GlowFollower from './components/GlowFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsHub from './components/TestimonialsHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import useScrollObserver from './hooks/useScrollObserver';

export default function App() {
  // Automatically reveals elements with smooth slide-up and staggered delays on scroll
  useScrollObserver();

  return (
    <div className="portfolio-app">
      {/* Glowing Neon Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Dynamic Interactive HTML5 Canvas Starfield / Constellation */}
      <ParticleNetwork />

      {/* Smooth Ambient Mouse Glow Follower */}
      <GlowFollower />

      {/* Subtle Background Cyber Grid */}
      <div className="bg-decor-grid" />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Section with Dynamic Role Typing & Interactive Terminal */}
      <Hero />

      {/* Key Numbers & Impact Counter */}
      <StatsCounter />

      {/* Architecture & About Pillars with Interactive Topology Visualizer */}
      <AboutSection />

      {/* Career Experience & Leadership Timeline */}
      <ExperienceSection />

      {/* Flagship Projects & Architectures with Interactive Modal */}
      <ProjectsSection />

      {/* Skills Matrix & Search Filter */}
      <SkillsSection />

      {/* Open Source Community, Education & Certifications */}
      <CommunitySection />

      {/* Testimonials & Interactive Feedback Community Wall */}
      <TestimonialsHub />

      {/* Contact Hub with Direct-to-Gmail Web3Forms & Confetti */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
        }

        .bg-decor-grid {
          position: fixed;
          inset: 0;
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
