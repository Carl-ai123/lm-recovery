import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { FinalCTA, CallButton, WhatsAppButton } from '@/components/site-actions'
import { CoverageMap } from '@/components/coverage-map'
import { areas } from '@/lib/site-data'

export function AreasPage() {
  return <SiteShell><main>
    <section className="page-hero page-hero-simple page-utility-hero"><div className="hero-overlay" /><div className="container page-hero-content"><p className="eyebrow"><span className="live-dot" /> Local recovery coverage</p><h1>Vehicle Recovery Across Kent</h1><p className="hero-copy">Local recovery around Rochester, Maidstone and Medway, with planned vehicle transport available for longer-distance routes.</p><div className="hero-actions"><CallButton /><WhatsAppButton /></div></div></section>
    <section className="section utility-section"><div className="container content-grid"><div><p className="eyebrow blue">Where we work</p><h2>Local recovery <em>across Kent.</em></h2><p className="lead-copy">LM Recovery covers the listed local areas across Kent for vehicle recovery. Tell us where the vehicle is and what you need moved so we can discuss the job directly.</p></div><ul className="area-list">{areas.map((area) => <li key={area}><Link href="/areas-we-cover">{area}<ArrowRight /></Link></li>)}</ul></div></section>
    <section className="section pale-section utility-section"><div className="container coverage-editorial"><div><p className="eyebrow blue">Two types of coverage</p><h2>Local recovery. <em>Planned transport.</em></h2></div><div className="coverage-editorial-list"><article><span className="coverage-number">01</span><div><h3>Local recovery</h3><p>Rochester, Maidstone, Medway and surrounding Kent areas.</p></div></article><article><span className="coverage-number">02</span><div><h3>Planned vehicle transport</h3><p>Longer-distance routes can be discussed directly with LM Recovery.</p></div></article></div></div></section>
    <section className="section utility-section"><div className="container areas-map-large utility-map-layout"><div><p className="eyebrow blue">Need to check an area?</p><h2>Tell us where the vehicle <em>is.</em></h2><p className="lead-copy">If your location is outside the local area, get in touch anyway. Planned vehicle transport can be discussed around your route.</p><div className="hero-actions"><CallButton /><WhatsAppButton /></div></div><CoverageMap /></div></section>
    <FinalCTA />
  </main></SiteShell>
}
