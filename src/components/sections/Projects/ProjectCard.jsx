import { Link } from 'react-router-dom'
import { getEntryNavigation } from '../EntryHeading'

/**
 * Modular Project Item component.
 * Renders a project with an Instrument Serif title, short description, and link,
 * blending seamlessly into the background within a minimalist grid.
 */
export function ProjectCard({ project }) {
  const { title, description, technologies = [] } = project
  const { href, isExternal, arrow } = getEntryNavigation(project, 'projects')
  const Card = href ? (isExternal ? 'a' : Link) : 'article'

  return (
    <Card
      className={`entry-card project-grid-cell ${href ? 'is-linked' : ''}`.trim()}
      {...(href ? (isExternal ? { href } : { to: href }) : {})}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="entry-card-heading project-title-row">
        <h2 className="project-cell-title">{title}</h2>
        {arrow && <span className="entry-card-arrow project-card-arrow" aria-hidden="true">{arrow}</span>}
      </div>

      <p className="project-cell-description">{description}</p>

      {technologies.length > 0 && (
        <ul className="project-technologies" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}
