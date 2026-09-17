import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/services" className="text-[#a0b4c8] text-sm hover:text-white transition-colors mb-6 inline-block">
            ← Back to Services
          </Link>
          <div className="text-5xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{service.title}</h1>
          <p className="text-[#a0b4c8] text-xl max-w-xl">{service.tagline}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#374151] text-lg leading-relaxed">{service.description}</p>
            </div>
            <div>
              <h3 className="font-black text-[#1B3A5C] text-xl mb-6">What&apos;s included</h3>
              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#374151]">
                    <span className="text-[#F5C518] font-black mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-[#1B3A5C] text-white rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-1">Ready to get started?</h3>
              <p className="text-[#a0b4c8] text-sm">Book a free audit and we&apos;ll walk through your operation together.</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-3 rounded hover:bg-[#D4A800] transition-colors whitespace-nowrap"
            >
              Book Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
