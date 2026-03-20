import commsDegraded from '../assets/comms-degraded-cut.jpg'
import multiVehicleAwareness from '../assets/multi-vehicle-awareness.jpg'
import zoomDetailLevels from '../assets/zoom-detail-levels.jpg'
import OAIVideoOverlay from '../assets/OAI--video-overlay-800x450.jpg'
import OAIMultiVehicle from '../assets/OIA--multi-vehicle-800x450.jpg'

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
  owned: string[]
  decisions?: string[]
  impact?: string[]

  stack: string[]
  imagePlaceholder?: string

  demo?: ProjectDemoLink[]
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
  }  
]

/** Get a single project by id, or undefined. */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
