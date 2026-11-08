import { useReveal } from '@/hooks'
import './Section.css'

/**
 * Page section wrapper: anchor id, container width, vertical rhythm and
 * reveal-on-scroll animation.
 *
 * @param {{
 *   id: string,
 *   className?: string,
 *   reveal?: boolean,
 *   children: import('react').ReactNode,
 * }} props
 */
export function Section({ id, className = '', reveal = true, children, ...rest }) {
  const ref = useReveal()

  return (
    <section
      id={id}
      ref={reveal ? ref : undefined}
      className={`section ${reveal ? 'reveal' : ''} ${className}`.trim()}
      {...rest}
    >
      <div className="container section__inner">{children}</div>
    </section>
  )
}
