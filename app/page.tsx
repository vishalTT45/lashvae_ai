import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Counter from './components/Counter';
import HomeHero from './components/HomeHero';
import HowItWorksScroll from './components/HowItWorksScroll';
import ParallaxStack, { type StackSection } from './components/ParallaxStack';
import ScrollProgress from './components/ScrollProgress';

const numberedSections: StackSection[] = [
  {
    num: '01',
    bg: '#C15C34',
    title: 'Instant replies, every single time.',
    fallback: 'Every message gets an instant, on-brand reply — no matter the hour or the channel.',
  },
  {
    num: '02',
    bg: '#4550D8',
    title: 'It reads the room, not just the words.',
    tags: ['😊 Positive mood', '🔥 High buying intent', '⏱️ Urgent', '🙋 Needs a human'],
    activeTagIndex: 1,
    cols: [
      {
        label: 'Sentiment & intent scoring',
        lead: 'Every message is scored for mood and intent',
        rest: 'so the reply always fits the moment.',
      },
      {
        label: 'Brand-perfect tone',
        lead: 'It writes in your voice',
        rest: '— pulled from your FAQs, catalog and past chats.',
      },
    ],
  },
  {
    num: '03',
    bg: 'linear-gradient(135deg, #2F8F6F 0%, #8FAE4A 55%, #D4A82F 100%)',
    title: 'It turns chats into customers.',
    cols: [
      {
        label: 'Automatic lead capture',
        lead: 'It spots a buyer, grabs the details',
        rest: 'and pushes a clean lead to your CRM.',
      },
      {
        label: 'One-tap human handoff',
        lead: 'When it matters, a real person steps in',
        rest: 'with the full conversation already in context.',
      },
    ],
  },
  {
    num: '04',
    bg: '#0a0a0a',
    numColor: '#ff5530',
    title: 'See everything that matters.',
    cols: [
      {
        label: 'Live analytics',
        lead: 'Response times, conversions and revenue',
        rest: 'in one clean, real-time view.',
      },
      {
        label: 'Topics & drop-offs',
        lead: 'See what people ask and where they leave',
        rest: ', then fix it in a click.',
      },
    ],
  },
];

const homeStats: { value: number | null; decimals?: number; suffix?: string; staticLabel?: string; label: string }[] = [
  { value: 0.8, decimals: 1, suffix: 's', label: 'avg AI response time' },
  { value: 63, suffix: '%', label: 'more qualified leads' },
  { value: null, staticLabel: '24/7', label: 'always-on coverage' },
  { value: 12, suffix: 'h', label: 'saved / week / seat' },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-white">
      <ScrollProgress />

      <HomeHero />

      <ParallaxStack sections={numberedSections} />

      <HowItWorksScroll />

      {/* Stats row */}
      <section className="bg-white px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              {stat.value === null ? (
                <div className="text-[36px] font-bold leading-none text-[#0a0a0a] sm:text-[44px]">
                  {stat.staticLabel}
                </div>
              ) : (
                <Counter
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                  className="block text-[36px] font-bold leading-none text-[#0a0a0a] sm:text-[44px]"
                />
              )}
              <div className="mt-2 text-[13px] text-[#8e8e93]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px] rounded-[32px] bg-[#0a0a0a] px-8 py-16 text-center sm:py-20">
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ff5530]">
            Start free &middot; No card
          </span>
          <h2 className="hero-display-typography mt-4 text-white">Stop losing customers online.</h2>
          <div className="mt-10 flex justify-center">
            <Link
              href="https://app.lashvae.com/login?signup=true"
              className="btn-pill bg-[#ff5530] px-8 py-4 text-[15px] text-white hover:bg-[#e6491f]"
            >
              Start your free trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
