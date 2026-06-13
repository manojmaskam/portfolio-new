import { config } from '../data/config'
import { Github, Linkedin, Twitter, Instagram, Resume } from '../lib/icons'

// Fixed bottom-left social rail + rotated RESUME button (bottom-right).
export default function IconsSection() {
  const { contact } = config
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span><a href={contact.github} target="_blank" rel="noopener noreferrer"><Github /></a></span>
        <span><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a></span>
        <span><a href={contact.twitter} target="_blank" rel="noopener noreferrer"><Twitter /></a></span>
        <span><a href={contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram /></a></span>
      </div>
      <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor="disable">
        RESUME <span><Resume /></span>
      </a>
    </div>
  )
}
