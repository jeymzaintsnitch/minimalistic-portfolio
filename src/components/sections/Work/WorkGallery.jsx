export function WorkGallery({ company, images }) {
  return (
    <div className="work-gallery" role="group" aria-label={`Photos from ${company}`}>
      {images.map((image) => (
        <figure key={image.src} className="work-gallery-thumb">
          <img
            src={image.src}
            alt={image.alt || ''}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
          <span className="work-gallery-tint" aria-hidden="true" />
        </figure>
      ))}
    </div>
  )
}
