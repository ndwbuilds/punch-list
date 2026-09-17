"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

type Props = {
  badge?: string
  headline?: string
  headlineAccent?: string
  subheadline?: string
  primaryCta?: string
  secondaryCta?: string
}

export default function ParallaxHero({ badge, headline, headlineAccent, subheadline, primaryCta, secondaryCta }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f2237]/88" />
        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(245,197,24,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 border border-[#F5C518]/40 text-[#F5C518] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
              {badge}
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-white tracking-tight">
            {headline || "Less paperwork."}<br />
            <span className="text-[#F5C518]">{headlineAccent || "More jobs."}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
            {subheadline || "We build simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="bg-[#F5C518] text-[#1B3A5C] font-black px-8 py-4 rounded text-center hover:bg-white transition-colors text-base uppercase tracking-wide">
              {primaryCta || "Get a Free Audit"}
            </Link>
            <Link href="/services" className="border border-white/20 text-white/80 font-semibold px-8 py-4 rounded text-center hover:border-white hover:text-white transition-colors text-base">
              {secondaryCta || "See What We Do →"}
            </Link>
          </div>

          {/* Proof line */}
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            {["Plumbing", "HVAC", "Electrical", "Roofing", "Landscaping", "Contracting"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#F5C518]/50" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
