import Link from 'next/link'

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white flex items-center justify-center min-h-9 px-4 py-2 text-[12px] sm:text-[13px] font-medium border-b border-[#181e25]">
      <div className="max-w-full text-center leading-snug sm:truncate">
        Lashvae AI v1.0 is live - train agents in minutes.{' '}
        <Link href="/pricing" className="underline underline-offset-2 transition-opacity hover:opacity-85 inline-flex items-center gap-0.5">
          Get Started <span className="text-[10px]">↗</span>
        </Link>
      </div>
    </div>
  )
}
