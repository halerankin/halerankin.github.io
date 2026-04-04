import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Section } from '../components/Typography/Section'
import { ProjectCard } from '../components/Cards/ProjectCard'
import { ContactLinks } from '../components/Contact/ContactLinks'
import { projects, getProjectById } from '../content/projects'
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
      'keyboard & screen reader support',
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
      'multi-team adoption',
    ],
  },
]

export function SinglePage(): React.ReactElement {
  const [searchParams] = useSearchParams()
  // HashRouter reads from hash (#/?project=id); fallback to path search for non-hash URLs
  const projectIdFromUrl =
    searchParams.get('project') ??
    (typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('project')
      : null)
  const validProjectFromUrl =
    projectIdFromUrl && getProjectById(projectIdFromUrl)
      ? projectIdFromUrl
      : null

  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(
    () => (validProjectFromUrl ? new Set([validProjectFromUrl]) : new Set()),
  )

  // Deep link: ?project=<id> scrolls to the expanded case study
  useEffect(() => {
    if (!validProjectFromUrl) return
    // Wait for layout after expand; double rAF ensures DOM has settled
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(`project-${validProjectFromUrl}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
    return () => cancelAnimationFrame(id)
  }, [validProjectFromUrl])

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
      <div className="hero">
        {/* Intro / Hero */}
        <h1>Hale Rankin
          <span className="home-hero__role">Senior UX Engineer</span>
        </h1>
        {/* <p className="home-hero__headline">
          Senior UX Engineer
        </p> */}
        <p className="home-hero__statement">
          I build UI systems for complex software — where scale, consistency,
          and real-world usage expose the gaps.
        </p>
        <p className="home-hero__meta">
          Design systems · Accessibility · DevEx · CI/CD
        </p>
      </div>
      {/* Case studies: full-bleed section */}
      <Section
        id="work"
        title="Selected Work"
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

        <ul className="project-list" aria-label="Projects">
          {projects.map((project) => (
            <li key={project.id} id={`project-${project.id}`}>
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

      {/* How I Work / Collaboration */}
      <Section id="about" title="How I work">
      <ul>
        <li>Focus on systems that hold up under real use</li>
        <li>Build shared component platforms across teams</li>
        <li>Make accessibility part of the baseline (WCAG 2.1 AA)</li>
        <li>Invest in tooling and CI/CD to reduce friction and improve reliability</li>
        <li>Step in when consistency, reliability, or scale breaks down</li>
      </ul>
      </Section>

      {/* What I've Owned */}
      <Section id="ownership" title="What I've owned">
        <ul className="list-emphasis">
          <li>Design systems used across multiple teams  </li>
          <li>Accessibility as part of the definition of done  </li>
          <li>CI/CD pipelines for frontend delivery  </li>
          <li>Component platforms and developer tooling  </li>
          <li>Documentation and patterns that scale with teams</li>
        </ul>
      </Section>

      {/* Working Style */}
      <Section id="style" title="Working Style">
        <p>I ship incrementally and validate decisions through real usage—especially in codebases that need to scale across teams.</p>

        <p>I work closely with product and design to align early, adjust as constraints change, and ensure what gets built holds up over time.</p>

        <p>Quality is a shared responsibility. Accessibility, performance, and reliability are built into the process—not added later.</p>
      </Section>

      {/* Skills At a Glance */}
      <Section id="skills" title="Skills">
        <ul className="pillars" aria-labelledby="skills-heading">
          {skillCategories.map(({ title, items }) => (
            <li key={title}>
              <span>{title}</span> — {items.join(' · ')}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact endcap */}
      <Section id="contact" title="Let's talk">
          <p className="contact-links">
            <ContactLinks separator=" · " />
          </p>
      </Section>
    </>
  )
}
