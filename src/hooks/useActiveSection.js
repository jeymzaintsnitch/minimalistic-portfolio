import { useEffect, useState } from 'react'

/**
 * Tracks which section (by element id) currently occupies the viewport.
 *
 * @param {string[]} ids section element ids, in page order
 * @param {{ offset?: number }} options pixels from the top treated as the "active line"
 * @returns {string} the active id ('' when above the first section)
 */
export function useActiveSection(ids, { offset = 120 } = {}) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (ids.length === 0) return undefined

    let frame = 0

    const update = () => {
      frame = 0
      const line = window.scrollY + offset
      let current = ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= line) current = id
      }

      // Snap to the last section when scrolled to the bottom of the page.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
