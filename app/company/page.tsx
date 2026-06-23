'use client'

import { useState } from 'react'
import { 
  ArrowUpRight, 
  CheckCircle,
  Mail,
  Layers,
  Send
} from 'lucide-react'

export default function CompanyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setFormSubmitted(true)
    }
  }

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* 1. About Us Section (Editorial Layout) */}
      <section id="about" className="py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-white scroll-mt-16">
        <div className="mx-auto max-w-[960px] text-center">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#ff5530]">Our Purpose</span>
          
          <blockquote className="mt-8 text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-[#0a0a0a] leading-snug tracking-tight text-center max-w-4xl mx-auto italic">
            &ldquo;We build autonomous systems to solve repetitive customer operations, liberating human ingenuity to focus on creative, high-impact challenges.&rdquo;
          </blockquote>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto text-[#45515e] text-[15px] leading-relaxed">
            <div>
              <h3 className="font-bold text-[#0a0a0a] text-[16px] mb-2">The Mission</h3>
              <p>
                Customer support shouldn&apos;t require thousands of hours of manual copy-pasting. Lashvae AI creates reasoning engines that understand policy, resolve transactions, and talk like subject matter experts, raising standard support quality to new heights.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#0a0a0a] text-[16px] mb-2">The Vision</h3>
              <p>
                We envision a future where companies train their support agents like they write documentation. Zero-shot context loading removes setup latencies, providing instant capabilities expansion for teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Blog Grid (MiniMax 3-Column Grid) */}
      <section id="blog" className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-b border-[#eaecf0] scroll-mt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl text-left">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#ea5ec1]">Publications</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">AI Research & Insights</h2>
            <p className="text-[#5f5f5f] mt-3">The latest thoughts from our engineering, design, and product departments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Blog Post 1 */}
            <article className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="p-6 flex flex-col gap-5">
                <div>
                  <span className="bg-[#ff5530]/10 text-[#ff5530] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    AI Research
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] leading-tight">
                  Training Large Language Models for Zero-Shot Conversational Deflection
                </h3>
                <p className="text-[13px] text-[#5f5f5f] leading-relaxed">
                  How we configure our custom embedding models to ingest technical support manuals and resolve refund logic without manual fine-tuning.
                </p>
              </div>
              <div className="border-t border-[#f2f3f5] p-6 flex justify-between items-center text-[12px] text-[#8e8e93]">
                <span>June 18, 2026 • 8 min read</span>
                <span className="font-semibold text-[#0a0a0a] inline-flex items-center gap-0.5 hover:underline cursor-pointer">
                  Read <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="p-6 flex flex-col gap-5">
                <div>
                  <span className="bg-blue-50 text-[#1456f0] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Product Update
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] leading-tight">
                  Lashvae AI v1.0 Launch: Multi-Step Agent Reasoning Systems
                </h3>
                <p className="text-[13px] text-[#5f5f5f] leading-relaxed">
                  Introducing our core updates: dynamic tool calling parameters, instant sync vectors, and official WhatsApp Business API endpoints.
                </p>
              </div>
              <div className="border-t border-[#f2f3f5] p-6 flex justify-between items-center text-[12px] text-[#8e8e93]">
                <span>May 29, 2026 • 5 min read</span>
                <span className="font-semibold text-[#0a0a0a] inline-flex items-center gap-0.5 hover:underline cursor-pointer">
                  Read <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="p-6 flex flex-col gap-5">
                <div>
                  <span className="bg-emerald-50 text-emerald-600 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Client Success
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] leading-tight">
                  How Retailing Group Deflected 52% of Support Tickets in 14 Days
                </h3>
                <p className="text-[13px] text-[#5f5f5f] leading-relaxed">
                  A case study detailing the deployment of Lashvae AI Web Chat widget and Shopify API connections across a 15-brand retail portfolio.
                </p>
              </div>
              <div className="border-t border-[#f2f3f5] p-6 flex justify-between items-center text-[12px] text-[#8e8e93]">
                <span>April 14, 2026 • 6 min read</span>
                <span className="font-semibold text-[#0a0a0a] inline-flex items-center gap-0.5 hover:underline cursor-pointer">
                  Read <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 3. Careers Section (Minimalist Listings) */}
      <section id="careers" className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-[#eaecf0] scroll-mt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl text-left">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Join the team</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Open Engineering & Product Roles</h2>
            <p className="text-[#5f5f5f] mt-3">We are looking for builders who want to re-architect global support pipelines.</p>
          </div>

          <div className="border border-[#e5e7eb] rounded-xl overflow-hidden max-w-4xl">
            <div className="p-10 flex flex-col items-center justify-center text-center bg-[#f7f8fa]">
              <h3 className="text-[18px] font-bold text-[#0a0a0a]">We don&apos;t have any openings right now.</h3>
              <p className="text-[14px] text-[#5f5f5f] mt-2">Check back later or follow us on our social media for future opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Us Form */}
      <section id="contact" className="py-16 sm:py-24 px-6 sm:px-8 bg-white scroll-mt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side info */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div>
                <span className="text-[12px] uppercase font-bold tracking-wider text-[#ff5530]">Get in touch</span>
                <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Start the conversation</h2>
                <p className="text-[#5f5f5f] mt-3">
                  Have questions about custom SLAs, high-volume pricing, or training vectors? Our enterprise sales team is here to help.
                </p>
              </div>

              <div className="space-y-4 text-[14px] text-[#45515e]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg flex items-center justify-center text-[#ff5530]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>hello@lashvae.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg flex items-center justify-center text-[#ea5ec1]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span>Enterprise integration support available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right side Form */}
            <div className="lg:col-span-7 bg-[#f7f8fa] border border-[#e5e7eb] rounded-xl p-8 max-w-2xl">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="h-12 w-12 bg-[#e8ffea] text-[#1ba673] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0a0a0a]">Message received</h3>
                  <p className="text-[14px] text-[#5f5f5f] max-w-sm mx-auto">
                    Thanks for reaching out! One of our enterprise solutions engineers will contact you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', email: '', company: '', message: '' })
                    }}
                    className="mt-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] px-6 py-2 text-xs font-semibold hover:bg-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-[13px] font-bold text-[#0a0a0a] block">
                      Full Name
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name-input"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="text-[13px] font-bold text-[#0a0a0a] block">
                      Company Email
                    </label>
                    <input 
                      type="email" 
                      id="email-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]"
                    />
                  </div>

                  {/* Company name field */}
                  <div className="space-y-2">
                    <label htmlFor="company-input" className="text-[13px] font-bold text-[#0a0a0a] block">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="text-[13px] font-bold text-[#0a0a0a] block">
                      How can we help?
                    </label>
                    <textarea 
                      id="message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your support channels, monthly ticket volumes, or vector integrations..."
                      className="w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8] resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-full bg-[#0a0a0a] text-white py-3 text-[14px] font-bold hover:bg-[#222222] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Submit Request <Send className="h-4 w-4" />
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
