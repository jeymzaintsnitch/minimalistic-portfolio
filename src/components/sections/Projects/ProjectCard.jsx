import { Icon } from '@/components/ui'

/**
 * Modular Project Item component.
 * Renders a project with an Instrument Serif title, short description, and link,
 * blending seamlessly into the background within a minimalist grid.
 */
export function ProjectCard({ project }) {
  const { index, title, category, year, description, link, githubUrl, liveUrl, linkLabel = 'View project' } = project
  const href = link || liveUrl || githubUrl || '#'

  return (
    <article className="project-grid-cell">
      <div className="project-cell-top">
        {(index || year || category) && (
          <div className="project-cell-meta tabular">
            {index && <span>{index}</span>}
            {index && (year || category) && <span className="project-meta-sep" aria-hidden="true">·</span>}
            {year && <span>{year}</span>}
            {year && category && <span className="project-meta-sep" aria-hidden="true">·</span>}
            {category && <span>{category}</span>}
          </div>
        )}

        <h2 className="project-cell-title">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-anchor"
          >
            {title}
          </a>
        </h2>

        <div className="project-cell-description">{description}</div>
      </div>

      <div className="project-cell-footer">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cell-link"
          aria-label={`${linkLabel}: ${title}`}
        >
          <span>{linkLabel}</span>
          <Icon name="arrow-up-right" size={13} />
        </a>
      </div>
    </article>
  )
}
