import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-16 px-6 sm:px-8 border-t border-[#181e25]">
      <div className="mx-auto max-w-[1280px]">
        {/* Top Region: Link Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16 pb-12 border-b border-[#181e25]">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Lashvae Logo"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-white">
                LASHVAE
              </span>
            </Link>
            <p className="text-[14px] text-[#a8aab2] leading-relaxed max-w-xs mt-2">
              Next-generation autonomous customer operations powered by context-aware zero-shot reasoning.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {/* Instagram icon */}
              <a 
                href="https://www.instagram.com/lashvae_ai" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#a8aab2] transition-colors hover:text-white"
                aria-label="Instagram Link"
                id="footer-social-instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* X Twitter icon */}
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#a8aab2] transition-colors hover:text-white"
                aria-label="X (Twitter) Link"
                id="footer-social-x"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 1200 1227" aria-hidden="true">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/features" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/channels" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white flex items-center gap-1">
                  Competitor Matrix <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/company#about" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company#blog" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/company#careers" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#contact" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/legal/privacy" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Security Status
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="text-[14px] text-[#a8aab2] transition-colors hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Region: Copyright & Brand */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[12px] text-[#a8aab2]">
          <div>
            &copy; {currentYear} Lashvae AI, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Enterprise SLA Certified</span>
            <span className="h-1 w-1 rounded-full bg-[#a8aab2]"></span>
            <span>System Status: 99.98%</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
