import { MessageCircle, Phone } from 'lucide-react'
import { business } from '@/lib/site-data'

export function MobileStickyCTA() {
  return <div className="mobile-sticky"><a href={`tel:${business.primaryPhone}`}><Phone aria-hidden="true" /><span>Call now</span></a><a href={business.whatsapp}><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a></div>
}
