import { useState, useEffect, useCallback } from 'react'
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Footer, Navbar } from '@/components/layout'
import { About, Work, Projects, Hobbies } from '@/components/sections'
import { ContentDetail } from '@/components/sections/ContentDetail'
import { formatDocumentTitle, profile } from '@/data/portfolio'

const VALID_PAGES = ['about', 'work', 'hobbies', 'projects']

function DetailRoute({ section }) {
  const { slug } = useParams()
  return <ContentDetail section={section} slug={slug} />
}

function NotFound() {
  useEffect(() => {
    document.title = formatDocumentTitle('Page not found')
  }, [])

  return (
    <article className="content-detail">
      <h1>Page not found</h1>
      <p>The requested page does not exist.</p>
    </article>
  )
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // ignore storage errors
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [section, slug] = location.pathname.split('/').filter(Boolean)
  const page = section || 'about'
  const isDetail = Boolean(slug)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (!isDetail) {
      const pageTitle = page === 'about'
        ? null
        : VALID_PAGES.includes(page) ? page.charAt(0).toUpperCase() + page.slice(1) : 'Page not found'
      document.title = formatDocumentTitle(pageTitle)
    }
  }, [page, isDetail])

  useEffect(() => {
    // Keep previously shared hash URLs working after switching to clean paths.
    const legacyPath = location.hash.match(/^#\/(work|hobbies|projects|now)(?:\/([a-z0-9-]+))?\/?$/i)
    if (legacyPath && location.pathname === '/') {
      navigate(`/${legacyPath[1].toLowerCase()}${legacyPath[2] ? `/${legacyPath[2].toLowerCase()}` : ''}`, { replace: true })
    }
  }, [location.hash, location.pathname, navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) favicon.href = profile.favicon
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim())
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const navigateTo = useCallback((pageId) => {
    if (VALID_PAGES.includes(pageId)) {
      navigate(pageId === 'about' ? '/' : `/${pageId}`)
    }
  }, [navigate])

  // Minimalist Keyboard Navigation (1-4 pages, T theme)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = e.target?.tagName?.toLowerCase()
      if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return

      if (e.key === '1') navigateTo('about')
      else if (e.key === '2') navigateTo('work')
      else if (e.key === '3') navigateTo('hobbies')
      else if (e.key === '4') navigateTo('projects')
      else if (e.key.toLowerCase() === 't') toggleTheme()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigateTo, toggleTheme])

  return (
    <div className="portfolio-app">
      <Navbar
        activePage={page === 'now' ? 'about' : page}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="container portfolio-main-container" id="main-content">
        <div key={location.pathname} className="page-view-enter">
          <Routes>
            <Route path="/" element={<About theme={theme} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/projects" element={<Projects />} />
            {['now', 'work', 'hobbies', 'projects'].map((sectionName) => (
              <Route key={sectionName} path={`/${sectionName}/:slug`} element={<DetailRoute section={sectionName} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer page={page} isDetail={isDetail} />
      </main>
    </div>
  )
}

export default App
