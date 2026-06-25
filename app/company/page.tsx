'use client';

import emailjs from '@emailjs/browser';
import {
  ArrowUpRight,
  CheckCircle,
  ChevronDown,
  Layers,
  Mail,
  Send,
} from 'lucide-react';
import { useState } from 'react';

export default function CompanyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(false);

    if (!formData.agreed) return;
    setIsSubmitting(true); 

    try {
      const templateParams = {
        fullname: formData.name.trim(),
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        company: formData.company,
        message: formData.message,
        to_email: 'dpo@lashvae.com',
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        company: '',
        message: '',
        agreed: false,
      });
    } catch (err) {
      setFormError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col w-full bg-white'>
      {/* 1. About Us Section (Editorial Layout) */}
      <section id="about" className="relative overflow-hidden py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-[#EDF2ED] scroll-mt-16">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(10, 10, 10, 0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 10, 10, 0.28) 1px, transparent 1px)
          `,
          backgroundSize: '280px 280px'
        }}></div>
        <div className="mx-auto max-w-[960px] text-center relative z-10">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#0a0a0a]">Our Purpose</span>
          
          <blockquote className="mt-8 text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-[#0a0a0a] leading-snug tracking-tight text-center max-w-4xl mx-auto italic">
            &ldquo;We build autonomous systems to solve repetitive customer operations, liberating human ingenuity to focus on creative, high-impact challenges.&rdquo;
          </blockquote>

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto text-[#45515e] text-[15px] leading-relaxed'>
            <div>
              <h3 className='font-bold text-[#0a0a0a] text-[16px] mb-2'>
                The Mission
              </h3>
              <p>
                Customer support shouldn&apos;t require thousands of hours of
                manual copy-pasting. Lashvae AI creates reasoning engines that
                understand policy, resolve transactions, and talk like subject
                matter experts, raising standard support quality to new heights.
              </p>
            </div>
            <div>
              <h3 className='font-bold text-[#0a0a0a] text-[16px] mb-2'>
                The Vision
              </h3>
              <p>
                We envision a future where companies train their support agents
                like they write documentation. Zero-shot context loading removes
                setup latencies, providing instant capabilities expansion for
                teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Blog Grid (MiniMax 3-Column Grid) */}
      <section
        id='blog'
        className='py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-b border-[#eaecf0] scroll-mt-16'
      >
        <div className='mx-auto max-w-[1280px]'>
          <div className='mb-12 max-w-2xl text-left'>
            <span className='text-[12px] uppercase font-bold tracking-wider text-[#ea5ec1]'>
              Publications
            </span>
            <h2 className='heading-md-typography mt-2 text-[#0a0a0a]'>
              AI Research & Insights
            </h2>
            <p className='text-[#5f5f5f] mt-3'>
              The latest thoughts from our engineering, design, and product
              departments.
            </p>
          </div>

          <div className="border border-[#e5e7eb] rounded-xl overflow-hidden max-w-4xl">
            <div className="p-10 flex flex-col items-center justify-center text-center bg-white">
              <h3 className="text-[18px] font-bold text-[#0a0a0a]">Coming Soon</h3>
              <p className="text-[14px] text-[#5f5f5f] mt-2">Exciting content is on the way. Stay tuned for our latest insights and research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Careers Section (Minimalist Listings) */}
      <section id="careers" className="relative overflow-hidden py-16 sm:py-24 px-6 sm:px-8 border-b border-[#eaecf0] scroll-mt-16">
        <div className="mx-auto max-w-[1280px] relative z-10">
          <div className="mb-12 max-w-2xl text-left">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#0a0a0a]">Join the team</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Open Engineering & Product Roles</h2>
            <p className="text-[#0a0a0a] mt-3">We are looking for builders who want to re-architect global support pipelines.</p>
          </div>

          <div className='border border-[#e5e7eb] rounded-xl overflow-hidden max-w-4xl'>
            <div className='p-10 flex flex-col items-center justify-center text-center bg-[#f7f8fa]'>
              <h3 className='text-[18px] font-bold text-[#0a0a0a]'>
                We don&apos;t have any openings right now.
              </h3>
              <p className='text-[14px] text-[#5f5f5f] mt-2'>
                Check back later or follow us on our social media for future
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Us Form */}
      <section
        id='contact'
        className='py-16 sm:py-24 px-6 sm:px-8 bg-white scroll-mt-16'
      >
        <div className='mx-auto max-w-[1280px]'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
            {/* Left side info */}
            <div className='lg:col-span-5 text-left space-y-6'>
              <div>
                <span className="text-[12px] uppercase font-bold tracking-wider text-[#ff5530]">Get in touch</span>
                <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Start the conversation</h2>
                <p className="text-[#5f5f5f] mt-3">
                  We're available across multiple channels. Pick whichever works best for you.
                </p>
              </div>

              <div className="space-y-4 text-[14px] text-[#45515e]">
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a0a0a]">Our Office</h3>
                  <p className="text-[13px]">Office 18036, 182–184 High Street North, London, E6 2JA</p>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a0a0a]">Email</h3>
                  <p className="text-[13px]">dpo@lashvae.com</p>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a0a0a]">Business Hours</h3>
                  <p className="text-[13px]">Mon – Fri: 9:00 AM – 7:00 PM<br />Sat: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right side Form */}
            <div className='lg:col-span-7 bg-[#f7f8fa] border border-[#e5e7eb] rounded-xl p-8 max-w-2xl'>
              {formSubmitted ? (
                <div className='text-center py-10 space-y-4'>
                  <div className='h-12 w-12 bg-[#e8ffea] text-[#1ba673] rounded-full flex items-center justify-center mx-auto'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <h3 className='text-[18px] font-bold text-[#0a0a0a]'>
                    Message received
                  </h3>
                  <p className='text-[14px] text-[#5f5f5f] max-w-sm mx-auto'>
                    Thanks for reaching out! One of our enterprise solutions
                    engineers will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        company: '',
                        message: '',
                        agreed: false,
                      });
                    }}
                    className='mt-4 rounded-full border border-[#0a0a0a] text-[#0a0a0a] px-6 py-2 text-xs font-semibold hover:bg-white transition-colors'
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5 text-left'>
                  {/* Name & Email row */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='name-input'
                        className='text-[13px] font-bold text-[#0a0a0a] block'
                      >
                        Full Name <span className='text-[#ff5530]'>*</span>
                      </label>
                      <input
                        type='text'
                        id='name-input'
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder='John Doe'
                        className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='email-input'
                        className='text-[13px] font-bold text-[#0a0a0a] block'
                      >
                        Company Email <span className='text-[#ff5530]'>*</span>
                      </label>
                      <input
                        type='email'
                        id='email-input'
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder='john@company.com'
                        className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]'
                      />
                    </div>
                  </div>

                  {/* Phone & Subject row */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='phone-input'
                        className='text-[13px] font-bold text-[#0a0a0a] block'
                      >
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone-input'
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder='+91 98765 43210'
                        className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='subject-input'
                        className='text-[13px] font-bold text-[#0a0a0a] block'
                      >
                        Subject <span className='text-[#ff5530]'>*</span>
                      </label>
                      <div className='relative'>
                        <select
                          id='subject-input'
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] focus:outline-none focus:border-2 focus:border-[#1d4ed8] appearance-none cursor-pointer'
                        >
                          <option value='' disabled>
                            Select a topic
                          </option>
                          <option value='general'>General Inquiry</option>
                          <option value='project'>Project Discussion</option>
                          <option value='partnership'>Partnership</option>
                          <option value='support'>Support</option>
                          <option value='other'>Other</option>
                        </select>
                        <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8e8e93] pointer-events-none' />
                      </div>
                    </div>
                  </div>

                  {/* Company name field */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='company-input'
                      className='text-[13px] font-bold text-[#0a0a0a] block'
                    >
                      Company Name
                    </label>
                    <input
                      type='text'
                      id='company-input'
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder='Acme Corp'
                      className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8]'
                    />
                  </div>

                  {/* Message field */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='message-input'
                      className='text-[13px] font-bold text-[#0a0a0a] block'
                    >
                      How can we help? <span className='text-[#ff5530]'>*</span>
                    </label>
                    <textarea
                      id='message-input'
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder='Tell us about your support channels, monthly ticket volumes, or vector integrations...'
                      className='w-full bg-white border border-[#e5e7eb] rounded-md px-3.5 py-2.5 text-[14px] text-[#0a0a0a] placeholder-[#8e8e93] focus:outline-none focus:border-2 focus:border-[#1d4ed8] resize-none'
                    />
                  </div>

                  {/* Privacy Policy checkbox */}
                  <div className='flex items-start gap-2'>
                    <input
                      type='checkbox'
                      id='privacy-checkbox'
                      required
                      checked={formData.agreed}
                      onChange={(e) =>
                        setFormData({ ...formData, agreed: e.target.checked })
                      }
                      className='mt-1 h-4 w-4 rounded border-[#e5e7eb] accent-[#ff5530] cursor-pointer'
                    />
                    <label
                      htmlFor='privacy-checkbox'
                      className='text-[13px] text-[#5f5f5f]'
                    >
                      I agree to the{' '}
                      <a
                        href='/legal/privacy'
                        className='text-[#ff5530] underline hover:text-[#e04420]'
                      >
                        Privacy Policy
                      </a>{' '}
                      and consent to being contacted regarding my inquiry.
                    </label>
                  </div>

                  {formError && (
                    <div className='bg-red-50 border border-red-200 rounded-md px-4 py-3 text-[13px] text-red-600 flex items-center gap-2'>
                      <span>
                        Something went wrong. Please try again or email us
                        directly at{' '}
                        <a
                          href='mailto:dpo@lashvae.com'
                          className='underline font-semibold'
                        >
                          dpo@lashvae.com
                        </a>
                      </span>
                    </div>
                  )}

                  <button
                    type='submit'
                    className='w-full rounded-full bg-[#0a0a0a] text-white py-3 text-[14px] font-bold hover:bg-[#222222] transition-colors flex items-center justify-center gap-1.5 cursor-pointer'
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}{' '}
                    {!isSubmitting && <Send className='h-4 w-4' />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
