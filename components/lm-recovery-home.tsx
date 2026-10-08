'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Crosshair,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react'

const phone = '07500473262'
const whatsapp = 'https://wa.me/447500473262'

const services = [
  { title: '24/7 Breakdown Recovery', text: 'Roadside vehicle recovery across Kent and beyond.', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=80' },
  { title: 'Vehicle Transportation', text: 'Secure transport for cars, vans and motorcycles.', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80' },
  { title: 'Copart Collections', text: 'Collection of damaged, salvaged and non-running vehicles.', image: 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&w=900&q=80' },
  { title: 'Car & Van Recovery', text: 'Recovery for private motorists, garages and businesses.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80' },
  { title: 'Motorcycle Transport', text: 'Careful transport for motorcycles.', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80' },
  { title: 'Nationwide Transport', text: 'Vehicle movement throughout England.', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80' },
]

const faqs = [
  ['Do you offer 24/7 vehicle recovery?', 'Yes. LM Recovery provides 24/7 vehicle recovery and transport.'],
  ['What areas do you cover?', 'We cover Maidstone, Rochester, Medway, Kent and nationwide England transport.'],
  ['Do you transport non-running vehicles?', 'Yes, non-running and accident-damaged vehicles can be arranged for collection.'],
  ['Can you collect vehicles from Copart?', 'Yes. Copart collections are one of our vehicle transport services.'],
  ['Do you recover vans?', 'Yes. We provide car and van recovery for private motorists, garages and businesses.'],
  ['Can you transport motorcycles?', 'Yes. Motorcycle transport is available.'],
  ['Do you offer nationwide vehicle transport?', 'Yes. Nationwide vehicle transport is available across England.'],
  ['How do I get a quote?', 'Call LM Recovery directly or send the recovery details using the callback form.'],
]

function Brand() {
  return <a href="#top" className="brand" aria-label="LM Recovery home"><span className="brand-mark">LM</span><span>RECOVERY<span className="brand-kent"> KENT</span></span></a>
}

function PrimaryButton({ children, href = `tel:${phone}`, className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  return <a className={`button button-primary ${className}`} href={href}>{children}<ArrowRight aria-hidden="true" /></a>
}

export default function LMRecoveryHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main id="top">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {['Recovery', 'Vehicle Transport', 'Copart Collections', 'Areas We Cover', 'Gallery', 'Contact'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
          </nav>
          <a className="header-call" href={`tel:${phone}`}><Phone aria-hidden="true" /> Call now</a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{['Recovery', 'Vehicle Transport', 'Copart Collections', 'Areas We Cover', 'Gallery', 'Contact'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)} key={item}>{item}<ArrowRight /></a>)}</nav>}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Recovery truck ready for vehicle transport" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow"><span className="live-dot" /> 24/7 Vehicle Recovery • Kent</p>
          <h1 id="hero-title">Stranded?<br /><em>We&apos;ll get you moving.</em></h1>
          <p className="hero-copy">24/7 vehicle recovery and transport across Maidstone, Medway, Kent and nationwide.</p>
          <div className="trust-row"><div><strong>★★★★★ <span>4.9</span></strong><small>112 Google Reviews</small></div><div><ShieldCheck /><small>Fully insured</small></div><div><Clock3 /><small>24/7 service</small></div></div>
          <div className="hero-actions"><PrimaryButton>Call now — 07500 473262</PrimaryButton><a className="button button-whatsapp" href={whatsapp}><MessageCircle aria-hidden="true" /> WhatsApp us</a></div>
          <p className="direct-line">Speak directly with LM Recovery.</p>
        </div>
        <div className="hero-tag"><Truck /> Recovery &amp; transportation</div>
      </section>

      <section className="quick-contact"><div className="container quick-contact-inner"><div><span className="eyebrow">Need help now?</span><strong>Get in touch with Liam directly.</strong></div><div className="quick-actions"><a href={`tel:${phone}`}><Phone /> <span>Call <b>07500 473262</b></span></a><a href={whatsapp}><MessageCircle /> <span>WhatsApp <b>Message us</b></span></a></div></div></section>

      <section className="quote-section section" id="contact"><div className="container quote-grid"><div className="section-intro"><p className="eyebrow blue">Recovery request</p><h2>Need recovery<br /><em>now?</em></h2><p>Send us the details and we&apos;ll help arrange your recovery or transport.</p><div className="callout"><Crosshair /><span>Prefer to speak now?<br /><a href={`tel:${phone}`}>Call 07500 473262</a></span></div></div><form className="request-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} aria-label="Recovery request form">{submitted ? <div className="success-state"><Check /><h3>Request received</h3><p>Thanks. Liam will use the details provided to arrange a callback.</p><button type="button" onClick={() => setSubmitted(false)}>Send another request</button></div> : <><div className="form-row"><label>Pickup location<input required name="pickup" placeholder="Where is the vehicle?" /></label><label>Destination<input name="destination" placeholder="Where does it need to go?" /></label></div><div className="form-row"><label>Vehicle make / model<input required name="vehicle" placeholder="e.g. Ford Transit" /></label><label>Vehicle condition<select name="condition" defaultValue=""><option value="" disabled>Select condition</option><option>Broken down</option><option>Non-runner</option><option>Accident damaged</option><option>Transport only</option><option>Copart collection</option><option>Other</option></select></label></div><label>Phone number<input required type="tel" name="phone" placeholder="Your best contact number" /></label><button className="button button-navy" type="submit">Request a callback <ArrowRight /></button></>}</form></div></section>

      <section className="services-section section" id="recovery"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">What we do</p><h2>Recovery &amp; transport<br /><em>services</em></h2></div><p>Practical help for breakdowns, collections and vehicle movement across Kent and England.</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>0{index + 1}</span></div><div className="service-card-content"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Learn more <ArrowRight /></a></div></article>)}</div></div></section>

      <section className="proof-section section"><div className="container proof-grid"><div><p className="eyebrow yellow">A local reputation</p><h2>Trusted by drivers<br /><em>across Kent.</em></h2><div className="rating"><strong>4.9</strong><span>★★★★★<small>112 Google Reviews</small></span></div><p>Real local reputation built through reliable recovery and transport work.</p><a className="text-link" href="https://www.google.com/search?q=LM+Recovery+Kent" target="_blank" rel="noreferrer">View Google reviews <ArrowRight /></a></div><div className="review-cards">{[1, 2, 3].map((review) => <div className="review-card" key={review}><span className="review-label">Google Review</span><span className="review-stars">★★★★★</span><p>&quot;Verified customer review will be inserted here.&quot;</p></div>)}</div></div></section>

      <section className="why-section section"><div className="container why-grid"><div className="why-image" role="img" aria-label="Vehicle being loaded for recovery" /><div className="why-content"><p className="eyebrow blue">Why LM Recovery</p><h2>A local recovery company you can <em>actually reach.</em></h2><p>Liam runs a family business focused on getting people and vehicles moving — without a call centre between you and the operator.</p><div className="why-list">{[['24/7 availability', 'Help when you need it.'], ['Deal directly with LM Recovery', 'No call centre between you and the recovery operator.'], ['Local Kent service', 'Based around Rochester and Maidstone.'], ['Nationwide transport', 'Local recovery and longer-distance vehicle movement.'], ['Fully insured', 'Vehicles handled professionally and securely.']].map(([title, text]) => <div key={title}><Check /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></div></div></section>

      <section className="urgent-band"><div className="container urgent-inner"><div><p className="eyebrow yellow">Need help right now?</p><h2>Broken down<br /><em>right now?</em></h2><p>Call LM Recovery directly for 24/7 vehicle recovery.</p></div><div className="urgent-actions"><PrimaryButton className="button-yellow">Call 07500 473262</PrimaryButton><a className="button button-outline" href={whatsapp}><MessageCircle /> WhatsApp LM Recovery</a></div></div></section>

      <section className="areas-section section" id="areas-we-cover"><div className="container areas-grid"><div><p className="eyebrow blue">Local &amp; nationwide</p><h2>Vehicle recovery<br />across Kent <em>&amp; beyond.</em></h2><p>Based in Rochester and Maidstone, LM Recovery covers the local area and offers nationwide vehicle transport throughout England.</p><div className="area-chips">{['Rochester', 'Maidstone', 'Chatham', 'Medway', 'Gillingham', 'Strood', 'Kent'].map((area) => <a href="#contact" key={area}>{area}<ArrowRight /></a>)}</div></div><div className="map-card"><div className="map-lines" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" /><div className="map-label"><Crosshair /><span><strong>Kent based</strong><small>Nationwide England transport</small></span></div></div></div></section>

      <section className="gallery-section section" id="gallery"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">Work we do</p><h2>Recent recovery<br /><em>&amp; transport work.</em></h2></div><p>Genuine LM Recovery photography will be added here. A look at the vehicles and collections we handle.</p></div><div className="gallery-grid">{['https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80'].map((image, index) => <div className={`gallery-image gallery-${index + 1}`} key={image} style={{ backgroundImage: `url(${image})` }}><span>{['Breakdown Recovery', 'Vehicle Transport', 'Copart Collection', 'Nationwide Transport', 'Vehicle Transport', 'Breakdown Recovery'][index]}</span></div>)}</div></div></section>

      <section className="process-section section"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">Simple from start to finish</p><h2>Need a vehicle <em>moved?</em></h2></div><p>Tell us what you need and we&apos;ll take care of the recovery or transport details.</p></div><div className="process-grid">{[['01', 'Call or WhatsApp', 'Tell us your vehicle and location.'], ['02', 'Arrange collection', 'Confirm pickup and destination details.'], ['03', 'Vehicle transported', 'LM Recovery handles the recovery or transport.']].map(([number, title, text]) => <div className="process-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="faq-section section"><div className="container faq-grid"><div><p className="eyebrow blue">Good to know</p><h2>Frequently asked<br /><em>questions.</em></h2><p>Can&apos;t find what you need? Call LM Recovery and speak directly with Liam.</p><a className="text-link" href={`tel:${phone}`}>Call 07500 473262 <ArrowRight /></a></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="container"><p className="eyebrow yellow">Direct contact</p><h2>Need recovery or<br /><em>vehicle transport?</em></h2><p>Contact LM Recovery directly.</p><div className="final-actions"><PrimaryButton className="button-yellow">Call 07500 473262</PrimaryButton><a className="button button-outline" href={whatsapp}><MessageCircle /> WhatsApp us</a></div><a className="alt-phone" href="tel:07747824108">Alternative phone: 07747 824108</a></div></section>

      <footer className="site-footer" id="footer"><div className="container footer-grid"><div><Brand /><p>24/7 Vehicle Recovery<br />&amp; Transportation</p></div><div><h3>Navigate</h3><a href="#recovery">Recovery</a><a href="#vehicle-transport">Vehicle Transport</a><a href="#copart-collections">Copart Collections</a><a href="#areas-we-cover">Areas We Cover</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div><div><h3>Contact</h3><address>Maidstone Road<br />Rochester<br />Kent<br />ME1 3DQ</address><a href={`tel:${phone}`}>07500 473262</a><a href="tel:07747824108">07747 824108</a></div></div><div className="container footer-bottom"><span>© LM Recovery Kent</span><span>24/7 vehicle recovery &amp; transportation</span></div></footer>

      <div className="mobile-sticky"><a href={`tel:${phone}`}><Phone /><span>Call now</span></a><a href={whatsapp}><MessageCircle /><span>WhatsApp</span></a></div>
    </main>
  )
}

export { phone }
