'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export default function AnimateIn({ children, delay = 0, className, direction = 'up' }: Props) {
  const initial =
    direction === 'left' ? { opacity: 0, x: -24 }
    : direction === 'right' ? { opacity: 0, x: 24 }
    : { opacity: 0, y: 24 }

  const animate =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
