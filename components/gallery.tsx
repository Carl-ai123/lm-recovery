import Image from 'next/image'
import { genuineImages } from '@/lib/site-data'

const labels = ['Breakdown Recovery', 'Vehicle Transport', 'Copart Collection', 'Nationwide Transport', 'Vehicle Transport', 'Car Recovery', 'Van Recovery']

export function Gallery({ compact = false }: { compact?: boolean }) {
  const images = compact ? genuineImages.slice(0, 4) : genuineImages
  return <section className="gallery-section section"><div className="container"><div className="section-heading"><div><p className="eyebrow blue">Work we do</p><h2>Recent recovery<br /><em>&amp; transport work.</em></h2></div><p>Genuine LM Recovery photography from vehicle recovery, collection and transport work.</p></div><div className={`gallery-grid ${compact ? 'gallery-grid-compact' : ''}`}>{images.map((image, index) => <div className={`gallery-image gallery-${index + 1}`} key={image}><Image src={image} alt={`${labels[index]} by LM Recovery`} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>{labels[index]}</span></div>)}</div></div></section>
}
