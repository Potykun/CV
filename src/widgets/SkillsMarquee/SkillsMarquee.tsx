import { useInView } from '@shared/hooks'
import { Container } from '@shared/ui'
import { motion } from 'framer-motion'

const ROW_LEFT = [
  'Java', 'PHP', 'Python', 'C#',
  'Node.js', 'Express', 'Docker', 'Kubernetes', 'WordPress', 'Spring', 'PostgreSQL', 'MySQL', 'Lombok'
]
const ROW_RIGHT = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'HTML5', 'CSS', 'RTK Query', 'React Hook Form',
  'Tailwind CSS', 'Git', 'Vite', 'Jest', 'Figma',
]

function MarqueeRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const doubled = [ ...items, ...items ]
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex shrink-0 gap-0 ${direction === 'left'
          ? 'animate-[marquee-left_40s_linear_infinite]'
          : 'animate-[marquee-right_40s_linear_infinite]'
          }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 py-5 text-lg font-medium text-[#777] transition-colors hover:text-[#ededed]"
          >
            <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: '#8b1a4a' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Infinite bidirectional marquee of technology skills from CV */
export function SkillsMarquee() {
  const [ ref, inView ] = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 border-y border-[#111] overflow-hidden">
      <Container className="mb-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#8b1a4a]">Stack</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ededed]">Technologies</h2>
        </motion.div>
      </Container>

      <div className="flex flex-col gap-1">
        <MarqueeRow items={ROW_LEFT} direction="left" />
        <MarqueeRow items={ROW_RIGHT} direction="right" />
      </div>
    </section>
  )
}
