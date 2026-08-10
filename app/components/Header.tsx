'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { channelProducts } from '../channels/data';
import Button from './Button';

export default function Header() {
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const channelsRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        channelsRef.current &&
        !channelsRef.current.contains(event.target as Node)
      ) {
        setChannelsOpen(false);
      }
      if (
        compareRef.current &&
        !compareRef.current.contains(event.target as Node)
      ) {
        setCompareOpen(false);
      }
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[#eaecf0] bg-white/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 sm:px-8'>
        {/* Left Side: Logo & Main Navigation */}
        <div className='flex items-center gap-8'>
          <Link href='/' className='flex items-center gap-3 group'>
            <Image
              src='/images/logo.png'
              alt='Lashvae Logo'
              width={160}
              height={40}
              className='h-10 w-auto object-contain'
              priority
            />
            <span className='text-xl sm:text-2xl font-bold tracking-widest uppercase text-[#0a0a0a]'>
              LASHVAE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className='hidden lg:flex items-center gap-1'>
            <Link
              href='/features'
              className='px-4 py-2 text-[14px] font-medium text-[#45515e] transition-colors hover:text-[#0a0a0a]'
            >
              Features
            </Link>

            {/* Channels Dropdown */}
            <div className='relative' ref={channelsRef}>
              <div className='flex items-center'>
                <Link
                  href='/channels'
                  className='px-4 py-2 text-[14px] font-medium text-[#45515e] transition-colors hover:text-[#0a0a0a]'
                >
                  Channels
                </Link>
                <button
                  onClick={() => {
                    setChannelsOpen(!channelsOpen);
                    setCompareOpen(false);
                    setCompanyOpen(false);
                  }}
                  onMouseEnter={() => {
                    setChannelsOpen(true);
                    setCompareOpen(false);
                    setCompanyOpen(false);
                  }}
                  className='-ml-2 p-1 text-[#45515e] hover:text-[#0a0a0a] cursor-pointer'
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${channelsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {channelsOpen && (
                <div
                  className='absolute left-0 mt-1 w-64 rounded-xl border border-[#e5e7eb] bg-white p-2 shadow-[0px_4px_16px_rgba(0,0,0,0.08)]'
                  onMouseLeave={() => setChannelsOpen(false)}
                >
                  <div className='px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#8e8e93] uppercase'>
                    Supported Channels
                  </div>
                  {channelProducts.map((ch) => (
                    <Link
                      key={ch.id}
                      href={`/channels/${ch.id}`}
                      onClick={() => setChannelsOpen(false)}
                      className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                    >
                      <div className='flex flex-col'>
                        <span className='font-medium'>{ch.name}</span>
                        <span className='text-[12px] text-[#8e8e93]'>
                          {ch.tagline}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Compare Dropdown */}
            <div className='relative' ref={compareRef}>
              <button
                onClick={() => {
                  setCompareOpen(!compareOpen);
                  setCompanyOpen(false);
                  setChannelsOpen(false);
                }}
                onMouseEnter={() => {
                  setCompareOpen(true);
                  setCompanyOpen(false);
                  setChannelsOpen(false);
                }}
                className='flex items-center gap-1 px-4 py-2 text-[14px] font-medium text-[#45515e] transition-colors hover:text-[#0a0a0a] cursor-pointer'
              >
                Compare
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${compareOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {compareOpen && (
                <div
                  className='absolute left-0 mt-1 w-64 rounded-xl border border-[#e5e7eb] bg-white p-2 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200'
                  onMouseLeave={() => setCompareOpen(false)}
                >
                  <div className='px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#8e8e93] uppercase'>
                    Lashvae AI vs. Competitors
                  </div>
                  <Link
                    href='/compare?vs=manychat'
                    onClick={() => setCompareOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>vs. ManyChat</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      AI reasoning vs. legacy flow builder
                    </span>
                  </Link>
                  <Link
                    href='/compare?vs=intercom'
                    onClick={() => setCompareOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>vs. Intercom</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Autonomous support vs. expensive seats
                    </span>
                  </Link>
                  <Link
                    href='/compare?vs=tidio'
                    onClick={() => setCompareOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>vs. Tidio</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Advanced reasoning vs. basic bot filters
                    </span>
                  </Link>
                  <Link
                    href='/compare?vs=gorgias'
                    onClick={() => setCompareOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>vs. Gorgias</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Omni-channel agents vs. ticket ticketing
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className='relative' ref={companyRef}>
              <button
                onClick={() => {
                  setCompanyOpen(!companyOpen);
                  setCompareOpen(false);
                  setChannelsOpen(false);
                }}
                onMouseEnter={() => {
                  setCompanyOpen(true);
                  setCompareOpen(false);
                  setChannelsOpen(false);
                }}
                className='flex items-center gap-1 px-4 py-2 text-[14px] font-medium text-[#45515e] transition-colors hover:text-[#0a0a0a] cursor-pointer'
              >
                Company
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {companyOpen && (
                <div
                  className='absolute left-0 mt-1 w-56 rounded-xl border border-[#e5e7eb] bg-white p-2 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200'
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <Link
                    href='/company#about'
                    onClick={() => setCompanyOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>About Us</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Our Mission & Vision
                    </span>
                  </Link>
                  <Link
                    href='/company#blog'
                    onClick={() => setCompanyOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>Blog</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Product updates & AI insights
                    </span>
                  </Link>
                  <Link
                    href='/company#careers'
                    onClick={() => setCompanyOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>Careers</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Join the engineering team
                    </span>
                  </Link>
                  <Link
                    href='/company#contact'
                    onClick={() => setCompanyOpen(false)}
                    className='flex flex-col rounded-lg px-3 py-2 text-[14px] text-[#222222] transition-colors hover:bg-[#f7f8fa]'
                  >
                    <span className='font-medium'>Contact Us</span>
                    <span className='text-[12px] text-[#8e8e93]'>
                      Support & Sales inquiries
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href='/pricing'
              className='px-4 py-2 text-[14px] font-medium text-[#45515e] transition-colors hover:text-[#0a0a0a]'
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right Side: CTAs */}
        <div className='hidden lg:flex items-center gap-4'>
          <Button href='https://app.lashvae.com/login' variant='secondary' size='md'>
            Login
          </Button>
          <Button href='https://app.lashvae.com/login?signup=true' variant='primary' size='md'>
            Sign Up
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className='flex lg:hidden'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-[#0a0a0a] p-2 focus:outline-none'
            aria-label='Toggle navigation menu'
          >
            <span key={mobileMenuOpen ? 'close' : 'open'} className='block animate-in fade-in zoom-in-50 duration-200'>
              {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div
          className='animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden border-t border-[#eaecf0] bg-white px-6 py-6 shadow-md absolute w-full left-0 max-h-[calc(100vh-64px)] overflow-y-auto'
        >
          <nav className='flex flex-col gap-4'>
            <Link
              href='/features'
              onClick={() => setMobileMenuOpen(false)}
              className='text-[16px] font-medium text-[#0a0a0a] py-2 border-b border-[#f2f3f5]'
            >
              Features
            </Link>
            <Link
              href='/channels'
              onClick={() => setMobileMenuOpen(false)}
              className='text-[16px] font-medium text-[#0a0a0a] py-2 border-b border-[#f2f3f5]'
            >
              Channels
            </Link>

            <div className='py-2 border-b border-[#f2f3f5]'>
              <span className='block text-[16px] font-medium text-[#0a0a0a]'>
                Compare
              </span>
              <div className='mt-2 pl-4 flex flex-col gap-3'>
                <Link
                  href='/compare?vs=manychat'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  vs. ManyChat
                </Link>
                <Link
                  href='/compare?vs=intercom'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  vs. Intercom
                </Link>
                <Link
                  href='/compare?vs=tidio'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  vs. Tidio
                </Link>
                <Link
                  href='/compare?vs=gorgias'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  vs. Gorgias
                </Link>
              </div>
            </div>

            <div className='py-2 border-b border-[#f2f3f5]'>
              <span className='block text-[16px] font-medium text-[#0a0a0a]'>
                Company
              </span>
              <div className='mt-2 pl-4 flex flex-col gap-3'>
                <Link
                  href='/company#about'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  About Us
                </Link>
                <Link
                  href='/company#blog'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  Blog
                </Link>
                <Link
                  href='/company#careers'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  Careers
                </Link>
                <Link
                  href='/company#contact'
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-[15px] text-[#45515e]'
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <Link
              href='/pricing'
              onClick={() => setMobileMenuOpen(false)}
              className='text-[16px] font-medium text-[#0a0a0a] py-2 border-b border-[#f2f3f5]'
            >
              Pricing
            </Link>

            <div className='flex flex-col gap-3 mt-4'>
              <Button
                href='https://app.lashvae.com/login'
                onClick={() => setMobileMenuOpen(false)}
                variant='secondary'
                className='w-full'
              >
                Login
              </Button>
              <Button
                href='https://app.lashvae.com/login?signup=true'
                onClick={() => setMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
