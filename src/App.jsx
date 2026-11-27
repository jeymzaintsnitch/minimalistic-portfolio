import { useState, useEffect, useCallback } from 'react'
import { Footer, Navbar } from '@/components/layout'
import { About, Work, Projects, Hobbies } from '@/components/sections'
import { ContentDetail } from '@/components/sections/ContentDetail'
import { formatDocumentTitle, profile } from '@/data/portfolio'

const VALID_PAGES = ['about', 'work', 'hobbies', 'projects']

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim()
  const [page, slug] = hash.split('/')

  if (['now', 'projects', 'work', 'hobbies'].includes(page) && slug) {
    return { page, slug }
  }

  return { page: VALID_PAGES.includes(page) ? page : 'about', slug: null }
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
  const [route, setRoute] = useState(getRouteFromHash)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (!route.slug) {
      const pageTitle = route.page === 'about'
        ? null
        : route.page.charAt(0).toUpperCase() + route.page.slice(1)
      document.title = formatDocumentTitle(pageTitle)
    }
  }, [route.page, route.slug])

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
      window.location.hash = pageId === 'about' ? '#/' : `#/${pageId}`
      setRoute({ page: pageId, slug: null })
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

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
        activePage={route.page === 'now' ? 'about' : route.page}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="container portfolio-main-container" id="main-content">
        <div key={`${route.page}-${route.slug || ''}`} className="page-view-enter">
          {route.page === 'about' && <About theme={theme} />}
          {route.slug && <ContentDetail section={route.page} slug={route.slug} />}
          {!route.slug && route.page === 'work' && <Work />}
          {!route.slug && route.page === 'hobbies' && <Hobbies />}
          {!route.slug && route.page === 'projects' && <Projects />}
        </div>

        <Footer page={route.page} isDetail={Boolean(route.slug)} />
      </main>
    </div>
  )
}

export default App
