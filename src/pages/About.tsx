import { Section } from '../components/Typography/Section'
import { ContactSection } from '../components/Contact/ContactSection'

export function About(): React.ReactElement {
  return (
    <>
      <h1>About</h1>
      <Section title="How I work" id="how">
        <p>
          I think in systems: reusable patterns, clear boundaries, and documentation that
          outlives the original author. I prefer to ship incrementally and validate with
          real usage rather than big-bang rewrites.
        </p>
        <p>
          I care about collaboration: aligned goals with product and design, shared
          ownership of quality (including accessibility and performance), and runbooks
          that make on-call and onboarding easier.
        </p>
      </Section>
      <Section title="Values" id="values">
        <ul>
          <li>
            <strong>Reliability</strong> — predictable behavior, error states, and
            observability.
          </li>
          <li>
            <strong>Accessibility</strong> — inclusive by default; a11y as part of
            definition of done.
          </li>
          <li>
            <strong>Developer experience</strong> — tooling and process that reduce
            friction and let people focus on product.
          </li>
        </ul>
      </Section>
      <ContactSection />
    </>
  )
}
