import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

/** Returns true once the element enters the viewport (fires once) */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}
