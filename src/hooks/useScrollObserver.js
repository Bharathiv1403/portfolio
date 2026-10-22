import { useEffect } from 'react';

export default function useScrollObserver() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target all major cards, headers, and section containers
    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .section-header, .stat-card, .pillar-card, .about-highlight-box, .arch-visualizer-container, .timeline-item, .project-card, .skill-category-card, .foss-card, .edu-card, .cert-card, .testimonial-card, .contact-card, .contact-form-wrapper, .resume-action-card, .feedback-control-bar'
    );

    elements.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      // Subtle stagger delay based on sibling index
      const delay = (index % 4) * 0.1;
      if (delay > 0) {
        el.style.transitionDelay = `${delay}s`;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
