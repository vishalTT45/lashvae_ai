'use client';

import { Check, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type CurrencyCode = 'INR' | 'GBP' | 'USD';
type BillingCycle = 'monthly' | 'annually';

type PricingPlan = {
  id: 'trial' | 'basic' | 'growth' | 'enterprise';
  name: string;
  headline: string;
  description: string;
  monthlyPrice: Record<CurrencyCode, number | null>;
  annualPrice: Record<CurrencyCode, number | null>;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Free Trial',
    headline: 'Explore Lashvae AI before you subscribe.',
    description:
      'Try the complete customer-conversation experience for 14 days with no credit card required.',
    monthlyPrice: { INR: 0, GBP: 0, USD: 0 },
    annualPrice: { INR: 0, GBP: 0, USD: 0 },
    features: [
      '14-day free trial',
      '150 conversations',
      'Connect all available channels',
      'Unlimited knowledge documents',
      'AI website chat widget',
      'Auto appointment booking',
      'Conversation analytics',
      'AI chat summaries',
      'Mood detection',
      'Smart conversation categorization',
      'Lead detection',
    ],
    ctaLabel: 'Start Free Trial',
    ctaHref: 'https://app.lashvae.com/login?signup=true',
  },
  {
    id: 'basic',
    name: 'Basic',
    headline: 'A simple plan for small businesses.',
    description:
      'Handle everyday customer conversations, bookings, leads, and website enquiries from one place.',
    monthlyPrice: { INR: 999, GBP: 49, USD: 49 },
    annualPrice: { INR: 9990, GBP: 490, USD: 490 },
    features: [
      '300 conversations / month',
      'Connect all available channels',
      'Unlimited knowledge documents',
      'AI website chat widget',
      'Auto appointment booking',
      'Conversation analytics',
      'AI chat summaries',
      'Mood detection',
      'Smart conversation categorization',
      'Lead detection',
    ],
    ctaLabel: 'Choose Basic',
    ctaHref: 'https://app.lashvae.com/login?signup=true',
  },
  {
    id: 'growth',
    name: 'Growth',
    headline: 'Built for businesses ready to grow.',
    description:
      'Turn customer conversations into content ideas, competitor insights, and clear weekly growth actions.',
    monthlyPrice: { INR: 1999, GBP: 149, USD: 149 },
    annualPrice: { INR: 19990, GBP: 1490, USD: 1490 },
    highlighted: true,
    features: [
      '1,500 conversations / month',
      'Connect all available channels',
      'Unlimited knowledge documents',
      'Everything in Basic',
      'Content ideas from customer conversations',
      'Competitor analysis',
      'Industry watch',
      'Growth reports and AI consultant',
    ],
    ctaLabel: 'Choose Growth',
    ctaHref: 'https://app.lashvae.com/login?signup=true',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    headline: 'Custom scale for larger organisations.',
    description:
      'For larger teams, agencies, franchises, and multi-brand businesses that need tailored support and integrations.',
    monthlyPrice: { INR: null, GBP: null, USD: null },
    annualPrice: { INR: null, GBP: null, USD: null },
    features: [
      'Custom conversation volume',
      'Connect all available channels',
      'Unlimited knowledge documents',
      'Everything in Growth',
      'Priority support',
      'Custom AI workflows',
      'Custom integrations',
      'Dedicated account manager',
    ],
    ctaLabel: 'Contact Enterprise Sales',
    ctaHref: '/company#contact',
  },
];

const faqs = [
  {
    id: 1,
    question: 'What is Lashvae and how does it work?',
    answer:
      'Lashvae is an AI-powered omnichannel inbox that brings customer conversations from your connected channels into one dashboard. It can answer questions, identify leads, support bookings, and organise conversations automatically.',
  },
  {
    id: 2,
    question: 'Which platforms can I connect?',
    answer:
      'You can connect all channels currently available in Lashvae. Channel access is not limited by plan.',
  },
  {
    id: 3,
    question: 'Do you limit knowledge documents?',
    answer:
      'No. All plans include unlimited knowledge documents, so you can add the business information your AI assistant needs.',
  },
  {
    id: 4,
    question: 'How does the free trial work?',
    answer:
      'Every new account receives a 14-day free trial with 150 conversations. No credit card is required to start.',
  },
  {
    id: 5,
    question: 'What counts as a conversation?',
    answer:
      'A conversation is a customer interaction thread handled through Lashvae. Your monthly allowance is based on conversations rather than individual AI messages.',
  },
  {
    id: 6,
    question: 'What happens when I reach my conversation limit?',
    answer:
      'You can upgrade to a higher plan or contact our team for a custom Enterprise conversation allowance.',
  },
  {
    id: 7,
    question: 'Can I change plans later?',
    answer:
      'Yes. You can move between Basic and Growth from your subscription dashboard. Enterprise plans are arranged with our sales team.',
  },
  {
    id: 8,
    question: 'How does location-based pricing work?',
    answer:
      'Customers in India see INR pricing, customers in the United Kingdom see GBP pricing, and customers in other supported locations see USD pricing.',
  },
  {
    id: 9,
    question: 'What is included in the Growth plan?',
    answer:
      'Growth includes everything in Basic, plus content ideas from customer conversations, competitor analysis, industry watch, and growth reports with an AI consultant.',
  },
  {
    id: 10,
    question: 'Who should choose Enterprise?',
    answer:
      'Enterprise is designed for larger teams, agencies, franchises, and businesses that need custom conversation volumes, integrations, workflows, priority support, and a dedicated account manager.',
  },
];

function normalizeCountryCode(value: unknown): string {
  return typeof value === 'string' ? value.trim().toUpperCase() : '';
}

function detectCurrency(): CurrencyCode {
  if (typeof window === 'undefined') {
    return 'USD';
  }

  const locale = navigator.language?.toLowerCase() ?? '';
  const timezone =
    Intl.DateTimeFormat().resolvedOptions().timeZone?.toLowerCase() ?? '';

  const countryFromLocale = normalizeCountryCode(locale.split('-')[1]);

  if (
    countryFromLocale === 'IN' ||
    locale.endsWith('-in') ||
    timezone.includes('kolkata') ||
    timezone.includes('calcutta')
  ) {
    return 'INR';
  }

  if (
    countryFromLocale === 'GB' ||
    countryFromLocale === 'UK' ||
    locale.endsWith('-gb') ||
    timezone.includes('london') ||
    timezone.includes('belfast')
  ) {
    return 'GBP';
  }

  return 'USD';
}

function formatPrice(amount: number, currency: CurrencyCode): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>('annually');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  useEffect(() => {
    setCurrency(detectCurrency());
  }, []);

  const currencyLabel = useMemo(() => {
    if (currency === 'INR') return 'India pricing';
    if (currency === 'GBP') return 'United Kingdom pricing';
    return 'International pricing';
  }, [currency]);

  const toggleFAQ = (id: number) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className='flex w-full flex-col bg-white'>
      <section className='relative overflow-hidden border-b border-[#7fc3cb] bg-[#96DAE2] px-6 py-20 text-center sm:px-8'>
        <div
          className='pointer-events-none absolute inset-0 opacity-55'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.72) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.72) 1px, transparent 1px)
            `,
            backgroundSize: '280px 280px',
          }}
        />

        <div className='relative z-10 mx-auto max-w-[1280px]'>
          <span className='text-[12px] font-bold uppercase tracking-wider text-[#0a0a0a]'>
            Simple Pricing
          </span>

          <h1 className='mt-4 text-[42px] font-bold leading-none tracking-tight text-[#0a0a0a] sm:text-[56px]'>
            Four plans. One smarter inbox.
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[#0a0a0a] sm:text-[18px]'>
            Start free for 14 days, then choose the conversation volume that
            matches your business. Every plan includes all available channels
            and unlimited knowledge documents.
          </p>
        </div>
      </section>

      <section className='flex flex-col items-center bg-white px-6 py-12 sm:px-8'>
        <div className='mx-auto flex w-full max-w-[1280px] flex-col items-center'>
          <div className='relative flex items-center gap-3 rounded-full bg-[#f2f3f5] p-1'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`cursor-pointer rounded-full px-5 py-2 text-[13px] font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#0a0a0a] text-white'
                  : 'bg-transparent text-[#5f5f5f] hover:text-[#0a0a0a]'
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBillingCycle('annually')}
              className={`cursor-pointer rounded-full px-5 py-2 text-[13px] font-bold transition-all ${
                billingCycle === 'annually'
                  ? 'bg-[#0a0a0a] text-white'
                  : 'bg-transparent text-[#5f5f5f] hover:text-[#0a0a0a]'
              }`}
            >
              Annually
            </button>

            <span className='absolute -right-16 -top-3.5 rounded-full bg-[#ff5530] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm'>
              Save 17%
            </span>
          </div>

          <p className='mt-3.5 text-[12px] text-[#8e8e93]'>
            {billingCycle === 'annually'
              ? 'Billed annually — save approximately 17%'
              : 'Billed monthly — cancel anytime'}
          </p>

          <p className='mt-1 text-[12px] font-semibold text-[#1456f0]'>
            {currencyLabel} · prices shown in {currency}
          </p>
        </div>
      </section>

      <section className='bg-white px-6 pb-24 sm:px-8'>
        <div className='mx-auto max-w-[1280px]'>
          <div className='mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {PRICING_PLANS.map((plan) => {
              const amount =
                billingCycle === 'monthly'
                  ? plan.monthlyPrice[currency]
                  : plan.annualPrice[currency];

              const isTrial = plan.id === 'trial';
              const isEnterprise = plan.id === 'enterprise';
              const monthlyEquivalent =
                amount !== null && billingCycle === 'annually'
                  ? Math.round(amount / 12)
                  : null;

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-xl border bg-white p-7 text-left transition-shadow duration-200 ${
                    plan.highlighted
                      ? 'border-[#1456f0] shadow-lg'
                      : 'border-[#e5e7eb] shadow-sm hover:shadow-md'
                  }`}
                >
                  {plan.highlighted && (
                    <span className='absolute -top-3.5 left-7 flex items-center gap-1 rounded-full border border-[#d6e1ff] bg-[#eef3ff] px-3.5 py-1 text-[11px] font-bold uppercase text-[#1456f0] shadow-sm'>
                      <Sparkles className='h-3 w-3' />
                      Most Popular
                    </span>
                  )}

                  <div>
                    <span
                      className={`block text-[11px] font-bold uppercase tracking-widest ${
                        plan.highlighted ? 'text-[#1456f0]' : 'text-[#8e8e93]'
                      }`}
                    >
                      {plan.name}
                    </span>

                    <h3 className='mt-1 text-[22px] font-bold leading-tight text-[#0a0a0a]'>
                      {plan.headline}
                    </h3>

                    <p className='mt-2 min-h-[60px] text-[13px] leading-relaxed text-[#5f5f5f]'>
                      {plan.description}
                    </p>

                    <div className='mt-6 flex min-h-[54px] items-baseline'>
                      {isTrial ? (
                        <>
                          <span className='text-[42px] font-bold leading-none tracking-tight text-[#0a0a0a]'>
                            Free
                          </span>
                          <span className='ml-2 text-[13px] font-semibold text-[#8e8e93]'>
                            for 14 days
                          </span>
                        </>
                      ) : isEnterprise ? (
                        <span className='text-[40px] font-bold leading-none tracking-tight text-[#0a0a0a]'>
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className='text-[42px] font-bold leading-none tracking-tight text-[#0a0a0a]'>
                            {formatPrice(amount ?? 0, currency)}
                          </span>
                          <span className='ml-1 text-[13px] font-semibold text-[#8e8e93]'>
                            /{billingCycle === 'annually' ? 'year' : 'month'}
                          </span>
                        </>
                      )}
                    </div>

                    <div className='mt-2 min-h-[22px]'>
                      {monthlyEquivalent !== null &&
                        !isTrial &&
                        !isEnterprise && (
                          <span className='text-[12px] text-[#8e8e93]'>
                            {formatPrice(monthlyEquivalent, currency)}/month
                            billed annually
                          </span>
                        )}
                    </div>

                    <div className='mt-6 space-y-4 border-t border-[#f2f3f5] pt-6'>
                      <span className='block text-[11px] font-bold uppercase tracking-wider text-[#0a0a0a]'>
                        Features included:
                      </span>

                      <ul className='space-y-3 text-[13px] text-[#45515e]'>
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className='flex items-start gap-2'
                          >
                            <Check className='mt-0.5 h-4 w-4 shrink-0 text-emerald-500' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={plan.ctaHref}
                    className={`mt-8 w-full cursor-pointer rounded-full py-3 text-center text-[14px] font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-[#0a0a0a] text-white shadow-md hover:bg-[#222222]'
                        : 'border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f7f8fa]'
                    }`}
                  >
                    {plan.ctaLabel}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className='border-t border-[#eaecf0] bg-white px-6 py-16 sm:px-8 sm:py-24'>
        <div className='mx-auto max-w-[960px]'>
          <div className='mb-12 text-center'>
            <span className='text-[12px] font-bold uppercase tracking-wider text-[#1456f0]'>
              Common Questions
            </span>

            <h2 className='mt-2 text-[28px] font-bold text-[#0a0a0a] sm:text-[36px]'>
              Frequently Asked Questions
            </h2>

            <p className='mx-auto mt-3 max-w-2xl text-[14px] text-[#5f5f5f] sm:text-[15px]'>
              Everything you need to know about the free trial, conversation
              limits, location-based pricing, and plan features.
            </p>
          </div>

          <div className='divide-y divide-[#e5e7eb]'>
            {faqs.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className='flex w-full items-start justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-[#1456f0]'
                >
                  <div className='flex flex-1 items-start gap-4'>
                    <span className='shrink-0 pt-1 text-[12px] font-bold uppercase tracking-wider text-[#1456f0]'>
                      {String(faq.id).padStart(2, '0')}
                    </span>

                    <h3 className='text-[16px] font-bold leading-snug text-[#0a0a0a] sm:text-[17px]'>
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1456f0] transition-transform duration-300 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className='animate-in fade-in pb-6 pl-10 duration-200 sm:pl-12'>
                    <p className='text-[14px] leading-relaxed text-[#5f5f5f]'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='mt-16 border-t border-[#e5e7eb] pt-12 text-center'>
            <h3 className='mb-3 text-[18px] font-bold text-[#0a0a0a]'>
              Still have questions?
            </h3>

            <p className='mb-6 text-[14px] text-[#5f5f5f]'>
              Contact our team to discuss the right conversation allowance for
              your business.
            </p>

            <Link
              href='/company#contact'
              className='inline-block rounded-full bg-[#0a0a0a] px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#222222]'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}