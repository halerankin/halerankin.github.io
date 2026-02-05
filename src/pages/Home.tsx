import { Link } from 'react-router-dom'
import { Section } from '../components/Typography/Section'
import { ProjectCard } from '../components/Cards/ProjectCard'
import { ButtonLink } from '../components/Buttons/ButtonLink'
import { ContactSection } from '../components/Contact/ContactSection'
import { projects } from '../content/projects'
import './Home.css'

const featuredIds = ['design-system-platform', 'checkout-reliability', 'internal-tooling-dex']
const featured = projects.filter((p) => featuredIds.includes(p.id))

export function Home(): React.ReactElement {
  return (
    <>
      <header className="home-hero">
        <h1 className="home-hero__headline">
          Senior front-end engineer — design systems, accessibility, developer experience
        </h1>
        <p className="home-hero__tagline">
          I build reliable, accessible UIs and the tooling and processes that let teams ship
          confidently.
        </p>
        <div className="home-hero__actions">
          <ButtonLink to="/work">View work</ButtonLink>
          <ButtonLink to="/resume" variant="secondary">
            Resume
          </ButtonLink>
          <ButtonLink to="/#contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </header>

      <Section title="Focus areas" id="focus">
        <ul className="pillars">
          <li>
            <strong>Design systems</strong> — component APIs, documentation, adoption, and
            visual/a11y consistency.
          </li>
          <li>
            <strong>Accessibility</strong> — WCAG 2.1 AA, keyboard/screen reader support, and
            inclusive defaults.
          </li>
          <li>
            <strong>DevEx & CI/CD</strong> — tooling, lint/test/deploy pipelines, and reducing
            friction for teams.
          </li>
        </ul>
      </Section>

      <Section title="Featured work" id="featured">
        <ul className="project-grid" aria-label="Featured projects">
          {featured.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <p>
          <Link to="/work">See all work →</Link>
        </p>
      </Section>

      <ContactSection />
    </>
  )
}
