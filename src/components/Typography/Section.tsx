import type { ReactNode } from 'react'

interface SectionProps {
  /** Section heading (renders as h2 unless overridden by headingLevel) */
  title: string
  /** Optional id for anchor links */
  id?: string
  /** Heading level for accessibility (default 2) */
  headingLevel?: 1 | 2 | 3
  children: ReactNode
}

const headingTag = { 1: 'h1', 2: 'h2', 3: 'h3' } as const

export function Section({
  title,
  id,
  headingLevel = 2,
  children,
}: SectionProps): React.ReactElement {
  const Tag = headingTag[headingLevel]
  return (
    <section
      className="section"
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <Tag id={id ? `${id}-heading` : undefined}>{title}</Tag>
      {children}
    </section>
  )
}
