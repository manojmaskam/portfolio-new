import { config } from '../data/config'

// Two call-to-action buttons just before the contact footer.
export default function CTA() {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a href={`mailto:${config.contact.email}`} className="cta-btn cta-btn-play" data-cursor="disable">Get In Touch →</a>
        <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-hire" data-cursor="disable">Hire Me →</a>
      </div>
    </div>
  )
}
