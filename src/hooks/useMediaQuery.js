import { useEffect, useState } from 'react'

/**
 * Subscribe to a CSS media query.
 * @param {string} query e.g. '(prefers-reduced-motion: reduce)'
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== 'undefined' && window.matchMedia(query).matches

  const [matches, setMatches] = useState(getMatch)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (event) => setMatches(event.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
