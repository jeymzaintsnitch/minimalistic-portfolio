import { Link } from 'react-router-dom'

// A heading can be plain text, an external link, or a detail-page link.
function getEntryHref(entry, section) {
  return entry.href || entry.headingLink || (entry.detailPage === false ? null : `/${section}/${entry.slug || entry.id}`)
}

export function getEntryNavigation(entry, section) {
  const href = getEntryHref(entry, section)
  const isExternal = /^https?:\/\//i.test(href || '')

  return { href, isExternal, arrow: href ? (isExternal ? '↗' : '→') : null }
}

export function EntryHeading({ entry, section, children, className = '', ariaLabel }) {
  const { href, isExternal } = getEntryNavigation(entry, section)

  if (!href) return <span className={className}>{children}</span>

  const Component = isExternal ? 'a' : Link
  return (
    <Component
      className={section === 'projects' ? className : `${className} detail-title-link`.trim()}
      {...(isExternal ? { href } : { to: href })}
      aria-label={ariaLabel}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Component>
  )
}
