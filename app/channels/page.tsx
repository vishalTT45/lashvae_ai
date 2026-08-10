import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { channelProducts } from './data'

export default function ChannelsPage() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* 1. Channel Hero */}
      <PageHero
        bg="#3B42C4"
        eyebrow="6 Native Integrations"
        title="Be where your customers are. In real-time."
        subtitle="Deploy Lashvae AI across all six major messaging platforms. Every conversation unified, every reply instant, every lead captured automatically."
      />

      {/* 2. Channel Grid — single responsive grid (previously duplicated
          markup gated by hidden md:grid / md:hidden) */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-b border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Network Channels"
            eyebrowColor="#4249C6"
            title="The Channel Matrix"
            description="Native integrations for the platforms where your customers already spend their time."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channelProducts.map((ch) => (
              <article
                key={ch.id}
                className="surface-card surface-card-hover relative overflow-hidden bg-white p-7 sm:p-8 flex flex-col justify-between text-left rounded-2xl"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: ch.bg }}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 flex items-center justify-center shrink-0">
                      <Image src={ch.logo} alt={ch.name} width={28} height={28} className="h-7 w-7 object-contain" />
                    </div>
                    <h3 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight text-[#0a0a0a] leading-none">
                      {ch.name}
                    </h3>
                  </div>
                  <p className="mt-5 text-[16px] sm:text-[17px] lg:text-[19px] leading-snug text-[#0a0a0a]">
                    {ch.blurb}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#f2f3f5] px-3 py-1 text-[11px] font-bold text-[#45515e]">
                    {ch.statValue} {ch.statLabel}
                  </div>
                </div>

                <Link
                  href={`/channels/${ch.id}`}
                  className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#0a0a0a] pb-0.5 text-[13px] font-medium tracking-[0.08em] uppercase text-[#0a0a0a] hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px] text-center max-w-xl">
          <h2 className="heading-sm-typography text-[#0a0a0a]">Ready to connect your channels?</h2>
          <p className="text-[#45515e] text-[14px] mt-3">
            One-click OAuth for all 6 platforms. Go live in 5 minutes.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/pricing" variant="primary" size="md">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
