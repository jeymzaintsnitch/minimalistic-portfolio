import { useEffect, useRef, useState } from 'react'
import projects from '@/data/projects.json'
import { formatDocumentTitle, hobbies, nowItems, nowUpdatedAt, workExperience } from '@/data/portfolio'
import './ContentDetail.css'

function ContentImage({ image }) {
  const [failed, setFailed] = useState(false)
  if (!image.src) return null
  return (
    <figure className="content-image">
      {failed ? <p>Image unavailable{image.alt ? `: ${image.alt}` : '.'}</p> : (
        <img src={image.src} alt={image.alt || ''} width={image.width} height={image.height}
          loading="lazy" onError={() => setFailed(true)} />
      )}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

export function ContentDetail({ section, slug }) {
  const headingRef = useRef(null)
  const collections = { projects, work: workExperience, hobbies, now: nowItems }
  const item = collections[section]?.find((entry) => (entry.slug || entry.id) === slug && entry.detailPage !== false && !entry.href && !entry.headingLink)
  const title = item?.title || item?.role || 'Entry not found'

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
    document.title = formatDocumentTitle(title)
  }, [title, slug])

    return (
    <article className="content-detail">
      <h1 ref={headingRef} tabIndex={-1}>{title}</h1>
      {!item ? <p>This entry does not exist. Return to the list to choose another.</p> : (
        <>
          {(item.company || item.period || item.year) && <p className="content-meta">{[item.company, item.period || item.year].filter(Boolean).join(' · ')}</p>}
          {(item.updatedAt || (section === 'now' && nowUpdatedAt)) && <p className="content-meta">Updated {item.updatedAt || nowUpdatedAt}</p>}
          {(item.description || item.detail) && <p className="content-summary">{item.description || item.detail}</p>}
          {item.contribution && <p>{item.contribution}</p>}
          {item.note && <p>{item.note}</p>}
          {item.highlights?.length > 0 && <ul>{item.highlights.map((text, index) => <li key={index}>{text}</li>)}</ul>}
          <div className="content-body">
            {item.body?.map((block, index) => {
              if (typeof block === 'string') return <p key={index}>{block}</p>
              if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>
              if (block.type === 'image') return <ContentImage key={`${index}-${block.src}`} image={block} />
              if (block.type === 'list') return <ul key={index}>{block.items.map((text, i) => <li key={i}>{text}</li>)}</ul>
              if (block.type === 'paragraph') return <p key={index}>{block.text}</p>
              return null
            })}
          </div>
          {item.images?.map((image, index) => <ContentImage key={`${index}-${image.src}`} image={image} />)}
          {item.link && <a href={item.link}>{item.linkLabel || 'Visit website'}</a>}
        </>
      )}
    </article>
  )
}
