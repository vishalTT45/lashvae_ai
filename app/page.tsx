import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedStats from './components/AnimatedStats'

const homeChannels = [
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'Turn followers into qualified customer conversations.',
    logo: '/images/brand-logo/instagram.png',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Transform high-intent chats into loyal customers.',
    logo: '/images/brand-logo/whatsapp.png',
  },
  {
    id: 'facebook',
    name: 'Messenger',
    tagline: 'Auto-respond to inbound messages before leads go cold.',
    logo: '/images/brand-logo/facebook.png',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    tagline: 'Automate group, bot, and channel conversations.',
    logo: '/images/brand-logo/telegram.png',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'Convert comments and creator engagement into demand.',
    logo: '/images/brand-logo/youtube.png',
  },
  {
    id: 'googlemaps',
    name: 'Google Maps',
    tagline: 'Reply to reviews and local questions instantly.',
    logo: '/images/brand-logo/google-map.png',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32 px-6 sm:px-8">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            {/* Meta Partner Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#eaecf0] bg-[#f7f8fa] px-4 py-2 text-[12px] font-semibold text-[#45515e] mb-8">
              <Image
                src="/images/brand-logo/meta.png"
                alt="Meta"
                width={40}
                height={16}
                className="h-4 w-auto object-contain"
              />
              <span className="h-3.5 w-px bg-[#e5e7eb]"></span>
              Meta Official Partner
            </div>

            <h1 className="hero-display-typography text-[#0a0a0a] text-[48px] sm:text-[56px] lg:text-[72px] leading-tight">
              Every message answered.<br />
              <span className="bg-gradient-to-r from-[#ff5530] via-[#ea5ec1] to-[#1456f0] bg-clip-text text-transparent">
                One AI inbox.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] text-[#45515e] max-w-lg leading-relaxed">
              Lashvae unifies all your customer messages across platforms and responds with emotionally intelligent AI that truly understands their needs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="https://app.lashvae.com/login?signup=true"
                id="hero-cta-primary"
                className="rounded-full bg-[#0a0a0a] px-8 py-4 text-[15px] font-semibold text-white hover:bg-[#222222] transition-all inline-flex items-center justify-center gap-2"
              >
                Start Free 14 Days <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                id="hero-cta-secondary"
                className="rounded-full border border-[#0a0a0a] px-8 py-4 text-[15px] font-semibold text-[#0a0a0a] hover:bg-[#f2f3f5] transition-all text-center"
              >
                See Capabilities
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-[12px] text-[#8e8e93]">
              <span>14-day free trial</span>
              <span className="h-1 w-1 rounded-full bg-[#d0d5dd]"></span>
              <span>No credit card required</span>
              <span className="h-1 w-1 rounded-full bg-[#d0d5dd]"></span>
              <span>Easy setup</span>
            </div>
          </div>

          {/* Right Content: Image */}
          <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:mx-0 scale-105 lg:scale-110 lg:translate-x-8 xl:translate-x-12 origin-center">
            <Image
              src="/images/lashvae-hero.gif"
              alt="Lashvae AI Hero Dashboard"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>

        </div>
      </section>

      {/* 3. Channel Matrix */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-6 sm:px-8 bg-[#4249C6] border-b border-[#343ba7]">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.42) 1px, transparent 1px)
          `,
          backgroundSize: '280px 280px'
        }}></div>
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-none text-white">
              Business automation made easy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {homeChannels.map((channel) => (
              <article
                key={channel.id}
                className="min-h-[220px] md:min-h-[252px] bg-white p-7 sm:p-8 flex flex-col justify-between text-left shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 flex items-center justify-center shrink-0">
                      <Image
                        src={channel.logo}
                        alt={channel.name}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <h3 className="text-[28px] lg:text-[34px] font-bold tracking-tight text-[#0a0a0a] leading-none">
                      {channel.name}
                    </h3>
                  </div>
                  <p className="mt-5 text-[17px] lg:text-[19px] leading-snug text-[#0a0a0a] max-w-[310px]">
                    {channel.tagline}
                  </p>
                </div>

                <Link
                  href={`/channels/${channel.id}`}
                  className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#0a0a0a] pb-0.5 text-[13px] font-medium tracking-[0.08em] uppercase text-[#0a0a0a] hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Row */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-6 sm:px-8">
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <AnimatedStats />
        </div>
      </section>

      {/* 4. Capability Grid (now blog-style feature cards with image) */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Built for revenue. Not just replies.</h2>
            <p className="text-[#45515e] mt-3 text-[15px]">Every capability designed around one outcome: turning customer messages into closed deals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: '/images/features/card_1_red_orange.svg',
                  tag: 'Realtime',
                  title: 'Real-Time Replies',
                  desc: 'AI responds in ~0.31 seconds — before your team sees the notification. 24/7, across every channel.',
                },
                {
                  img: '/images/features/card_2_blue_teal.svg',
                  tag: 'Understanding',
                  title: 'Mood Detection',
                  desc: 'Reads tone, urgency, and emotion in every message with high sentiment accuracy.',
                },
              {
                img: '/images/features/card_3_purple_pink.svg',
                tag: 'Scoring',
                title: 'Lead Scoring',
                desc: 'Every conversation scored and routed instantly. Hot buyers flagged before your team notices.',
              },
              {
                img: '/images/features/card_4_green_lime.svg',
                tag: 'Inbox',
                title: 'Unified Inbox',
                desc: 'All channels in one view. Zero tab-switching. Filter by intent, status, and lead score.',
              },
              {
                img: '/images/features/card_5_charcoal_cyan.svg',
                tag: 'Analytics',
                title: 'Revenue Analytics',
                desc: 'Track which conversations turn into closed revenue. +34% deal close rate on average.',
              },
              {
                img: '/images/features/card_6_slate_violet.svg',
                tag: 'Automation',
                title: 'Auto Follow-Ups',
                desc: 'Smart sequences re-engage every silent lead. Day 1, Day 3, Day 7 — timed perfectly, always.',
              },
              // removed two cards to keep a 3-up layout per request
            ].map((f) => (
              <article key={f.title} className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
                <div className="w-full h-40 bg-white relative overflow-hidden">
                  <Image src={f.img} alt={f.title} width={480} height={160} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-tight uppercase tracking-wide text-center" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.65)' }}>{f.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <span className="bg-[#f2f3f5] text-[#45515e] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#45515e] leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.lashvae.com/login?signup=true"
              className="rounded-full bg-[#0a0a0a] px-8 py-3.5 text-[14px] font-semibold text-white hover:bg-[#222222] transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-[#0a0a0a] px-8 py-3.5 text-[14px] font-semibold text-[#0a0a0a] hover:bg-[#f2f3f5] transition-all text-center"
            >
              See Capabilities
            </Link>
          </div>
        </div>
      </section>

      

      {/* 6. The Business Case */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Speed Is Revenue</span>
              <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">The deal goes to whoever replies first.</h2>
              <div className="mt-6 space-y-6">
                <div className="bg-[#fff1ee] border border-[#ff5530]/20 rounded-xl p-5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#ff5530] mb-2">The Problem</div>
                  <p className="text-[14px] text-[#222222] leading-relaxed">Leads DM your page. Your team replies 38 minutes later. They&apos;ve already bought from someone else.</p>
                </div>
                <div className="bg-[#eef2ff] border border-[#1456f0]/20 rounded-xl p-5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#1456f0] mb-2">The Solution</div>
                  <p className="text-[14px] text-[#222222] leading-relaxed">Lashvae reads the message and replies in ~3 seconds — qualifying the lead, answering their question, and booking the call.</p>
                </div>
                <div className="bg-[#e8ffea] border border-[#1ba673]/20 rounded-xl p-5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#1ba673] mb-2">The Outcome</div>
                  <p className="text-[14px] text-[#222222] leading-relaxed">94% more leads convert. Every hour of every day. Without adding headcount.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-8 text-white space-y-6">
              <div className="text-[13px] text-[#a8aab2] font-mono uppercase tracking-wider">Lashvae vs. Manual Support</div>
              {[
                { label: 'Avg response time', them: '38 minutes', us: '~3 seconds' },
                { label: 'Availability', them: '9am – 5pm', us: '24 / 7 / 365' },
                { label: 'Messages / hour', them: '~12', us: '847+' },
                { label: 'Reply accuracy', them: '73%', us: '97%' },
                { label: 'Scales with volume', them: 'Hire more staff', us: 'Yes — instantly' },
                { label: 'Mood detection', them: 'Inconsistent', us: 'Every message' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-2 border-b border-[#181e25] pb-4 last:border-0 last:pb-0 text-[13px]">
                  <span className="text-[#a8aab2]">{row.label}</span>
                  <span className="text-[#5f5f5f] line-through text-center">{row.them}</span>
                  <span className="text-[#1ba673] font-bold text-right">{row.us}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Strip */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="bg-[#0a0a0a] text-white rounded-[32px] px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent)] pointer-events-none"></div>
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#a8aab2] uppercase tracking-wider mb-4">
                Ready when you are
              </span>
              <h2 className="text-[28px] sm:text-[40px] font-bold tracking-tight leading-tight">
                First reply: ~3 Seconds.<br />Total setup: 5 minutes.
              </h2>
              <p className="text-[#a8aab2] text-[14px] mt-4">
                Start your free 14-day trial. No credit card. No commitment. Cancel anytime.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                <Link href="/pricing" className="rounded-full bg-white text-[#0a0a0a] px-8 py-3.5 font-semibold text-[14px] hover:bg-white/95 text-center">
                  Start Free Trial
                </Link>
                <Link href="/company#contact" className="rounded-full border border-white/20 bg-white/10 text-white px-8 py-3.5 font-semibold text-[14px] hover:bg-white/20 text-center">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
