import defaultProjects from '@/data/projects.json'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

/**
 * Modular Projects section component.
 * Maps through a JSON array of projects (defaulting to src/data/projects.json)
 * and renders each inside a minimalist grid layout.
 */
export function Projects({ projects = defaultProjects, onNavigate }) {
  return (
    <section id="projects" className="section-projects">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">projects</h1>
          <p className="section-subtext">
            selected software, web platforms, and systems engineering builds.
          </p>
        </div>
      </div>

      <div className="projects-minimal-grid">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id || project.title || idx}
            project={{
              ...project,
              index: project.index || String(idx + 1).padStart(2, '0'),
            }}
          />
        ))}
      </div>

      {onNavigate && (
        <div className="page-nav-footer">
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('hobbies')}
          >
            <span>← Hobbies</span>
          </button>
          <span className="minimal-kbd">04 / 04</span>
          <button
            type="button"
            className="page-nav-link"
            onClick={() => onNavigate('about')}
          >
            <span>James →</span>
          </button>
        </div>
      )}
    </section>
  )
}
