import { Routes, Route } from 'react-router-dom'
import { AppShell } from './components/Layout/AppShell'
import { SinglePage } from './pages/SinglePage'
import { NotFound } from './pages/NotFound'

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<SinglePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
