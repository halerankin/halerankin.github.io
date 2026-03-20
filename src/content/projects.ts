import commsDegraded from '../assets/comms-degraded-cut.jpg'
import multiVehicleAwareness from '../assets/multi-vehicle-awareness.jpg'
import zoomDetailLevels from '../assets/zoom-detail-levels.jpg'
import OAIVideoOverlay from '../assets/OAI--video-overlay-800x450.jpg'
import OAIMultiVehicle from '../assets/OIA--multi-vehicle-800x450.jpg'
import IconSystem from '../assets/icon-system.svg';
import IconGallery from '../assets/icon-gallery.jpg'

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
  label: string
  href: string
  primary?: boolean | undefined
}

export interface IntroVisual {
  type: 'svg' | 'image'
  label: string
  caption?: string
  src: string
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
  role: string
  timeframe: string

  intro?: string
  problem: string
  outcome?: string

  approach?: ProjectApproachItem[]
  scope?: string[],
  owned: string[]
  decisions?: string[]
  impact?: string[]

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
    title: 'AGV C2 dashboard for simulated telemetry and operator awareness',
    role: 'Senior UX Engineer',
    timeframe: '2026',
    intro:
      'I started this while interviewing with Overland AI. While waiting to hear back, I began building a dashboard of my own to push on three things: sharpen my React skills, challenge some of the UI patterns I was seeing, and work through how I would approach an operator-facing autonomy problem from scratch.',
  
    problem:
      'There is a gap between raw vehicle telemetry and what an operator actually needs to notice and respond to. Once multiple autonomous vehicles are active at the same time, it becomes easy to either flood the interface with undifferentiated data or hide changes that matter.',
  
    outcome:
      'I built a React-based C2 dashboard that simulates live telemetry, alerts, and event flow so I could explore how multi-vehicle system state should be represented for operator awareness in real time.',
  
    approach: [
      {
        title: 'Designing for operator attention',
        description:
          'I focused on helping an operator notice change, not just view data. Markers, halos, severity states, alerts, and focus behavior all work together to make important state shifts easier to spot across multiple vehicles.',
      },
      {
        title: 'Simulating telemetry as a system',
        description:
          'Instead of faking isolated UI states, I modeled telemetry as updates arriving over time. That made it possible for alerts and event history to emerge from state transitions rather than being manually inserted.',
        imageSrc: multiVehicleAwareness,
        imageLabel: 'Multi-vehicle overview',
        imageCaption: 'Multiple vehicles, routes, and connection states are visible in one view, making it easier to maintain awareness across the fleet without shifting context.' 
      },
      {
        title: 'Using an MQTT-inspired mental model',
        description:
          'The simulation follows a broker → topic → subscriber pattern locally. Vehicles act like publishers and the dashboard acts like a subscriber, which kept the structure grounded in a transport model that could later be replaced with a real one.',
        imageSrc: commsDegraded,
        imageLabel: 'Alert and event flow',
        imageCaption: 'A degraded vehicle state carries through alerts, vehicle styling, and the event log so important changes remain visible across views.'
      },
      {
        title: 'Scaling detail with context',
        description:
          'I reduced marker detail at lower zoom levels so the interface could stay readable and performant as more vehicles came into view. The goal was to preserve critical signals without paying the cost of full-detail rendering everywhere.',
        imageSrc: zoomDetailLevels,
        imageLabel: 'Zoom-based marker rendering',
        imageCaption: 'Marker detail scales with zoom so the interface can preserve clarity and performance while still surfacing critical signals.'
      },
    ],
  
    owned: [
      'End-to-end frontend architecture in React and TypeScript',
      'Telemetry simulation and state modeling for vehicle behavior',
      'Operator awareness patterns across map, alerts, and event flow',
      'Performance tuning through batching, zoom-aware rendering, and reduced DOM output',
    ],
  
    decisions: [
      'I used local simulation instead of a real backend or broker so I could focus first on interaction design and system behavior.',
      'I introduced controlled randomness to create believable variation without turning the project into backend infrastructure work.',
      'I treated performance as part of the design problem, reducing visual detail at distance and batching updates to avoid UI churn.',
      'I kept the system model close to a real publish/subscribe flow so the mock would still reflect a plausible production direction.',
    ],
  
    impact: [
      'Shows how telemetry can be shaped into an interface that supports operator attention instead of raw monitoring.',
      'Demonstrates how I approach unfamiliar problem spaces by combining systems thinking, UI design, and implementation.',
      'Creates a credible foundation for connecting a real message transport layer later.',
    ],
  
    stack: ['React', 'TypeScript', 'Vite', 'CSS custom properties', 'Leaflet'],
  
    demo: [
      {
        label: 'View live dashboard',
        href: 'https://halerankin.github.io/agv-dashboard-ui/',
        primary: true,
      },
      {
        label: 'GitHub repo',
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
    title: 'Unifying SVG Assets into a Component, Tooling, and Deployment System',
    role: 'Senior UX Engineer',
    timeframe: '2020-2025',
  
    intro:
      'While building components for Fabric UX, I kept running into friction around SVG assets—icons and illustrations were hard to discover, and disconnected from the way developers actually used them. What started as a small effort to make icons easier to consume turned into a system spanning components, tooling, and deployment.',
  
    problem:
      'SVG assets were shared, but there was no system connecting design output to developer consumption. Naming was inconsistent, discovery was manual, and updates required coordination across teams. The result was duplication, drift between design and code, and slow adoption of new assets.',
  
    outcome:
      'I built a system that connected design assets directly to developer workflows: a TypeScript web component for rendering, a React gallery for discovery, and a CI/CD pipeline for distributing versioned assets.',
  
    approach: [
      {
        title: 'Treating SVGs as a system, not files',
        description:
          'Instead of handling icons as static assets, I treated them as part of a system. That meant defining structure, naming, and consumption patterns so the same asset could move cleanly from design to code to deployment without reinterpretation.',
      },
      {
        title: 'Building a presentation layer developers could trust',
        description:
          'I created a TypeScript-based web component for rendering SVG icons consistently across frameworks. This ensured accessibility, sizing, and styling behavior were predictable, removing the need for teams to reimplement icon logic.',
      },
      {
        title: 'Aligning design and engineering through discovery',
        description:
          'I built a React-based icon gallery that allowed designers and engineers to search, filter, and reference icons by name. This became the shared source of truth for asset usage, reducing ambiguity and back-and-forth.',
        imageSrc: IconGallery,
        imageLabel: 'Icon gallery',
        imageCaption: 'A shared icon gallery aligns design and engineering through consistent naming, discoverability, and direct access to implementation.',
      },
      {
        title: 'Establishing a deployment pipeline for assets',
        description:
          'I organized the workflow for transforming raw SVGs into versioned packages. Assets were processed, validated, and published to npm and Azure Artifacts, making updates consistent and consumable across internal and external teams.',
      },
      {
        title: 'Connecting the workflow end-to-end',
        description:
          'The key shift was linking everything together—design outputs, component consumption, and deployment. Updates to SVGs could flow through a predictable pipeline instead of requiring manual coordination between teams.',
      },
    ],
    scope: ['System design', 'Frontend architecture', 'Tooling', 'CI/CD'],
    owned: [
      'Defined the end-to-end SVG asset system spanning design, engineering, and deployment',
      'Built core infrastructure for asset rendering, discovery, and distribution',
      'Established workflows connecting design outputs to developer consumption',
      'Led alignment between design and engineering on naming, structure, and usage',
    ],
  
    decisions: [
      'Built a framework-agnostic web component so icons could be consumed consistently across environments',
      'Used a visual gallery instead of documentation to make asset discovery and naming explicit',
      'Treated asset delivery as a pipeline problem to enable versioned distribution',
      'Defined naming and structure early to support scale without refactoring',
    ],
  
    impact: [
      'Shifted SVG assets from ad hoc usage to a structured, system-driven workflow',
      'Reduced coordination overhead between design and engineering teams',
      'Enabled consistent, versioned distribution of assets across applications',
      'Created a foundation for scaling beyond icons to broader asset systems',
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
      'SVG tooling (SVGO/SVGR)'
    ],
  
    demo: [
      {
        label: 'Icon gallery',
        href: 'https://fabricux-c6c9fchnggh3d5dn.b02.azurefd.net/?path=/docs/resources-icon-gallery--docs',
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
