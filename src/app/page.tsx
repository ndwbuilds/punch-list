import Link from "next/link"
import type { Metadata } from "next"
import { getHomePage, getServices, getCaseStudies } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import ParallaxHero from "@/components/ParallaxHero"
import AnimateIn from "@/components/AnimateIn"
import TechLogos from "@/components/TechLogos"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Punch List — Less paperwork. More jobs.",
  description: "Punch List builds simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays.",
}

const FALLBACK_SERVICES = [
  { _id: "1", slug: { current: "document-handling" }, icon: "📄", title: "Document Handling", tagline: "Estimates, invoices, work orders — automated and organized." },
  { _id: "2", slug: { current: "scheduling" }, icon: "📅", title: "Scheduling Automation", tagline: "Stop playing phone tag. Let the calendar fill itself." },
  { _id: "3", slug: { current: "workflow-audit" }, icon: "🔍", title: "Workflow Audit", tagline: "Find where your time and money are leaking out." },
  { _id: "4", slug: { current: "tool-vendor-selection" }, icon: "🔧", title: "Tool & Vendor Selection", tagline: "Cut through the noise. Know what's actually worth buying." },
  { _id: "5", slug: { current: "ai-tools" }, icon: "🤖", title: "Custom AI Tools", tagline: "Simple AI built for the way your business works." },
]

const FALLBACK_CASES = [
  { _id: "1", icon: "🔧", trade: "Plumbing", title: "Invoice Automation", challenge: "6+ hours a week creating invoices and chasing payments.", solution: "Auto-generate invoices from job completion, send reminders, track payment status.", result: "Billing time cut 80%" },
  { _id: "2", icon: "❄️", trade: "HVAC", title: "Scheduling Bot", challenge: "Staff spending 2 hours a day booking and rescheduling appointments over the phone.", solution: "Online booking with auto-confirmation, reminders, and rescheduling — no staff needed.", result: "No-shows dropped 60%" },
  { _id: "3", icon: "⚡", trade: "Electrical", title: "Lead Follow-Up", challenge: "Quote requests getting missed or followed up days too late.", solution: "Auto-respond to leads within 5 minutes, send quote reminders on a schedule.", result: "Conversion rate up 35%" },
  { _id: "4", icon: "🏗️", trade: "General Contracting", title: "Digital Work Orders", challenge: "Job paperwork, photos, and notes scattered across texts, emails, and paper.", solution: "Digital work orders auto-populated from job details with photo capture and cloud storage.", result: "Zero lost documents" },
  { _id: "5", icon: "🌿", trade: "Landscaping", title: "Review Collection", challenge: "Great work, but almost no Google reviews to show for it.", solution: "Automated review request sent 24 hours after every completed job.", result: "Rating went from 3.2 to 4.8" },
  { _id: "6", icon: "🏠", trade: "Roofing", title: "Material Tracking", challenge: "Manually tracking material orders and vendor deliveries across jobs.", solution: "Purchase order automation with delivery tracking and low-stock alerts.", result: "Material costs down 12%" },
]

const FALLBACK_STEPS = [
  { number: "01", title: "Free Audit", description: "We talk through how your business runs today — what's working, what's not, where the time goes." },
  { number: "02", title: "Clear Plan", description: "We give you a plain-English rundown of exactly what to fix and how — no jargon, no sales pitch." },
  { number: "03", title: "We Build It", description: "We handle the tech. You get a tighter operation. No long contracts, no maintenance headaches." },
]

const FALLBACK_TRADES = ["Plumbers", "HVAC Techs", "Electricians", "Roofers", "Landscapers", "General Contractors", "Painters", "Handymen", "Welders", "Carpenters"]

export default async function Home() {
  const [page, services, caseStudies] = await Promise.all([
    getHomePage(),
    getServices(),
    getCaseStudies(),
  ])

  const hero = page?.hero
  const problem = page?.problem
  const hiw = page?.howItWorks
  const trades = page?.trades
  const cta = page?.cta

  const displayServices = services.length > 0 ? services : FALLBACK_SERVICES
  const displayCases = caseStudies.length > 0 ? caseStudies : FALLBACK_CASES
  const displaySteps = hiw?.steps && hiw.steps.length > 0 ? hiw.steps : FALLBACK_STEPS
  const displayTrades = trades?.list && trades.list.length > 0 ? trades.list : FALLBACK_TRADES

  return (
    <>
      <ParallaxHero
        badge={hero?.badge || "For the Trades"}
        headline={hero?.headline || "Less paperwork."}
        headlineAccent={hero?.headlineAccent || "More jobs."}
        subheadline={hero?.subheadline || "We build simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays."}
        primaryCta={hero?.primaryCta}
        secondaryCta={hero?.secondaryCta}
      />

      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-6">
                {problem?.headline || "You didn\'t start a business to push paper."}
              </h2>
              {problem?.body ? (
                <div className="text-[#6B7280] text-lg leading-relaxed space-y-4 prose prose-lg max-w-none">
                  <PortableText value={problem.body as never} />
                </div>
              ) : (
                <div className="space-y-4 text-[#6B7280] text-lg leading-relaxed">
                  <p>But somewhere between answering calls, sending estimates, chasing invoices, scheduling jobs, and managing vendors — the back office starts eating your day.</p>
                  <p>We are not a software company. We are a small shop that understands how trade businesses run — and we use technology as a tool to make yours run tighter.</p>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="h-64 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#1B3A5C]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-black text-center px-6">Built for the shop, not the boardroom.</p>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">What we do</h2>
              <p className="text-[#6B7280] text-lg">No bloat. No enterprise software. Just fixes that work.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((s, i) => (
              <AnimateIn key={s._id} delay={i * 0.07}>
                <Link href={`/services/${s.slug.current}`} className="block border border-[#E5E7EB] rounded-lg p-6 hover:border-[#F5C518] hover:shadow-md transition-all group h-full">
                  {s.icon && <div className="text-3xl mb-4">{s.icon}</div>}
                  <h3 className="font-bold text-[#1B3A5C] text-lg mb-2 group-hover:text-[#F5C518] transition-colors">{s.title}</h3>
                  {s.tagline && <p className="text-[#6B7280] text-sm leading-relaxed">{s.tagline}</p>}
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A5C] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Work we have done</h2>
              <p className="text-[#a0b4c8] text-lg">Real automations built for real trade businesses.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCases.map((c, i) => (
              <AnimateIn key={c._id} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {c.icon && <div className="text-2xl mb-1">{c.icon}</div>}
                      <span className="text-[#F5C518] text-xs font-bold uppercase tracking-wide">{c.trade}</span>
                    </div>
                    {c.result && (
                      <span className="bg-[#F5C518] text-[#1B3A5C] text-xs font-black px-2 py-1 rounded whitespace-nowrap ml-2">{c.result}</span>
                    )}
                  </div>
                  <h3 className="font-black text-white text-lg mb-3">{c.title}</h3>
                  {c.challenge && <p className="text-[#a0b4c8] text-sm mb-2"><span className="font-semibold text-white/70">Problem: </span>{c.challenge}</p>}
                  {c.solution && <p className="text-[#a0b4c8] text-sm"><span className="font-semibold text-white/70">Solution: </span>{c.solution}</p>}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-12">{hiw?.headline || "How it works"}</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displaySteps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="text-[#F5C518] font-black text-3xl leading-none">{step.number}</div>
                  <div>
                    <h3 className="font-bold text-[#1B3A5C] text-lg mb-2">{step.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <TechLogos />

      <div className="h-56 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#1B3A5C]/75" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-black text-center px-6 max-w-2xl">Simple tools. Real results. No tech degree required.</p>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">{trades?.headline || "Built for the trades"}</h2>
            <p className="text-[#6B7280] text-lg mb-10">{trades?.subheadline || "If you work with your hands, we work with you."}</p>
            <div className="flex flex-wrap gap-3">
              {displayTrades.map((t) => (
                <span key={t} className="bg-[#F8F8F8] border border-[#E5E7EB] text-[#1B3A5C] font-semibold px-5 py-2 rounded-full text-sm hover:border-[#F5C518] transition-colors">{t}</span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-[#F5C518] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-4">{cta?.headline || "Ready to clear your punch list?"}</h2>
            <p className="text-[#2a5280] text-lg mb-8">{cta?.body || "Start with a free 30-minute audit. No commitment, no pitch — just honest advice."}</p>
            <Link href="/contact" className="inline-block bg-[#1B3A5C] text-white font-bold px-10 py-4 rounded text-lg hover:bg-[#122840] transition-colors">{cta?.buttonText || "Book Your Free Audit"}</Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
