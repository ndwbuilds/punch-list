import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical advice on running a tighter trade business. No fluff — just stuff that actually helps.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">The Blog</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">
            Practical advice on running a tighter trade business. No fluff.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="text-5xl mb-6">🔨</div>
            <h2 className="text-2xl font-black text-[#1B3A5C] mb-3">Posts coming soon</h2>
            <p className="text-[#6B7280] mb-8">
              We&apos;re putting together practical guides for trade business owners. Check back soon.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-3 rounded hover:bg-[#D4A800] transition-colors"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
