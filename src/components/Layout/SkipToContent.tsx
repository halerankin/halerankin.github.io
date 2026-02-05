/**
 * Skip link for keyboard/screen-reader users to jump to main content.
 * Visible on focus only.
 */
export function SkipToContent(): React.ReactElement {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  )
}
