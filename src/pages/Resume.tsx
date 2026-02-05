import { Section } from '../components/Typography/Section'
import './Resume.css'

const skills = [
  'React · TypeScript · Node',
  'Design systems · Storybook · Component APIs',
  'Accessibility (WCAG 2.1, axe, keyboard, screen readers)',
  'CI/CD · GitHub Actions · testing (Jest, Playwright)',
  'Collaboration · documentation · technical leadership',
]

export function Resume(): React.ReactElement {
  return (
    <>
      <h1>Resume</h1>
      <p className="resume-intro">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download PDF resume
        </a>{' '}
        (placeholder — replace with your PDF path).
      </p>
      <Section title="Skills at a glance" id="skills">
        <ul className="skills-list">
          {skills.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
