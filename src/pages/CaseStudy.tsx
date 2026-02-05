import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../content/projects'
import './CaseStudy.css'

export function CaseStudy(): React.ReactElement {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <>
        <h1>Case study not found</h1>
        <p>
          <Link to="/work">Back to work</Link>
        </p>
      </>
    )
  }

  return (
    <article>
      <p>
        <Link to="/work">← Work</Link>
      </p>
      <header className="case-study__header">
        <h1>{project.title}</h1>
        <p className="case-study__meta">
          {project.role} · {project.timeframe}
        </p>
      </header>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section aria-labelledby="owned-heading">
        <h2 id="owned-heading">What I owned</h2>
        <ul>
          {project.owned.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="constraints-heading">
        <h2 id="constraints-heading">Constraints</h2>
        <ul>
          {project.constraints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="impact-heading">
        <h2 id="impact-heading">Impact</h2>
        <ul>
          {project.impact.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="stack-heading">
        <h2 id="stack-heading">Stack</h2>
        <p>{project.stack.join(', ')}</p>
      </section>

      {project.links.length > 0 && (
        <section aria-labelledby="links-heading">
          <h2 id="links-heading">Links</h2>
          <ul>
            {project.links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p>
        <Link to="/work">← Back to work</Link>
      </p>
    </article>
  )
}
