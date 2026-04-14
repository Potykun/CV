import { ProjectCard } from '@entities/ProjectCard'
import { Container } from '@shared/ui'
import { useInView } from '@shared/hooks'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'DevFlow Dashboard',
    description:
      'Full-stack productivity app for development teams. Real-time task tracking, GitHub integration, and sprint analytics built with React and Spring Boot.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    year: '2024',
    link: 'https://github.com',
  },
  {
    title: 'Motion UI Kit',
    description:
      'Open-source component library with 40+ animated primitives built on Framer Motion. Tree-shakeable, typed, and zero dependencies.',
    tags: ['TypeScript', 'Framer Motion', 'Vite', 'Storybook'],
    year: '2024',
    link: 'https://github.com',
  },
  {
    title: 'Arch Vis Platform',
    description:
      'Portfolio CMS for architecture firms. Drag-and-drop project management, WebGL 3D viewer, and client presentation mode.',
    tags: ['Next.js', 'Three.js', 'Prisma', 'Docker'],
    year: '2023',
    link: 'https://github.com',
  },
  {
    title: 'DataSync CLI',
    description:
      'Python ETL pipeline and CLI tool synchronizing data between legacy ERP systems and modern REST APIs with configurable transformation layers.',
    tags: ['Python', 'Docker', 'REST API', 'SQL'],
    year: '2023',
    link: 'https://github.com',
  },
]

/** 2x2 grid of project cards with section header */
export function ProjectGrid() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id="projects" className="py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#8b1a4a]">
            Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#ededed]">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 min-[1100px]:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
