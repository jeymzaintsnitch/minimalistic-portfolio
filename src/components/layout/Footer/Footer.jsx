const SECTION_LABELS = {
  now: 'about',
  work: 'work',
  hobbies: 'hobbies',
  projects: 'projects',
}

export function Footer({ page, isDetail }) {
  const sectionLabel = SECTION_LABELS[page] || 'about'
  const sectionHref = page === 'now' ? '/' : `/${page}`

  return (
    <footer className="minimal-footer">
      {isDetail ? (
        <Link to={sectionHref}>← {page === 'now' ? sectionLabel : `all ${sectionLabel}`}</Link>
      ) : (
        <span>© 2026 James Rolmer V. Catalan</span>
      )}

      {(isDetail || page !== 'about') && <Link to="/">james.dev</Link>}
    </footer>
  )
}
import { Link } from 'react-router-dom'
