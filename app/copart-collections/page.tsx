import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = { title: 'Copart Collection & Vehicle Transport | LM Recovery', description: 'Copart vehicle collection and transport. Send the Copart site, vehicle, reference number, delivery postcode and phone number for a quote.', alternates: { canonical: '/copart-collections' }, openGraph: { title: 'Copart Collection & Vehicle Transport | LM Recovery', description: 'Direct Copart collection and vehicle transport quote requests.' } }
export default function Page() { return <ServicePage kind="copart" /> }
