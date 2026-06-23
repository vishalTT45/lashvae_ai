'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually')

  const starterPrice = billingCycle === 'annually' ? 39 : 49
  const growthPrice = billingCycle === 'annually' ? 119 : 149
  const enterprisePrice = 399

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* 1. Pricing Hero */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-white text-center">
        <div className="mx-auto max-w-[1280px]">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#ff5530]">Simple Pricing</span>
          <h1 className="mt-4 text-[42px] sm:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-none">
            One price. Unlimited potential.
          </h1>
          <p className="mt-6 text-[16px] sm:text-[18px] text-[#45515e] max-w-2xl mx-auto leading-relaxed">
            No per-seat fees. No surprise charges. Every plan starts with a 14-day free trial — no credit card required.
          </p>
        </div>
      </section>

      {/* 2. Billing Cycle Selector */}
      <section className="py-12 px-6 sm:px-8 bg-white flex flex-col items-center">
        <div className="mx-auto max-w-[1280px] w-full flex flex-col items-center">
          
          <div className="flex items-center gap-3 bg-[#f2f3f5] p-1 rounded-full relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#0a0a0a] text-white'
                  : 'bg-transparent text-[#5f5f5f] hover:text-[#0a0a0a]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                billingCycle === 'annually'
                  ? 'bg-[#0a0a0a] text-white'
                  : 'bg-transparent text-[#5f5f5f] hover:text-[#0a0a0a]'
              }`}
            >
              Annually
            </button>
            
            {/* Coral Badge Save 20% */}
            <span className="absolute -top-3.5 -right-16 bg-[#ff5530] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wide shadow-sm">
              Save 20%
            </span>
          </div>

          <p className="text-[12px] text-[#8e8e93] mt-3.5">
            {billingCycle === 'annually' ? 'Billed annually — save 20% vs monthly' : 'Billed monthly — cancel anytime'}
          </p>
        </div>
      </section>

      {/* 3. Tier Cards Grid */}
      <section className="pb-24 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-[1280px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Tier 1: Starter */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8e8e93]">Starter</span>
                <h3 className="text-[24px] font-bold text-[#0a0a0a] mt-1">Perfect for small teams testing the waters.</h3>
                <p className="text-[13px] text-[#5f5f5f] mt-2">Everything you need to get your AI inbox live and start converting messages.</p>
                
                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none">${starterPrice}</span>
                  <span className="text-[13px] text-[#8e8e93] font-semibold ml-1">/ month</span>
                </div>

                <div className="border-t border-[#f2f3f5] pt-6 mt-6 space-y-4">
                  <span className="text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block">Features included:</span>
                  <ul className="space-y-3 text-[13px] text-[#45515e]">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Up to 3 platforms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>2,000 messages / mo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Basic AI replies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>1 user seat</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/company#contact" className="mt-8 w-full rounded-full border border-[#0a0a0a] text-[#0a0a0a] py-3 text-[14px] font-semibold hover:bg-[#f7f8fa] transition-colors cursor-pointer text-center">
                Start Free Trial
              </Link>
            </div>

            {/* Tier 2: Pro (Featured + Ambient glow) */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-lg relative animate-glow">
              {/* Badge Popular */}
              <span className="absolute -top-3.5 left-8 bg-[#e8ffea] text-[#1ba673] text-[11px] font-bold uppercase px-3.5 py-1 rounded-full border border-[#e5e7eb] shadow-sm flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Most Popular
              </span>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#1456f0] mt-1.5 block">Growth</span>
                <h3 className="text-[24px] font-bold text-[#0a0a0a] mt-1">The full system for revenue-driven teams.</h3>
                <p className="text-[13px] text-[#5f5f5f] mt-2">All 6 platforms, advanced AI, lead scoring, and revenue analytics in one place.</p>
                
                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none">${growthPrice}</span>
                  <span className="text-[13px] text-[#8e8e93] font-semibold ml-1">/ month</span>
                </div>

                <div className="border-t border-[#f2f3f5] pt-6 mt-6 space-y-4">
                  <span className="text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block">Features included:</span>
                  <ul className="space-y-3 text-[13px] text-[#45515e]">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-bold text-[#0a0a0a]">All 6 platforms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>10,000 messages / mo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Mood Detection + Lead Scoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Revenue Analytics + Auto Follow-Ups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>5 user seats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/company#contact"
                className="mt-8 w-full rounded-full bg-[#0a0a0a] text-white py-3 text-[14px] font-semibold hover:bg-[#222222] transition-colors text-center cursor-pointer shadow-md"
              >
                Start 14-day Free Trial
              </Link>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8e8e93]">Enterprise</span>
                <h3 className="text-[24px] font-bold text-[#0a0a0a] mt-1">Custom scale. White-label. Dedicated support.</h3>
                <p className="text-[13px] text-[#5f5f5f] mt-2">For agencies, franchises, and multi-brand e-commerce groups who need custom everything.</p>
                
                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none">${enterprisePrice}</span>
                  <span className="text-[13px] text-[#8e8e93] font-semibold ml-1">/ month</span>
                </div>

                <div className="border-t border-[#f2f3f5] pt-6 mt-6 space-y-4">
                  <span className="text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block">Features included:</span>
                  <ul className="space-y-3 text-[13px] text-[#45515e]">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-bold text-[#0a0a0a]">Unlimited everything</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Custom AI Persona + White-label</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Custom integrations + unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/company#contact" 
                className="mt-8 w-full rounded-full border border-[#0a0a0a] text-[#0a0a0a] py-3 text-[14px] font-semibold hover:bg-[#f7f8fa] transition-colors text-center cursor-pointer"
              >
                Contact Enterprise Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-[#f7f8fa] py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Common Questions</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Got questions?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="text-[15px] font-bold text-[#0a0a0a]">Is there a free trial?</h4>
              <p className="text-[13px] text-[#5f5f5f] mt-2 leading-relaxed">
                Yes — every plan starts with a 14-day free trial. No credit card required. You can cancel anytime from the dashboard with one click.
              </p>
            </div>
            
            <div>
              <h4 className="text-[15px] font-bold text-[#0a0a0a]">How does the message limit work?</h4>
              <p className="text-[13px] text-[#5f5f5f] mt-2 leading-relaxed">
                Message limits apply per billing cycle across all connected platforms combined. If you exceed your limit, the AI pauses and notifies you — no hidden overage charges.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-[#0a0a0a]">Can Lashvae handle multiple brands or locations?</h4>
              <p className="text-[13px] text-[#5f5f5f] mt-2 leading-relaxed">
                Yes. Enterprise and Growth plans support multi-workspace setups — separate inboxes, AI personas, and reporting per brand or location, all from one account.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-[#0a0a0a]">Do I need technical skills to set up Lashvae?</h4>
              <p className="text-[13px] text-[#5f5f5f] mt-2 leading-relaxed">
                No code required. Setup takes under 15 minutes: connect your social accounts via OAuth, paste in your brand context, set your working hours, and go live. Every new customer gets a free 30-minute onboarding call.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
