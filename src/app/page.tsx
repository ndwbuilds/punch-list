import Link from "next/link"
import type { Metadata } from "next"
import { getHomePage, getServices, getCaseStudies } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import ParallaxHero from "@/components/ParallaxHero"
import AnimateIn from "@/components/AnimateIn"
import TechLogos from "@/components/TechLogos"
import CountUp from "@/components/CountUp"
import DrawBorder from "@/components/DrawBorder"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Punch List | Less paperwork. More jobs.",
  description: "Punch List builds simple automations for small trade businesses so you spend less time on admin and more time doing the work that pays.",
}

const FALLBACK_SERVICES = [
  { _id: "1", slug: { current: "document-handling" }, title: "Document Handling", tagline: "Estimates, invoices, work orders automated and organized so nothing falls through the cracks." },
  { _id: "2", slug: { current: "scheduling" }, title: "Scheduling Automation", tagline: "Stop playing phone tag. Let customers book online and let reminders send themselves." },
  { _id: "3", slug: { current: "workflow-audit" }, title: "Workflow Audit", tagline: "We walk your operation end to end and find exactly where time and money leak out." },
  { _id: "4", slug: { current: "tool-vendor-selection" }, title: "Tool and Vendor Selection", tagline: "Too many apps and too many options. We cut through the noise and tell you what is worth buying." },
  { _id: "5", slug: { current: "ai-tools" }, title: "Custom AI Tools", tagline: "Purpose-built AI for the way your business works. One tool, one job, done right." },
]

const FALLBACK_CASES = [
  { _id: "1", trade: "Plumbing",            title: "Invoice Automation",  challenge: "6 hours a week creating invoices and chasing payments.",                               solution: "Auto-generate invoices from job completion, send reminders, and track payment status.", result: "80% less billing time" },
  { _id: "2", trade: "HVAC",                title: "Scheduling Bot",      challenge: "Staff spending 2 hours a day booking and rescheduling over the phone.",                 solution: "Online booking with auto-confirmation, reminders, and rescheduling.",                    result: "60% fewer no-shows" },
  { _id: "3", trade: "Electrical",          title: "Lead Follow-Up",      challenge: "Quote requests getting missed or followed up days too late.",                           solution: "Auto-respond to leads within 5 minutes and send quote reminders on a schedule.",         result: "35% higher conversion" },
  { _id: "4", trade: "General Contracting", title: "Digital Work Orders", challenge: "Job paperwork and photos scattered across texts, emails, and paper.",                   solution: "Digital work orders auto-populated from job details with cloud storage.",                result: "Zero lost documents" },
  { _id: "5", trade: "Landscaping",         title: "Review Collection",   challenge: "Great work but almost no Google reviews.",                                              solution: "Automated review request sent 24 hours after every completed job.",                      result: "3.2 to 4.8 on Google" },
  { _id: "6", trade: "Roofing",             title: "Material Tracking",   challenge: "Manually tracking material orders and vendor deliveries across jobs.",                  solution: "Purchase order automation with delivery tracking and low-stock alerts.",                 result: "Material costs down 12%" },
]

const FALLBACK_STEPS = [
  { number: "01", title: "Free Audit",  description: "We talk through how your business runs today, what is working, what is not, and where the time goes." },
  { number: "02", title: "Clear Plan",  description: "You get a plain-English breakdown of exactly what to fix and how. No jargon and no sales pitch." },
  { number: "03", title: "We Build It", description: "We handle the tech. You get a tighter operation. No long contracts and no maintenance headaches." },
]

const STATS = [
  { num: 40,  suffix: "+", label: "hrs/month saved on average" },
  { num: 20,  suffix: "+", label: "tools in our tech stack" },
  { num: 6,   suffix: "+", label: "trade industries served" },
  { num: 100, suffix: "%", label: "trades focused" },
]

export default async function Home() {
  const [page, services, caseStudies] = await Promise.all([getHomePage(), getServices(), getCaseStudies()])

  const hero    = page?.hero
  const problem = page?.problem
  const hiw     = page?.howItWorks
  const cta     = page?.cta

  const displayServices = services.length > 0 ? services : FALLBACK_SERVICES
  const displayCases    = caseStudies.length > 0 ? caseStudies : FALLBACK_CASES
  const displaySteps    = (hiw?.steps && hiw.steps.length > 0) ? hiw.steps : FALLBACK_STEPS

  return (
    <>
      {/* Hero */}
      <ParallaxHero
        badge={hero?.badge || "Ops and AI for the Trades"}
        headline={hero?.headline || "Less paperwork."}
        headlineAccent={hero?.headlineAccent || "More jobs."}
        subheadline={hero?.subheadline || "We build simple automations for small trade businesses so you spend less time on admin and more time doing the work that pays."}
        primaryCta={hero?.primaryCta}
        secondaryCta={hero?.secondaryCta}
      />

      {/* Stats bar */}
      <section className="bg-[#0f2237] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:px-8">
                <div className="text-3xl font-black text-[#F5C518] glow-yellow">
                  <CountUp to={s.num} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/40 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-white dot-grid py-24 relative overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-[#1B3A5C]/[0.06] animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full border border-[#F5C518]/[0.10] animate-spin-reverse pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-4">Why Punch List</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B3A5C] leading-tight mb-6">
                We speak trades.<br />We speak tech.
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
                Most tech companies do not understand how a trade business actually runs. Most trade consultants do not know what is possible with today&apos;s AI tools.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                We sit at the intersection. We have mapped the workflows, learned the pain points, and built the automations for plumbers, HVAC techs, electricians, roofers, and more.
              </p>
            </AnimateIn>
            <div className="space-y-3">
              {[
                { label: "Trade expertise",   desc: "We know how jobs flow, how estimating works, and how dispatch happens." },
                { label: "Modern AI stack",   desc: "Claude, Make, N8N, Zapier. We know what to use and when to use it." },
                { label: "No-fluff delivery", desc: "Small engagements. Clear outcomes. No 12-week consulting contracts." },
                { label: "Owner to owner",    desc: "We run a small business too. We get what the pressure feels like." },
              ].map((item, i) => (
                <AnimateIn key={i} delay={i * 0.09} direction="right">
                  <div className="flex gap-4 p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#1B3A5C] hover:shadow-md transition-all group">
                    <div className="w-2 h-2 rounded-full bg-[#F5C518] mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                    <div>
                      <div className="font-black text-[#1B3A5C] mb-0.5">{item.label}</div>
                      <div className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[#0f2237] line-grid py-20 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-[#F5C518]/[0.10] animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-[#F5C518]/[0.15] animate-spin-reverse pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-4">Sound familiar?</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                {problem?.headline || "You did not start a business to push paper."}
              </h2>
              {problem?.body ? (
                <div className="text-white/60 text-lg leading-relaxed prose prose-lg max-w-none prose-invert">
                  <PortableText value={problem.body as never} />
                </div>
              ) : (
                <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                  <p>But somewhere between answering calls, sending estimates, chasing invoices, and scheduling jobs, the back office starts eating your day.</p>
                  <p>You are running the tools when the tools should be running themselves. That is what we fix.</p>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Photo break 1 */}
      <div className="h-56 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#1B3A5C]/75" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimateIn direction="scale">
            <p className="text-white text-2xl md:text-3xl font-black text-center px-6">Built for the shop, not the boardroom.</p>
          </AnimateIn>
        </div>
      </div>

      {/* Services */}
      <section className="bg-[#F8F8F8] dot-grid py-24 relative overflow-hidden">
        <div className="absolute top-6 right-6 w-20 h-20 border border-[#1B3A5C]/[0.07] rotate-45 animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">What we do</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">Five ways we fix your operation</h2>
              <p className="text-[#6B7280] text-lg max-w-xl">No bloat. No enterprise software. Fixes that actually stick.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayServices.map((s, i) => (
              <AnimateIn key={s._id} delay={i * 0.07} direction="scale">
                <Link href={`/services/${s.slug.current}`} className="group block bg-white border border-[#E5E7EB] rounded-xl p-7 hover:border-[#1B3A5C] hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-xs font-black text-[#1B3A5C]/25 uppercase tracking-widest">0{i + 1}</span>
                    <span className="text-[#E5E7EB] group-hover:text-[#F5C518] group-hover:translate-x-1 transition-all font-bold text-xl leading-none">&#8594;</span>
                  </div>
                  <h3 className="font-black text-[#1B3A5C] text-lg mb-2">{s.title}</h3>
                  {s.tagline && <p className="text-[#6B7280] text-sm leading-relaxed">{s.tagline}</p>}
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Work Done */}
      <section className="bg-[#1B3A5C] py-24 relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/[0.04] animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">Proof of work</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Work we have done</h2>
              <p className="text-white/50 text-lg">Real automations. Real results.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayCases.map((c, i) => (
              <AnimateIn key={c._id} delay={i * 0.07} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-[#F5C518] uppercase tracking-widest border border-[#F5C518]/30 px-2 py-0.5 rounded">{c.trade}</span>
                    {c.result && <span className="text-[10px] font-black text-white/80 bg-white/10 px-2 py-0.5 rounded">{c.result}</span>}
                  </div>
                  <h3 className="font-black text-white text-lg mb-3">{c.title}</h3>
                  {c.challenge && <p className="text-white/40 text-sm mb-3 leading-relaxed"><span className="text-white/60 font-semibold">Problem: </span>{c.challenge}</p>}
                  {c.solution && <p className="text-white/40 text-sm leading-relaxed mt-auto pt-3 border-t border-white/10"><span className="text-white/60 font-semibold">Built: </span>{c.solution}</p>}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dot-grid py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-3">The process</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-14">{hiw?.headline || "Simple. Fast. No fluff."}</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {displaySteps.map((step, i) => (
              <DrawBorder key={step.number} delay={i * 0.14} step={i + 1}>
                <p className="text-xs font-black text-[#1B3A5C]/30 uppercase tracking-widest mb-2 pt-1">{step.number}</p>
                <h3 className="font-black text-[#1B3A5C] text-xl mb-3">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
              </DrawBorder>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Logos */}
      <TechLogos />

      {/* Photo break 2 */}
      <div className="h-56 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#1B3A5C]/75" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimateIn direction="scale">
            <p className="text-white text-xl md:text-2xl font-black text-center px-6 max-w-2xl">Simple tools. Real results. No tech degree required.</p>
          </AnimateIn>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#0f2237] line-grid py-24 relative overflow-hidden">
        <div className="absolute top-8 left-8 w-36 h-36 rounded-full border border-[#F5C518]/[0.10] animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="absolute top-16 left-16 w-16 h-16 rounded-full border border-[#F5C518]/[0.15] animate-spin-reverse pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-8 right-8 w-44 h-44 rounded-full border border-[#F5C518]/[0.08] animate-spin-reverse pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full border border-[#F5C518]/[0.12] animate-spin-slow pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <AnimateIn direction="scale">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F5C518] mb-4">Get started</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {cta?.headline || "Ready to clear your punch list?"}
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              {cta?.body || "Start with a free 30-minute audit. We walk through your operation, find the leaks, and tell you exactly what to fix with no obligation."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-[#F5C518] text-[#1B3A5C] font-black px-10 py-4 rounded uppercase tracking-wide hover:bg-white hover:scale-105 transition-all text-sm glow-yellow">
                {cta?.buttonText || "Book Your Free Audit"}
              </Link>
              <Link href="/services" className="inline-block border border-white/20 text-white/70 font-semibold px-10 py-4 rounded hover:border-white hover:text-white transition-colors text-sm">
                See All Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
