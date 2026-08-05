import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Check,
  Layers,
  ChevronRight,
  Sparkles,
  Video,
  ClipboardCheck,
  GraduationCap,
  FileText,
  Trophy,
  Globe,
} from 'lucide-react';
import './Experience.css';
import portfolioData from '../../data/portfolioData';

/* Products name their icon in portfolioData; resolved here so the data file
   needs no imports of its own. */
const PRODUCT_ICONS = {
  video: Video,
  assessment: ClipboardCheck,
  education: GraduationCap,
  notes: FileText,
  sports: Trophy,
};

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Parses a "YYYY-MM" string without going through Date(),
 * so the result never shifts because of the browser timezone.
 */
const parseYearMonth = (value) => {
  if (!value) return null;
  const [year, month] = String(value).split('-').map(Number);
  if (!year || !month) return null;
  return { year, month };
};

const formatYearMonth = (value) => {
  const parsed = parseYearMonth(value);
  if (!parsed) return 'Present';
  return `${MONTHS[parsed.month - 1]} ${parsed.year}`;
};

/**
 * Inclusive month count, the same way LinkedIn reports tenure:
 * Jul 2025 - Aug 2026 reads as 1 yr 2 mos.
 */
const formatDuration = (start, end) => {
  const from = parseYearMonth(start);
  if (!from) return '';

  const now = new Date();
  const to = parseYearMonth(end) || {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  };

  const totalMonths =
    (to.year - from.year) * 12 + (to.month - from.month) + 1;
  if (totalMonths <= 0) return '';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
};

const getInitials = (name = '') =>
  name
    .replace(/[^A-Za-z ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

/* Favicons are derived from the company URL rather than stored in the data,
   so adding a new employer only ever means adding its website. Two providers
   are tried before falling back to the initials badge. */
const faviconSources = (website) => {
  if (!website) return [];
  try {
    const { hostname } = new URL(website);
    return [
      `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`,
      `https://icons.duckduckgo.com/ip3/${hostname}.ico`,
    ];
  } catch {
    return [];
  }
};

const hostLabel = (website) => {
  try {
    return new URL(website).hostname.replace(/^www\./, '');
  } catch {
    return website;
  }
};

function CompanyLogo({ company, website }) {
  const sources = useMemo(() => faviconSources(website), [website]);
  const [sourceIndex, setSourceIndex] = useState(0);

  const current = sources[sourceIndex];

  if (!current) {
    return (
      <div className="exp-logo" aria-hidden="true">
        <span>{getInitials(company)}</span>
      </div>
    );
  }

  return (
    <div className="exp-logo exp-logo-favicon" aria-hidden="true">
      <img
        src={current}
        alt=""
        loading="lazy"
        onError={() => setSourceIndex((i) => i + 1)}
      />
    </div>
  );
}

function ExperienceCard({ job, index }) {
  const products = job.products || [];
  const [activeProduct, setActiveProduct] = useState(0);

  const isCurrent = !job.endDate;
  const selected = products[activeProduct] || null;
  const website = job.website || job.companyLink || '';

  return (
    <article className="exp-item" style={{ '--exp-index': index }}>
      <span className={`exp-marker ${isCurrent ? 'is-current' : ''}`} aria-hidden="true" />

      <div className="exp-card">
        <header className="exp-card-head">
          <CompanyLogo company={job.company} website={website} />

          <div className="exp-heading">
            <div className="exp-role-row">
              <h3 className="exp-role">{job.role}</h3>
              {isCurrent && (
                <span className="exp-live-badge">
                  <span className="exp-live-dot" aria-hidden="true" />
                  Currently working here
                </span>
              )}
            </div>

            <p className="exp-company">
              <Building2 size={16} aria-hidden="true" />
              {website ? (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </p>

            <ul className="exp-meta">
              <li>
                <Calendar size={14} aria-hidden="true" />
                {formatYearMonth(job.startDate)} &ndash; {formatYearMonth(job.endDate)}
              </li>
              <li className="exp-meta-duration">{formatDuration(job.startDate, job.endDate)}</li>
              {job.location && (
                <li>
                  <MapPin size={14} aria-hidden="true" />
                  {job.location}
                </li>
              )}
              {job.employmentType && <li>{job.employmentType}</li>}
              {website && (
                <li>
                  <Globe size={14} aria-hidden="true" />
                  <a
                    className="exp-website"
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {hostLabel(website)}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </header>

        {job.summary && <p className="exp-summary">{job.summary}</p>}

        {job.metrics?.length > 0 && (
          <div className="exp-metrics">
            {job.metrics.map((metric) => (
              <div className="exp-metric" key={metric.label}>
                <span className="exp-metric-value">{metric.value}</span>
                <span className="exp-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {job.highlights?.length > 0 && (
          <div className="exp-block">
            <h4 className="exp-block-title">
              <Sparkles size={16} aria-hidden="true" />
              What I own
            </h4>
            <ul className="exp-highlights">
              {job.highlights.map((highlight, i) => (
                <li key={i}>
                  <span className="exp-check" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {products.length > 0 && (
          <div className="exp-block">
            <h4 className="exp-block-title">
              <Layers size={16} aria-hidden="true" />
              Products I shipped on
            </h4>

            <div className="exp-product-tabs" role="tablist" aria-label="Products worked on">
              {products.map((product, i) => (
                <button
                  key={product.name}
                  type="button"
                  role="tab"
                  id={`exp-tab-${job.id}-${i}`}
                  aria-selected={activeProduct === i}
                  aria-controls={`exp-panel-${job.id}-${i}`}
                  className={`exp-product-tab ${activeProduct === i ? 'active' : ''}`}
                  onClick={() => setActiveProduct(i)}
                >
                  {(() => {
                    const Icon = PRODUCT_ICONS[product.icon] || Layers;
                    return <Icon size={20} aria-hidden="true" />;
                  })()}
                  <span>{product.name}</span>
                </button>
              ))}
            </div>

            {selected && (
              <div
                className="exp-product-panel"
                role="tabpanel"
                key={selected.name}
                id={`exp-panel-${job.id}-${activeProduct}`}
                aria-labelledby={`exp-tab-${job.id}-${activeProduct}`}
              >
                <div className="exp-product-head">
                  <h5>{selected.name}</h5>
                  {selected.tagline && <span className="exp-product-tagline">{selected.tagline}</span>}
                </div>

                <p className="exp-product-desc">{selected.description}</p>

                {selected.contribution && (
                  <p className="exp-product-contribution">
                    <ChevronRight size={15} aria-hidden="true" />
                    <span>
                      <strong>My part:</strong> {selected.contribution}
                    </span>
                  </p>
                )}

                {selected.stack?.length > 0 && (
                  <div className="exp-chip-row">
                    {selected.stack.map((tech) => (
                      <span className="exp-chip subtle" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {job.techStack?.length > 0 && (
          <footer className="exp-card-foot">
            <span className="exp-foot-label">Tech used</span>
            <div className="exp-chip-row">
              {job.techStack.map((tech) => (
                <span className="exp-chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </footer>
        )}
      </div>
    </article>
  );
}

/* Falls back to the data module when App.jsx does not pass props, so the
   section can never silently disappear because of a partial deploy. */
function Experience({ experience, stats }) {
  const jobs = experience?.length ? experience : portfolioData.experience || [];
  const statCards = stats?.length ? stats : portfolioData.experienceStats || [];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!jobs.length) {
    console.warn(
      '[Experience] No experience data found. Check that src/data/portfolioData.js ' +
        'contains the `experience` array.'
    );
    return null;
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`experience-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="exp-container">
        <div className="exp-header">
          <span className="exp-eyebrow">
            <Briefcase size={15} aria-hidden="true" />
            Career
          </span>
          <h2>Professional Experience</h2>
          <div className="exp-divider" />
          <p className="exp-intro">
            Where I do the work day to day &mdash; owning features from database schema and REST API
            through to the responsive UI, then keeping them healthy in production.
          </p>
        </div>

        {statCards.length > 0 && (
          <div className="exp-stat-rail">
            {statCards.map((stat, i) => (
              <div className="exp-stat" key={stat.label} style={{ '--exp-index': i }}>
                <span className="exp-stat-value">{stat.value}</span>
                <span className="exp-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="exp-timeline">
          {jobs.map((job, index) => (
            <ExperienceCard job={job} index={index} key={job.id ?? index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;