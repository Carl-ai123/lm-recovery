import Image from 'next/image'
import { genuineImages } from '@/lib/site-data'

const galleryImages = ['/lm-recovery-hero-2.jpg', genuineImages[0]]

export function Gallery({ compact = false }: { compact?: boolean }) {
  const images = compact ? galleryImages.slice(0, 2) : galleryImages
  return <section className="gallery-section section"><div className="container"><div className="section-heading"><div><h2>Recent recovery <em>&amp; transport work.</em></h2></div><p>Real LM Recovery vehicles and jobs.</p></div><div className={`gallery-grid ${compact ? 'gallery-grid-compact' : ''}`}>{images.map((image, index) => <div className={`gallery-image gallery-${index + 1}`} key={image}><Image src={image} alt={index === 0 ? 'LM Recovery truck transporting a vehicle' : 'LM Recovery vehicle recovery work'} fill sizes="(max-width: 700px) 100vw, (max-width: 1024px) 60vw, 65vw" /></div>)}</div></div></section>
}
