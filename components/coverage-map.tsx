import { Crosshair, ExternalLink } from 'lucide-react'

const mapUrl = 'https://www.google.com/maps?q=Rochester%2C+Kent&output=embed'
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Rochester%2C%20Kent'

export function CoverageMap() {
  return <div className="coverage-map"><iframe title="LM Recovery local coverage around Rochester and Kent" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><Crosshair /><span><strong>Rochester &amp; Kent</strong><small>Local recovery coverage</small></span></div><a className="map-external-link" href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ExternalLink /></a></div>
}
