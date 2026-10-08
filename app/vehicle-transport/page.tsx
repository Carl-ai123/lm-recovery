import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'

export const metadata: Metadata = { title: 'Vehicle Transport Kent & Nationwide | LM Recovery', description: 'Planned vehicle transport across Kent and nationwide. Share your pickup, destination and vehicle details with LM Recovery.', alternates: { canonical: '/vehicle-transport' }, openGraph: { title: 'Vehicle Transport Kent & Nationwide | LM Recovery', description: 'Planned vehicle transportation across Kent and nationwide.' } }
export default function Page() { return <ServicePage kind="transport" /> }
