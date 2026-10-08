import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ClipboardList, MessageCircle, Truck } from 'lucide-react'
import { FAQ } from '@/components/faq'
import { Gallery } from '@/components/gallery'
import { ContactStrip, FinalCTA, CallButton, WhatsAppButton, ServiceCTA, TrustRating } from '@/components/site-actions'
import { RecoveryRequestForm } from '@/components/recovery-request-form'
import { SiteShell } from '@/components/site-shell'
import { CoverageMap } from '@/components/coverage-map'
import { areas, faqs, genuineImages } from '@/lib/site-data'

type ServiceKind = 'recovery' | 'transport' | 'copart'

const content = {
  recovery: {
    eyebrow: 'Emergency & local recovery', title: '24/7 Breakdown Recovery in Kent', intro: 'Direct help when your vehicle will not move. Call LM Recovery for breakdown recovery across Rochester, Maidstone, Medway and Kent.', image: genuineImages[6], alt: 'LM Recovery truck transporting a vehicle', overview: 'Breakdowns are stressful enough without searching for a recovery operator you can reach. LM Recovery provides direct 24/7 vehicle recovery for drivers, garages and businesses across Kent.', points: ['Breakdown and roadside recovery', 'Non-running and accident-damaged vehicles', 'Car, van and motorcycle recovery', 'Direct phone and WhatsApp contact'], process: [['01', 'Call or WhatsApp', 'Tell us where the vehicle is and what has happened.'], ['02', 'Share the details', 'Confirm the vehicle, access and destination information.'], ['03', 'Arrange recovery', 'LM Recovery discusses the next step and collection details.']], faq: faqs.recovery,
  },
  transport: {
    eyebrow: 'Planned vehicle movement', title: 'Vehicle Transport Across Kent & Nationwide', intro: 'Planned vehicle transportation for customers who need a car, van or motorcycle moved across Kent or further afield.', image: genuineImages[4], alt: 'Vehicle being loaded for transport by LM Recovery', overview: 'LM Recovery handles planned vehicle transportation for private customers, garages, dealerships, auctions and trade clients. Share the pickup, destination and vehicle details for a quote.', points: ['Local Kent and longer-distance transport', 'Cars, vans and motorcycles from existing service information', 'Damaged or non-running vehicles can be discussed', 'Quote requests by phone, WhatsApp or form'], process: [['01', 'Send the route', 'Tell us the pickup and delivery locations.'], ['02', 'Confirm the vehicle', 'Share the make, model and condition.'], ['03', 'Arrange the move', 'LM Recovery confirms the transport details with you.']], faq: faqs.transport,
  },
  copart: {
    eyebrow: 'Auction vehicle collection', title: 'Copart Vehicle Collection & Transport', intro: 'Need a Copart vehicle collected and delivered? Send the auction, vehicle and destination details for a direct quote.', image: genuineImages[1], alt: 'Vehicle prepared for Copart collection by LM Recovery', overview: 'LM Recovery can arrange collection of damaged, salvaged and non-running vehicles from Copart UK sites and transport them to your chosen destination. The more detail you provide, the easier it is to confirm the collection.', points: ['Copart site and vehicle details', 'Lot or reference number', 'Delivery to your chosen postcode', 'Quote form with the information LM Recovery needs'], process: [['01', 'Send the Copart details', 'Provide the site, vehicle and lot/reference number.'], ['02', 'Confirm delivery', 'Tell us the delivery postcode and your phone number.'], ['03', 'Arrange collection', 'LM Recovery discusses the collection and transport details.']], faq: faqs.copart,
  },
} as const

export function ServicePage({ kind }: { kind: ServiceKind }) {
  const item = content[kind]
  const isCopart = kind === 'copart'
  return <SiteShell>
    <main>
      <section className="page-hero"><div className="page-hero-image"><Image src={item.image} alt={item.alt} fill priority sizes="100vw" /></div><div className="hero-overlay" /><div className="container page-hero-content"><p className="eyebrow"><span className="live-dot" /> {item.eyebrow}</p><h1>{item.title}</h1><p className="hero-copy">{item.intro}</p><div className="hero-actions"><CallButton /><WhatsAppButton /></div></div></section>
      <ContactStrip />
      <section className="section"><div className="container content-grid"><div><p className="eyebrow blue">{isCopart ? 'Collection overview' : kind === 'recovery' ? 'Recovery overview' : 'Transport overview'}</p><h2>{isCopart ? <>A clearer route from auction<br /><em>to destination.</em></> : kind === 'recovery' ? <>When the vehicle<br /><em>will not move.</em></> : <>Move a vehicle<br /><em>with a clear plan.</em></>}</h2><p className="lead-copy">{item.overview}</p></div><div className="info-panel"><Truck /><strong>Direct contact</strong><p>Speak with LM Recovery by phone or WhatsApp about your vehicle and route.</p><div className="panel-links"><a href="tel:07500473262">Call 07500 473262 <ArrowRight /></a><a href="/contact">Send an enquiry <ArrowRight /></a></div></div></div></section>
      <section className="section pale-section"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">What we handle</p><h2>{isCopart ? <>Information to include<br /><em>in your quote.</em></> : kind === 'recovery' ? <>Recovery for the<br /><em>real situation.</em></> : <>Useful for planned<br /><em>vehicle movement.</em></>}</h2></div></div><div className="feature-grid">{item.points.map((point) => <div className="feature-item" key={point}><Check /><span>{point}</span></div>)}</div></div></section>
      {isCopart && <section className="section"><div className="container form-layout"><div><p className="eyebrow blue">Copart quote request</p><h2>Send the collection<br /><em>details.</em></h2><p className="lead-copy">Use the form to prepare a WhatsApp enquiry with the information LM Recovery needs to discuss the collection.</p></div><RecoveryRequestForm mode="copart" /></div></section>}
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">Simple from start to finish</p><h2>How it <em>works.</em></h2></div><p>Start with the information you already have. LM Recovery will discuss the practical next step with you.</p></div><div className="process-grid">{item.process.map(([number, title, text], index) => <div className="process-step" key={number}><span className="process-step-icon">{index === 0 ? <MessageCircle /> : index === 1 ? <ClipboardList /> : <Truck />}</span><span className="process-step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
      <section className="areas-section section"><div className="container areas-grid"><div><p className="eyebrow blue">Local &amp; nationwide</p><h2>{kind === 'recovery' ? <>Local recovery<br /><em>across Kent.</em></> : <>Kent collection<br /><em>and beyond.</em></>}</h2><p>Local recovery coverage includes Rochester, Maidstone, Chatham, Strood, Gillingham, Medway and Kent. Vehicle transportation is available nationwide.</p><div className="area-chips">{areas.map((area) => <Link href="/areas-we-cover" key={area}>{area}</Link>)}</div></div><CoverageMap /></div></section>
      <section className="proof-section section service-proof"><div className="container proof-grid"><div><p className="eyebrow yellow">A local reputation</p><h2>Trusted by drivers<br /><em>across Kent.</em></h2><TrustRating /><p>Real local reputation built through recovery and transport work.</p></div><div className="review-summary"><span className="review-summary-mark">G</span><div><strong>Google reviews</strong><p>4.9 / 5 from 112 reviews</p><span className="review-stars">★★★★★</span><span className="review-summary-note">Verified rating and review count</span></div></div></div></section>
      <Gallery compact />
      <section className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow blue">Good to know</p><h2>Frequently asked<br /><em>questions.</em></h2><p>Can&apos;t find what you need? Contact LM Recovery directly with the details of your vehicle.</p><CallButton /></div><FAQ items={item.faq} /></div></section>
      <FinalCTA emergency={kind === 'recovery'} />
    </main>
  </SiteShell>
}
