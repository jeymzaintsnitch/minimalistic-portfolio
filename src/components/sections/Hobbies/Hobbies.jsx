import { Link } from 'react-router-dom'
import { hobbies } from '@/data/portfolio'
import { getEntryNavigation } from '../EntryHeading'
import './Hobbies.css'

function HobbyCard({ hobby }) {
  const { href, isExternal, arrow } = getEntryNavigation(hobby, 'hobbies')
  const Card = href ? (isExternal ? 'a' : Link) : 'article'

  return (
    <Card
      className={`entry-card editorial-row hobby-row ${href ? 'is-linked' : ''}`.trim()}
      {...(href ? (isExternal ? { href } : { to: href }) : {})}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="hobby-content">
        <div className="entry-card-heading hobby-title-row">
          <h2 className="hobby-title">{hobby.title}</h2>
          {arrow && <span className="entry-card-arrow hobby-card-arrow" aria-hidden="true">{arrow}</span>}
        </div>
        <p className="hobby-desc">{hobby.description}</p>
      </div>
    </Card>
  )
}

export function Hobbies() {
  return (
    <section id="hobbies" className="section-hobbies">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">hobbies</h1>
          <p className="section-subtext">
            gaming and other things i do when i'm bored.
          </p>
        </div>
      </div>

      <div className="entry-card-grid editorial-list hobbies-primary-grid">
        {hobbies.map((hobby) => <HobbyCard key={hobby.id} hobby={hobby} />)}
      </div>
    </section>
  )
}
