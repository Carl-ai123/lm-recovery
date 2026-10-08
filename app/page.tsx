import LMRecoveryHome from '@/components/lm-recovery-home'

export default function Page() {
  return <><LMRecoveryHome /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TowingService',
  name: 'LM Recovery Kent',
  description: '24/7 vehicle recovery and transportation across Maidstone, Medway, Kent and nationwide England.',
  telephone: '+447500473262',
  address: { '@type': 'PostalAddress', streetAddress: 'Office Suite 2 Fort Bridgewood, Maidstone Road', addressLocality: 'Rochester', addressRegion: 'Kent', postalCode: 'ME1 3DQ', addressCountry: 'GB' },
  areaServed: ['Rochester', 'Maidstone', 'Chatham', 'Strood', 'Gillingham', 'Medway', 'Kent', 'England'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '112' },
}
