import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = { title: 'Contact LM Recovery | 24/7 Vehicle Recovery Kent', description: 'Call, WhatsApp or send an enquiry to LM Recovery for breakdown recovery, vehicle transport and Copart collection.', alternates: { canonical: '/contact' }, openGraph: { title: 'Contact LM Recovery | 24/7 Vehicle Recovery Kent', description: 'Contact LM Recovery directly for recovery and transport.' } }
export default function Page() { return <ContactPage /> }
