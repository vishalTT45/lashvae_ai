'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Check, X, ShieldCheck } from 'lucide-react'

type Competitor = 'manychat' | 'intercom' | 'tidio' | 'gorgias'

interface ComparisonRow {
  feature: string;
  description: string;
  lashvaeValue: string;
  lashvaeSupported: boolean;
  competitorValue: string;
  competitorSupported: boolean;
}

const comparisonData: Record<Competitor, { name: string; tag: string; rows: ComparisonRow[] }> = {
  manychat: {
    name: 'ManyChat',
    tag: 'Legacy Flow Builder',
    rows: [
      {
        feature: 'Core AI Reasoning',
        description: 'Multi-step planning, tools execution, and zero-shot context analysis.',
        lashvaeValue: 'Zero-shot reasoning model with dynamic tool calling',
        lashvaeSupported: true,
        competitorValue: 'Keyword match triggering and simple intent routing',
        competitorSupported: false,
      },
      {
        feature: 'Setup Time',
        description: 'How fast you can train and deploy a live assistant.',
        lashvaeValue: '10 mins — just drop URLs or PDFs to train',
        lashvaeSupported: true,
        competitorValue: 'Days — requires drawing manual block flow diagrams',
        competitorSupported: false,
      },
      {
        feature: 'Visual Flow Editor',
        description: 'Canvas drag-and-drop builder for custom routing branches.',
        lashvaeValue: 'Dynamic decision gates linked to vector search',
        lashvaeSupported: true,
        competitorValue: 'Static block diagram paths with rigid rules',
        competitorSupported: true,
      },
      {
        feature: 'Knowledge Base Integration',
        description: 'Ingesting Notion, Zendesk, help docs, and files.',
        lashvaeValue: 'Vector DB sync for PDF, Notion, URLs',
        lashvaeSupported: true,
        competitorValue: 'No document ingestion; manuals must be written as hard rules',
        competitorSupported: false,
      },
      {
        feature: 'Omni-channel Support',
        description: 'Supported messaging APIs (WhatsApp, Instagram, Web Chat, SMS).',
        lashvaeValue: 'All supported natively with unified handoff context',
        lashvaeSupported: true,
        competitorValue: 'Supported (primarily Instagram, Messenger, WhatsApp)',
        competitorSupported: true,
      },
      {
        feature: 'Cost per Deflection',
        description: 'Billing model for resolved conversations.',
        lashvaeValue: '$0.05 / deflection — performance based',
        lashvaeSupported: true,
        competitorValue: 'Requires expensive user-tier subscriber plans',
        competitorSupported: false,
      },
    ]
  },
  intercom: {
    name: 'Intercom',
    tag: 'Legacy Customer Platform',
    rows: [
      {
        feature: 'Core AI Reasoning',
        description: 'Multi-step planning, tools execution, and zero-shot context analysis.',
        lashvaeValue: 'Zero-shot reasoning model with dynamic tool calling',
        lashvaeSupported: true,
        competitorValue: 'Intercom Fin (retrieval-only bot, lacks deep tool routing)',
        competitorSupported: false,
      },
      {
        feature: 'Setup Time',
        description: 'How fast you can train and deploy a live assistant.',
        lashvaeValue: '10 mins — train on doc vectors instantly',
        lashvaeSupported: true,
        competitorValue: 'Hours — requires publishing support articles first',
        competitorSupported: false,
      },
      {
        feature: 'Visual Flow Editor',
        description: 'Canvas drag-and-drop builder for custom routing branches.',
        lashvaeValue: 'Dynamic decision gates linked to vector search',
        lashvaeSupported: true,
        competitorValue: 'Custom workflows builders (highly complex structure)',
        competitorSupported: true,
      },
      {
        feature: 'Knowledge Base Integration',
        description: 'Ingesting Notion, Zendesk, help docs, and files.',
        lashvaeValue: 'Vector DB sync for PDF, Notion, URLs',
        lashvaeSupported: true,
        competitorValue: 'Limited to Intercom Help Articles scraping',
        competitorSupported: false,
      },
      {
        feature: 'Omni-channel Support',
        description: 'Supported messaging APIs (WhatsApp, Instagram, Web Chat, SMS).',
        lashvaeValue: 'All supported natively with unified handoff context',
        lashvaeSupported: true,
        competitorValue: 'Supported, but requires costly enterprise seats',
        competitorSupported: true,
      },
      {
        feature: 'Cost per Deflection',
        description: 'Billing model for resolved conversations.',
        lashvaeValue: '$0.15 / deflection — pay per resolution',
        lashvaeSupported: true,
        competitorValue: '$0.99 / resolution flat rate (extremely expensive)',
        competitorSupported: false,
      },
    ]
  },
  tidio: {
    name: 'Tidio',
    tag: 'SMB Live Chat bot',
    rows: [
      {
        feature: 'Core AI Reasoning',
        description: 'Multi-step planning, tools execution, and zero-shot context analysis.',
        lashvaeValue: 'Zero-shot reasoning model with dynamic tool calling',
        lashvaeSupported: true,
        competitorValue: 'Lyro AI (restricted keyword matching and FAQ lookups)',
        competitorSupported: false,
      },
      {
        feature: 'Setup Time',
        description: 'How fast you can train and deploy a live assistant.',
        lashvaeValue: '10 mins — zero-shot context training',
        lashvaeSupported: true,
        competitorValue: '30 mins — inputs FAQs and basic templates',
        competitorSupported: true,
      },
      {
        feature: 'Visual Flow Editor',
        description: 'Canvas drag-and-drop builder for custom routing branches.',
        lashvaeValue: 'Dynamic decision gates linked to vector search',
        lashvaeSupported: true,
        competitorValue: 'Basic static nodes flow builder',
        competitorSupported: true,
      },
      {
        feature: 'Knowledge Base Integration',
        description: 'Ingesting Notion, Zendesk, help docs, and files.',
        lashvaeValue: 'Vector DB sync for PDF, Notion, URLs',
        lashvaeSupported: true,
        competitorValue: 'Only imports manually pasted FAQ lists',
        competitorSupported: false,
      },
      {
        feature: 'Omni-channel Support',
        description: 'Supported messaging APIs (WhatsApp, Instagram, Web Chat, SMS).',
        lashvaeValue: 'All supported natively with unified handoff context',
        lashvaeSupported: true,
        competitorValue: 'Limited (Web Chat, Messenger, Instagram only; no WhatsApp API)',
        competitorSupported: false,
      },
      {
        feature: 'Cost per Deflection',
        description: 'Billing model for resolved conversations.',
        lashvaeValue: '$0.05 / deflection',
        lashvaeSupported: true,
        competitorValue: 'Charges high tiered subscription prices per chat limit',
        competitorSupported: false,
      },
    ]
  },
  gorgias: {
    name: 'Gorgias',
    tag: 'E-commerce Helpdesk',
    rows: [
      {
        feature: 'Core AI Reasoning',
        description: 'Multi-step planning, tools execution, and zero-shot context analysis.',
        lashvaeValue: 'Zero-shot reasoning model with dynamic tool calling',
        lashvaeSupported: true,
        competitorValue: 'Macro templating, auto-replies, and basic rule-matching',
        competitorSupported: false,
      },
      {
        feature: 'Setup Time',
        description: 'How fast you can train and deploy a live assistant.',
        lashvaeValue: '10 mins — drop shop urls / support guides',
        lashvaeSupported: true,
        competitorValue: 'Hours — manually writing email/chat macros',
        competitorSupported: false,
      },
      {
        feature: 'Visual Flow Editor',
        description: 'Canvas drag-and-drop builder for custom routing branches.',
        lashvaeValue: 'Dynamic decision gates linked to vector search',
        lashvaeSupported: true,
        competitorValue: 'Non-visual list of text-based rules & conditionals',
        competitorSupported: false,
      },
      {
        feature: 'Knowledge Base Integration',
        description: 'Ingesting Notion, Zendesk, help docs, and files.',
        lashvaeValue: 'Vector DB sync for PDF, Notion, URLs',
        lashvaeSupported: true,
        competitorValue: 'Limited to Gorgias native Help Center article sync',
        competitorSupported: false,
      },
      {
        feature: 'Omni-channel Support',
        description: 'Supported messaging APIs (WhatsApp, Instagram, Web Chat, SMS).',
        lashvaeValue: 'All supported natively with unified handoff context',
        lashvaeSupported: true,
        competitorValue: 'Supported (focused on Shopify / e-commerce channels)',
        competitorSupported: true,
      },
      {
        feature: 'Cost per Deflection',
        description: 'Billing model for resolved conversations.',
        lashvaeValue: '$0.15 / deflection',
        lashvaeSupported: true,
        competitorValue: 'Charges per ticket flat fees (expensive volume plans)',
        competitorSupported: false,
      },
    ]
  }
}

function CompareContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const vsParam = searchParams.get('vs')
  const activeTab = (vsParam === 'manychat' || vsParam === 'intercom' || vsParam === 'tidio' || vsParam === 'gorgias') 
    ? (vsParam as Competitor) 
    : 'manychat'

  const currentData = comparisonData[activeTab]

  return (
    <div className="mx-auto max-w-[1280px]">
      
      {/* Competitor Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
        {(Object.keys(comparisonData) as Competitor[]).map((key) => (
          <button
            key={key}
            onClick={() => router.replace(`/compare?vs=${key}`, { scroll: false })}
            className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer ${
              activeTab === key
                ? 'bg-[#0a0a0a] text-white border border-[#0a0a0a]'
                : 'bg-white text-[#5f5f5f] border border-[#e5e7eb] hover:bg-[#f7f8fa]'
            }`}
          >
            vs. {comparisonData[key].name}
          </button>
        ))}
      </div>

      {/* Comparison Grid Table Container */}
      <div className="relative bg-white border border-[#e5e7eb] rounded-xl shadow-sm overflow-hidden mb-16">
        <div className="pointer-events-none absolute inset-y-0 left-1/3 z-10 hidden w-px bg-[#e5e7eb] md:block" />
        <div className="pointer-events-none absolute inset-y-0 left-2/3 z-10 hidden w-px bg-[#e5e7eb] md:block" />
        
        {/* Table Headers */}
        <div className="grid grid-cols-12 bg-[#f7f8fa] border-b border-[#e5e7eb] p-4 text-[13px] font-bold text-[#5f5f5f] uppercase tracking-wider text-left">
          <div className="col-span-12 md:col-span-4">Capability / Feature</div>
          <div className="hidden md:block md:col-span-4 pl-4">Lashvae AI</div>
          <div className="hidden md:block md:col-span-4 pl-4">
            {currentData.name} <span className="text-[10px] font-medium text-[#8e8e93] normal-case">({currentData.tag})</span>
          </div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-[#eaecf0]">
          {currentData.rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 text-left items-start gap-4 md:gap-0">
              
              {/* Feature Description (Col 1) */}
              <div className="col-span-12 md:col-span-4 md:pr-6">
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">{row.feature}</h4>
                <p className="text-[12px] text-[#5f5f5f] mt-1 leading-relaxed">{row.description}</p>
              </div>

              {/* Lashvae Value (Col 2) */}
              <div className="col-span-12 md:col-span-4 md:pl-4 space-y-2">
                <div className="md:hidden text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">Lashvae AI</div>
                <div className="flex gap-2 items-start">
                  <span className="bg-[#e8ffea] text-[#1ba673] p-0.5 rounded-full mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0a0a0a]">{row.lashvaeValue}</p>
                    <span className="inline-block bg-[#e8ffea] text-[#1ba673] text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5">
                      Included
                    </span>
                  </div>
                </div>
              </div>

              {/* Competitor Value (Col 3) */}
              <div className="col-span-12 md:col-span-4 md:pl-4 space-y-2">
                <div className="md:hidden text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">{currentData.name}</div>
                <div className="flex gap-2 items-start">
                  {row.competitorSupported ? (
                    <span className="bg-[#e8ffea] text-[#1ba673] p-0.5 rounded-full mt-0.5 shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="bg-red-50 text-red-500 p-0.5 rounded-full mt-0.5 shrink-0">
                      <X className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div>
                    <p className="text-[13px] text-[#45515e]">{row.competitorValue}</p>
                    {!row.competitorSupported && (
                      <span className="inline-block bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5">
                        Lacking Scope
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Trust & Guarantee Segment */}
      <div className="border border-[#e5e7eb] rounded-xl p-8 bg-[#f7f8fa] flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-4 text-left">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-emerald-600 border border-[#e5e7eb] shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-[#0a0a0a]">No-risk deflecting policy</h4>
            <p className="text-[13px] text-[#5f5f5f] mt-0.5">
              Only pay for deflected tickets that were successfully solved by Lashvae AI without human intervention.
            </p>
          </div>
        </div>
        <Link href="/pricing" className="rounded-full bg-[#0a0a0a] text-white px-6 py-3 text-[13px] font-semibold hover:bg-[#222222] transition-colors shrink-0">
          See Performance Tiers
        </Link>
      </div>

    </div>
  )
}

export default function ComparePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-8 border-b border-[#eaecf0] bg-[#007257] text-center text-white">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.42) 1px, transparent 1px)
          `,
          backgroundSize: '280px 280px'
        }}></div>
        <div className="mx-auto max-w-[1280px] relative z-10">
          <span className="text-[12px] uppercase font-bold tracking-wider text-white/90 bg-white/10 px-3.5 py-1 rounded-full inline-block">Objective Comparison</span>
          <h1 className="mt-4 text-[42px] sm:text-[56px] font-bold tracking-tight text-white leading-none">
            See why leading support teams choose Lashvae AI.
          </h1>
          <p className="mt-6 text-[16px] sm:text-[18px] text-white/85 max-w-2xl mx-auto leading-relaxed">
            Legacy chat interfaces require manual flow charts and keyword triggers. Lashvae uses multi-step reasoning to automate tickets dynamically.
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-6 sm:px-8 bg-white">
        <Suspense fallback={
          <div className="text-center py-20 text-[14px] text-[#8e8e93]">
            Loading comparison details...
          </div>
        }>
          <CompareContent />
        </Suspense>
      </section>

    </div>
  )
}
