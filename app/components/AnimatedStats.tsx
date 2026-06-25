'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface StatItem {
  stat: string
  label: string
  sub: string
  targetValue: number
  prefix?: string
  suffix?: string
}

const stats: StatItem[] = [
  { stat: '7,500x', label: 'Faster replies', sub: '~3s vs 38 min industry avg', targetValue: 7500, suffix: 'x' },
  { stat: '+94%', label: 'Lead conversion lift', sub: 'within 90 days of going live', targetValue: 94, prefix: '+', suffix: '%' },
  { stat: '78%', label: 'Buy from first responder', sub: "Lashvae makes sure that's you", targetValue: 78, suffix: '%' },
  { stat: '8x', label: 'ROI in 90 days', sub: 'Starter plan breaks even in week 1', targetValue: 8, suffix: 'x' },
]

const initialDisplayValues = stats.reduce<Record<string, number>>((values, item) => {
  values[item.stat] = 0
  return values
}, {})

export default function AnimatedStats() {
  const [displayValues, setDisplayValues] = useState<Record<string, number>>(initialDisplayValues)
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const animateStats = useCallback(() => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newValues: Record<string, number> = {}
      stats.forEach((item) => {
        newValues[item.stat] = Math.floor(item.targetValue * progress)
      })
      setDisplayValues(newValues)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [])

  useEffect(() => {
    const statsElement = statsRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateStats()
        }
      },
      { threshold: 0.5 }
    )

    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement)
      }
    }
  }, [animateStats])

  const formatNumber = (stat: StatItem, value: number) => {
    const prefix = stat.prefix || ''
    const suffix = stat.suffix || ''

    if (stat.suffix === 'x') {
      return `${prefix}${value.toLocaleString()}${suffix}`
    }

    return `${prefix}${value}${suffix}`
  }

  return (
    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((item) => (
        <div key={item.stat} className="text-center">
          <div className="text-[40px] sm:text-[48px] font-bold tracking-tight text-[#0a0a0a] leading-none">
            {formatNumber(item, displayValues[item.stat] || 0)}
          </div>
          <div className="mt-2 text-[14px] font-semibold text-[#0a0a0a]">{item.label}</div>
          <div className="mt-1 text-[12px] text-[#0a0a0a]">{item.sub}</div>
        </div>
      ))}
    </div>
  )
}
