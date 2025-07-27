"use client"

import { useEffect, useState, useRef } from "react"

interface TypewriterOnScrollProps {
  text: string
  className?: string
  speed?: number
}

export function TypewriterOnScroll({ text, className = "", speed = 50 }: TypewriterOnScrollProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, hasStarted])

  return (
    <div ref={ref} className={className}>
      {displayedText}
      {hasStarted && currentIndex < text.length && <span className="animate-pulse text-blue-400">|</span>}
    </div>
  )
}
