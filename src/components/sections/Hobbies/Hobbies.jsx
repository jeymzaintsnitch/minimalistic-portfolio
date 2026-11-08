import { hobbies } from '@/data/portfolio'
import './Hobbies.css'

export function Hobbies({ onNavigate }) {
  return (
    <section id="hobbies" className="section-hobbies">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">hobbies</h1>
          <p className="section-subtext">
            analogue rituals, hardware tinkering, and offline pursuits outside of engineering.
          </p>
        </div>
        <span className="minimal-kbd tabular">01 — 0{hobbies.length}</span>
      </div>

      <div className="editorial-list">
        {hobbies.map((hobby) => (
          <article key={hobby.id} className="editorial-row hobby-row">
            <div className="editorial-meta">
              <span className="editorial-index tabular">{hobby.index}</span>
              <span className="editorial-submeta">{hobby.category}</span>
            </div>

            <div className="editorial-body">
              <h2 className="hobby-title">{hobby.title}</h2>
              <div className="hobby-desc">{hobby.description}</div>
              {hobby.note && (
                <div className="hobby-note">{hobby.note}</div>
              )}
            </div>
          </article>
        ))}
      </div>

      {onNavigate && (
        <div className="page-nav-footer">
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('work')}
          >
            <span>← Work</span>
          </button>
          <span className="minimal-kbd">03 / 04</span>
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('projects')}
          >
            <span>Projects →</span>
          </button>
        </div>
      )}
    </section>
  )
}
