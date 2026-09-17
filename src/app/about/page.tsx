import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "We're a small shop that gets how trade businesses run. No tech jargon, no enterprise nonsense — just practical help from people who've seen the inside of a real business.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">About Punch List</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">
            We&apos;re not a tech company. We&apos;re a small shop that uses tech to help small businesses run better.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-8 text-[#374151] text-lg leading-relaxed">
            <p>
              Punch List started because we kept seeing the same thing: great tradespeople
              drowning in paperwork, losing time to scheduling chaos, and getting pitched
              software solutions that were built for someone else&apos;s business.
            </p>
            <p>
              We work owner-to-owner. We sit down, learn how your business actually runs,
              and figure out the specific spots where a simple fix would make the biggest difference.
              Sometimes that&apos;s automating your invoice process. Sometimes it&apos;s a better scheduling
              setup. Sometimes it&apos;s just helping you pick the right tool and set it up right.
            </p>
            <p>
              No long contracts. No enterprise pricing. No bloated software that takes six months
              to learn. Just practical help, plain language, and fixes that stick.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "No BS", desc: "We tell you what you need, not what makes us the most money." },
              { label: "Small biz to small biz", desc: "We run a small operation too. We get what it&apos;s like." },
              { label: "Plain English", desc: "No jargon. If we can&apos;t explain it simply, we don&apos;t sell it." },
            ].map((v) => (
              <div key={v.label} className="border-l-4 border-[#F5C518] pl-5">
                <h3 className="font-bold text-[#1B3A5C] text-lg mb-2">{v.label}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-4 rounded text-lg hover:bg-[#D4A800] transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
