import Link from 'next/link'

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white flex items-center justify-center h-9 px-4 text-[13px] font-medium border-b border-[#181e25]">
      <div className="text-center truncate">
        Lashvae AI v1.0 is now live — train agents in minutes with zero-shot context.{' '}
        <Link href="/pricing" className="underline underline-offset-2 transition-opacity hover:opacity-85 inline-flex items-center gap-0.5">
          Get Started <span className="text-[10px]">↗</span>
        </Link>
      </div>
    </div>
  )
}
