import Link from 'next/link'
import Image from 'next/image'
import {
  User,
  ExternalLink,
  ArrowRight,
  Bot,
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
    name: 'WhatsApp Business',
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ea5ec1] to-[#a855f7] py-20 sm:py-28 px-6 sm:px-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent)] pointer-events-none"></div>
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
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#ea5ec1]">Network Channels</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">The Channel Matrix</h2>
            <p className="text-[#45515e] mt-3">Native integrations for the six platforms where your customers already spend their time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((ch) => (
              <div key={ch.id} className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-xl p-8 hover:-translate-y-0.5 transition-transform duration-200 flex flex-col gap-6">
                <div>
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-white border border-[#e5e7eb] shadow-sm mb-5">
                    {channelIcons[ch.id]}
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0a0a0a]">{ch.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[13px] font-semibold" style={{ color: ch.color }}>{ch.tagline}</span>
                    <span className="h-1 w-1 rounded-full bg-[#e5e7eb]"></span>
                    <span className="text-[12px] text-[#8e8e93]">{ch.stat}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {ch.features.map((f) => (
                    <li key={f.label} className="flex flex-col">
                      <span className="text-[13px] font-bold text-[#222222]">{f.label}</span>
                      <span className="text-[12px] text-[#8e8e93]">{f.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Unified Inbox Mockup */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#ea5ec1]">Human Agent Handoff</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Unified Handoff Workspace</h2>
            <p className="text-[#45515e] mt-3">When AI encounters complexity, it hands off to a human agent — with full context so the customer never repeats themselves.</p>
          </div>

          <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-lg overflow-hidden flex flex-col max-w-5xl mx-auto">
            {/* Browser bar */}
            <div className="bg-[#f7f8fa] border-b border-[#e5e7eb] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#eaecf0]"></span>
                <span className="h-3 w-3 rounded-full bg-[#eaecf0]"></span>
                <span className="h-3 w-3 rounded-full bg-[#eaecf0]"></span>
              </div>
              <div className="text-xs bg-white border border-[#e5e7eb] rounded-md px-16 py-1 text-[#8e8e93] font-mono select-none">
                dashboard.lashvae.ai/inbox
              </div>
              <div className="w-12"></div>
            </div>

            <div className="grid grid-cols-12 min-h-[500px] text-left">
              {/* Sidebar: Chat list */}
              <div className="col-span-3 border-r border-[#e5e7eb] bg-[#f7f8fa] p-3 space-y-2">
                <div className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider px-2 py-1">Active Chats</div>
                {[
                  { name: 'Sofia M.', channel: 'Instagram', channelColor: '#e1306c', status: 'AI Active', msg: 'Love your collection! How do I order?' },
                  { name: 'Marcus T.', channel: 'WhatsApp', channelColor: '#25d366', status: 'Handoff', msg: 'Order #59392 — refund request' },
                  { name: 'Priya K.', channel: 'Facebook', channelColor: '#1877f2', status: 'Resolved', msg: 'Rating: 5 stars ✨' },
                ].map((chat) => (
                  <div key={chat.name} className="bg-white border border-[#e5e7eb] rounded-lg p-2.5 shadow-sm space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] font-bold text-[#0a0a0a]">{chat.name}</span>
                      <span className="text-white text-[9px] px-1.5 py-0.5 rounded font-mono" style={{ backgroundColor: chat.channelColor }}>{chat.channel}</span>
                    </div>
                    <p className="text-[11px] text-[#45515e] truncate">{chat.msg}</p>
                  </div>
                ))}
              </div>

              {/* Main chat */}
              <div className="col-span-6 flex flex-col justify-between">
                <div className="border-b border-[#e5e7eb] p-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0a0a0a]">Sofia M.</h4>
                    <p className="text-[11px] text-[#8e8e93]">Instagram DM — AI responding</p>
                  </div>
                  <span className="bg-[#e8ffea] text-[#1ba673] text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1ba673]"></span> AI Active
                  </span>
                </div>

                <div className="p-4 space-y-4 flex-grow text-[13px]">
                  <div className="flex gap-2">
                    <div className="h-7 w-7 rounded-full bg-pink-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">SM</div>
                    <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-r-lg rounded-bl-lg p-3 max-w-[80%]">
                      Love your collection! How do I order the Luxe Bundle? 🛍️
                    </div>
                  </div>
                  <div className="bg-[#ff5530]/10 border border-[#ff5530]/20 rounded-lg p-3 text-[12px] text-[#ff5530] flex gap-2">
                    <Bot className="h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-bold block mb-0.5">Lashvae AI — Lead Score: 94/100 🔥</span>
                      High-intent buyer detected. Product catalogue matched. Sending direct checkout link.
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-[#0a0a0a] text-white rounded-l-lg rounded-br-lg p-3 max-w-[80%]">
                      Hi Sofia! 👋 The Luxe Bundle is our bestseller. Here&apos;s your direct checkout link → lashvae.ai/luxe-bundle. I&apos;ve also applied a 10% welcome discount for you! 🎁
                    </div>
                    <div className="h-7 w-7 rounded-full bg-[#ea5ec1] text-white text-[10px] font-bold flex items-center justify-center shrink-0">AI</div>
                  </div>
                </div>

                <div className="border-t border-[#e5e7eb] p-3 flex gap-2">
                  <input type="text" placeholder="Replied in 0.29s · AI handling this conversation…" className="flex-grow border border-[#e5e7eb] rounded-lg px-3 py-2 text-xs focus:outline-none" readOnly />
                  <button className="bg-[#0a0a0a] text-white rounded-lg px-4 py-2 text-xs font-semibold">Send</button>
                </div>
              </div>

              {/* CRM sidebar */}
              <div className="col-span-3 border-l border-[#e5e7eb] bg-[#f7f8fa] p-4 space-y-4">
                <div className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">Customer Details</div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-white border border-[#e5e7eb] rounded-full flex items-center justify-center text-[#8e8e93]">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-[#0a0a0a]">Sofia M.</h5>
                    <span className="text-[10px] text-[#ea5ec1] font-semibold uppercase">Hot Lead 🔥</span>
                  </div>
                </div>
                <div className="border-t border-[#e5e7eb] pt-3 space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#8e8e93]">Lead Score</span>
                    <span className="font-bold text-[#ff5530]">94 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e8e93]">Response time</span>
                    <span className="font-bold text-[#1ba673]">0.29s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e8e93]">Channel</span>
                    <span className="font-bold text-[#222222] flex items-center gap-1">Instagram <ExternalLink className="h-3 w-3" /></span>
                  </div>
                </div>
                <div className="border-t border-[#e5e7eb] pt-3 text-[11px] space-y-1">
                  <span className="text-[#8e8e93] font-bold block mb-1">Active Integrations</span>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="bg-white border border-[#e5e7eb] px-2 py-0.5 rounded text-[#45515e]">Shopify</span>
                    <span className="bg-white border border-[#e5e7eb] px-2 py-0.5 rounded text-[#45515e]">HubSpot</span>
                    <span className="bg-white border border-[#e5e7eb] px-2 py-0.5 rounded text-[#45515e]">Klaviyo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px] text-center max-w-xl">
          <h2 className="heading-sm-typography text-[#0a0a0a]">Ready to connect your channels?</h2>
          <p className="text-[#45515e] text-[14px] mt-3">
            One-click OAuth for all 6 platforms. Go live in under 5 minutes.
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
