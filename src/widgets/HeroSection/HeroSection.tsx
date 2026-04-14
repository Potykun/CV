import { Badge, Container } from '@shared/ui'
import { motion } from 'framer-motion'
import photo from './assets/main.png'

const INTERNSHIP_END = new Date('2027-03-23')
const INTERNSHIP_START = new Date('2026-08-21')

function getDaysRemaining(): number {
  const now = new Date()
  const diff = INTERNSHIP_START.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [ 0.25, 0.46, 0.45, 0.94 ] } },
}

/** Full-viewport hero with photo, name, role and internship countdown */
export function HeroSection() {
  const daysLeft = getDaysRemaining()
  const startStr = INTERNSHIP_START.toLocaleDateString('en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).replace(/\//g, '.')
  const endStr = INTERNSHIP_END.toLocaleDateString('en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).replace(/\//g, '.')

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#ededed 1px, transparent 1px), linear-gradient(90deg, #ededed 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* accent glow behind photo */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: '#8b1a4a' }}
      />

      <Container className="py-24">
        <div className="flex flex-col-reverse items-center gap-16 md:flex-row md:items-center md:justify-between">

          {/* ── LEFT: text content ─────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            {/* internship badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <Badge variant="green">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                Open to Internship · {startStr} – {endStr} · {daysLeft}d left
              </Badge>
            </motion.div>

            {/* name */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#ededed]"
            >
              Andrii
              <br />
              <span className="text-[#555]">Potykun</span>
            </motion.h1>

            {/* role */}
            <motion.p
              variants={itemVariants}
              className="mb-6 text-[clamp(1rem,2vw,1.35rem)] font-light text-[#888]"
            >
              Application Developer
            </motion.p>

            {/* meta row */}
            <motion.div
              variants={itemVariants}
              className="mb-12 flex flex-wrap items-center gap-4 text-sm text-[#777]"
            >
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Duisburg, DE
              </span>
              <span className="h-1 w-1 rounded-full bg-[#2a2a2a]" />
              <span>German C1 · English B2</span>
              <span className="h-1 w-1 rounded-full bg-[#2a2a2a]" />
              <span>React · TypeScript · Java</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: '#8b1a4a' }}
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#222] bg-transparent px-6 py-3 text-sm font-medium text-[#999] transition-all hover:border-[#8b1a4a]/40 hover:text-[#ededed]"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [ 0.25, 0.46, 0.45, 0.94 ] }}
            className="relative flex-shrink-0"
          >
            {/* accent border ring */}
            <div
              className="absolute -inset-[3px] rounded-2xl opacity-60"
              style={{ background: `linear-gradient(135deg, #8b1a4a 0%, transparent 60%)` }}
            />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={photo}
                alt="Andrii Potykun"
                width={380}
                height={460}
                className="block h-[420px] w-[320px] object-cover object-top md:h-[480px] md:w-[360px]"
                style={{ filter: 'brightness(0.95) contrast(1.02)' }}
              />
              {/* subtle vignette overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.5) 100%)' }}
              />
            </div>
          </motion.div>

        </div>
      </Container>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="h-8 w-px animate-pulse" style={{ background: 'linear-gradient(to bottom, transparent, #8b1a4a)' }} />
      </motion.div>
    </section>
  )
}
