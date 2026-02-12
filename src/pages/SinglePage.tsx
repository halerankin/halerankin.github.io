import { useState } from 'react'
import { Section } from '../components/Typography/Section'
import { ProjectCard } from '../components/Cards/ProjectCard'
import { ContactLinks } from '../components/Contact/ContactLinks'
import { projects } from '../content/projects'
import './SinglePage.css'

const skillCategories = [
  {
    title: 'UI systems & platforms',
    items: [
      'React',
      'TypeScript',
      'Web Components',
      'Storybook',
      'component APIs',
      'design tokens',
    ],
  },
  {
    title: 'Quality & accessibility',
    items: [
      'WCAG 2.1 AA',
      'axe',
      'keyboard & screen reader testing',
      'Jest',
      'Playwright',
    ],
  },
  {
    title: 'Tooling & delivery',
    items: [
      'CI/CD',
      'GitHub Actions',
      'automated testing',
      'documentation',
      'operational runbooks',
      'multi-team adoption',
    ],
  },
]

export function SinglePage(): React.ReactElement {
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(
    new Set(),
  )
  const allExpanded =
    projects.length > 0 && expandedProjectIds.size === projects.length
  const workToggleLabel = allExpanded ? 'Collapse all' : 'Expand all'
  const handleWorkExpandCollapse = (): void => {
    setExpandedProjectIds(
      allExpanded ? new Set() : new Set(projects.map((p) => p.id)),
    )
  }

  return (
    <>
      {/* Masthead: full-bleed dark slab, name as identity anchor, bottom tear */}
      <header className="masthead" role="banner" aria-label="Site header">
        <div className="masthead__inner">
          <div className="masthead__name">Hale Rankin</div>
        </div>
      </header>

      {/* 1. Intro / Hero */}
      <section id="intro" className="home-hero" aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="home-hero__headline">
          Senior UX Engineer
        </h1>
        <p className="home-hero__kicker">
          design systems · accessibility · developer experience
        </p>
        <div className="home-hero__tagline">
        <p>
          I work on the parts of the frontend that don't have clear answers yet.
        </p>
        <p>
          I build UI systems teams can rely on over time—shared component platforms, accessibility built into the baseline, and tooling that holds up as products, teams, and constraints change.
        </p>
        <p>
          I'm typically brought in when consistency, reliability, or scale has become a problem—and someone needs to own it end to end.
        </p>
        </div>
      </section>

      {/* 2. Focus Areas */}
      <Section id="focus">
        <ul className="pillars">
          <li>
            <strong>Design systems</strong> — I own shared UI platforms used by
            multiple teams: components, APIs, and documentation that support consistency without blocking iteration.
          </li>
          <li>
            <strong>Accessibility</strong> — Accessibility is built into the primitives and the definition of done: WCAG 2.1 AA, keyboard and screen reader support, so new UI ships accessible by default.
          </li>
          <li>
            <strong>DevEx & CI/CD</strong> — I design tooling and pipelines that reduce friction: faster feedback, consistent linting and testing, and reliable deployment paths.
          </li>
        </ul>
      </Section>

      {/* 3. Case studies: full-bleed dark band */}
      <div className="band band--dark band--work">
        <div className="band__inner">
          <Section
            title="Case studies"
            id="work"
            titleAction={
              <button
                type="button"
                className="work-expand-toggle"
                onClick={handleWorkExpandCollapse}
                aria-expanded={allExpanded}
              >
                {workToggleLabel}
              </button>
            }
          >
            <p className="work-intro">
              These projects represent recurring problem spaces I've owned: design
              system scale, production reliability, developer tooling, and
              accessibility work in production environments.
            </p>
            <ul className="project-list" aria-label="Projects">
              {projects.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    project={project}
                    isExpanded={expandedProjectIds.has(project.id)}
                    onToggle={() =>
                      setExpandedProjectIds((prev) =>
                        prev.has(project.id)
                          ? new Set()
                          : new Set([project.id]),
                      )
                    }
                  />
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      {/* 4. How I Work / Collaboration */}
      <Section id="about">
        <p>
        I think in systems: reusable patterns, clear boundaries, and documentation that holds up over time. I prefer to ship incrementally and validate decisions through real usage, especially in codebases that need to scale across teams.
        </p>
        <p>
          I do my best work when I can take sustained ownership of a problem space—improving reliability, clarity, and the day-to-day experience for the engineers building on top of it.
        </p>
        <p>
        I work closely with product and design to align early and adjust as constraints change. I believe quality is a shared responsibility, including accessibility and performance, and that clear ownership and documentation help teams operate more effectively over time.
        </p>
      </Section>

      {/* 5. Values */}
      <Section id="values">
        <ul className="pillars">
          <li>
            <strong>Reliability</strong> — predictable behavior, clear error
            states, and observability.
          </li>
          <li>
            <strong>Accessibility</strong> — inclusive by default; part of the definition of done.
          </li>
          <li>
            <strong>Developer experience</strong> — tooling and process that
            reduce friction and scale with teams.
          </li>
        </ul>
      </Section>

      {/* 6. Resume */}
      <Section id="resume">
        <p className="resume-intro">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View full resume
          </a>
        </p>
      </Section>

      <Section id="skills">
      <h3 id="skills-heading">Skills at a glance</h3>
        <ul className="pillars" aria-labelledby="skills-heading">
          {skillCategories.map(({ title, items }) => (
            <li key={title}>
              <strong>{title}</strong> — {items.join(' · ')}
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing dark slab: contact endcap */}
      <section
        className="band band--dark band--close"
        id="contact"
        aria-label="Contact"
        aria-labelledby="contact-heading"
      >
        <div className="band__inner">
          <h2 id="contact-heading" className="contact-heading">
            Let's talk
          </h2>
          <p className="contact-links">
            <ContactLinks separator=" · " />
          </p>
        </div>
      </section>
    </>
  )
}
