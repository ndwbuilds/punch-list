import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Punch List — Less paperwork. More jobs.",
  description:
    "Punch List builds simple automations for small trades businesses. We help plumbers, HVAC techs, electricians, and contractors cut paperwork and win more jobs.",
};

const services = [
  {
    icon: "📄",
    title: "Document Handling",
    desc: "Estimates, invoices, work orders — automated and organized so nothing falls through the cracks.",
    href: "/services/document-handling",
  },
  {
    icon: "📅",
    title: "Scheduling Automation",
    desc: "Stop playing phone tag. Let customers book, get reminders sent, and your calendar fill itself.",
    href: "/services/scheduling",
  },
  {
    icon: "🔍",
    title: "Workflow Audits",
    desc: "We walk through how your business actually runs and find the spots where time and money leak out.",
    href: "/services/workflow-audit",
  },
  {
    icon: "🔧",
    title: "Tool & Vendor Selection",
    desc: "Too many apps, too many options. We cut through the noise and tell you what's actually worth buying.",
    href: "/services/tool-vendor-selection",
  },
  {
    icon: "🤖",
    title: "Custom AI Tools",
    desc: "Need something built for the way your business works? We build simple AI tools that do one job and do it well.",
    href: "/services/ai-tools",
  },
];

const trades = [
  "Plumbers", "HVAC Techs", "Electricians", "Roofers",
  "Landscapers", "General Contractors", "Painters", "Handymen",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A5C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#F5C518] text-[#1B3A5C] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              For the Trades
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Less paperwork.<br />
              <span className="text-[#F5C518]">More jobs.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a0b4c8] mb-10 leading-relaxed max-w-xl">
              We build simple automations for small trade businesses — so you spend
              less time on admin and more time doing the work that pays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-4 rounded text-center hover:bg-[#D4A800] transition-colors text-lg"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/services"
                className="border border-[#a0b4c8] text-white font-bold px-8 py-4 rounded text-center hover:border-white transition-colors text-lg"
              >
                See What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-6">
              You didn&apos;t start a business to push paper.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-4">
              But somewhere between answering calls, sending estimates, chasing invoices,
              scheduling jobs, and managing vendors — the back office starts eating your day.
            </p>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We&apos;re not a software company. We&apos;re a small shop that understands how trade
              businesses run — and we use technology as a tool to make yours run tighter.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">What we do</h2>
            <p className="text-[#6B7280] text-lg">No bloat. No enterprise software. Just fixes that work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#F5C518] hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#1B3A5C] text-lg mb-2 group-hover:text-[#F5C518] transition-colors">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Free Audit", desc: "We talk through how your business runs today — what&apos;s working, what&apos;s not, where the time goes." },
              { step: "02", title: "Clear Plan", desc: "We give you a plain-English rundown of exactly what to fix and how — no jargon, no sales pitch." },
              { step: "03", title: "We Build It", desc: "We handle the tech. You get a tighter operation. No long contracts, no maintenance headaches." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="text-[#F5C518] font-black text-3xl leading-none">{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a0b4c8] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">Built for the trades</h2>
          <p className="text-[#6B7280] text-lg mb-10">If you work with your hands, we work with you.</p>
          <div className="flex flex-wrap gap-3">
            {trades.map((t) => (
              <span key={t} className="bg-white border border-[#E5E7EB] text-[#1B3A5C] font-semibold px-5 py-2 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5C518] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-4">
            Ready to clear your punch list?
          </h2>
          <p className="text-[#2a5280] text-lg mb-8">
            Start with a free 30-minute audit. No commitment, no pitch — just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B3A5C] text-white font-bold px-10 py-4 rounded text-lg hover:bg-[#122840] transition-colors"
          >
            Book Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
