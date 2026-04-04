import type { ComponentType, SVGProps } from 'react'
import zoomDetailLevels from '../assets/zoom-detail-levels.jpg'
import OAIVideoOverlay from '../assets/OAI--video-overlay-800x450.jpg'
import OAIMultiVehicle from '../assets/OIA--multi-vehicle-800x450.jpg'
import IconSystem from '../assets/icon-system.svg?react'
import IconGallery from '../assets/icon-gallery.jpg'

/** Default export from `*.svg?react` (SVGR). */
export type IntroVisualSvgComponent = ComponentType<SVGProps<SVGSVGElement>>

/**
 * Typed content model for portfolio projects/case studies.
 * Drives Work list and Case Study detail pages.
 */

export interface ProjectApproachItem {
  title: string
  description: string
  imageSrc?: string
  imageLabel?: string
  imageCaption?: string
}

export interface ProjectDemoLink {
  cta: string
  href: string
  primary?: boolean | undefined
}

export type IntroVisual =
  | {
      type: 'image'
      label: string
      caption?: string
      src: string
    }
  | {
      type: 'svg'
      label: string
      caption?: string
      src: IntroVisualSvgComponent
    }

export interface ProjectVisual {
  type: 'image'
  label: string
  caption?: string
  src: string
}

export interface Project {
  id: string
  title: string
  framing: string
  resultSummary: string
  context: string
  problem: string
  approach?: ProjectApproachItem[]
  result: string
  reflection: string
  ownership: string[]

  stack: string[]
  imagePlaceholder?: string

  demo?: ProjectDemoLink[]
  introVisual?: IntroVisual
  referenceHeading?: string
  referenceVisuals?: ProjectVisual[]
}

export const projects: Project[] = [
  {
    id: 'agv-c2-dashboard',
    title: 'Operator UI for Autonomous Vehicle Fleet',
    framing: 'Operators were flooded with telemetry but couldn’t see what mattered—state changes were hard to track across multiple vehicles.',
    resultSummary: '→ Reduced noise and surfaced critical signals for real-time monitoring',
    context: 'Operator-facing autonomy systems need to surface what matters in real time. As more vehicles become active, interfaces tend to either flood operators with data or hide critical changes.',
    problem:
      'Raw telemetry doesn\'t map cleanly to operator awareness. Without structure, it\'s difficult to track state, detect changes, and respond across multiple vehicles.',
    approach: [
      {
        title: 'Designing for operator attention',
        description:
          'Focused on helping an operator notice change, not just view data. Markers, severity states, alerts, and focus behavior all work together to make important state shifts easier to spot across multiple vehicles.',
      },
      {
        title: 'Simulating telemetry as a system',
        description:
          'Instead of faking isolated UI states, I modeled telemetry as updates arriving over time. That allowed alerts and event history to emerge from state transitions rather than being manually inserted.',
      },
      {
        title: 'Using an transport-based mental model',
        description:
          'Structured the simulation around publishers and subscribers so the system stayed grounded in a transport model that could later be replaced with a real one.',
      },
      {
        title: 'Scaling detail with context',
        description:
          'Reduced marker detail at lower zoom levels so the interface stayed readable and performant as more vehicles came into view, with marker detail scaling by zoom to preserve critical signals without paying the cost of full-detail rendering everywhere.',
        imageSrc: zoomDetailLevels,
        imageLabel: 'Zoom-based marker rendering',
      },
    ],
    result:
    'Enabled real-time, multi-vehicle monitoring by reducing alert noise and making critical state changes visible and actionable.',
    reflection: 'Clarity doesn’t come from more data—it comes from shaping how change is surfaced and understood.',
    ownership: [
      'End-to-end frontend architecture in React + TypeScript',
      'Telemetry modeling and state design',
      'Interaction design for operator workflows',
      'Simulation layer for realistic data behavior',
      'Performance tuning and rendering strategy',
    ],
    stack: ['React', 'TypeScript', 'Leaflet', 'simulated telemetry pipeline'],
    demo: [
      {
        cta: 'View live dashboard',
        href: 'https://halerankin.github.io/agv-dashboard-ui/',
        primary: true,
      },
      {
        cta: 'GitHub repo',
        href: 'https://github.com/halerankin/agv-dashboard-ui',
      },
    ],
    referenceHeading: 'Reference from Overland AI',
    referenceVisuals: [
      {
        type: 'image',
        label: 'Vehicle video overlay',
        caption:
          'This raised questions about how video, telemetry, and spatial context should be prioritized for operator awareness.',
        src: OAIVideoOverlay,
      },
      {
        type: 'image',
        label: 'Multi-vehicle overview',
        caption:
          'Seeing multiple vehicles at once made it clear that the problem isn’t just visibility—it’s helping an operator notice change across the system.',
        src: OAIMultiVehicle,
      },
    ]
  },
  {
    id: 'fabric-svg-system',
    title: 'From SVG Files to a Scalable Icon System',
    framing: 'SVG assets were shared, but there was no system connecting design output to developer consumption—naming drift, duplication, and manual updates slowed adoption.',
    resultSummary: '→ Standardized asset structure, automated delivery, and enabled consistent usage across teams',
    context: 'Design systems depend on shared assets that move between design and engineering. As icon libraries grow, those assets need to be named, discovered, and consumed consistently across teams and workflows.',
    problem:
      'SVG assets existed across teams, but there was no system connecting design output to developer consumption. Naming was inconsistent, discovery was manual, and updates required coordination—leading to duplication, drift between design and code, and slow adoption.',  
    approach: [
      {
        title: 'Treating SVGs as a system',
        description:
          'Defined structure, naming, and consumption patterns so assets could move cleanly from design to code to deployment without reinterpretation.',
      },
      {
        title: 'Building a reliable presentation layer',
        description:
          'Created a TypeScript-based web component for rendering SVG icons consistently across frameworks, ensuring predictable accessibility, sizing, and styling behavior.',
      },
      {
        title: 'Aligning design and engineering through discovery',
        description:
          'Built a React-based icon gallery that lets designers and engineers search, filter, and reference icons by name, creating a shared source of truth that aligns teams through consistent naming, discoverability, and direct access to implementation.',
        imageSrc: IconGallery,
        imageLabel: 'Icon gallery',
      },
      {
        title: 'Establishing an asset delivery pipeline',
        description:
          'Organized the workflow for transforming raw SVGs into versioned packages, processing and publishing assets so updates were consistent and consumable across teams.',
      },
      {
        title: 'Connecting the workflow end-to-end',
        description:
          'The system linked design outputs, component consumption, and deployment so asset updates could flow through a predictable pipeline instead of requiring manual coordination.',
      },
    ],
    result:
    'Enabled a consistent, end-to-end system for SVG assets—connecting design outputs to developer workflows, reducing duplication, and allowing teams to adopt and update assets reliably at scale.',
    reflection: 'Fragmentation isn’t a tooling problem—it’s a systems problem, and real alignment only happens when design, structure, and delivery are connected end to end.',
    ownership: [
      'End-to-end system design across design, engineering, and deployment',
      'TypeScript web component for SVG rendering',
      'React-based icon gallery for discovery and usage',
      'Asset processing and CI/CD pipeline for versioned distribution',
      'Naming conventions and structure for scalable asset management',
    ],  
    stack: [
      'TypeScript',
      'Web Components',
      'React',
      'Storybook',
      'Node.js',
      'Azure DevOps',
      'npm',
      'Azure Artifacts',
      'SVGO / SVGR'
    ],
  
    demo: [
      {
        cta: 'View icon gallery',
        href: 'https://fabricux-c6c9fchnggh3d5dn.b02.azurefd.net/?path=/docs/for-designers-icon-gallery--docs',
        primary: true,
      }
    ],
    introVisual: 
      {
        type: 'svg',
        label: 'SVG asset system flow',
        caption:
          'An icon problem expanded into a system—connecting asset processing, component rendering, discovery, and distribution.',
        src: IconSystem,
      },
    referenceHeading: 'SVG System',
    referenceVisuals: [
    ]
  }
]

/** Get a single project by id, or undefined. */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
