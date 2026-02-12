import { Outlet } from 'react-router-dom'
import { SkipToContent } from './SkipToContent'
import '../../styles/layout.css'

export function AppShell(): React.ReactElement {
  return (
    <div className="app-shell">
      <SkipToContent />
      <main id="main-content" className="app-shell__main" role="main">
        <Outlet />
      </main>
    </div>
  )
}
