const SECTION_LABELS = {
  now: 'about',
  work: 'work',
  hobbies: 'hobbies',
  projects: 'projects',
}

export function Footer({ page, isDetail }) {
  const sectionLabel = SECTION_LABELS[page] || 'about'
  const sectionHref = page === 'now' ? '#/' : `#/${page}`

  return (
    <footer className="minimal-footer">
      {isDetail ? (
        <a href={sectionHref}>← {page === 'now' ? sectionLabel : `all ${sectionLabel}`}</a>
      ) : (
        <span>© 2026 James Rolmer V. Catalan</span>
      )}

      {(isDetail || page !== 'about') && <a href="#/">james.dev</a>}
    </footer>
  )
}
