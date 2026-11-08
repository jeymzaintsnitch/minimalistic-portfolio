import { useEffect, useState } from 'react'

/**
 * Cycles through `words`, typing and erasing each one character by character.
 *
 * @param {string[]} words
 * @param {{ typeSpeed?: number, eraseSpeed?: number, holdDelay?: number, startDelay?: number, enabled?: boolean }} options
 * @returns {string} the currently displayed text
 */
export function useTyping(
  words,
  { typeSpeed = 70, eraseSpeed = 40, holdDelay = 1600, startDelay = 400, enabled = true } = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [isErasing, setIsErasing] = useState(false)

  const word = words[wordIndex % words.length] ?? ''

  useEffect(() => {
    if (!enabled || words.length === 0) return undefined

    let delay = isErasing ? eraseSpeed : typeSpeed

    if (!isErasing && charCount === word.length) {
      delay = holdDelay
    } else if (isErasing && charCount === 0) {
      delay = startDelay
    }

    const timer = setTimeout(() => {
      if (!isErasing) {
        if (charCount < word.length) {
          setCharCount((c) => c + 1)
        } else {
          setIsErasing(true)
        }
      } else if (charCount > 0) {
        setCharCount((c) => c - 1)
      } else {
        setIsErasing(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charCount, isErasing, word, words.length, enabled, typeSpeed, eraseSpeed, holdDelay, startDelay])

  if (!enabled) return word
  return word.slice(0, charCount)
}
