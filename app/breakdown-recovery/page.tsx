import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = { title: '24/7 Breakdown Recovery Kent | LM Recovery', description: '24/7 breakdown and vehicle recovery across Rochester, Maidstone, Medway and Kent. Call or WhatsApp LM Recovery directly.', alternates: { canonical: '/breakdown-recovery' }, openGraph: { title: '24/7 Breakdown Recovery Kent | LM Recovery', description: 'Direct breakdown and vehicle recovery across Kent.' } }
export default function Page() { return <ServicePage kind="recovery" /> }
