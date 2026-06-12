import { profile } from '../data/profile'
import { ResumeIcon } from './icons'

// Fixed RESUME button pinned to the bottom-right, as in the reference.
export default function ResumeButton() {
  return (
    <a className="resume-btn" href={profile.resumeUrl} target="_blank" rel="noreferrer" data-cursor>
      RESUME <ResumeIcon />
    </a>
  )
}
