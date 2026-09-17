"use client"

import { useState } from "react"

type Logo = { name: string; domain: string }

const logos: Logo[] = [
  { name: "Claude", domain: "anthropic.com" },
  { name: "ChatGPT", domain: "openai.com" },
  { name: "Zapier", domain: "zapier.com" },
  { name: "Make", domain: "make.com" },
  { name: "N8N", domain: "n8n.io" },
  { name: "Google", domain: "google.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Airtable", domain: "airtable.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Twilio", domain: "twilio.com" },
  { name: "Asana", domain: "asana.com" },
  { name: "Mailchimp", domain: "mailchimp.com" },
  { name: "Typeform", domain: "typeform.com" },
  { name: "Pipedrive", domain: "pipedrive.com" },
  { name: "Monday", domain: "monday.com" },
  { name: "Calendly", domain: "calendly.com" },
  { name: "QuickBooks", domain: "quickbooks.intuit.com" },
  { name: "Clay", domain: "clay.com" },
]

function LogoItem({ logo }: { logo: Logo }) {
  const [failed, setFailed] = useState(false)
  const src = "https://logo.clearbit.com/" + logo.domain + "?size=80"

  return (
    <div className="flex flex-col items-center gap-2.5 w-20 shrink-0">
      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center overflow-hidden shadow-sm">
        {!failed ? (
          <img
            src={src}
            alt={logo.name}
            width={40}
            height={40}
            onError={() => setFailed(true)}
            className="w-8 h-8 object-contain"
          />
        ) : (
          <span className="text-[9px] font-black text-[#1B3A5C] text-center leading-tight px-1">
            {logo.name}
          </span>
        )}
      </div>
      <span className="text-[11px] font-medium text-[#6B7280] text-center leading-tight">
        {logo.name}
      </span>
    </div>
  )
}

export default function TechLogos() {
  const doubled = [...logos, ...logos]

  return (
    <section className="bg-[#F8F8F8] py-16 overflow-hidden border-y border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
          Technologies we work with
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {doubled.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
