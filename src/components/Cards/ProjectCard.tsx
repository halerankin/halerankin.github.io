import { Link } from 'react-router-dom'
import type { Project } from '../../content/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  return (
    <article className="project-card">
      <h3 className="project-card__title">
        <Link to={`/case-studies/${project.id}`}>{project.title}</Link>
      </h3>
      <p className="project-card__meta">
        {project.role} · {project.timeframe}
      </p>
      <p className="project-card__problem">{project.problem}</p>
      <p className="project-card__stack">{project.stack.slice(0, 4).join(' · ')}</p>
      <Link to={`/case-studies/${project.id}`} className="project-card__link">
        Read case study →
      </Link>
    </article>
  )
}
