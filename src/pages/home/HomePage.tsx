import { Navbar } from '@widgets/Navbar'
import { HeroSection } from '@widgets/HeroSection'
import { ProjectGrid } from '@widgets/ProjectGrid'
import { SkillsMarquee } from '@widgets/SkillsMarquee'
import { ExperienceTimeline } from '@widgets/ExperienceTimeline'
import { Footer } from '@widgets/Footer'

/** Root landing page assembling all widgets */
export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectGrid />
        <SkillsMarquee />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  )
}
