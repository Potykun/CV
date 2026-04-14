import { useScroll } from '@shared/hooks'
import { Container } from '@shared/ui'

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

/** Fixed top navigation with scroll-based backdrop blur */
export function Navbar() {
  const scrolled = useScroll(40)

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[#ededed] hover:text-[#8b1a4a] transition-all"
        >
          AP
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#999] transition-colors hover:text-[#8b1a4a]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:andrii.potykun@example.com"
          className="hidden rounded-full border border-[#1a1a1a] bg-transparent px-4 py-2 text-xs font-medium text-[#999] transition-all hover:border-[#8b1a4a]/50 hover:text-[#8b1a4a] md:block"
        >
          Hire me
        </a>
      </Container>
    </header>
  )
}
