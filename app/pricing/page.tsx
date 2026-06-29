'use client';

import { Check, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is Lashvae and how does it work?',
    answer:
      'Lashvae is an AI-powered omnichannel inbox that unifies messages from Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps into a single dashboard. When a customer sends a message on any of those platforms, our AI reads the context and replies in under ~3 seconds — qualifying leads, answering product questions, and booking appointments automatically.',
  },
  {
    id: 2,
    question: 'Which platforms does Lashvae connect to?',
    answer:
      'Lashvae natively integrates with Instagram DMs & comments, WhatsApp Business, Facebook Messenger & Page comments, Telegram, YouTube comments, and Google Business Messages (Maps reviews). More channels — including TikTok and X — are on the roadmap.',
  },
  {
    id: 3,
    question: 'How fast does the AI actually reply?',
    answer:
      "Our median AI response time is 0.31 seconds from message receipt to delivery. That's measured end-to-end across all six platforms at peak load. Industry average human response time is 38 minutes — Lashvae is 7,000× faster.",
  },
  {
    id: 4,
    question: 'Is my customer data safe? Is Lashvae GDPR compliant?',
    answer:
      'Yes. Lashvae is GDPR compliant, SOC 2 Type II certified, and ISO 27001 aligned. All messages are encrypted end-to-end in transit and at rest. We never train AI models on your customer data, and you can delete all data at any time from the dashboard. We are also Meta Business Partner verified.',
  },
  {
    id: 5,
    question: 'Can I customise what the AI says, or does it sound robotic?',
    answer:
      "You control the tone, persona, and knowledge base entirely. Upload your product catalogue, FAQs, and brand voice guidelines — the AI mirrors your style. You can also set hard rules (never mention competitors, always offer a discount code after 3 messages, etc.) and the AI follows them exactly. Most customers can't tell they're talking to an AI.",
  },
  {
    id: 6,
    question: "What happens when the AI doesn't know the answer?",
    answer:
      'Lashvae uses a confidence threshold you set. If a message falls below that threshold, the AI flags it for a human agent and responds with a friendly hold message. Your team gets a push notification and can take over in one click — with full conversation history visible.',
  },
  {
    id: 7,
    question: 'Do I need technical skills to set up Lashvae?',
    answer:
      "No code required. Setup takes under 15 minutes: connect your social accounts via OAuth, paste in your brand context, set your working hours, and you're live. Our onboarding specialist walks every new customer through it on a free 30-minute call.",
  },
  {
    id: 8,
    question: 'How does pricing work? Is there a free trial?',
    answer:
      'Lashvae is billed monthly or annually (save 30%). Every plan starts with a 14-day free trial — no credit card required. Plans scale by monthly message volume. The Starter plan covers up to 5,000 messages/month across all channels; Growth covers 25,000; Enterprise is unlimited with a dedicated SLA.',
  },
  {
    id: 9,
    question: 'Can Lashvae handle multiple locations or brands?',
    answer:
      'Yes. Enterprise and Growth plans support multi-workspace setups — separate inboxes, AI personas, and reporting for each brand or location, all managed from one account. This is popular with franchises, agencies, and multi-brand e-commerce groups.',
  },
  {
    id: 10,
    question: 'How does Lashvae increase revenue, not just save time?',
    answer:
      'Speed is the primary revenue lever: 78% of customers buy from the business that responds first. Beyond speed, Lashvae identifies buying signals in messages, proactively sends product links and discount codes, recovers abandoned carts via WhatsApp, and routes warm leads directly to your sales calendar — converting conversations into bookings automatically.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>(
    'annually',
  );
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const starterPrice = billingCycle === 'annually' ? 39 : 49;
  const growthPrice = billingCycle === 'annually' ? 119 : 149;
  const enterprisePrice = 399;

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className='flex flex-col w-full bg-white'>
      {/* 1. Pricing Hero */}
      <section className='relative overflow-hidden py-20 px-6 sm:px-8 border-b border-[#7fc3cb] bg-[#96DAE2] text-center'>
        {/* Grid pattern overlay */}
        <div
          className='absolute inset-0 opacity-55 pointer-events-none'
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.72) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.72) 1px, transparent 1px)
          `,
            backgroundSize: '280px 280px',
          }}
        ></div>
        <div className='relative z-10 mx-auto max-w-[1280px]'>
          <span className='text-[12px] uppercase font-bold tracking-wider text-[#0a0a0a]'>
            Simple Pricing
          </span>
          <h1 className='mt-4 text-[42px] sm:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-none'>
            One price. Unlimited potential.
          </h1>
          <p className='mt-6 text-[16px] sm:text-[18px] text-[#0a0a0a] max-w-2xl mx-auto leading-relaxed'>
            No per-seat fees. No surprise charges. Every plan starts with a
            14-day free trial — no credit card required.
          </p>
        </div>
      </section>

      {/* 2. Billing Cycle Selector */}
      <section className='py-12 px-6 sm:px-8 bg-white flex flex-col items-center'>
        <div className='mx-auto max-w-[1280px] w-full flex flex-col items-center'>
          <div className='flex items-center gap-3 bg-[#f2f3f5] p-1 rounded-full relative'>
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
            <span className='absolute -top-3.5 -right-16 bg-[#ff5530] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wide shadow-sm'>
              Save 20%
            </span>
          </div>

          <p className='text-[12px] text-[#8e8e93] mt-3.5'>
            {billingCycle === 'annually'
              ? 'Billed annually — save 20% vs monthly'
              : 'Billed monthly — cancel anytime'}
          </p>
        </div>
      </section>

      {/* 3. Tier Cards Grid */}
      <section className='pb-24 px-6 sm:px-8 bg-white'>
        <div className='mx-auto max-w-[1280px]'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto'>
            {/* Tier 1: Starter */}
            <div className='bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-200'>
              <div>
                <span className='text-[11px] font-bold uppercase tracking-widest text-[#8e8e93]'>
                  Starter
                </span>
                <h3 className='text-[24px] font-bold text-[#0a0a0a] mt-1'>
                  Perfect for small teams testing the waters.
                </h3>
                <p className='text-[13px] text-[#5f5f5f] mt-2'>
                  Everything you need to get your AI inbox live and start
                  converting messages.
                </p>

                {/* Price */}
                <div className='mt-6 flex items-baseline'>
                  <span className='text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none'>
                    ${starterPrice}
                  </span>
                  <span className='text-[13px] text-[#8e8e93] font-semibold ml-1'>
                    / month
                  </span>
                </div>

                <div className='border-t border-[#f2f3f5] pt-6 mt-6 space-y-4'>
                  <span className='text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block'>
                    Features included:
                  </span>
                  <ul className='space-y-3 text-[13px] text-[#45515e]'>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Up to 3 platforms</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>2,000 messages / mo</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Basic AI replies</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Email support</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>1 user seat</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href='https://app.lashvae.com/login?signup=true'
                className='mt-8 w-full rounded-full border border-[#0a0a0a] text-[#0a0a0a] py-3 text-[14px] font-semibold hover:bg-[#f7f8fa] transition-colors cursor-pointer text-center'
              >
                Start Free Trial
              </Link>
            </div>

            {/* Tier 2: Pro (Featured + Ambient glow) */}
            <div className='bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-lg relative animate-glow'>
              {/* Badge Popular */}
              <span className='absolute -top-3.5 left-8 bg-[#e8ffea] text-[#1ba673] text-[11px] font-bold uppercase px-3.5 py-1 rounded-full border border-[#e5e7eb] shadow-sm flex items-center gap-1'>
                <Sparkles className='h-3 w-3' /> Most Popular
              </span>

              <div>
                <span className='text-[11px] font-bold uppercase tracking-widest text-[#1456f0] mt-1.5 block'>
                  Growth
                </span>
                <h3 className='text-[24px] font-bold text-[#0a0a0a] mt-1'>
                  The full system for revenue-driven teams.
                </h3>
                <p className='text-[13px] text-[#5f5f5f] mt-2'>
                  All 6 platforms, advanced AI, lead scoring, and revenue
                  analytics in one place.
                </p>

                {/* Price */}
                <div className='mt-6 flex items-baseline'>
                  <span className='text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none'>
                    ${growthPrice}
                  </span>
                  <span className='text-[13px] text-[#8e8e93] font-semibold ml-1'>
                    / month
                  </span>
                </div>

                <div className='border-t border-[#f2f3f5] pt-6 mt-6 space-y-4'>
                  <span className='text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block'>
                    Features included:
                  </span>
                  <ul className='space-y-3 text-[13px] text-[#45515e]'>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span className='font-bold text-[#0a0a0a]'>
                        All 6 platforms
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>10,000 messages / mo</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Mood Detection + Lead Scoring</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Revenue Analytics + Auto Follow-Ups</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>5 user seats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href='https://app.lashvae.com/login?signup=true'
                className='mt-8 w-full rounded-full bg-[#0a0a0a] text-white py-3 text-[14px] font-semibold hover:bg-[#222222] transition-colors text-center cursor-pointer shadow-md'
              >
                Start 14-day Free Trial
              </Link>
            </div>

            {/* Tier 3: Enterprise */}
            <div className='bg-white border border-[#e5e7eb] rounded-xl p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow duration-200'>
              <div>
                <span className='text-[11px] font-bold uppercase tracking-widest text-[#8e8e93]'>
                  Enterprise
                </span>
                <h3 className='text-[24px] font-bold text-[#0a0a0a] mt-1'>
                  Custom scale. White-label. Dedicated support.
                </h3>
                <p className='text-[13px] text-[#5f5f5f] mt-2'>
                  For agencies, franchises, and multi-brand e-commerce groups
                  who need custom everything.
                </p>

                {/* Price */}
                <div className='mt-6 flex items-baseline'>
                  <span className='text-[44px] font-bold tracking-tight text-[#0a0a0a] leading-none'>
                    ${enterprisePrice}
                  </span>
                  <span className='text-[13px] text-[#8e8e93] font-semibold ml-1'>
                    / month
                  </span>
                </div>

                <div className='border-t border-[#f2f3f5] pt-6 mt-6 space-y-4'>
                  <span className='text-[11px] font-bold uppercase text-[#0a0a0a] tracking-wider block'>
                    Features included:
                  </span>
                  <ul className='space-y-3 text-[13px] text-[#45515e]'>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span className='font-bold text-[#0a0a0a]'>
                        Unlimited everything
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Custom AI Persona + White-label</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-emerald-500 shrink-0' />
                      <span>Custom integrations + unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href='/company#contact'
                className='mt-8 w-full rounded-full border border-[#0a0a0a] text-[#0a0a0a] py-3 text-[14px] font-semibold hover:bg-[#f7f8fa] transition-colors text-center cursor-pointer'
              >
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className='bg-white py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]'>
        <div className='mx-auto max-w-[960px]'>
          <div className='text-center mb-12'>
            <span className='text-[12px] uppercase font-bold tracking-wider text-[#1456f0]'>
              Common Questions
            </span>
            <h2 className='text-[28px] sm:text-[36px] font-bold text-[#0a0a0a] mt-2'>
              Frequently Asked Questions
            </h2>
            <p className='text-[14px] sm:text-[15px] text-[#5f5f5f] mt-3 max-w-2xl mx-auto'>
              Everything you need to know about Lashvae, our platform, pricing,
              and how we help your business respond faster.
            </p>
          </div>

          <div className='space-y-0 divide-y divide-[#e5e7eb]'>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className='border-t border-[#e5e7eb] first:border-t-0'
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className='w-full py-6 px-0 flex items-start justify-between gap-4 hover:text-[#1456f0] transition-colors duration-200 text-left'
                >
                  <div className='flex items-start gap-4 flex-1'>
                    <span className='text-[12px] font-bold tracking-wider text-[#1456f0] uppercase flex-shrink-0 pt-1'>
                      {String(faq.id).padStart(2, '0')}
                    </span>
                    <h3 className='text-[16px] sm:text-[17px] font-bold text-[#0a0a0a] leading-snug'>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#1456f0] flex-shrink-0 transition-transform duration-300 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className='pb-6 px-0 pl-10 sm:pl-12 animate-in fade-in duration-200'>
                    <p className='text-[14px] text-[#5f5f5f] leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className='mt-16 pt-12 border-t border-[#e5e7eb] text-center'>
            <h3 className='text-[18px] font-bold text-[#0a0a0a] mb-3'>
              Still have questions?
            </h3>
            <p className='text-[14px] text-[#5f5f5f] mb-6'>
              Can't find the answer you're looking for? Get in touch with our
              team.
            </p>
            <Link
              href='/company#contact'
              className='inline-block rounded-full bg-[#0a0a0a] text-white px-8 py-3.5 font-semibold text-[14px] hover:bg-[#222222] transition-colors'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
