import './Tag.css'

/**
 * Small pill label, e.g. for technologies.
 * @param {{ variant?: 'default' | 'accent', className?: string, children: import('react').ReactNode }} props
 */
export function Tag({ variant = 'default', className = '', children }) {
  return <span className={`tag tag--${variant} ${className}`.trim()}>{children}</span>
}
