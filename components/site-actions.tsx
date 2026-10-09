'use client'

import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { business } from '@/lib/site-data'

export function CallButton({ children = `Call ${business.primaryPhoneDisplay}`, className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button button-primary ${className}`} href={`tel:${business.primaryPhone}`}>{children}<ArrowRight aria-hidden="true" /></a>
}

export function WhatsAppButton({ children = 'WhatsApp LM Recovery', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button button-whatsapp ${className}`} href={business.whatsapp}><MessageCircle aria-hidden="true" />{children}</a>
}

export function ServiceCTA({ label = 'Request a quote', href = '/contact', className = '' }: { label?: string; href?: string; className?: string }) {
  return <a className={`button button-navy ${className}`} href={href}>{label}<ArrowRight aria-hidden="true" /></a>
}

export function FinalCTA({ emergency = false }: { emergency?: boolean }) {
  return <section className="final-cta"><div className="container"><p className="eyebrow blue">{emergency ? 'Need help right now?' : 'Direct contact'}</p><h2>{emergency ? 'Broken down right now?' : <>Need recovery or <em>vehicle transport?</em></>}</h2><p>{emergency ? 'Call or WhatsApp LM Recovery directly for 24/7 vehicle recovery.' : 'Contact LM Recovery directly for recovery, transport or a collection quote.'}</p><div className="final-actions"><CallButton /><WhatsAppButton /></div><a className="alt-phone" href={`tel:${business.secondaryPhone}`}>Alternative phone: {business.secondaryPhoneDisplay}</a></div></section>
}

export function TrustRating() {
  return <div className="trust-rating"><strong>4.9</strong><span aria-label="4.9 out of 5 Google rating">★★★★★<small>112 Google Reviews</small></span></div>
}

export function ContactStrip() {
  return <div className="contact-strip"><div className="container contact-strip-inner"><div><p className="eyebrow">Talk directly to LM Recovery</p><strong>Recovery or transport advice</strong></div><div className="quick-actions"><a href={`tel:${business.primaryPhone}`}><Phone aria-hidden="true" /><b>{business.primaryPhoneDisplay}</b></a><a href={business.whatsapp}><MessageCircle aria-hidden="true" /><b>WhatsApp</b></a></div></div></div>
}
