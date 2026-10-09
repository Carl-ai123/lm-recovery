import { MessageCircle, Phone } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { CallButton, WhatsAppButton } from '@/components/site-actions'
import { RecoveryRequestForm } from '@/components/recovery-request-form'
import { business } from '@/lib/site-data'

export function ContactPage() {
  return <SiteShell><main>
    <section className="page-hero page-hero-simple page-utility-hero"><div className="hero-overlay" /><div className="container page-hero-content"><p className="eyebrow"><span className="live-dot" /> Direct contact</p><h1>Need Recovery or Vehicle Transport?</h1><p className="hero-copy">Call, WhatsApp or send the vehicle and route details. LM Recovery will discuss the practical next step with you.</p><div className="hero-actions"><CallButton /><WhatsAppButton /></div></div></section>
    <section className="section contact-main-section"><div className="container form-layout contact-layout"><div><p className="eyebrow blue">Contact LM Recovery</p><h2>Speak directly <em>with the operator.</em></h2><p className="lead-copy">For urgent breakdown recovery, calling is the quickest way to explain the situation. For planned transport or a Copart collection, WhatsApp and the form are useful ways to send the details.</p><div className="contact-details"><a href={`tel:${business.primaryPhone}`}><Phone /><span><strong>{business.primaryPhoneDisplay}</strong><small>Primary phone</small></span></a><a href={business.whatsapp}><MessageCircle /><span><strong>WhatsApp LM Recovery</strong><small>Send vehicle details</small></span></a><div className="contact-address"><strong>Based in Rochester, Kent</strong><address>{business.address.map((line) => <span key={line}>{line}<br /></span>)}</address><small>{business.hours}</small></div></div></div><RecoveryRequestForm /></div></section>
    <section className="section pale-section contact-bottom-section"><div className="container contact-bottom"><div><p className="eyebrow blue">Prefer a service page?</p><h2>Get to the right <em>quote details.</em></h2></div><div className="contact-links"><a href="/breakdown-recovery">Breakdown Recovery <span>Emergency/local help</span></a><a href="/vehicle-transport">Vehicle Transport <span>Planned vehicle movement</span></a><a href="/copart-collections">Copart Collections <span>Auction vehicle collection</span></a></div></div></section>
  </main></SiteShell>
}
