import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { config } from '../data/config'
import { ArrowOut, Copyright } from '../lib/icons'

gsap.registerPlugin(ScrollTrigger)

// Contact footer: heading + email/location, social links, and credit line.
export default function Contact() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%', end: 'bottom center', toggleActions: 'play none none none' },
      })
      tl.fromTo('.contact-section h3', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out' })
        .fromTo('.contact-box', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: .6, stagger: .15, ease: 'power3.out' }, '-=0.4')
    })
    return () => ctx.revert()
  }, [])

  const { contact, social, developer } = config

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{developer.fullName}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p><a href={`mailto:${contact.email}`} data-cursor="disable">{contact.email}</a></p>
            <h4>Location</h4>
            <p><span>{social.location}</span></p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Github <ArrowOut /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Linkedin <ArrowOut /></a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Twitter <ArrowOut /></a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">Instagram <ArrowOut /></a>
          </div>
          <div className="contact-box">
            <h2>Designed and Developed <br /> by <span>{developer.fullName}</span></h2>
            <h5><Copyright /> {new Date().getFullYear()}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
