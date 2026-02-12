import type { Project } from '../../content/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  /** When provided, card is an accordion trigger; panel shows when true */
  isExpanded?: boolean
  /** Called when the card (trigger) is clicked; only used when isExpanded is defined */
  onToggle?: () => void
}

export function ProjectCard({
  project,
  isExpanded = false,
  onToggle,
}: ProjectCardProps): React.ReactElement {
  const isAccordion = onToggle !== undefined
  const triggerId = `project-trigger-${project.id}`
  const panelId = `project-panel-${project.id}`

  const summary = (
    <>
      <div className="project-card__summary-header">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__meta">
          {project.role} · {project.timeframe}
        </div>
      </div>
      <p className="project-card__problem">{project.problem}</p>
      <p className="project-card__stack">
        {project.stack.slice(0, 4).join(' · ')}
      </p>
    </>
  )

  const panel = (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      className="project-card__panel"
      hidden={!isExpanded}
    >
      <div className="project-card__panel-inner">
        <div className="project-card__panel-grid">
          <div className="project-card__panel-left">
            {project.outcome ? (
              <>
                <h4 className="project-card__panel-heading">Outcome</h4>
                <p className="project-card__outcome">{project.outcome}</p>
              </>
            ) : null}
            <h4 className="project-card__panel-heading">The problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="project-card__panel-right">
            {project.ownedLeadIn ? (
              <p className="project-card__owned-lead">{project.ownedLeadIn}</p>
            ) : null}
            <h4 className="project-card__panel-heading">What I owned</h4>
            <ul>
              {project.owned.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h4 className="project-card__panel-heading">Constraints</h4>
            <ul>
              {project.constraints.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h4 className="project-card__panel-heading">Impact</h4>
            <ul>
              {project.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="project-card__panel-meta">
              <p className="project-card__panel-meta-stack">{project.stack.join(', ')}</p>
              {project.links && project.links.length > 0 ? (
                <p className="project-card__panel-meta-links">
                  {project.links.map((link, i) => (
                    <span key={i}>
                      {i > 0 && ' · '}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (isAccordion) {
    return (
      <article
        className={`project-card project-card--accordion ${isExpanded ? 'project-card--expanded' : ''}`}
      >
        <button
          type="button"
          id={triggerId}
          className="project-card__trigger"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {summary}
        </button>
        {panel}
      </article>
    )
  }

  return (
    <article className="project-card">
      <div className="project-card__summary">{summary}</div>
    </article>
  )
}
