export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lm-recovery-one.vercel.app'

export const business = {
  name: 'LM Recovery Kent',
  primaryPhone: '07500473262',
  primaryPhoneDisplay: '07500 473262',
  secondaryPhone: '07747824108',
  secondaryPhoneDisplay: '07747 824108',
  whatsapp: 'https://wa.me/447500473262',
  address: ['Office Suite 2 Fort Bridgewood', 'Maidstone Road', 'Rochester', 'Kent', 'ME1 3DQ'],
  hours: '24/7 vehicle recovery service',
}

export const genuineImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-jUOXFdIWfBLovf51io9uExr6bkzzTA.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093846_Facebook-xVEyC98Oc8l44PJCbPBz54Lr5drdsy.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093855_Facebook-RthIcuwSiF4E1ucXWmlIZmCdgMsc4Z.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093902_Facebook-s3hm5tC1622xoOg57PrfhZreWM7S1W.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093912_Facebook-rcwrZZAzB272ckEu47dUMkcKMvnjKG.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093828_Facebook-yawIYqSyNuXRgN2m0OLTWxVotK2xaA.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261008_093824_Facebook-A5Be5IP4NjiFE2uDJQawNjLZeyAUaT.jpg',
]

export const areas = ['Rochester', 'Maidstone', 'Chatham', 'Strood', 'Gillingham', 'Medway', 'Kent']

export const serviceLinks = [
  { title: 'Breakdown Recovery', href: '/breakdown-recovery', image: genuineImages[0], text: '24/7 local recovery for cars, vans and motorcycles.' },
  { title: 'Vehicle Transport', href: '/vehicle-transport', image: genuineImages[4], text: 'Planned vehicle movement across Kent and nationwide.' },
  { title: 'Copart Collections', href: '/copart-collections', image: genuineImages[1], text: 'Collection and delivery of auction vehicles.' },
]

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Recovery', href: '/breakdown-recovery' },
  { label: 'Vehicle Transport', href: '/vehicle-transport' },
  { label: 'Copart Collections', href: '/copart-collections' },
  { label: 'Areas We Cover', href: '/areas-we-cover' },
  { label: 'Contact', href: '/contact' },
]

export const faqs = {
  recovery: [
    ['Do you offer 24/7 breakdown recovery?', 'Yes. LM Recovery provides 24/7 vehicle recovery across Kent.'],
    ['What areas do you cover locally?', 'Local recovery coverage includes Rochester, Maidstone, Chatham, Strood, Gillingham, Medway and Kent.'],
    ['Do you recover non-running vehicles?', 'Non-running and accident-damaged vehicle collections can be arranged. Share the vehicle condition when you call or message.'],
    ['How quickly can you arrive?', 'Availability and travel time depend on the job and current location. Call directly so LM Recovery can discuss your situation.'],
  ],
  transport: [
    ['What types of vehicle transport do you offer?', 'The existing LM Recovery service information covers cars, vans and motorcycles. Contact LM Recovery with the vehicle details to confirm the job.'],
    ['Do you offer nationwide transport?', 'Yes. Nationwide vehicle transport is available alongside local Kent recovery work.'],
    ['Can you move a non-running vehicle?', 'Non-running and damaged vehicle transport can be arranged. Include the condition and access details in your enquiry.'],
    ['How do I request a quote?', 'Call, WhatsApp, or use the request form to send the pickup, destination and vehicle details.'],
  ],
  copart: [
    ['What details do you need for a Copart collection?', 'Please provide the Copart location, vehicle details, lot or reference number, delivery postcode and a phone number.'],
    ['Can you collect damaged or non-running vehicles?', 'Copart collections can include damaged, salvaged and non-running vehicles. Confirm the condition and access requirements when requesting a quote.'],
    ['Where can the vehicle be delivered?', 'Delivery can be arranged to the destination you provide. Nationwide transport is available; confirm the route with LM Recovery.'],
    ['How do I get a Copart quote?', 'Use the Copart quote form or contact LM Recovery directly by phone or WhatsApp.'],
  ],
  general: [
    ['How do I contact LM Recovery?', 'Call 07500 473262, use WhatsApp, or send the details through the enquiry form.'],
    ['Do you handle planned transport as well as breakdowns?', 'Yes. LM Recovery provides both emergency recovery and planned vehicle transport.'],
    ['What areas do you cover?', 'Local recovery covers the listed Kent areas. Longer-distance vehicle transportation is available nationwide.'],
  ],
} as const
