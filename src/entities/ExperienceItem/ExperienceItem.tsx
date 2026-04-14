import { useInView } from '@shared/hooks'
import { motion } from 'framer-motion'

interface ExperienceItemProps {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
  index: number
}

/** Single experience item with timeline dot and scroll reveal */
export function ExperienceItem({ role, company, period, description, tags, index }: ExperienceItemProps) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-8 group"
    >
      {/* timeline dot */}
      <div className="absolute left-0 top-[6px] h-2 w-2 rounded-full border border-[#333] bg-[#0a0a0a] group-hover:border-[#8b1a4a] group-hover:bg-[#8b1a4a]/10 transition-colors duration-200" />
      {/* timeline line */}
      <div className="absolute left-[3px] top-4 bottom-[-40px] w-px bg-[#1a1a1a] last:hidden" />

      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-[#ededed] group-hover:text-[#8b1a4a] transition-colors duration-200">{role}</h3>
        <span className="text-xs text-[#888] font-mono">{period}</span>
      </div>
      <p className="mb-3 text-sm font-medium text-[#888]">{company}</p>
      <p className="mb-4 text-sm leading-relaxed text-[#999]">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#1a1a1a] px-2.5 py-0.5 text-xs text-[#888]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
