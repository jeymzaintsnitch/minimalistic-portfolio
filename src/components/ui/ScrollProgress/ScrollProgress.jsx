import { useEffect, useState } from 'react'
import './ScrollProgress.css'

/**
 * Subtle fixed scroll progress indicator at the very top of the window
 * reflecting current page scroll depth and matching theme accent color.
 */
export function ScrollProgress({ pageKey }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

      if (scrollHeight > 4) {
        const factor = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
        setProgress(factor)
      } else {
        setProgress(0)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    // Check progress immediately and after DOM content settles
    updateScrollProgress()
    const timeoutId = setTimeout(updateScrollProgress, 60)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pageKey])

  return (
    <div
      className="scroll-progress-container"
      aria-hidden="true"
    >
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
