import { workExperience } from '@/data/portfolio'
import './Work.css'

export function Work({ onNavigate }) {
  return (
    <section id="work" className="section-work">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">work</h1>
          <p className="section-subtext">
            software engineering experience, leadership, and systems development.
          </p>
        </div>
        <span className="minimal-kbd tabular">{workExperience.length} roles</span>
      </div>

      <div className="editorial-list">
        {workExperience.map((item) => (
          <article key={item.company} className="editorial-row work-row">
            <div className="editorial-meta">
              <span className="editorial-index tabular">{item.period}</span>
              <span className="editorial-submeta">{item.company}</span>
            </div>

            <div className="editorial-body">
              <h2 className="work-role">{item.role}</h2>
              <div className="work-desc">{item.description}</div>

              <ul className="work-highlights">
                {item.highlights.map((h, idx) => (
                  <li key={idx} className="work-highlight-item">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {onNavigate && (
        <div className="page-nav-footer">
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('about')}
          >
            <span>← James</span>
          </button>
          <span className="minimal-kbd">02 / 04</span>
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('hobbies')}
          >
            <span>Hobbies →</span>
          </button>
        </div>
      )}
    </section>
  )
}
