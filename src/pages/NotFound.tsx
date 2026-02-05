import { Link } from 'react-router-dom'

export function NotFound(): React.ReactElement {
  return (
    <>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <p>
        <Link to="/">Go to the homepage</Link>
      </p>
    </>
  )
}
