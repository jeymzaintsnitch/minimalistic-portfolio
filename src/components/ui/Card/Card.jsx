import './Card.css'

/**
 * Glassmorphic surface used across the site.
 *
 * @param {{
 *   as?: keyof JSX.IntrinsicElements,
 *   hover?: boolean,   // lift + border highlight on hover
 *   glow?: boolean,    // gradient glow border on hover
 *   padding?: 'none' | 'sm' | 'md' | 'lg',
 *   className?: string,
 *   children: import('react').ReactNode,
 * }} props
 */
export function Card({
  as: Tag = 'div',
  hover = false,
  glow = false,
  padding = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'card',
    `card--pad-${padding}`,
    hover && 'card--hover',
    glow && 'card--glow',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
