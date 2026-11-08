import './SectionHeading.css'

/**
 * @param {{
 *   eyebrow?: string,
 *   title: string,
 *   subtitle?: string,
 *   align?: 'left' | 'center',
 *   className?: string,
 * }} props
 */
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  return (
    <header className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow ? <p className="section-heading__eyebrow mono">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </header>
  )
}
