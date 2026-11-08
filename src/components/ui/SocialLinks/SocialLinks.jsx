import { Icon } from '../Icon/Icon'
import './SocialLinks.css'

/**
 * @param {{
 *   links: { name: string, icon: string, url: string }[],
 *   size?: 'sm' | 'md' | 'lg',
 *   className?: string,
 * }} props
 */
export function SocialLinks({ links, size = 'md', className = '' }) {
  const iconSize = { sm: 16, md: 20, lg: 22 }[size]

  return (
    <ul className={`social-links social-links--${size} ${className}`.trim()}>
      {links.map((link) => {
        const isExternal = /^https?:/i.test(link.url)
        return (
          <li key={link.name}>
            <a
              className="social-links__item"
              href={link.url}
              aria-label={link.name}
              title={link.name}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon name={link.icon} size={iconSize} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
