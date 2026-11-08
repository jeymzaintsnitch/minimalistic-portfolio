import './GradientText.css'

/**
 * Text filled with the brand gradient.
 * @param {{ as?: keyof JSX.IntrinsicElements, animated?: boolean, className?: string, children: import('react').ReactNode }} props
 */
export function GradientText({ as: Tag = 'span', animated = false, className = '', children }) {
  return (
    <Tag className={`gradient-text ${animated ? 'gradient-text--animated' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
