import { Routes, Route } from 'react-router-dom'
import { AppShell } from './components/Layout/AppShell'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { CaseStudy } from './pages/CaseStudy'
import { About } from './pages/About'
import { Resume } from './pages/Resume'
import { NotFound } from './pages/NotFound'

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="case-studies/:id" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
