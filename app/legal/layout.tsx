'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShieldAlert, Mail } from 'lucide-react'

const legalLinks = [
  { name: 'Privacy Policy', href: '/legal/privacy' },
  { name: 'Terms of Service', href: '/legal/terms' },
  { name: 'Security Status', href: '/legal/security' },
  { name: 'Refund Policy', href: '/legal/refund' }
]

export default function LegalLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-white flex flex-col flex-grow">
      
      {/* Tiny breadcrumb / header */}
      <div className="bg-[#f7f8fa] border-b border-[#e5e7eb] py-4 px-6 sm:px-8">
        <div className="mx-auto max-w-[1280px] text-left text-[12px] text-[#5f5f5f] flex items-center gap-2">
          <Link href="/" className="hover:text-[#0a0a0a]">Lashvae AI</Link>
          <span>/</span>
          <span className="font-semibold text-[#0a0a0a]">Legal & Compliance Documents</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] w-full px-6 sm:px-8 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Left Sticky TOC (span 3) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6 text-left">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8e8e93]">Directory</span>
              <h2 className="text-[16px] font-bold text-[#0a0a0a] mt-1">Legal Index</h2>
            </div>
            
            <nav className="flex flex-col gap-1 border-l border-[#eaecf0] pl-0">
              {legalLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-[14px] transition-all pl-4 border-l ${
                      isActive
                        ? 'text-[#0a0a0a] font-semibold border-[#0a0a0a] bg-[#f7f8fa] rounded-r-md'
                        : 'text-[#5f5f5f] border-transparent hover:text-[#0a0a0a] hover:border-[#e5e7eb]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Column 2: Center Content Area (span 6) */}
          <main className="lg:col-span-6 docs-prose-block w-full max-w-[720px] text-left">
            {children}
          </main>

          {/* Column 3: Right Contact / Support info (span 3) */}
          <aside className="lg:col-span-3 space-y-6 text-left">
            <div className="border border-[#e5e7eb] rounded-xl p-5 bg-[#f7f8fa] space-y-4">
              <div className="flex items-center gap-2 text-[#0a0a0a]">
                <ShieldAlert className="h-5 w-5 text-[#ff5530]" />
                <h4 className="text-[13px] font-bold uppercase tracking-wider">Compliance</h4>
              </div>
              <p className="text-[12px] text-[#5f5f5f] leading-relaxed">
                Lashvae AI engines undergo strict SOC2 compliance checks. All data in transit is encrypted using standard TLS 1.3 procedures.
              </p>
              <div className="border-t border-[#e5e7eb] pt-3.5 space-y-2">
                <span className="text-[11px] text-[#8e8e93] font-semibold block">Need assistance?</span>
                <a 
                  href="mailto:compliance@lashvae.ai"
                  className="text-[13px] text-[#1456f0] hover:underline flex items-center gap-1 font-medium"
                >
                  <Mail className="h-3.5 w-3.5" /> compliance@lashvae.ai
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>

    </div>
  )
}
