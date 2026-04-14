import { type AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost'
}

/** Polymorphic button rendered as an anchor tag */
export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 '
  const variants = {
    primary:
      'border border-[#262626] bg-[#111] text-[#ededed] hover:bg-[#1a1a1a] hover:border-[#333]',
    ghost: 'border border-transparent text-[#888] hover:text-[#ededed] hover:border-[#262626]',
  }
  return (
    <a className={base + variants[variant] + ' ' + className} {...props}>
      {children}
    </a>
  )
}
