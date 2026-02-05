/**
 * Typed content model for portfolio projects/case studies.
 * Drives Work list and Case Study detail pages.
 */

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  role: string
  timeframe: string
  /** 1–2 sentence problem statement */
  problem: string
  /** What I owned: architecture, a11y, CI/CD, design system, etc. */
  owned: string[]
  /** Scale, security, legacy, cross-team */
  constraints: string[]
  /** Measurable impact where possible */
  impact: string[]
  stack: string[]
  links: ProjectLink[]
  /** Placeholder for hero or thumbnail path */
  imagePlaceholder?: string
}

export const projects: Project[] = [
  {
    id: 'design-system-platform',
    title: 'Design system & component platform',
    role: 'Tech lead',
    timeframe: '2022 – present',
    problem:
      'Product teams shipped inconsistent UI and duplicated patterns; design and engineering were out of sync.',
    owned: [
      'Component API design and accessibility (ARIA, keyboard, focus)',
      'Documentation site and usage guidelines',
      'CI checks for visual regression and a11y',
      'Adoption rollout and migration support',
    ],
    constraints: [
      'Scale across 6+ product teams',
      'Support legacy and new stacks during migration',
      'Zero breaking changes for existing consumers',
    ],
    impact: [
      'Reduced duplicate component code by ~40%',
      'WCAG 2.1 AA baseline for all net-new UI',
      'Faster feature delivery via shared primitives',
    ],
    stack: ['React', 'TypeScript', 'Storybook', 'Chromatic', 'Jest', 'Playwright'],
    links: [
      { label: 'Internal docs', href: '#' },
      { label: 'Storybook', href: '#' },
    ],
    imagePlaceholder: '/placeholders/design-system.svg',
  },
  {
    id: 'checkout-reliability',
    title: 'Checkout reliability & performance',
    role: 'Senior front-end engineer',
    timeframe: '2021 – 2022',
    problem:
      'Checkout had higher drop-off and slower LCP than target; errors were hard to diagnose in production.',
    owned: [
      'Core checkout flow architecture and state handling',
      'Error boundaries and user-facing error states',
      'Performance budget and lazy-loading strategy',
      'Feature flags and safe rollout',
    ],
    constraints: [
      'Strict security and PCI-related constraints',
      'Must work with legacy payment provider APIs',
      'Cross-team coordination with backend and product',
    ],
    impact: [
      'LCP improved by ~25% within 3 months',
      'Checkout error rate visibility via structured logging',
      'Fewer support tickets for “stuck” checkout',
    ],
    stack: ['React', 'TypeScript', 'Node', 'Datadog', 'LaunchDarkly'],
    links: [
      { label: 'Case study', href: '#/case-studies/checkout-reliability' },
    ],
    imagePlaceholder: '/placeholders/checkout.svg',
  },
  {
    id: 'internal-tooling-dex',
    title: 'Internal tooling & developer experience',
    role: 'Senior engineer',
    timeframe: '2020 – 2021',
    problem:
      'Internal tools were brittle and slow to change; onboarding and local dev took hours.',
    owned: [
      'CLI and scaffold tooling for new services',
      'Shared configs (ESLint, TypeScript, testing)',
      'Documentation and runbooks for local dev',
      'CI templates for build, test, deploy',
    ],
    constraints: [
      'Multiple repos and tech stacks',
      'Legacy tooling that could not be replaced overnight',
    ],
    impact: [
      'Local env setup time reduced from ~4 hours to under 30 minutes',
      'Unified lint/format across 12+ repos',
      'Faster PR feedback via shared CI jobs',
    ],
    stack: ['TypeScript', 'Node', 'GitHub Actions', 'Docker', 'ESLint', 'Prettier'],
    links: [
      { label: 'Repo', href: '#' },
    ],
    imagePlaceholder: '/placeholders/tooling.svg',
  },
  {
    id: 'accessibility-audit',
    title: 'Accessibility audit & remediation',
    role: 'Front-end engineer',
    timeframe: '2019 – 2020',
    problem:
      'Key flows failed WCAG 2.1 and were difficult for keyboard and screen-reader users.',
    owned: [
      'Audit of critical user journeys (axe, manual testing)',
      'Remediation plan and prioritization with product',
      'Focus management and skip links in SPA',
      'Accessible forms and error messaging',
    ],
    constraints: [
      'Incremental fixes without full rewrites',
      'Limited design bandwidth for a11y-only changes',
    ],
    impact: [
      'Critical paths brought to WCAG 2.1 AA',
      'Skip links and landmarks adopted as standard',
      'A11y included in definition of done for new features',
    ],
    stack: ['React', 'axe-core', 'NVDA', 'VoiceOver', 'Jest'],
    links: [
      { label: 'Summary', href: '#/case-studies/accessibility-audit' },
    ],
    imagePlaceholder: '/placeholders/a11y.svg',
  },
]

/** Get a single project by id, or undefined. */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
