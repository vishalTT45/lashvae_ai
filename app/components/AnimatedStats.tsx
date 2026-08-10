import Counter from './Counter'

interface StatItem {
  key: string
  label: string
  sub: string
  targetValue: number
  prefix?: string
  suffix?: string
}

const stats: StatItem[] = [
  { key: 'speed', label: 'Faster replies', sub: '~3s vs 38 min industry avg', targetValue: 7500, suffix: 'x' },
  { key: 'lift', label: 'Lead conversion lift', sub: 'within 90 days of going live', targetValue: 94, prefix: '+', suffix: '%' },
  { key: 'buy', label: 'Buy from first responder', sub: "Lashvae makes sure that's you", targetValue: 78, suffix: '%' },
  { key: 'roi', label: 'ROI in 90 days', sub: 'Starter plan breaks even in week 1', targetValue: 8, suffix: 'x' },
]

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
      {stats.map((item) => (
        <div key={item.key} className="text-center">
          <Counter
            value={item.targetValue}
            prefix={item.prefix}
            suffix={item.suffix}
            className="block text-[36px] font-bold tracking-tight text-[#0a0a0a] leading-none sm:text-[48px]"
          />
          <div className="mt-2 text-[13px] font-semibold text-[#0a0a0a] sm:text-[14px]">{item.label}</div>
          <div className="mt-1 text-[11px] text-[#8e8e93] sm:text-[12px]">{item.sub}</div>
        </div>
      ))}
    </div>
  )
}
