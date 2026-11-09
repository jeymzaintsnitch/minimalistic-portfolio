import { profile, nowItems, nowUpdatedAt, socialLinks } from '@/data/portfolio'
import { AsciiPortrait } from '@/components/ui/AsciiPortrait/AsciiPortrait'
import { Icon } from '@/components/ui'
import './About.css'

export function About({ onNavigate, theme = 'dark' }) {
  return (
    <section id="about" className="section-about">
      {/* Hero Split */}
      <div className="about-hero-grid">
        <div className="about-hero-copy">
          <div className="about-name-group">
            <h1 className="about-title">
              {profile.name}
            </h1>
            <p className="about-pup-tag">pup ce &apos;27</p>
          </div>

          <div className="about-status" aria-label="Current availability">
            <span className="about-status-dot" aria-hidden="true" />
            <span>available for thoughtful collaborations</span>
          </div>

          <div className="about-lead">
            {profile.headline}
          </div>

          <div className="about-bio">
            {profile.bio}
          </div>

          {/* Unified Minimalist Links Row */}
          <div className="about-actions">
            <div className="about-social-inline">
              <span className="about-social-item">
                <a
                  href={`mailto:${profile.email}`}
                  className="about-social-link"
                  title={`Email ${profile.email}`}
                >
                  <span>Email</span>
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </span>

              <span className="about-social-item">
                <span className="about-kicker-sep" aria-hidden="true">·</span>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  title="Open Resume"
                >
                  <span>Resume</span>
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </span>

              {socialLinks
                .filter((s) => s.name !== 'Email')
                .map((s) => (
                  <span key={s.name} className="about-social-item">
                    <span className="about-kicker-sep" aria-hidden="true">·</span>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-social-link"
                      title={s.handle}
                    >
                      <span>{s.name}</span>
                      <Icon name="arrow-up-right" size={12} />
                    </a>
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Minimalist ASCII Portrait */}
        <div className="about-portrait-wrap">
          <figure className="about-portrait-figure">
            <AsciiPortrait
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              theme={theme}
            />
          </figure>
        </div>
      </div>

      {/* Now Section — Swiss Editorial Split Grid */}
      <div className="about-now-section">
        <div className="about-now-header">
          <h2 className="about-now-title">Now</h2>
          <span className="about-now-caption">updated {nowUpdatedAt.toLowerCase()}</span>
        </div>

        <div className="editorial-list">
          {nowItems.map((item, idx) => (
            <a
              key={item.slug}
              className="editorial-row about-now-row"
              href={`#/now/${item.slug}`}
              aria-label={`Read ${item.topic} update`}
            >
              <div className="editorial-meta">
                <span className="editorial-index">0{idx + 1}</span>
                <span className="editorial-submeta">{item.topic}</span>
              </div>
              <div className="editorial-body">
                <div className="about-now-detail">
                  {item.detail}
                  {item.link && (
                    <>
                      {' '}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-now-link"
                      >
                        {item.linkLabel || item.link}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {onNavigate && (
        <div className="page-nav-footer">
          <span className="minimal-kbd">01 / 04</span>
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('work')}
          >
            <span>Work →</span>
          </button>
        </div>
      )}
    </section>
  )
}
