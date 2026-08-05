import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Download,
  Send,
  Briefcase,
  Layers,
  Code2,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from 'lucide-react';
import './Hero.css';
import portfolioData from '../../data/portfolioData';
import heroPhoto from '../../assets/Ram.jpg';
import resume from '../../assets/resume.pdf';

/* Badge icons are referenced by name in portfolioData so the data file
   stays free of imports. */
const BADGE_ICONS = {
  briefcase: Briefcase,
  layers: Layers,
  code: Code2,
};

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

/* Reads the media query during the first render, not in an effect, so the
   portrait is never committed to the DOM on a phone - CSS `display: none`
   would still make the browser download the image. */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mql = window.matchMedia(query);
    const update = (event) => setMatches(event.matches);
    setMatches(mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    }

    mql.addListener(update);
    return () => mql.removeListener(update);
  }, [query]);

  return matches;
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function Hero({ userData, highlights, socials }) {
  const user = userData || portfolioData.user || {};
  const badges = highlights?.length
    ? highlights
    : portfolioData.heroHighlights || [];
  const socialLinks = socials?.length
    ? socials
    : portfolioData.contact?.social || [];

  const isPhone = useMediaQuery('(max-width: 768px)');

  const titles = user.titles?.length ? user.titles : ['Full Stack Developer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    if (titles.length < 2) return undefined;

    const interval = setInterval(() => {
      setSwapping(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setSwapping(false);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* ---------- Left: the pitch ---------- */}
        <div className="hero-copy">
          <p className={`hero-eyebrow ${swapping ? 'is-swapping' : ''}`}>
            {titles[titleIndex]}
          </p>

          <h1 className="hero-title">
            <span className="hero-title-lead">Hello, my name is</span>
            <span className="hero-title-name">
              {user.name}
              <span className="hero-wave" role="img" aria-label="waving hand">
                &#128075;
              </span>
            </span>
          </h1>

          <p className="hero-desc">{user.description || user.subtitle}</p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn hero-btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <Send size={17} aria-hidden="true" />
            </button>

            <a
              className="hero-btn hero-btn-dark"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <Download size={17} aria-hidden="true" />
            </a>
          </div>

          {socialLinks.length > 0 && (
            <ul className="hero-socials">
              {socialLinks.map((item) => {
                const Icon =
                  SOCIAL_ICONS[String(item.platform).toLowerCase()] || Globe;
                return (
                  <li key={item.platform}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.platform}
                      title={item.platform}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ---------- Right: portrait + floating proof ---------- */}
        <div className="hero-visual">
          <div className="hero-stage">
            {!isPhone && (
              <div className="hero-portrait">
                <span className="hero-blob" aria-hidden="true" />
                <span className="hero-arc" aria-hidden="true" />

                <div className="hero-photo">
                  <img src={user.image || heroPhoto} alt={user.name} />
                </div>
              </div>
            )}

            {badges.map((badge, i) => {
              const Icon = BADGE_ICONS[badge.icon] || Briefcase;
              return (
                <div
                  className={`hero-badge hero-badge-${i + 1}`}
                  key={badge.label}
                  style={{ '--delay': `${(0.6 + i * 0.15).toFixed(2)}s` }}
                >
                  <span className="hero-badge-icon" aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <span className="hero-badge-value">{badge.value}</span>
                  <span className="hero-badge-label">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-scroll"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} aria-hidden="true" />
      </button>
    </section>
  );
}

export default Hero;