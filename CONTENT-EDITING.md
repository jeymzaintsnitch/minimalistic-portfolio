# Editing portfolio content

Content is stored in files, not an admin dashboard. Edit, preview with `npm run dev`, then build and redeploy to publish.

## Where to edit

- `src/data/portfolio.js`: profile, hero label, social links, navigation labels, Now updates and date, Work, and Hobbies (including Writing).
- `src/data/projects.json`: project titles, summaries, dates, contributions, external links, and detail content.
- `public/assets/`: your images. A file at `public/assets/projects/example.jpg` is referenced as `/assets/projects/example.jpg`.

Add or remove an object in a list to add or remove an entry. Reorder objects to change display order. Use a unique, lowercase, hyphenated `id` for Projects/Work/Hobbies and `slug` for Now. Keep these stable to preserve shared links.

## Optional detail pages

For **Now and Work**, each heading can be plain text, an external link, or an internal detail page:

- Plain text: `detailPage: false` and no `headingLink` / `topicLink`.
- External website: set `headingLink: 'https://example.com/'` for Work or `topicLink: 'https://example.com/'` for Now; no internal detail page is needed.
- Internal detail page: omit `detailPage` or set it to `true`, and leave out `headingLink` / `topicLink`.

For Work, both company and role share the same destination. Existing descriptions remain visible under headings regardless of mode.

For **Hobbies and Projects**, cards use the same three modes:

- Internal detail page: omit `detailPage` or set it to `true`, and leave out `href`.
- External redirect: set `href: 'https://example.com/'`; the card opens it in a new tab.
- Plain card: set `detailPage: false` and leave out `href`.

Internal cards show `→`, external cards show `↗`, and plain cards show no navigation arrow.

For a Now heading that should open an external site instead of a detail page, set `detailPage: false` and `topicLink: 'https://example.com/'`. The heading itself becomes the link; `detail` is optional.

## Now

Edit `nowUpdatedAt` manually when you update the content. It is not automatically replaced by today's date. An empty string hides the date. Each Now entry has `topic` (listing label), `detail` (summary), `title` (article title), and `body` (article content). Optional `updatedAt` overrides the shared date on an article.

## Article content and pictures

Projects, Work, Hobbies, and Now support the same optional `body` and `images` fields. Existing summaries and Work highlights are also displayed on detail pages. Clicking the Writing hobby opens its article just like any other hobby.

Example fields to add to an entry (replace the example text and image path with your content):

```json
{
  "updatedAt": "November 2026",
  "body": [
    "An opening paragraph about this experience.",
    { "type": "heading", "text": "What I worked on" },
    { "type": "paragraph", "text": "Describe your actual contribution." },
    { "type": "list", "items": ["First detail", "Second detail"] },
    {
      "type": "image",
      "src": "/assets/projects/example.jpg",
      "alt": "Describe what the image shows",
      "caption": "Optional caption",
      "width": 1600,
      "height": 900
    }
  ],
  "images": [],
  "link": null,
  "linkLabel": "View repository"
}
```

Use strings or paragraph blocks for text. Image blocks place pictures between paragraphs; the `images` array places pictures after the article. Each image uses the same `src`, `alt`, optional `caption`, `width`, and `height` fields. Supply actual dimensions and descriptive alt text. Empty arrays hide those sections. Raw HTML is not rendered.

Set `link` to a verified repository/demo URL when available. Leave it `null` otherwise. Internal detail pages remain accessible without an external link.

## Routes and checks

- `#/projects/ictrack`
- `#/work/independent-client-work`
- `#/hobbies/writing`
- `#/now/learning`

Hash routes work on static hosting, including direct loading and refreshing. Unknown entries show a not-found message with a return link.

Before publishing, run `npm run lint` and `npm run build`. Check articles, pictures, and back links in both themes and at narrow widths.

## Content still needed

- Descriptions, dates, contribution details, photos, and verified URLs for Parking Deterrence System, MesaTrack, and Video Store System.
- Dates, photos, longer write-up, and verified URL for ICTrack.
- Confirm education: the existing hero label, profile education, and Now education have conflicting credentials. `profile.heroLabel` is now editable; set it to an empty string to hide it.

Existing Work and Hobbies claims were retained from the original portfolio. Review them before publishing.
