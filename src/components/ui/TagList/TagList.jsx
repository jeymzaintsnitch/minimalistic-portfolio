import { Tag } from '../Tag/Tag'

/**
 * Renders a list of strings as <Tag>s.
 * @param {{ items: string[], variant?: 'default' | 'accent', className?: string }} props
 */
export function TagList({ items, variant = 'default', className = '' }) {
  if (!items?.length) return null

  return (
    <ul className={`tag-list ${className}`.trim()} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {items.map((item) => (
        <li key={item}>
          <Tag variant={variant}>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
