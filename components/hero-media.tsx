import Image from 'next/image'

type HeroMediaProps = {
  image: string
  alt: string
  videoSrc?: string
  poster?: string
}

export function HeroMedia({ image, alt, videoSrc, poster }: HeroMediaProps) {
  return <div className="hero-image">
    {videoSrc ? <video className="hero-video" autoPlay muted loop playsInline poster={poster || image} aria-label={alt}><source src={videoSrc} type="video/webm" /><source src={videoSrc} type="video/mp4" /></video> : <Image src={image} alt={alt} fill priority sizes="100vw" />}
  </div>
}
