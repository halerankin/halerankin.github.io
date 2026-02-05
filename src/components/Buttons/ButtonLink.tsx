import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import './ButtonLink.css'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  /** Primary (filled) vs secondary (outline) */
  variant?: 'primary' | 'secondary'
  /** Use for external links so they open in new tab with rel */
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  external = false,
}: ButtonLinkProps): React.ReactElement {
  const className = `btn-link btn-link--${variant}`

  if (external) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
