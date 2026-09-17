import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Simple automation services for trade businesses — document handling, scheduling, workflow audits, tool selection, and custom AI tools.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">What We Do</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">
            No bloat. No enterprise software. Just fixes that work for the way your business actually runs.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="border border-[#E5E7EB] rounded-lg p-8 hover:border-[#F5C518] hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-black text-[#1B3A5C] mb-2 group-hover:text-[#F5C518] transition-colors">{s.title}</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{s.tagline}</p>
                <span className="text-[#1B3A5C] text-sm font-bold group-hover:text-[#F5C518] transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#F8F8F8] rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black text-[#1B3A5C] mb-1">Not sure where to start?</h3>
              <p className="text-[#6B7280] text-sm">Start with a free audit. We&apos;ll tell you what&apos;s worth fixing first.</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-3 rounded hover:bg-[#D4A800] transition-colors whitespace-nowrap"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
