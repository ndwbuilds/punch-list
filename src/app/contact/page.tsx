import type { Metadata } from 'next'
import { getContactPage } from '@/lib/sanity'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a free 30-minute workflow audit. No commitment, no pitch — just honest advice.',
}

export default async function ContactPage() {
  const page = await getContactPage()

  const nextSteps = page?.nextSteps ?? [
    "We'll reach out within one business day to schedule a call.",
    'We spend 30 minutes learning how your business runs.',
    "You get a plain-English breakdown of what to fix and how.",
    'No obligation. No pitch. Just useful advice.',
  ]

  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{page?.headline || 'Get in Touch'}</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">{page?.subheadline || "Start with a free 30-minute audit. We'll tell you exactly where your operation is leaking time — no obligation."}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black text-[#1B3A5C] mb-6">{page?.formTitle || 'Book a Free Audit'}</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1">Name</label>
                  <input type="text" placeholder="Your name" className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1">Business Name</label>
                  <input type="text" placeholder="Your business name" className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1">Trade / Industry</label>
                  <input type="text" placeholder="e.g. Plumbing, HVAC, Electrical" className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1">Email</label>
                  <input type="email" placeholder="you@yourbusiness.com" className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1">What&apos;s your biggest headache right now?</label>
                  <textarea rows={4} placeholder={page?.formPlaceholderPain || 'Paperwork, scheduling, invoicing, something else...'} className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#F5C518] text-[#1B3A5C] font-bold py-4 rounded text-lg hover:bg-[#D4A800] transition-colors">
                  {page?.formButtonText || 'Request Free Audit'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-[#1B3A5C] text-lg mb-3">What happens next?</h3>
                <ol className="space-y-4">
                  {nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#374151]">
                      <span className="font-black text-[#F5C518] text-lg leading-none">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              {page?.quote && (
                <div className="bg-[#F8F8F8] rounded-lg p-6">
                  <p className="text-sm text-[#6B7280] italic">&ldquo;{page.quote}&rdquo;</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
