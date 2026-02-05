import { ProjectCard } from '../components/Cards/ProjectCard'
import { Section } from '../components/Typography/Section'
import { projects } from '../content/projects'
import './Work.css'

export function Work(): React.ReactElement {
  return (
    <>
      <h1>Work</h1>
      <p className="work-intro">
        Selected projects and case studies: design systems, reliability, tooling, and
        accessibility.
      </p>
      <Section title="Projects" id="projects">
        <ul className="project-list" aria-label="Projects">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
