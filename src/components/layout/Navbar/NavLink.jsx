/**
 * Anchor link to a page section with an active-state indicator.
 * @param {{ id: string, label: string, active?: boolean, onClick?: () => void }} props
 */
export function NavLink({ id, label, active = false, onClick }) {
  return (
    <li>
      <a
        className={`nav-link ${active ? 'is-active' : ''}`.trim()}
        href={`#${id}`}
        aria-current={active ? 'true' : undefined}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  )
}
