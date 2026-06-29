import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#0a0a0a] text-white py-16 px-6 sm:px-8 border-t border-[#181e25]'>
      <div className='mx-auto max-w-[1280px]'>
        {/* Top Region: Link Columns */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16 pb-12 border-b border-[#181e25]'>
          {/* Brand Col */}
          <div className='flex flex-col gap-4'>
            <Link href='/' className='flex items-center gap-3'>
              <Image
                src='/images/logo.png'
                alt='Lashvae Logo'
                width={160}
                height={48}
                className='h-12 w-auto object-contain brightness-0 invert'
              />
              <span className='text-xl sm:text-2xl font-bold tracking-widest uppercase text-white'>
                LASHVAE
              </span>
            </Link>
            <p className='text-[14px] text-[#a8aab2] leading-relaxed max-w-xs mt-2'>
              Next-generation autonomous customer operations powered by
              context-aware zero-shot reasoning.
            </p>
            <div className='flex items-center gap-4 mt-2'>
              {/* Instagram icon */}
              <a
                href='https://www.instagram.com/lashvae_ai'
                target='_blank'
                rel='noreferrer'
                className='text-[#a8aab2] transition-colors hover:text-white'
                aria-label='Instagram Link'
                id='footer-social-instagram'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>
              </a>
              {/* LinkedIn icon */}
              <a
                href='https://www.linkedin.com/company/lashvae/'
                target='_blank'
                rel='noreferrer'
                className='text-[#a8aab2] transition-colors hover:text-white'
                aria-label='LinkedIn Link'
                id='footer-social-linkedin'
              >
                <svg
                  className='h-4 w-4 fill-current'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.267 2.371 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Directory */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-[14px] font-semibold text-white uppercase tracking-wider'>
              Product
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <Link
                  href='/features'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='/channels'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Channels
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='/compare'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white flex items-center gap-1'
                >
                  Competitor Matrix <ArrowRight className='h-3 w-3' />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Directory */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-[14px] font-semibold text-white uppercase tracking-wider'>
              Company
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <Link
                  href='/company#about'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/company#blog'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/company#careers'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/company#contact'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Directory */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-[14px] font-semibold text-white uppercase tracking-wider'>
              Legal
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <Link
                  href='/legal/privacy'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/legal/terms'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/legal/security'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Security Status
                </Link>
              </li>
              <li>
                <Link
                  href='/legal/refund'
                  className='text-[14px] text-[#a8aab2] transition-colors hover:text-white'
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Region: Copyright & Brand */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[12px] text-[#a8aab2]'>
          <div>&copy; {currentYear} Lashvae AI, Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
