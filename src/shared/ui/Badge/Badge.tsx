import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'green'
}

/** Small label badge for tags and status indicators */
export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'border-[#1f1f1f] bg-[#111] text-[#888]',
    accent: 'border-[#8b1a4a]/40 bg-[#8b1a4a]/10 text-[#8b1a4a]',
    green: 'border-[#1a2e1a] bg-[#0d1a0d] text-[#4ade80]',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
