import { Link } from 'react-router-dom'
import { profile, nowItems, nowUpdatedAt, socialLinks } from '@/data/portfolio'
import { Icon } from '@/components/ui'
import { AsciiPortrait } from '@/components/ui/AsciiPortrait/AsciiPortrait'
import { EntryHeading } from '../EntryHeading'
import { Ganap } from './Ganap'
import './About.css'

export function About({ theme = 'dark' }) {
  return (
    <section id="about" className="section-about">
      {/* Hero Split */}
      <div className="about-hero-grid">
        <div className="about-hero-copy">
          <div className="about-name-group">
            <h1 className="about-title">
              {profile.fullName}
            </h1>
            {profile.heroLabel && <p className="about-pup-tag">{profile.heroLabel}</p>}
          </div>

          <p className="about-bio">
            {profile.bio.map((segment, index) => (
              segment.href ? (
                segment.external ? <a
                  key={`${segment.text}-${index}`}
                  href={segment.href}
                  className={`about-bio-link ${segment.highlight ? 'is-highlighted' : ''}`.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {segment.text}
                </a> : <Link
                  key={`${segment.text}-${index}`}
                  to={segment.href}
                  className={`about-bio-link ${segment.highlight ? 'is-highlighted' : ''}`.trim()}
                >
                  {segment.text}
                </Link>
              ) : segment.text
            ))}
          </p>

          {/* Unified Minimalist Links Row */}
          <div className="about-actions">
            <div className="about-social-inline">
              <span className="about-social-item">
                <a
                  href={`mailto:${profile.email}`}
                  className="about-social-link"
                >
                  <span>Email</span>
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </span>

              <span className="about-social-item">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                >
                  <span>Resume</span>
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </span>

              {socialLinks
                .filter((s) => s.name !== 'Email')
                .map((s) => (
                  <span key={s.name} className="about-social-item">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-social-link"
                    >
                      <span>{s.name}</span>
                      <Icon name="arrow-up-right" size={12} />
                    </a>
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* ASCII portrait */}
        <div className="about-portrait-wrap">
          <figure className="about-portrait-figure">
            <AsciiPortrait
              src={profile.avatar}
              alt={`ASCII portrait of ${profile.fullName}`}
              theme={theme}
            />
          </figure>
        </div>
      </div>

      {/* Now Section — Swiss Editorial Split Grid */}
      <div className="about-now-section">
        <div className="about-now-header">
          <h2 className="about-now-title">now</h2>
          {nowUpdatedAt && <span className="about-now-caption">updated {nowUpdatedAt}</span>}
        </div>

        <dl className="about-now-grid">
          {nowItems.map((item) => (
            <div key={item.slug} className="about-now-item">
              <dt className="about-now-label">
                <span>{item.label}</span>
              </dt>
              <dd className="about-now-value">
                <EntryHeading entry={item} section="now">{item.topic}</EntryHeading>
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
              </dd>
              {item.detail && <dd className="about-now-note">{item.detail}</dd>}
            </div>
          ))}
        </dl>
      </div>

      <Ganap />

    </section>
  )
}
