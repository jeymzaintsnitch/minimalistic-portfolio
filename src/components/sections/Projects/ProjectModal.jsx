import { useState, useEffect } from 'react'
import { Button, Icon } from '@/components/ui'

/**
 * Architectural Inspector Modal with 3 deep-dive tabs:
 * 1. Overview
 * 2. Database & Data Model
 * 3. Trade-offs & Engineering Decisions
 * @param {{ project: any, onClose: () => void }} props
 */
export function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'schema' | 'tradeoffs'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="project-modal-header">
          <div className="project-modal-meta">
            <span className="mono text-muted text-xs">{project.category} · {project.year}</span>
            <span className="mono text-xs text-highlight">Role: {project.role}</span>
          </div>

          <div className="project-modal-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'overview'}
              className={`project-modal-tab mono ${activeTab === 'overview' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'schema'}
              className={`project-modal-tab mono ${activeTab === 'schema' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('schema')}
            >
              Data Model &amp; Schema
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'tradeoffs'}
              className={`project-modal-tab mono ${activeTab === 'tradeoffs' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('tradeoffs')}
            >
              Trade-offs
            </button>
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className="project-modal-body">
          <h2 id="modal-project-title" className="project-modal-title">{project.title}</h2>

          {activeTab === 'overview' && (
            <div className="modal-tab-content">
              <div className="modal-block">
                <h4 className="modal-block-label mono">SYSTEM ARCHITECTURE</h4>
                <p className="modal-block-text">{project.detailedDescription || project.description}</p>
              </div>

              <div className="modal-block">
                <h4 className="modal-block-label mono">KEY ACHIEVEMENTS</h4>
                <ul className="modal-highlights-list">
                  {project.highlights?.map((item, idx) => (
                    <li key={idx} className="modal-highlight-item">
                      <span className="modal-bullet mono">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-block">
                <h4 className="modal-block-label mono">TECHNOLOGIES USED</h4>
                <div className="modal-tech-pills">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="modal-tech-tag mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="modal-tab-content">
              <div className="modal-block">
                <h4 className="modal-block-label mono">RELATIONAL DATA STRUCTURES</h4>
                <div className="modal-schema-box mono">
                  <span className="text-highlight">Primary Entities &amp; Relations:</span>
                  <p>{project.schemaHighlights || 'Normalized relational tables with foreign key cascades.'}</p>
                </div>
              </div>

              <div className="modal-block">
                <h4 className="modal-block-label mono">INTEGRITY &amp; SECURITY</h4>
                <p className="modal-block-text">
                  Enforces strict foreign keys, indexing on frequent filter attributes, and server-side validation to guard against corrupt state mutations.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tradeoffs' && (
            <div className="modal-tab-content">
              <div className="modal-block">
                <h4 className="modal-block-label mono">ARCHITECTURAL DECISION RECORD (ADR)</h4>
                <div className="modal-tradeoff-box">
                  <p className="modal-block-text">{project.tradeoffs || 'Selected simpler, proven technology over unneeded complexity.'}</p>
                </div>
              </div>

              <div className="modal-block">
                <h4 className="modal-block-label mono">MEASURABLE IMPACT</h4>
                <p className="modal-block-text text-highlight mono">
                  {project.metric || 'Delivered on time with zero regressions.'}
                </p>
              </div>
            </div>
          )}

          <div className="project-modal-actions">
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="primary" size="sm" icon="external" iconPosition="right">
                Visit Live Platform
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="ghost" size="sm" icon="github" iconPosition="left">
                View Repository
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
