"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function DrawBorder({ children, delay = 0, step }: { children: ReactNode; delay?: number; step: number }) {
  return (
    <motion.div
      className="relative pl-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#E5E7EB] origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-[#F5C518] glow-yellow flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 500, damping: 18, delay: delay + 0.4 }}
      >
        <span className="text-[10px] font-black text-[#1B3A5C]">{step}</span>
      </motion.div>
      {children}
    </motion.div>
  )
}
