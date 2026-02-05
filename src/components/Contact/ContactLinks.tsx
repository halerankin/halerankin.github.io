import { contactLinks } from '../../content/contact'

/** Props for rendering the shared contact links list (DRY: one place for link markup). */
interface ContactLinksProps {
  /** Separator between links (e.g. ", " or " · "). */
  separator?: string
  /** Optional trailing character(s) after the last link (e.g. "."). */
  trailing?: string
}

/**
 * Renders contact links with consistent external-link handling (target, rel).
 * Used by ContactSection and AppShell footer.
 */
export function ContactLinks({
  separator = ' · ',
  trailing,
}: ContactLinksProps): React.ReactElement {
  return (
    <>
      {contactLinks.map((link, i) => (
        <span key={link.label}>
          {i > 0 && separator}
          {link.external ? (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <a href={link.href}>{link.label}</a>
          )}
        </span>
      ))}
      {trailing ?? null}
    </>
  )
}
