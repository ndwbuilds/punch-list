"use client"

import { useState } from "react"

type Logo = { name: string; slug: string }

const logos: Logo[] = [
  { name: "Claude", slug: "anthropic" },
  { name: "ChatGPT", slug: "openai" },
  { name: "Zapier", slug: "zapier" },
  { name: "Make", slug: "make" },
  { name: "N8N", slug: "n8n" },
  { name: "Google", slug: "google" },
  { name: "Notion", slug: "notion" },
  { name: "Slack", slug: "slack" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Airtable", slug: "airtable" },
  { name: "Stripe", slug: "stripe" },
  { name: "Twilio", slug: "twilio" },
  { name: "Asana", slug: "asana" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Typeform", slug: "typeform" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Monday", slug: "mondaydotcom" },
  { name: "Calendly", slug: "calendly" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Clay", slug: "clay" },
]

function LogoItem({ logo }: { logo: Logo }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2 w-24 shrink-0">
      <div className="w-12 h-12 flex items-center justify-center">
        {!failed ? (
          <img
            src={`https://cdn.simpleicons.org/${logo.slug}/1B3A5C`}
            alt={logo.name}
            width={36}
            height={36}
            onError={() => setFailed(true)}
            className="w-9 h-9 object-contain"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-[#F8F8F8] border border-[#E5E7EB] flex items-center justify-center">
            <span className="text-[9px] font-black text-[#1B3A5C] text-center leading-tight px-1">
              {logo.name}
            </span>
          </div>
        )}
      </div>
      <span className="text-[11px] font-medium text-[#6B7280] text-center leading-tight">{logo.name}</span>
    </div>
  )
}

export default function TechLogos() {
  const doubled = [...logos, ...logos]

  return (
    <section className="bg-white py-16 overflow-hidden border-y border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
          Technologies we work with
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap w-max px-4">
          {doubled.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
