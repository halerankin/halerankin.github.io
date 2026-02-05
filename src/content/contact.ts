/**
 * Single source of truth for contact links (Get in touch / Contact section and footer).
 */
export interface ContactLink {
  label: string
  href: string
  external?: boolean
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:hale.rankin@outlook.com' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hale-rankin',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/halerankin',
    external: true,
  },
]
