import { socials } from '../data/profile'
import { iconByKey } from './icons'

// Fixed vertical social rail on the left edge (always visible), as in the reference.
export default function SocialRail() {
  return (
    <div className="social-rail">
      {socials.map((s) => {
        const Icon = iconByKey[s.key]
        return (
          <a
            key={s.key}
            href={s.url}
            target={s.url.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            data-cursor
          >
            {Icon ? <Icon /> : s.label[0]}
          </a>
        )
      })}
      <span className="rail-line" />
    </div>
  )
}
