import { useEffect, useRef, useState } from 'react'
import { ganap } from '@/data/portfolio'

export function Ganap() {
  const [activeIndex, setActiveIndex] = useState(null)
  const closeRef = useRef(null)
  const activeImage = activeIndex === null ? null : ganap.images[activeIndex]

  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImage])

  return (
    <section className="about-ganap" aria-labelledby="ganap-title">
      <div className="ganap-header">
        <h2 id="ganap-title" className="ganap-title">{ganap.title}</h2>
        <p className="ganap-description">{ganap.description}</p>
      </div>

      <div className="ganap-grid" role="group" aria-label="Mga ganap">
        {ganap.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="ganap-photo"
            aria-label={`Open photo ${index + 1} of ${ganap.images.length} from Ganap`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
            <span className="ganap-tint" aria-hidden="true" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="ganap-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className="ganap-close"
            aria-label="Close photo"
            onClick={() => setActiveIndex(null)}
          >
            ×
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
