import { profile } from '@/data/portfolio'
import { AsciiPortrait } from '@/components/ui/AsciiPortrait/AsciiPortrait'
import './AsciiProfilePicture.css'

const DESIGNATED_PICTURE_URL = '/assets/aistudio/Studio_portrait_with_center-parted_curtain_hair_364bd15b.png'

/**
 * Clean picture-only ASCII portrait figure matching the colleague portfolio aesthetic.
 */
export function AsciiProfilePicture({
  name = profile.name || 'James Rolmer V. Catalan',
  location = 'Manila, PH',
  initialSrc = DESIGNATED_PICTURE_URL,
}) {
  return (
    <figure className="landing-portrait" aria-label={`Black and white ASCII portrait of ${name}`}>
      <AsciiPortrait src={initialSrc} alt={`Black and white ASCII portrait of ${name}`} />
      <figcaption>
        <span>{name}</span>
        <span>{location}</span>
      </figcaption>
    </figure>
  )
}
