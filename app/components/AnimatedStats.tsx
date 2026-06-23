'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  stat: string
  label: string
  sub: string
  targetValue: number
  prefix?: string
  suffix?: string
}

export default function AnimatedStats() {
  const [displayValues, setDisplayValues] = useState<Record<string, number>>({})
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const stats: StatItem[] = [
    { stat: '7,500×', label: 'Faster replies', sub: '~3s vs 38 min industry avg', targetValue: 7500, suffix: '×' },
    { stat: '+94%', label: 'Lead conversion lift', sub: 'within 90 days of going live', targetValue: 94, prefix: '+', suffix: '%' },
    { stat: '78%', label: 'Buy from first responder', sub: 'Lashvae makes sure that\'s you', targetValue: 78, suffix: '%' },
    { stat: '8×', label: 'ROI in 90 days', sub: 'Starter plan breaks even in week 1', targetValue: 8, suffix: '×' },
  ]

  // Initialize displayValues
  useEffect(() => {
    const initial: Record<string, number> = {}
    stats.forEach((item) => {
      initial[item.stat] = 0
    })
    setDisplayValues(initial)
  }, [])

  // Animate on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateStats()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const animateStats = () => {
    const duration = 2000 // 2 seconds
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
  }

  const formatNumber = (stat: StatItem, value: number) => {
    const prefix = stat.prefix || ''
    const suffix = stat.suffix || ''
    
    if (stat.suffix === '×') {
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
          <div className="mt-2 text-[14px] font-semibold text-[#222222]">{item.label}</div>
          <div className="mt-1 text-[12px] text-[#8e8e93]">{item.sub}</div>
        </div>
      ))}
    </div>
  )
}
