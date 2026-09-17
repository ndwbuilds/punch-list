import type { Metadata } from 'next'
import Link from 'next/link'
import { getAboutPage } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About',
  description: "We're a small shop that uses tech to help small businesses run better. No tech jargon, no enterprise nonsense.",
}

export default async function AboutPage() {
  const page = await getAboutPage()

  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{page?.headline || 'About Punch List'}</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">{page?.subheadline || "We're not a tech company. We're a small shop that uses tech to help small businesses run better."}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {page?.body ? (
            <div className="max-w-3xl space-y-4 text-[#374151] text-lg leading-relaxed prose prose-lg">
              <PortableText value={page.body as never} />
            </div>
          ) : (
            <div className="max-w-3xl space-y-8 text-[#374151] text-lg leading-relaxed">
              <p>Punch List started because we kept seeing the same thing: great tradespeople drowning in paperwork, losing time to scheduling chaos, and getting pitched software that wasn&apos;t built for them.</p>
              <p>We work owner-to-owner. We sit down, learn how your business actually runs, and figure out the specific spots where a simple fix would make the biggest difference.</p>
              <p>No long contracts. No enterprise pricing. No bloated software. Just practical help, plain language, and fixes that stick.</p>
            </div>
          )}

          {page?.values && page.values.length > 0 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.values.map((v) => (
                <div key={v.label} className="border-l-4 border-[#F5C518] pl-5">
                  <h3 className="font-bold text-[#1B3A5C] text-lg mb-2">{v.label}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16">
            <Link href="/contact" className="inline-block bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-4 rounded text-lg hover:bg-[#D4A800] transition-colors">
              {page?.ctaText || "Let's Talk"}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
