import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
} from 'lucide-react'

const channels = [
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'Turn followers into buyers',
    stat: '2.4k DMs handled daily',
    color: '#e1306c',
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      { label: 'DM Automation', desc: 'Instant replies to every DM, day or night' },
      { label: 'Comment Reply', desc: 'AI responds to comments with brand voice' },
      { label: 'Story Shopping', desc: 'Capture leads from story swipe-ups' },
      { label: 'Lead Scoring', desc: 'Hot buyers flagged & routed instantly' },
    ],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tagline: 'Close deals in chat',
    stat: '98% open rate vs email',
    color: '#25d366',
    bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    features: [
      { label: 'Broadcast Blasts', desc: 'Send personalised promos at scale' },
      { label: 'Order Tracking', desc: 'Real-time updates sent automatically' },
      { label: 'Catalog Sharing', desc: 'Send product cards inside the chat' },
      { label: 'Instant Checkout', desc: 'Payment links delivered in conversation' },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    tagline: 'Own every touchpoint',
    stat: '3.2× more conversions',
    color: '#1877f2',
    bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      { label: 'Page Messenger', desc: 'Zero-lag replies to every inbox message' },
      { label: 'Ad Lead Capture', desc: 'Qualify leads from Facebook Ads instantly' },
      { label: 'Review Management', desc: 'AI crafts thoughtful review responses' },
      { label: 'Funnel Analytics', desc: 'Track which messages close deals' },
    ],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    tagline: 'Automate & broadcast',
    stat: 'Unlimited group members reached',
    color: '#229ed9',
    bg: 'linear-gradient(135deg, #43e97b 0%, #096fca 100%)',
    features: [
      { label: 'Bot Automation', desc: 'Full bot flows without writing code' },
      { label: 'Channel Broadcast', desc: 'Send to unlimited subscribers at once' },
      { label: 'Group Moderation', desc: 'AI keeps groups spam-free 24/7' },
      { label: 'API + Webhooks', desc: 'Deep integration with your tech stack' },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'Monetise your audience',
    stat: '510 comments replied daily',
    color: '#ff0000',
    bg: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
    features: [
      { label: 'Comment Moderation', desc: 'AI replies to every relevant comment' },
      { label: 'Pinned Replies', desc: 'Surface your best answers at the top' },
      { label: 'Video DM Funnels', desc: 'Turn viewers into leads via DM' },
      { label: 'Sentiment Filter', desc: 'Auto-hide toxic, keep the love' },
    ],
  },
  {
    id: 'googlemaps',
    name: 'Google Maps',
    tagline: 'Win the local game',
    stat: '+31% rating lift on avg',
    color: '#4285f4',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      { label: 'Review Response', desc: 'Every review answered — good or bad' },
      { label: 'Q&A Auto-reply', desc: 'Google Q&A answered within seconds' },
      { label: '24/7 Monitoring', desc: 'Never miss a new review again' },
      { label: 'Reputation Score', desc: 'Track rating trends across locations' },
    ],
  },
]

const channelIcons: Record<string, React.ReactNode> = {
  instagram: (
    <Image src="/images/brand-logo/instagram.png" alt="Instagram" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
  whatsapp: (
    <Image src="/images/brand-logo/whatsapp.png" alt="WhatsApp" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
  facebook: (
    <Image src="/images/brand-logo/facebook.png" alt="Facebook" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
  telegram: (
    <Image src="/images/brand-logo/telegram.png" alt="Telegram" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
  youtube: (
    <Image src="/images/brand-logo/youtube.png" alt="YouTube" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
  googlemaps: (
    <Image src="/images/brand-logo/google-map.png" alt="Google Maps" width={28} height={28} className="h-7 w-7 object-contain" />
  ),
}

export default function ChannelsPage() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* 1. Channel Hero */}
      <section className="relative overflow-hidden bg-[#3B42C4] py-20 sm:py-28 px-6 sm:px-8 text-white">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.42) 1px, transparent 1px)
          `,
          backgroundSize: '280px 280px'
        }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        <div className="mx-auto max-w-[1280px] text-center relative z-10">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/90 bg-white/10 px-3.5 py-1 rounded-full mb-6 inline-block">
            6 Native Integrations
          </span>
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            Be where your customers are. In real-time.
          </h1>
          <p className="mt-6 text-[16px] sm:text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed">
            Deploy Lashvae AI across all six major messaging platforms. Every conversation unified, every reply instant, every lead captured automatically.
          </p>
        </div>
      </section>

      {/* 2. Channel Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-b border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#0a0a0a]">Network Channels</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">The Channel Matrix</h2>
            <p className="text-[#222222] mt-3">Native integrations for the platforms where your customers already spend their time.</p>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-5">
            {channels.map((ch) => (
              <article
                key={ch.id}
                className="min-h-[252px] bg-white border border-transparent p-7 sm:p-8 flex flex-col justify-between text-left shadow-sm rounded-2xl"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 flex items-center justify-center shrink-0">
                      {channelIcons[ch.id]}
                    </div>
                    <h3 className="text-[28px] lg:text-[34px] font-bold tracking-tight text-[#0a0a0a] leading-none">
                      {ch.name}
                    </h3>
                  </div>
                  <p className="mt-5 text-[17px] lg:text-[19px] leading-snug text-[#0a0a0a] max-w-[310px]">
                    {ch.tagline}
                  </p>
                </div>

                <Link
                  href={`/channels/${ch.id}`}
                  className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#0a0a0a] pb-0.5 text-[13px] font-medium tracking-[0.08em] uppercase text-[#0a0a0a] hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:hidden">
            {channels.map((ch) => (
              <article
                key={ch.id}
                className="min-h-[220px] bg-white p-7 flex flex-col justify-between text-left shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 flex items-center justify-center shrink-0">
                      {channelIcons[ch.id]}
                    </div>
                    <h3 className="text-[28px] font-bold tracking-tight text-[#0a0a0a] leading-none">
                      {ch.name}
                    </h3>
                  </div>
                  <p className="mt-5 text-[17px] leading-snug text-[#0a0a0a]">
                    {ch.tagline}
                  </p>
                </div>

                <Link
                  href={`/channels/${ch.id}`}
                  className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#0a0a0a] pb-0.5 text-[13px] font-medium tracking-[0.08em] uppercase text-[#0a0a0a]"
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
            <Link href="/pricing" className="rounded-full bg-[#0a0a0a] text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-[#222222] transition-colors inline-flex items-center gap-1.5">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
