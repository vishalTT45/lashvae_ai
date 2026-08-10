import Button from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'

const faqs = [
  {
    q: "What is Lashvae and how does it work?",
    a: "Lashvae is an AI-powered omnichannel inbox that unifies messages from Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps into a single dashboard. When a customer sends a message on any of those platforms, our AI reads the context and replies in under ~3 seconds — qualifying leads, answering product questions, and booking appointments automatically."
  },
  {
    q: "Which platforms does Lashvae connect to?",
    a: "Lashvae natively integrates with Instagram DMs & comments, WhatsApp Business, Facebook Messenger & Page comments, Telegram, YouTube comments, and Google Business Messages (Maps reviews). More channels — including TikTok and X — are on the roadmap."
  },
  {
    q: "How fast does the AI actually reply?",
    a: "Our median AI response time is 0.31 seconds from message receipt to delivery. That's measured end-to-end across all six platforms at peak load. Industry average human response time is 38 minutes — Lashvae is 7,000× faster."
  },
  {
    q: "Is my customer data safe? Is Lashvae GDPR compliant?",
    a: "Yes. Lashvae is GDPR compliant, SOC 2 Type II certified, and ISO 27001 aligned. All messages are encrypted end-to-end in transit and at rest. We never train AI models on your customer data, and you can delete all data at any time from the dashboard. We are also Meta Business Partner verified."
  },
  {
    q: "Can I customise what the AI says, or does it sound robotic?",
    a: "You control the tone, persona, and knowledge base entirely. Upload your product catalogue, FAQs, and brand voice guidelines — the AI mirrors your style. You can also set hard rules (never mention competitors, always offer a discount code after 3 messages, etc.) and the AI follows them exactly. Most customers can't tell they're talking to an AI."
  },
  {
    q: "What happens when the AI doesn't know the answer?",
    a: "Lashvae uses a confidence threshold you set. If a message falls below that threshold, the AI flags it for a human agent and responds with a friendly hold message. Your team gets a push notification and can take over in one click — with full conversation history visible."
  },
  {
    q: "Do I need technical skills to set up Lashvae?",
    a: "No code required. Setup takes under 15 minutes: connect your social accounts via OAuth, paste in your brand context, set your working hours, and you're live. Our onboarding specialist walks every new customer through it on a free 30-minute call."
  },
  {
    q: "How does pricing work? Is there a free trial?",
    a: "Lashvae is billed monthly or annually (save 30%). Every plan starts with a 14-day free trial — no credit card required. Plans scale by monthly message volume. The Starter plan covers up to 5,000 messages/month across all channels; Growth covers 25,000; Enterprise is unlimited with a dedicated SLA."
  },
  {
    q: "Can Lashvae handle multiple locations or brands?",
    a: "Yes. Enterprise and Growth plans support multi-workspace setups — separate inboxes, AI personas, and reporting for each brand or location, all managed from one account. This is popular with franchises, agencies, and multi-brand e-commerce groups."
  },
  {
    q: "How does Lashvae increase revenue, not just save time?",
    a: "Speed is the primary revenue lever: 78% of customers buy from the business that responds first. Beyond speed, Lashvae identifies buying signals in messages, proactively sends product links and discount codes, recovers abandoned carts via WhatsApp, and routes warm leads directly to your sales calendar — converting conversations into bookings automatically."
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* FAQ Hero Section */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-white">
        <div className="mx-auto max-w-[960px] text-center">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Common Questions</span>

          <h1 className="heading-lg-typography mt-8 text-[#0a0a0a]">
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
          <FAQAccordion items={faqs} />

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-[#e5e7eb] text-center">
            <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-3">Still have questions?</h3>
            <p className="text-[14px] text-[#5f5f5f] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Get in touch with our team.
            </p>
            <Button href="/company#contact" variant="primary" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
