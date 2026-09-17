import {
  siAnthropic, siZapier, siMake, siN8n, siGoogle, siNotion,
  siHubspot, siAirtable, siStripe, siAsana, siMailchimp,
  siTypeform, siCalendly, siQuickbooks,
} from "simple-icons"

type IconEntry = { name: string; path: string; hex: string; type: "icon" }
type TextEntry = { name: string; letter: string; hex: string; type: "text" }
type Entry = IconEntry | TextEntry

const entries: Entry[] = [
  { name: "Claude",     path: siAnthropic.path, hex: siAnthropic.hex, type: "icon" },
  { name: "ChatGPT",    letter: "GPT",  hex: "10A37F", type: "text" },
  { name: "Zapier",     path: siZapier.path,    hex: siZapier.hex,    type: "icon" },
  { name: "Make",       path: siMake.path,      hex: siMake.hex,      type: "icon" },
  { name: "N8N",        path: siN8n.path,       hex: siN8n.hex,       type: "icon" },
  { name: "Slack",      letter: "Sl",  hex: "4A154B", type: "text" },
  { name: "Google",     path: siGoogle.path,    hex: siGoogle.hex,    type: "icon" },
  { name: "Notion",     path: siNotion.path,    hex: "374151",        type: "icon" },
  { name: "HubSpot",    path: siHubspot.path,   hex: siHubspot.hex,   type: "icon" },
  { name: "Airtable",   path: siAirtable.path,  hex: siAirtable.hex,  type: "icon" },
  { name: "Stripe",     path: siStripe.path,    hex: siStripe.hex,    type: "icon" },
  { name: "Twilio",     letter: "Tw",  hex: "F22F46", type: "text" },
  { name: "Asana",      path: siAsana.path,     hex: siAsana.hex,     type: "icon" },
  { name: "Mailchimp",  path: siMailchimp.path, hex: "374151",        type: "icon" },
  { name: "Typeform",   path: siTypeform.path,  hex: "374151",        type: "icon" },
  { name: "Pipedrive",  letter: "P",   hex: "00A45B", type: "text" },
  { name: "Monday",     letter: "Mo",  hex: "FF3D57", type: "text" },
  { name: "Calendly",   path: siCalendly.path,  hex: siCalendly.hex,  type: "icon" },
  { name: "QuickBooks", path: siQuickbooks.path,hex: siQuickbooks.hex,type: "icon" },
  { name: "Clay",       letter: "Cl",  hex: "3B3B3B", type: "text" },
]

function Logo({ entry }: { entry: Entry }) {
  return (
    <div className="flex flex-col items-center gap-2.5 w-20 shrink-0">
      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
        {entry.type === "icon" ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill={`#${entry.hex}`}
            aria-label={entry.name}
          >
            <path d={entry.path} />
          </svg>
        ) : (
          <span
            className="text-[11px] font-black leading-none tracking-tight"
            style={{ color: `#${entry.hex}` }}
          >
            {entry.letter}
          </span>
        )}
      </div>
      <span className="text-[11px] font-medium text-[#6B7280] text-center leading-tight">
        {entry.name}
      </span>
    </div>
  )
}

export default function TechLogos() {
  const doubled = [...entries, ...entries]
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
        <div className="flex gap-6 animate-marquee w-max px-4">
          {doubled.map((entry, i) => (
            <Logo key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
