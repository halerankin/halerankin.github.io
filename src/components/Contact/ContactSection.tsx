import { Section } from '../Typography/Section'
import { ContactLinks } from './ContactLinks'

/**
 * Shared "Get in touch" / Contact block for Home and About.
 */
export function ContactSection(): React.ReactElement {
  return (
    <Section title="Get in touch" id="contact">
      <p>
        <ContactLinks separator=", " trailing="." />
      </p>
    </Section>
  )
}
