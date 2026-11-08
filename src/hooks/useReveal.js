import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to the referenced element once it enters the viewport.
 * Pair with the `.reveal` / `.stagger` utilities in styles/animations.css.
 *
 * @param {{ threshold?: number, rootMargin?: string, once?: boolean }} options
 * @returns {import('react').RefObject<HTMLElement>}
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
