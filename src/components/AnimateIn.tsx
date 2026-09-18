"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left" | "right" | "scale"
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },          visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 },         visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },          visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 },    visible: { opacity: 1, scale: 1 } },
}

export default function AnimateIn({ children, delay = 0, className, direction = "up" }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
