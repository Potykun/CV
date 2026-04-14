import { ExperienceItem } from '@entities/ExperienceItem'
import { Container } from '@shared/ui'
import { useInView } from '@shared/hooks'
import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'IT Developer (Trainee)',
    company: 'WBS Training AG — Duisburg, DE',
    period: 'Mar 2025 – Present',
    description:
      'Full-stack development training covering Java, Spring Boot, React, and DevOps fundamentals. Built internal tooling prototypes and participated in agile sprints.',
    tags: ['Java', 'Spring Boot', 'React', 'SQL', 'Agile'],
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Q-Web Studio — Remote',
    period: 'Jan 2024 – Feb 2025',
    description:
      'Delivered responsive, accessible UI components for 6+ client projects. Worked directly with designers to implement pixel-perfect layouts using React and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    role: 'Architectural Designer',
    company: 'Independent Practice — Kyiv, UA',
    period: '2018 – 2023',
    description:
      'Led design and documentation for residential and commercial projects. Transitioned to software development leveraging strong systems thinking and precision-focused background.',
    tags: ['AutoCAD', 'Revit', 'Project Management', 'Design'],
  },
]

/** Vertical experience timeline with scroll-animated items */
export function ExperienceTimeline() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="experience" className="py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#8b1a4a]">
            Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ededed]">Experience</h2>
        </motion.div>

        <div className="grid gap-px md:grid-cols-[1fr_2fr]">
          {/* left axis label */}
          <div className="hidden md:block">
            <p className="text-xs text-[#333] pt-1 tracking-widest uppercase">Timeline</p>
          </div>

          {/* items */}
          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={exp.role} {...exp} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
