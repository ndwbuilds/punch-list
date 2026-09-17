'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-[#1B3A5C]/85" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {badge && (
            <div className="inline-block bg-[#F5C518] text-[#1B3A5C] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
            {headline || 'Less paperwork.'}<br />
            <span className="text-[#F5C518]">{headlineAccent || 'More jobs.'}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#c8d8e8] mb-10 leading-relaxed max-w-xl">
            {subheadline || 'We build simple automations for small trade businesses — so you spend less time on admin and more time doing the work that pays.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#F5C518] text-[#1B3A5C] font-bold px-8 py-4 rounded text-center hover:bg-[#D4A800] transition-colors text-lg">
              {primaryCta || 'Get a Free Audit'}
            </Link>
            <Link href="/services" className="border border-white/50 text-white font-bold px-8 py-4 rounded text-center hover:border-white hover:bg-white/10 transition-colors text-lg">
              {secondaryCta || 'See What We Do'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
