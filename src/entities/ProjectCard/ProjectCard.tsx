import { Badge } from '@shared/ui'
import { useInView } from '@shared/hooks'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  year: string
  link?: string
  index: number
}

/** Project card with glassmorphism hover and scroll reveal */
export function ProjectCard({ title, description, tags, year, link, index }: ProjectCardProps) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <a
        href={link ?? '#'}
        target={link ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-between rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] p-5 min-[575px]:p-7 transition-all duration-300 hover:border-[#8b1a4a]/40 hover:bg-[#111] hover:shadow-[0_0_40px_rgba(139,26,74,0.06)] h-full overflow-hidden"
      >
        <div className="flex flex-col min-[575px]:flex-row gap-5 min-[575px]:gap-7 h-full">

          {/* Mobile Image: Top (Hidden on Desktop) */}
          <div className="block min-[575px]:hidden w-full aspect-square shrink-0 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]" />

          {/* Text Content */}
          <div className="flex flex-1 flex-col h-full">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg min-[575px]:text-xl font-semibold text-[#ededed] group-hover:text-[#8b1a4a] transition-colors">
                {title}
              </h3>
              {/* Year */}
              <span className="text-xs text-[#888] font-mono mt-1 shrink-0">{year}</span>
            </div>
            
            <p className="text-sm leading-relaxed text-[#999] mb-6 flex-1">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pr-8 mt-auto">
              {tags.map((tag) => (
                <Badge key={tag} variant="accent">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Desktop Image: Right Side */}
          <div className="hidden min-[575px]:block w-[40%] max-w-[50%] shrink-0">
            <div className="w-full h-full rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] shadow-inner" style={{ objectFit: 'cover' }} />
          </div>

        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-5 right-5 min-[575px]:bottom-7 min-[575px]:right-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center px-3 py-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#8b1a4a]">
            <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
    </motion.div>
  )
}
