import type { Metadata } from 'next'
import { AreasPage } from '@/components/areas-page'

export const metadata: Metadata = { title: 'Vehicle Recovery Rochester, Maidstone & Medway | LM Recovery', description: 'Local vehicle recovery across Rochester, Maidstone, Chatham, Strood, Gillingham, Medway and Kent, plus nationwide vehicle transport.', alternates: { canonical: '/areas-we-cover' }, openGraph: { title: 'Vehicle Recovery Rochester, Maidstone & Medway | LM Recovery', description: 'Local Kent recovery and nationwide vehicle transport.' } }
export default function Page() { return <AreasPage /> }
