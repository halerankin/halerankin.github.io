import { useState, useCallback } from 'react'
import type { Project } from '../../content/projects'
import './ProjectCard.css'
// import LinkIcon from '../../assets/icon-link.svg'

interface ProjectCardProps {
  project: Project
  isExpanded?: boolean
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

  const hasOwned = project.owned && project.owned.length > 0
  const approach =
    project.approach && project.approach.length > 0 ? project.approach : null
  const decisions =
    project.decisions && project.decisions.length > 0 ? project.decisions : null
  const impact =
    project.impact && project.impact.length > 0 ? project.impact : null
  const referenceVisuals =
    project.referenceVisuals && project.referenceVisuals.length > 0 ? project.referenceVisuals : null
  
  const demoLinks = project.demo && project.demo.length > 0 ? project.demo : null
  const primaryDemo = demoLinks?.find((d) => d.primary)
  const secondaryDemo = demoLinks?.filter((d) => !d.primary) ?? []

  const [copied, setCopied] = useState(false)
  // HashRouter uses the hash for routing; query params must be in the hash
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}#/?project=${project.id}`
      : ''

  const handleCopyLink = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!shareUrl) return
      void navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    },
    [shareUrl],
  )

  const summary = (
    <>
      <div className="project-card__summary-header">
        <div className="project-card__summary-heading">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__meta">
            <span>{project.role} · {project.timeframe}</span>
          </div>
        </div>

        {isAccordion && shareUrl ? (
          <button
            type="button"
            className="project-card__share"
            onClick={handleCopyLink}
            aria-label={copied ? 'Link copied' : 'Copy link to this case study'}
            title={copied ? 'Copied!' : 'Copy link'}
          >
            <span className="project-card__share-inner">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l1-1"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{copied ? 'Copied!' : 'Copy link'}</span>
            </span>
          </button>
        ) : null}
      </div>

      <p className="project-card__problem">{project.problem}</p>
      <p className="project-card__stack">
        {project.stack.join(' · ')}
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
        <div className="project-card__panel-header">
          <div className="project-card__panel-header-main">
            {demoLinks ? (
              <section className="project-card__panel-demo project-card__panel-demo--hero">
                <div className="project-card__demo-actions">
                  <div className="project-card__demo-left">
                  {secondaryDemo.length > 0 ? (
                    <div className="project-card__demo-secondary">
                      {secondaryDemo.map((link, i) => (
                        <a
                          key={`secondary-${i}`}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                    ) : null}

                    {primaryDemo ? (
                      <a
                        href={primaryDemo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__demo-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {primaryDemo.label}
                      </a>
                    ) : null}
                  </div>
                  {referenceVisuals ? (
                    <div className="project-card__reference">
                      {project.referenceHeading ? (
                        <div className="project-card__reference-caption">
                          <p>{project.referenceHeading}</p>
                        </div>
                      ): null}
                      <div className="project-card__reference-grid">
                        {referenceVisuals.map((ref, i) => (
                        <figure key={i}>
                            <img
                              src={ref.src}
                              alt={ref.label}
                            />
                        </figure>
                        ))}
                    </div>
                  </div>
                  ) : null}
                </div>

                <div className="project-card__intro-row">
                  {project.intro ? (
                    <div className="project-card__intro-text">
                      {project.intro}
                    </div>
                  ) : null}

                  {project.introVisual && (
                    <figure className="project-card__system-visual">
                      <img
                        src={project.introVisual.src}
                        alt={project.introVisual.label}
                      />
                      {project.introVisual.caption && (
                        <figcaption>{project.introVisual.caption}</figcaption>
                      )}
                    </figure>
                  )}
              </div>
              </section>
            ) : null}
          </div>
        </div>

        <div className="project-card__panel-intro">
          <div className="project-card__panel-intro-main">
            {project.problem ? (
              <section className="project-card__section">
                <h4 className="project-card__panel-heading">The problem</h4>
                <p>{project.problem}</p>
              </section>
            ) : null}

            {project.outcome ? (
              <section className="project-card__section">
                <h4 className="project-card__panel-heading">Outcome</h4>
                <p className="project-card__outcome">{project.outcome}</p>
              </section>
            ) : null}
          </div>
        </div>

        <div className="project-card__panel-grid">
          <div className="project-card__panel-left">

          {approach?.length ? (
            <section className="project-card__section">
              <h4 className="project-card__panel-heading">Approach</h4>
              <div className="project-card__approach-sections">
                {approach.map((item, i) => {
                  const hasImage = !!item.imageSrc

                  return (
                    <div
                      key={`${item.title}-${i}`}
                      className={`project-card__approach-section ${hasImage ? 'project-card__approach-section--with-image' : ''}`}
                    >
                      <div className="project-card__approach-content">
                        {item.title ? (
                          <h5 className="project-card__subheading">{item.title}</h5>
                        ) : null}

                        <p>{item.description}</p>
                      </div>

                      {hasImage ? (
                        <figure className="project-card__approach-figure">
                          <img
                            src={item.imageSrc}
                            alt={item.imageLabel ?? ''}
                            className="project-card__visual-image"
                            loading="lazy"
                          />
                          {(item.imageLabel || item.imageCaption) ? (
                            <figcaption className="project-card__visual-caption">
                              {item.imageCaption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>
          ) : null}
          </div>

          <div className="project-card__panel-right">
            <p className="project-card__scope">
              {project.scope ? project.scope.join(' · ') : null}
            </p>
            {decisions ? (
              <section className="project-card__section">
                <h4 className="project-card__panel-heading">Key decisions</h4>
                <ul>
                  {decisions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {hasOwned ? (
              <section className="project-card__section">
                <h4 className="project-card__panel-heading">What I owned</h4>
                <ul>
                  {project.owned.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {impact ? (
                <section className="project-card__section">
                  <h4 className="project-card__panel-heading">Why it matters</h4>
                  <ul>
                    {impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
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