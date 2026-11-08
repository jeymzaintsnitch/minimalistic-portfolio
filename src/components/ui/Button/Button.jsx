import { Icon } from '../Icon/Icon'
import './Button.css'

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 *
 * @param {{
 *   variant?: 'primary' | 'ghost' | 'link',
 *   size?: 'sm' | 'md' | 'lg',
 *   href?: string,
 *   external?: boolean,
 *   icon?: string,
 *   iconPosition?: 'left' | 'right',
 *   type?: 'button' | 'submit',
 *   onClick?: () => void,
 *   className?: string,
 *   children: import('react').ReactNode,
 * }} props
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'right',
  type = 'button',
  onClick,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  const iconEl = icon ? <Icon name={icon} size={size === 'sm' ? 14 : 18} className="btn__icon" /> : null

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      <span className="btn__label">{children}</span>
      {iconPosition === 'right' && iconEl}
    </>
  )

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a className={classes} href={href} onClick={onClick} {...externalProps} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
