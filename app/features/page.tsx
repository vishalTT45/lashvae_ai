import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Inbox,
  MessageCircle,
  Repeat2,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

type Feature = {
  title: string
  metric: string
  metricLabel: string
  description: string
  accent: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  preview: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Real-Time Replies',
    metric: '~3s',
    metricLabel: 'avg response',
    description: 'AI responds before your team sees the notification, with an average response time of ~3 seconds and replies marked as handled just now. Customers get instant answers at any hour, while your team only steps in when the conversation truly needs human judgment.',
    accent: '#ff5530',
    image: '/images/features-page/real_time_replies_art_v2.png',
    icon: Zap,
    preview: (
      <div className="rounded-xl bg-[#0a0a0a] p-4 text-white">
        <div className="flex items-center justify-between text-[11px] text-[#a8aab2]">
          <span>~3 seconds</span>
          <span className="text-[#1ba673]">AI responded</span>
        </div>
        <div className="mt-4 rounded-lg bg-white/10 p-3 text-[13px]">
          Hi there. I can help with that right now.
        </div>
        <div className="mt-3 text-[11px] text-[#a8aab2]">just now</div>
      </div>
    ),
  },
  {
    title: 'Mood Detection',
    metric: '97%',
    metricLabel: 'accuracy',
    description: 'Reads tone, urgency, and emotion in every message with 97% accuracy, including signals like excited, curious, and frustrated. Lashvae helps your team understand the emotional state behind each conversation before they reply or escalate.',
    accent: '#ea5ec1',
    image: '/images/features-page/mood_detection_art.png',
    icon: Smile,
    preview: (
      <div className="space-y-3">
        {[
          { label: 'Excited', value: '78%', width: '78%', color: '#1ba673' },
          { label: 'Curious', value: '54%', width: '54%', color: '#1456f0' },
          { label: 'Frustrated', value: '12%', width: '12%', color: '#ff5530' },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex justify-between text-[12px] font-semibold text-[#45515e]">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-[#f2f3f5]">
              <div className="h-2 rounded-full" style={{ width: item.width, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Lead Scoring',
    metric: '94',
    metricLabel: '/ 100 hot leads',
    description: 'Every conversation is scored and routed instantly, with hot leads highlighted around 94/100 so your team knows who to prioritize. Buying intent, urgency, and context are combined into a simple score your sales team can act on quickly.',
    accent: '#1456f0',
    image: '/images/features-page/lead_scoring_art.png',
    icon: Target,
    preview: (
      <div className="rounded-xl border border-[#e5e7eb] bg-[#f7f8fa] p-5 text-center">
        <div className="text-[54px] font-bold leading-none text-[#0a0a0a]">94</div>
        <div className="mt-1 text-[13px] font-bold text-[#45515e]">/100</div>
        <div className="mx-auto mt-4 w-fit rounded-full bg-[#ff5530] px-3 py-1 text-[11px] font-bold text-white">
          HOT LEAD
        </div>
      </div>
    ),
  },
  {
    title: 'Unified Inbox',
    metric: '6',
    metricLabel: 'platforms - 1 view',
    description: 'Zero tab switching across 6 platforms in one live view, so Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps stay connected. Every customer thread is organized in one workspace with status, intent, and follow-up context visible.',
    accent: '#4249c6',
    image: '/images/features-page/unified_inbox_art.png',
    icon: Inbox,
    preview: (
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
        <div className="mb-3 text-[12px] font-bold text-[#1ba673]">All 6 connected - Live</div>
        <div className="grid grid-cols-3 gap-2">
          {['IG', 'WA', 'FB', 'TG', 'YT', 'GM'].map((item) => (
            <div key={item} className="rounded-lg bg-[#f2f3f5] px-3 py-2 text-center text-[12px] font-bold text-[#45515e]">
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Revenue Analytics',
    metric: '$1,247',
    metricLabel: 'avg/day',
    description: 'Track which conversations close deals, including revenue signals like $1,247 average per day and +34% lift versus last week. See which channels, replies, campaigns, and follow-ups are creating pipeline instead of guessing from scattered inbox data.',
    accent: '#1ba673',
    image: '/images/features-page/revenue_analytics_art.png',
    icon: BarChart3,
    preview: (
      <div className="rounded-xl bg-[#0a0a0a] p-4 text-white">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[32px] font-bold">$1,247</div>
            <div className="text-[12px] text-[#a8aab2]">avg/day</div>
          </div>
          <div className="rounded-full bg-[#e8ffea] px-3 py-1 text-[12px] font-bold text-[#1ba673]">
            +34%
          </div>
        </div>
        <div className="mt-4 flex h-16 items-end gap-2">
          {[28, 44, 36, 58, 46, 64, 76].map((height) => (
            <div key={height} className="flex-1 rounded-t bg-[#1ba673]" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="mt-2 text-[11px] text-[#a8aab2]">vs last week</div>
      </div>
    ),
  },
  {
    title: 'Auto Follow-Ups',
    metric: '3x',
    metricLabel: 'more conversions',
    description: 'Smart sequences re-engage silent leads with Day 1, Day 3, and Day 7 follow-ups designed to drive 3x more conversions. Lashvae keeps the conversation warm without sounding repetitive, pushy, or disconnected from the original message.',
    accent: '#7c3aed',
    image: '/images/features-page/auto_followups_art.png',
    icon: Repeat2,
    preview: (
      <div className="space-y-2">
        {[
          ['D1', 'Thanks for reaching out!'],
          ['D3', 'Following up on your interest...'],
          ['D7', 'Last chance - deal closes soon!'],
        ].map(([day, text]) => (
          <div key={day} className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3">
            <span className="rounded-md bg-[#f2f3f5] px-2 py-1 text-[11px] font-bold text-[#0a0a0a]">{day}</span>
            <span className="text-[12px] text-[#45515e]">{text}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'AI Persona',
    metric: '100%',
    metricLabel: 'on-brand replies',
    description: 'Your voice, your rules, always. Lashvae keeps replies 100% on-brand, from quick plan recommendations to friendly walkthrough prompts. You can define tone, offers, boundaries, and escalation rules so automation still feels like your business.',
    accent: '#229ed9',
    image: '/images/features-page/ai_persona_art.png',
    icon: Sparkles,
    preview: (
      <div className="rounded-xl bg-[#f7f8fa] p-4">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[22px] shadow-sm">
          🤖
        </div>
        <div className="rounded-r-xl rounded-bl-xl bg-white p-3 text-[13px] leading-relaxed text-[#222222] shadow-sm">
          Hi Sarah! Our Starter plan is perfect for you. Quick walkthrough?
        </div>
      </div>
    ),
  },
  {
    title: 'AI Safety',
    metric: '0',
    metricLabel: 'harmful replies ever',
    description: 'Guardrails prevent off-brand or harmful responses with toxic content blocking, brand voice enforcement, zero harmful replies, and GDPR compliance. Sensitive messages are handled carefully, and uncertain cases are routed to a human before the brand is exposed.',
    accent: '#0a0a0a',
    image: '/images/features-page/ai_safety_art.png',
    icon: ShieldCheck,
    preview: (
      <div className="grid grid-cols-1 gap-2">
        {['Toxic content blocked', 'Brand voice enforced', 'Zero harmful replies', 'GDPR compliant'].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-lg bg-[#f7f8fa] p-3 text-[12px] font-semibold text-[#45515e]">
            <CheckCircle2 className="h-4 w-4 text-[#1ba673]" />
            {item}
          </div>
        ))}
      </div>
    ),
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageHero
        bg="#D93668"
        eyebrow="Lashvae AI Features"
        title="Everything your AI inbox needs to reply, route, and convert."
        subtitle="Lashvae understands emotion, scores intent, replies in your brand voice, and turns customer conversations into revenue signals."
      />

      <section className="bg-[linear-gradient(135deg,#fbfcff_0%,#f8fbff_42%,#f1fbff_100%)] px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Core Capabilities"
            eyebrowColor="#ff5530"
            title="Built for high-speed customer conversations."
            description="These are the product features customers see every day inside Lashvae AI."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article
                  key={feature.title}
                  className="surface-card surface-card-hover group flex flex-col overflow-hidden rounded-[24px]"
                >
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#fbfcff] p-6 sm:p-7">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      className="object-cover object-center p-6 transition-transform duration-500 group-hover:scale-[1.04] sm:p-7"
                    />
                    <div
                      className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md sm:left-7 sm:top-7"
                      style={{ backgroundColor: feature.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-6 right-6 rounded-xl bg-white/90 px-3 py-2 text-right shadow-sm backdrop-blur sm:bottom-7 sm:right-7">
                      <div className="text-[20px] font-bold leading-none text-[#0a0a0a]">{feature.metric}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8e8e93]">
                        {feature.metricLabel}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-start p-7 sm:p-8">
                    <h3 className="text-[22px] font-semibold tracking-tight text-[#0a0a0a]">{feature.title}</h3>
                    <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#45515e]">{feature.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eaecf0] bg-[#f7f8fa] px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Understands first',
              desc: 'Reads message content, customer mood, urgency, and conversation context before replying.',
              icon: MessageCircle,
            },
            {
              title: 'Routes intelligently',
              desc: 'Scores leads, groups messages by intent, and escalates sensitive conversations to humans.',
              icon: Gauge,
            },
            {
              title: 'Improves revenue',
              desc: 'Tracks follow-ups, conversion signals, and revenue impact across every connected channel.',
              icon: BarChart3,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="surface-card surface-card-hover p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0a0a0a] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[22px] font-bold tracking-tight text-[#0a0a0a]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#45515e]">{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px] rounded-[32px] bg-[#0a0a0a] px-8 py-16 text-center text-white">
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <h2 className="display-lg-typography text-white">Ready to let Lashvae answer first?</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#a8aab2]">
              Start with real-time replies, mood detection, lead scoring, and safe on-brand automation from day one.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
              <Button href="/pricing" variant="white">
                Start Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/channels" variant="whiteOutline">
                See Channels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
