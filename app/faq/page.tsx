'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "What is Lashvae and how does it work?",
    answer: "Lashvae is an AI-powered omnichannel inbox that unifies messages from Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps into a single dashboard. When a customer sends a message on any of those platforms, our AI reads the context and replies in under ~3 seconds — qualifying leads, answering product questions, and booking appointments automatically."
  },
  {
    id: 2,
    question: "Which platforms does Lashvae connect to?",
    answer: "Lashvae natively integrates with Instagram DMs & comments, WhatsApp Business, Facebook Messenger & Page comments, Telegram, YouTube comments, and Google Business Messages (Maps reviews). More channels — including TikTok and X — are on the roadmap."
  },
  {
    id: 3,
    question: "How fast does the AI actually reply?",
    answer: "Our median AI response time is 0.31 seconds from message receipt to delivery. That's measured end-to-end across all six platforms at peak load. Industry average human response time is 38 minutes — Lashvae is 7,000× faster."
  },
  {
    id: 4,
    question: "Is my customer data safe? Is Lashvae GDPR compliant?",
    answer: "Yes. Lashvae is GDPR compliant, SOC 2 Type II certified, and ISO 27001 aligned. All messages are encrypted end-to-end in transit and at rest. We never train AI models on your customer data, and you can delete all data at any time from the dashboard. We are also Meta Business Partner verified."
  },
  {
    id: 5,
    question: "Can I customise what the AI says, or does it sound robotic?",
    answer: "You control the tone, persona, and knowledge base entirely. Upload your product catalogue, FAQs, and brand voice guidelines — the AI mirrors your style. You can also set hard rules (never mention competitors, always offer a discount code after 3 messages, etc.) and the AI follows them exactly. Most customers can't tell they're talking to an AI."
  },
  {
    id: 6,
    question: "What happens when the AI doesn't know the answer?",
    answer: "Lashvae uses a confidence threshold you set. If a message falls below that threshold, the AI flags it for a human agent and responds with a friendly hold message. Your team gets a push notification and can take over in one click — with full conversation history visible."
  },
  {
    id: 7,
    question: "Do I need technical skills to set up Lashvae?",
    answer: "No code required. Setup takes under 15 minutes: connect your social accounts via OAuth, paste in your brand context, set your working hours, and you're live. Our onboarding specialist walks every new customer through it on a free 30-minute call."
  },
  {
    id: 8,
    question: "How does pricing work? Is there a free trial?",
    answer: "Lashvae is billed monthly or annually (save 30%). Every plan starts with a 14-day free trial — no credit card required. Plans scale by monthly message volume. The Starter plan covers up to 5,000 messages/month across all channels; Growth covers 25,000; Enterprise is unlimited with a dedicated SLA."
  },
  {
    id: 9,
    question: "Can Lashvae handle multiple locations or brands?",
    answer: "Yes. Enterprise and Growth plans support multi-workspace setups — separate inboxes, AI personas, and reporting for each brand or location, all managed from one account. This is popular with franchises, agencies, and multi-brand e-commerce groups."
  },
  {
    id: 10,
    question: "How does Lashvae increase revenue, not just save time?",
    answer: "Speed is the primary revenue lever: 78% of customers buy from the business that responds first. Beyond speed, Lashvae identifies buying signals in messages, proactively sends product links and discount codes, recovers abandoned carts via WhatsApp, and routes warm leads directly to your sales calendar — converting conversations into bookings automatically."
  }
]

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* FAQ Hero Section */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-white">
        <div className="mx-auto max-w-[960px] text-center">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Common Questions</span>
          
          <h1 className="mt-8 text-[36px] sm:text-[48px] font-bold text-[#0a0a0a] leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="mt-6 text-[16px] text-[#5f5f5f] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Lashvae, our platform, pricing, and how we help your business respond faster.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-[960px]">
          <div className="space-y-0 divide-y divide-[#e5e7eb]">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-t border-[#e5e7eb] first:border-t-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-6 px-0 flex items-start justify-between gap-4 hover:text-[#1456f0] transition-colors duration-200 text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-[12px] font-bold tracking-wider text-[#1456f0] uppercase flex-shrink-0 pt-1">
                      {String(faq.id).padStart(2, '0')}
                    </span>
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#0a0a0a] leading-snug">
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
                  <div className="pb-6 px-0 pl-10 sm:pl-12 animate-in fade-in duration-200">
                    <p className="text-[14px] sm:text-[15px] text-[#5f5f5f] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-[#e5e7eb] text-center">
            <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-3">Still have questions?</h3>
            <p className="text-[14px] text-[#5f5f5f] mb-6">
              Can't find the answer you're looking for? Get in touch with our team.
            </p>
            <a
              href="/company#contact"
              className="inline-block rounded-full bg-[#0a0a0a] text-white px-8 py-3.5 font-semibold text-[14px] hover:bg-[#222222] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
