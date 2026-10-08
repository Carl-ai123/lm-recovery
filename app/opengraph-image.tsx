import { ImageResponse } from 'next/og'

export const alt = 'LM Recovery — 24/7 Vehicle Recovery & Transport across Kent'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: '#05070a', color: '#fff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 88px', fontFamily: 'Arial' }}>
      <div style={{ color: '#087cf0', fontSize: 32, fontWeight: 700, letterSpacing: 4, display: 'flex' }}>LM RECOVERY</div>
      <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800, marginTop: 28, display: 'flex' }}>24/7 Vehicle Recovery<br />&amp; Transport</div>
      <div style={{ color: '#bcdcff', fontSize: 30, marginTop: 26, display: 'flex' }}>Kent &amp; nationwide vehicle transport</div>
      <div style={{ background: '#087cf0', width: 150, height: 8, marginTop: 54, display: 'flex' }} />
    </div>,
    { ...size },
  )
}
