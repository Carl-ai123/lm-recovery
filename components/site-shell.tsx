'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { business, navItems } from '@/lib/site-data'
import { MobileStickyCTA } from '@/components/mobile-sticky-cta'

export function Brand() {
  return <Link href="/" className="brand" aria-label="LM Recovery home"><span className="brand-preview-logo"><Image src="/lm-recovery-brand-preview.jpg" alt="LM Recovery" fill sizes="180px" /></span><span className="brand-lockup"><span className="brand-wordmark">LM <b>RECOVERY</b></span><small>24/7 VEHICLE RECOVERY</small></span></Link>
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><a className="header-call" href={`tel:${business.primaryPhone}`}>Call now</a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <Link href={item.href} onClick={() => setMenuOpen(false)} key={item.href}>{item.label}</Link>)}</nav>}</header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Brand /><p>24/7 Vehicle Recovery<br />&amp; Transportation</p></div><div><h3>Navigate</h3>{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div><div><h3>Contact</h3><address>{business.address.map((line) => <span key={line}>{line}<br /></span>)}</address><a href={`tel:${business.primaryPhone}`}>{business.primaryPhoneDisplay}</a><a href={`tel:${business.secondaryPhone}`}>{business.secondaryPhoneDisplay}</a></div></div><div className="container footer-bottom"><span>© LM Recovery Kent</span><span>24/7 vehicle recovery &amp; transportation</span></div></footer>
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /><MobileStickyCTA /></>
}
