import { navLinks } from '@/data/portfolio'
import { Icon } from '@/components/ui'
import './Navbar.css'

export function Navbar({ activePage = 'about', onNavigate, theme = 'dark', onToggleTheme }) {
  const handleNavClick = (e, pageId) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(pageId)
    }
  }

  return (
    <header className="kavin-navbar">
      <div className="navbar-container">
        {/* Navigation Links: James, Work, Hobbies, Projects */}
        <nav className="navbar-menu" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activePage === link.id
            return (
              <button
                key={link.id}
                type="button"
                className={`navbar-link-item ${isActive ? 'is-active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Minimalist Light / Dark Mode Toggle */}
        {onToggleTheme && (
          <button
            type="button"
            className="navbar-theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
          </button>
        )}
      </div>
    </header>
  )
}
