import Link from 'next/link'
import type { Metadata } from 'next'
import { getHomePage, getServices } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Punch List — Less paperwork. More jobs.',
  description: 'Punch List builds simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays.',
}

export default async function Home() {
  const [page, services] = await Promise.all([getHomePage(), getServices()])

  const hero = page?.hero
  const problem = page?.problem
  const hiw = page?.howItWorks
  const trades = page?.trades
  const cta = page?.cta

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A5C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            {hero?.badge && (
              <div className="inline-block bg-[#F5C518] text-[#1B3A5C] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
                {hero.badge}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {hero?.headline || 'Less paperwork.'}<br />
              <span className="text-[#F5C518]">{hero?.headlineAccent || 'More jobs.'}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a0b4c8] mb-10 leading-relaxed max-w-xl">
              {hero?.subheadline || 'We build simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-4 rounded text-center hover:bg-[#D4A800] transition-colors text-lg">
                {hero?.primaryCta || 'Get a Free Audit'}
              </Link>
              <Link href="/services" className="border border-[#a0b4c8] text-white font-bold px-8 py-4 rounded text-center hover:border-white transition-colors text-lg">
                {hero?.secondaryCta || 'See What We Do'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      {(problem?.headline || problem?.body) && (
        <section className="bg-[#F8F8F8] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              {problem.headline && <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-6">{problem.headline}</h2>}
              {problem.body && (
                <div className="text-[#6B7280] text-lg leading-relaxed space-y-4 prose prose-lg max-w-none">
                  <PortableText value={problem.body as never} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      {services.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">What we do</h2>
              <p className="text-[#6B7280] text-lg">No bloat. No enterprise software. Just fixes that work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link key={s._id} href={`/services/${s.slug.current}`} className="border border-[#E5E7EB] rounded-lg p-6 hover:border-[#F5C518] hover:shadow-md transition-all group">
                  {s.icon && <div className="text-3xl mb-4">{s.icon}</div>}
                  <h3 className="font-bold text-[#1B3A5C] text-lg mb-2 group-hover:text-[#F5C518] transition-colors">{s.title}</h3>
                  {s.tagline && <p className="text-[#6B7280] text-sm leading-relaxed">{s.tagline}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      {hiw?.steps && hiw.steps.length > 0 && (
        <section className="bg-[#1B3A5C] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-12">{hiw.headline || 'How it works'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hiw.steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="text-[#F5C518] font-black text-3xl leading-none">{step.number}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-[#a0b4c8] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trades */}
      {trades?.list && trades.list.length > 0 && (
        <section className="bg-[#F8F8F8] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-3">{trades.headline || 'Built for the trades'}</h2>
            {trades.subheadline && <p className="text-[#6B7280] text-lg mb-10">{trades.subheadline}</p>}
            <div className="flex flex-wrap gap-3">
              {trades.list.map((t) => (
                <span key={t} className="bg-white border border-[#E5E7EB] text-[#1B3A5C] font-semibold px-5 py-2 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#F5C518] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3A5C] mb-4">
            {cta?.headline || 'Ready to clear your punch list?'}
          </h2>
          <p className="text-[#2a5280] text-lg mb-8">
            {cta?.body || 'Start with a free 30-minute audit. No commitment, no pitch — just honest advice.'}
          </p>
          <Link href="/contact" className="inline-block bg-[#1B3A5C] text-white font-bold px-10 py-4 rounded text-lg hover:bg-[#122840] transition-colors">
            {cta?.buttonText || 'Book Your Free Audit'}
          </Link>
        </div>
      </section>
    </>
  )
}
