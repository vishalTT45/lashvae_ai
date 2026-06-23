'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Network, 
  Database, 
  BarChart3, 
  BrainCircuit, 
  FileText, 
  CheckCircle2, 
  GitFork
} from 'lucide-react'

type TabId = 'reasoning' | 'builder' | 'knowledge' | 'analytics'

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('reasoning')

  // Render tab content details
  const renderTabShowcase = () => {
    switch (activeTab) {
      case 'reasoning':
        return (
          <div className="bg-[#0a0a0a] text-white rounded-xl p-6 font-mono text-[13px] shadow-lg border border-[#181e25] min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#181e25] pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5530] animate-pulse"></span>
                  <span className="text-[#8e8e93] font-bold uppercase tracking-wider text-[11px]">Reasoning Chain Active</span>
                </div>
                <div className="text-[#8e8e93] text-[11px]">lashvae-reasoning-v1.0</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-[#ea5ec1] font-semibold">User:</span>
                  <p className="text-[#a8aab2] mt-1">&ldquo;I received the wrong item in my package. Order #59392. Can I get a refund?&rdquo;</p>
                </div>
                
                <div className="pl-4 border-l-2 border-[#ff5530]/30 space-y-2 mt-4">
                  <p className="text-emerald-400 font-medium">[1/3] Query Intent Analysis</p>
                  <p className="text-[#8e8e93]">Detected: Return / Refund Request. Sentiment: Frustrated. Order ID extracted: #59392.</p>
                  
                  <p className="text-emerald-400 font-medium">[2/3] Tool Invocation (Shopify API)</p>
                  <p className="text-[#8e8e93]">Action: `shopify_get_order(order_id=&quot;59392&quot;)`</p>
                  <p className="text-white/95 bg-white/5 p-2 rounded border border-white/10 mt-1">
                    Response: &#123; status: &quot;Delivered&quot;, items: [&quot;AirPods Pro&quot;], paid: 249.00 &#125;
                  </p>
                  
                  <p className="text-emerald-400 font-medium mt-3">[3/3] Policy Validation & Action Draft</p>
                  <p className="text-[#8e8e93]">Matching refund guidelines. Zero-shot reasoning determines order is within 30-day window.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#181e25] pt-3 mt-4 flex items-center justify-between">
              <span className="text-[#ff5530] font-semibold">Agent Action:</span>
              <span className="bg-[#ff5530]/20 text-[#ff5530] font-bold text-[11px] px-2.5 py-1 rounded-full">
                Drafted Refund Approval
              </span>
            </div>
          </div>
        )
      case 'builder':
        return (
          <div className="bg-[#f7f8fa] border border-[#e5e7eb] rounded-xl p-6 shadow-md min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                <span className="text-[#0a0a0a] font-bold text-[14px]">Visual Conversation Path</span>
                <span className="text-xs bg-white border border-[#e5e7eb] px-2 py-0.5 rounded text-[#45515e] font-mono">canvas-v2</span>
              </div>
              
              {/* Nodes mockup */}
              <div className="space-y-6 relative py-4">
                
                {/* Trigger Node */}
                <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 max-w-[280px] shadow-sm relative z-10">
                  <div className="flex items-center gap-2 text-[#ea5ec1] font-semibold text-[12px]">
                    <GitFork className="h-4 w-4" />
                    <span>Trigger: Customer message received</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="h-6 w-0.5 bg-[#ea5ec1] absolute left-6 top-16 z-0"></div>

                {/* Conditional Node */}
                <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 max-w-[280px] shadow-sm ml-6 relative z-10">
                  <div className="flex items-center justify-between text-[#222222] text-[12px] font-bold mb-1">
                    <span>Reasoning check: Intent classification</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-[#e8ffea] text-[#1ba673] text-[10px] font-bold px-1.5 py-0.5 rounded">Refund</span>
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Support</span>
                  </div>
                </div>
                
                {/* Dynamic path link */}
                <div className="h-6 w-0.5 bg-[#ea5ec1] absolute left-12 top-36 z-0"></div>

                {/* Action Node */}
                <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 max-w-[280px] shadow-sm ml-12 relative z-10">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-[12px]">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Action: Trigger automated refund workflow</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-[#e5e7eb] pt-3 text-[12px] text-[#8e8e93]">
              Drag and drop nodes to enforce strict paths inside autonomous loops.
            </div>
          </div>
        )
      case 'knowledge':
        return (
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-md min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                <span className="text-[#0a0a0a] font-bold text-[14px]">Knowledge Base Hub</span>
                <span className="text-xs bg-[#e8ffea] text-[#1ba673] font-bold px-2 py-0.5 rounded-full">Sync Complete</span>
              </div>
              
              <div className="space-y-3">
                {/* Doc Source 1 */}
                <div className="flex items-center justify-between p-3 bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#ff5530]" />
                    <div className="text-left">
                      <p className="text-[13px] font-bold text-[#0a0a0a]">Return_Guidelines_2026.pdf</p>
                      <p className="text-[11px] text-[#8e8e93]">PDF manual • Updated 2h ago</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1ba673]">154 Pages parsed</span>
                </div>

                {/* Doc Source 2 */}
                <div className="flex items-center justify-between p-3 bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-[#1456f0]" />
                    <div className="text-left">
                      <p className="text-[13px] font-bold text-[#0a0a0a]">help.lashvae.ai/faq</p>
                      <p className="text-[11px] text-[#8e8e93]">Zendesk Sync • Continuous fetch</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1ba673]">Active</span>
                </div>

                {/* Doc Source 3 */}
                <div className="flex items-center justify-between p-3 bg-[#f7f8fa] border border-[#e5e7eb] rounded-lg">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="h-5 w-5 text-[#ea5ec1]" />
                    <div className="text-left">
                      <p className="text-[13px] font-bold text-[#0a0a0a]">Notion Workspace: SOPs</p>
                      <p className="text-[11px] text-[#8e8e93]">Enterprise Wiki • Live updates</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1ba673]">Synced</span>
                </div>
              </div>
            </div>

            <div className="bg-[#e8ffea] text-[#1ba673] p-3 rounded-lg text-[12px] font-medium mt-4">
              Lashvae processes context changes dynamically. New uploads are index-ready in under 90s.
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-md min-h-[380px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                <span className="text-[#0a0a0a] font-bold text-[14px]">Live Dashboard Metrics</span>
                <span className="text-xs bg-[#ff5530]/10 text-[#ff5530] font-bold px-2 py-0.5 rounded-full">Real-time</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#e5e7eb] rounded-lg p-3.5 text-left bg-[#f7f8fa]">
                  <span className="text-[11px] text-[#8e8e93] font-bold uppercase tracking-wider block">Deflection Rate</span>
                  <span className="text-[26px] font-bold text-[#0a0a0a] tracking-tight block mt-1">45.8%</span>
                  <span className="text-[10px] text-[#1ba673] font-semibold mt-1 block">▲ +3.2% vs last week</span>
                </div>
                
                <div className="border border-[#e5e7eb] rounded-lg p-3.5 text-left bg-[#f7f8fa]">
                  <span className="text-[11px] text-[#8e8e93] font-bold uppercase tracking-wider block">Cost Deflected</span>
                  <span className="text-[26px] font-bold text-[#0a0a0a] tracking-tight block mt-1">$48,290</span>
                  <span className="text-[10px] text-[#1ba673] font-semibold mt-1 block">▲ $12k saved monthly</span>
                </div>
              </div>

              {/* Graphical Line chart mockup */}
              <div className="border border-[#e5e7eb] rounded-lg p-4 bg-[#0a0a0a] text-white">
                <div className="flex items-center justify-between text-xs text-[#8e8e93] pb-2 border-b border-[#181e25]">
                  <span>Daily automated volume</span>
                  <span>10,000+ chats</span>
                </div>
                {/* SVG mock graph */}
                <svg viewBox="0 0 300 80" className="w-full mt-3 overflow-visible">
                  <path 
                    d="M0 60 Q 50 40 100 55 T 200 20 T 300 10" 
                    fill="none" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff5530" />
                      <stop offset="50%" stopColor="#ea5ec1" />
                      <stop offset="100%" stopColor="#1456f0" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="20" r="4" fill="#ea5ec1" />
                  <line x1="200" y1="20" x2="200" y2="80" stroke="#ea5ec1" strokeWidth="1" strokeDasharray="3,3" />
                </svg>
              </div>
            </div>

            <div className="text-[12px] text-[#8e8e93] mt-2">
              Metrics calculated via Gorgias APIs and deflecting webhooks.
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Feature Hero */}
      <section className="py-20 px-6 sm:px-8 border-b border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px] text-center">
          <span className="text-[12px] uppercase font-bold tracking-wider text-[#ff5530]">Advanced Tech Stack</span>
          <h1 className="mt-4 text-[42px] sm:text-[56px] font-bold tracking-tight text-[#0a0a0a] leading-none">
            Advanced AI infrastructure for modern support teams.
          </h1>
          <p className="mt-6 text-[16px] sm:text-[18px] text-[#45515e] max-w-2xl mx-auto leading-relaxed">
            Deploy autonomous support models that think through steps, consult knowledge databases, and update Shopify/CRM data without manual intervention.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Switch buttons */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#8e8e93]">Interactive playground</span>
              <h2 className="heading-sm-typography text-[#0a0a0a]">Experience Lashvae AI in action</h2>
              
              <div className="flex flex-col gap-2 mt-6">
                
                {/* Button 1 */}
                <button
                  onClick={() => setActiveTab('reasoning')}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeTab === 'reasoning'
                      ? 'bg-white border-[#0a0a0a] shadow-sm text-[#0a0a0a]'
                      : 'bg-transparent border-[#e5e7eb] text-[#45515e] hover:bg-[#f7f8fa]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BrainCircuit className={`h-5 w-5 ${activeTab === 'reasoning' ? 'text-[#ff5530]' : 'text-[#8e8e93]'}`} />
                    <span className="text-[14px] font-bold">Agent Reasoning</span>
                  </div>
                  <p className="text-[12px] text-[#8e8e93] mt-2 ml-8">
                    View execution steps inside the model&apos;s scratchpad context.
                  </p>
                </button>

                {/* Button 2 */}
                <button
                  onClick={() => setActiveTab('builder')}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeTab === 'builder'
                      ? 'bg-white border-[#0a0a0a] shadow-sm text-[#0a0a0a]'
                      : 'bg-transparent border-[#e5e7eb] text-[#45515e] hover:bg-[#f7f8fa]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Network className={`h-5 w-5 ${activeTab === 'builder' ? 'text-[#ea5ec1]' : 'text-[#8e8e93]'}`} />
                    <span className="text-[14px] font-bold">Visual Flow Builder</span>
                  </div>
                  <p className="text-[12px] text-[#8e8e93] mt-2 ml-8">
                    Map custom routing paths and strict business guidelines.
                  </p>
                </button>

                {/* Button 3 */}
                <button
                  onClick={() => setActiveTab('knowledge')}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeTab === 'knowledge'
                      ? 'bg-white border-[#0a0a0a] shadow-sm text-[#0a0a0a]'
                      : 'bg-transparent border-[#e5e7eb] text-[#45515e] hover:bg-[#f7f8fa]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Database className={`h-5 w-5 ${activeTab === 'knowledge' ? 'text-[#1456f0]' : 'text-[#8e8e93]'}`} />
                    <span className="text-[14px] font-bold">Knowledge Integration</span>
                  </div>
                  <p className="text-[12px] text-[#8e8e93] mt-2 ml-8">
                    Ingest corporate directories, FAQs, documents, and Notion spaces.
                  </p>
                </button>

                {/* Button 4 */}
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activeTab === 'analytics'
                      ? 'bg-white border-[#0a0a0a] shadow-sm text-[#0a0a0a]'
                      : 'bg-transparent border-[#e5e7eb] text-[#45515e] hover:bg-[#f7f8fa]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className={`h-5 w-5 ${activeTab === 'analytics' ? 'text-[#a855f7]' : 'text-[#8e8e93]'}`} />
                    <span className="text-[14px] font-bold">Analytics Dashboard</span>
                  </div>
                  <p className="text-[12px] text-[#8e8e93] mt-2 ml-8">
                    Monitor costs deflected, deflection rates, and resolution loops.
                  </p>
                </button>

              </div>
            </div>

            {/* Right Column: Stage Showcase */}
            <div className="lg:col-span-8">
              {renderTabShowcase()}
            </div>

          </div>
        </div>
      </section>

      {/* Visual Capabilities Showcase */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-[#f7f8fa] border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px] space-y-24">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[12px] uppercase font-bold tracking-wider text-[#1456f0]">Under the Hood</span>
            <h2 className="heading-md-typography mt-2 text-[#0a0a0a]">Capabilities Deep Dive</h2>
          </div>

          {/* Row 1: Flow Builder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="h-10 w-10 bg-[#ff5530]/10 rounded-lg flex items-center justify-center text-[#ff5530]">
                <GitFork className="h-5 w-5" />
              </div>
              <h3 className="heading-sm-typography text-[#0a0a0a]">Visual Flow Builder</h3>
              <p className="text-[#45515e] text-[15px] leading-relaxed">
                Design custom routing and business fallback channels. If a customer demands human handoffs or submits a complex warranty claim, Lashvae routes them along predefined branches. 
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Interactive node editor with state tracking</span>
                </li>
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Configurable fallback gates for human overrides</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 shadow-sm text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-xs font-semibold text-[#8e8e93] uppercase">Flow Editor Preview</span>
              </div>
              <div className="border border-[#e5e7eb] rounded-lg p-5 bg-[#f7f8fa] font-mono text-[12px] text-[#45515e]">
                <p className="text-[#0a0a0a] font-bold">{"// Visual Flow JSON Structure"}</p>
                <p className="mt-2 text-blue-600">&quot;step_1_intent&quot;: &quot;classify_issue&quot;,</p>
                <p className="text-purple-600">&quot;fallback_rule&quot;: &quot;human_escalate&quot;,</p>
                <p className="text-emerald-600">&quot;variables&quot;: [&quot;order_id&quot;, &quot;email&quot;],</p>
                <p className="text-[#ff5530]">&quot;allowed_retry_count&quot;: 3</p>
              </div>
            </div>
          </div>

          {/* Row 2: Context Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2 space-y-5">
              <div className="h-10 w-10 bg-[#ea5ec1]/10 rounded-lg flex items-center justify-center text-[#ea5ec1]">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="heading-sm-typography text-[#0a0a0a]">Context Training</h3>
              <p className="text-[#45515e] text-[15px] leading-relaxed">
                Connect your business knowledge in seconds. Upload PDFs, connect Help Center links, or link your team&apos;s Notion wiki directly. Lashvae parses and embeds this context window immediately.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Real-time vector synchronization</span>
                </li>
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Accepts Notion, Zendesk, PDF, and direct URLs</span>
                </li>
              </ul>
            </div>

            <div className="md:order-1 bg-white border border-[#e5e7eb] rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                <span className="text-xs font-semibold text-[#8e8e93] uppercase">Context Upload Box</span>
              </div>
              <div className="border-2 border-dashed border-[#e5e7eb] rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <Database className="h-8 w-8 text-[#ea5ec1] mb-2 animate-bounce" />
                <p className="text-[13px] font-bold text-[#0a0a0a]">Drop documents here</p>
                <p className="text-[11px] text-[#8e8e93] mt-1">PDF, DOCX, TXT up to 50MB</p>
                <button className="mt-4 rounded-full bg-[#0a0a0a] text-white px-4 py-1.5 text-[12px] font-semibold hover:bg-[#222222] transition-colors">
                  Upload file
                </button>
              </div>
            </div>
          </div>

          {/* Row 3: Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="h-10 w-10 bg-[#1456f0]/10 rounded-lg flex items-center justify-center text-[#1456f0]">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="heading-sm-typography text-[#0a0a0a]">Detailed Analytics</h3>
              <p className="text-[#45515e] text-[15px] leading-relaxed">
                Stay on top of performance metrics. Track how many customer tickets were resolved autonomously, measure response latencies, and monitor support costs deflected dynamically.
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Real-time webhook deflection callbacks</span>
                </li>
                <li className="flex items-center gap-2 text-[14px] text-[#222222]">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span>Complete CSAT satisfaction monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="text-xs font-semibold text-[#8e8e93] uppercase">Metrics Deflection Overview</span>
              </div>
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Automated resolution rate</span>
                    <span className="text-blue-600 font-bold">78%</span>
                  </div>
                  <div className="w-full bg-[#f2f3f5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#1456f0] h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>CSAT Rating (out of 5)</span>
                    <span className="text-pink-600 font-bold">4.82</span>
                  </div>
                  <div className="w-full bg-[#f2f3f5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#ea5ec1] h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Page CTA strip */}
      <section className="bg-white py-16 sm:py-24 px-6 sm:px-8 border-t border-[#eaecf0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="bg-[#0a0a0a] text-white rounded-hero px-8 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent)] pointer-events-none"></div>
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight">Ready to deploy?</h2>
              <p className="text-[#a8aab2] text-[14px] mt-3">
                Train agents on your corporate data in minutes. No complex setups or long-term commitments required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                <Link href="/pricing" className="rounded-full bg-white text-[#0a0a0a] px-6 py-3 font-semibold text-[14px] hover:bg-white/95 text-center">
                  Get Started Free
                </Link>
                <Link href="/company#contact" className="rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold text-[14px] hover:bg-white/20 text-center">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
