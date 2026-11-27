import defaultProjects from '@/data/projects.json'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

/**
 * Modular Projects section component.
 * Maps through a JSON array of projects (defaulting to src/data/projects.json)
 * and renders each inside a minimalist grid layout.
 */
export function Projects({ projects = defaultProjects }) {
  return (
    <section id="projects" className="section-projects">
      <div className="section-head">
        <div className="section-head-copy">
          <h1 className="section-heading">projects</h1>
          <p className="section-subtext">
            web apps and tools i've built.
          </p>
        </div>
      </div>

      <div className="entry-card-grid projects-minimal-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id || project.title}
            project={project}
          />
        ))}
      </div>

    </section>
  )
}
