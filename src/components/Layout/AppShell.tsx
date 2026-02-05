import { NavLink, Outlet } from 'react-router-dom'
import { SkipToContent } from './SkipToContent'
import '../../styles/layout.css'

const navItems = [
  { to: '/', end: true, label: 'Home' },
  { to: '/work', end: false, label: 'Work' },
  { to: '/about', end: false, label: 'About' },
  { to: '/resume', end: false, label: 'Resume' },
] as const

export function AppShell(): React.ReactElement {
  return (
    <div className="app-shell">
      <SkipToContent />
      <header className="app-shell__header" role="banner">
        <div className="app-shell__header-inner">
          <NavLink to="/" className="app-shell__logo" aria-label="Home">
            Hale Rankin
          </NavLink>
          <nav aria-label="Main">
            <ul className="app-shell__nav">
              {navItems.map(({ to, end, label }) => (
                <li key={to}>
                  <NavLink to={to} end={end}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content" className="app-shell__main" role="main">
        <Outlet />
      </main>
      <footer className="app-shell__footer" role="contentinfo">
        <div className="app-shell__footer-inner">
          <p>
            <a href="mailto:hello@example.com">Email</a>
            {' · '}
            <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {' · '}
            <a href="https://github.com/halerankin" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
