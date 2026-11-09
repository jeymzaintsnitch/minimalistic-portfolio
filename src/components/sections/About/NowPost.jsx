import { nowItems, nowUpdatedAt } from '@/data/portfolio'
import './NowPost.css'

export function NowPost({ slug, onBack }) {
  const post = nowItems.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="now-post">
        <p className="now-post-kicker">404 / now</p>
        <h1 className="now-post-title">Update not found</h1>
        <button type="button" className="page-nav-link" onClick={onBack}>
          ← Back to James
        </button>
      </section>
    )
  }

  return (
    <article className="now-post">
      <div className="now-post-topline">
        <span className="now-post-kicker">{post.topic}</span>
        <span className="about-now-caption">updated {nowUpdatedAt.toLowerCase()}</span>
      </div>

      <h1 className="now-post-title">{post.title}</h1>
      <p className="now-post-summary">{post.detail}</p>

      <div className="now-post-body">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="page-nav-footer">
        <button type="button" className="page-nav-link" onClick={onBack}>
          ← Back to James
        </button>
        <span className="minimal-kbd">NOW / {post.slug}</span>
      </div>
    </article>
  )
}
