'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { business } from '@/lib/site-data'

type FormMode = 'general' | 'copart'

export function RecoveryRequestForm({ mode = 'general' }: { mode?: FormMode }) {
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const isCopart = mode === 'copart'

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const fields = Array.from(data.entries()).filter(([, value]) => String(value).trim())
    const text = fields.map(([key, value]) => `${key}: ${value}`).join('\n')
    setMessage(text)
    setSubmitted(true)
    window.open(`${business.whatsapp}?text=${encodeURIComponent(`Hello LM Recovery, I would like a ${isCopart ? 'Copart collection' : 'recovery or transport'} quote.\n\n${text}`)}`, '_blank', 'noopener,noreferrer')
  }

  if (submitted) return <div className="success-state"><Check /><h3>Details ready for WhatsApp</h3><p>Your enquiry has been prepared in WhatsApp. Send the message there so LM Recovery can respond directly.</p><a className="button button-primary" href={`${business.whatsapp}?text=${encodeURIComponent(message)}`}>Open WhatsApp again <ArrowRight /></a><button type="button" onClick={() => setSubmitted(false)}>Edit details</button></div>

  return <form className="request-form" onSubmit={submit} aria-label={isCopart ? 'Copart collection quote form' : 'Recovery request form'}>
    {isCopart ? <>
      <label>Copart location<input required name="Copart location" placeholder="Copart site or town" /></label>
      <label>Vehicle<input required name="Vehicle" placeholder="Make, model and registration if known" /></label>
      <label>Lot / reference number<input required name="Lot or reference number" placeholder="Your Copart reference" /></label>
      <label>Delivery postcode<input required name="Delivery postcode" placeholder="Where should it go?" /></label>
      <label>Phone number<input required type="tel" name="Phone number" placeholder="Your best contact number" /></label>
    </> : <>
      <div className="form-row"><label>Name<input required name="Name" placeholder="Your name" /></label><label>Phone number<input required type="tel" name="Phone number" placeholder="Your best contact number" /></label></div>
      <div className="form-row"><label>Pickup location / postcode<input required name="Pickup location" placeholder="Where is the vehicle?" /></label><label>Destination<input name="Destination" placeholder="Where does it need to go?" /></label></div>
      <label>Vehicle<input required name="Vehicle" placeholder="Make, model and condition" /></label>
      <label>Service required<select required name="Service required" defaultValue=""><option value="" disabled>Select a service</option><option>Breakdown Recovery</option><option>Vehicle Transport</option><option>Copart Collection</option><option>Other</option></select></label>
      <label>Message<textarea name="Message" rows={4} placeholder="Anything else LM Recovery should know?" /></label>
    </>}
    <button className="button button-navy" type="submit">Send details on WhatsApp <ArrowRight /></button>
    <p className="form-note">Your details open in WhatsApp so you can send them directly to LM Recovery.</p>
  </form>
}
