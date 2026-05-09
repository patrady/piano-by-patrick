'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'stagger-children'
  delay?: number
  threshold?: number
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  )
}
