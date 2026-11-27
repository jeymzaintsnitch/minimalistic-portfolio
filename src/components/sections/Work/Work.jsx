import { workExperience } from '@/data/portfolio'
import { EntryHeading } from '../EntryHeading'
import { WorkGallery } from './WorkGallery'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="section-work">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">work</h1>
          <p className="section-subtext">
            a few things i've worked on.
          </p>
        </div>
      </div>

      <div className="work-experience">
        <h2 className="work-experience-title">experience</h2>

        <ol className="work-list">
          {workExperience.map((item) => (
            <li key={item.id} className="work-item">
              <div className="work-item-heading">
                <span className="work-item-dot" aria-hidden="true" />
                <h3 className="work-company">
                  <EntryHeading entry={item} section="work" className="work-entry-link">
                    {item.company}
                  </EntryHeading>
                </h3>
                <span className="work-period">{item.period}</span>
              </div>

              <p className="work-role">{item.role}</p>
              <p className="work-desc">{item.description}</p>

              {item.images?.length > 0 && (
                <WorkGallery company={item.company} images={item.images} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
