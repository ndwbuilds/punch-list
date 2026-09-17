import Image from 'next/image'

const logos = [
  { name: 'Claude', slug: 'anthropic' },
  { name: 'ChatGPT', slug: 'openai' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'Google', slug: 'google' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Slack', slug: 'slack' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Twilio', slug: 'twilio' },
  { name: 'Asana', slug: 'asana' },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'Typeform', slug: 'typeform' },
  { name: 'Pipedrive', slug: 'pipedrive' },
]

const textLogos = [
  { name: 'Make' },
  { name: 'N8N' },
  { name: 'Clay' },
  { name: 'Monday' },
  { name: 'Calendly' },
  { name: 'QuickBooks' },
]

const all = [
  ...logos.map((l) => ({ ...l, type: 'icon' as const })),
  ...textLogos.map((l) => ({ ...l, type: 'text' as const, slug: '' })),
]

export default function TechLogos() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">Technologies we work with</p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap w-max">
          {[...all, ...all].map((logo, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-20 shrink-0">
              {logo.type === 'icon' ? (
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src={`https://cdn.simpleicons.org/${logo.slug}/1B3A5C`}
                    alt={logo.name}
                    width={36}
                    height={36}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="text-[10px] font-black text-[#1B3A5C] text-center leading-tight">{logo.name}</span>
                </div>
              )}
              <span className="text-[11px] font-medium text-[#6B7280] text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
