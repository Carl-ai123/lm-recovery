import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lm-recovery-one.vercel.app'),
  title: { default: '24/7 Vehicle Recovery Kent | LM Recovery', template: '%s' },
  description: '24/7 vehicle recovery and transport across Rochester, Maidstone, Medway, Kent and nationwide. Call LM Recovery directly.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'LM Recovery Kent', title: '24/7 Vehicle Recovery Kent | LM Recovery', description: 'Direct vehicle recovery and transport across Kent and nationwide.' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#062F5F',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
