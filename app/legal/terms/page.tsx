export default function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Terms of Service</h1>
      <p className="text-[12px] text-[#8e8e93]">Last updated: June 21, 2026</p>
      
      <div className="space-y-4 text-[15px] text-[#222222] leading-relaxed">
        <p>
          Welcome to Lashvae AI. By subscribing to our SaaS platform or deploying our widgets, you agree to these Terms of Service.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">1. License & Usage</h2>
        <p>
          Lashvae AI grants customers a non-exclusive, non-transferable, revocable license to deploy our reasoning models and widgets on corporate channels. Abuse of API endpoints or stress-testing models without permission violates this license.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">2. Performance Billing</h2>
        <p>
          Billing is performance-based. Pro plan subscribers get 5,000 resolved conversations. Overages are billed automatically at $0.08 per resolution. You are responsible for configuring fallback rules to manage chat volumes.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">3. Data Accuracy</h2>
        <p>
          While our reasoning engines employ advanced zero-shot verification, we are not liable for factual errors or refund approvals generated due to incorrect custom context documents uploaded to your knowledge hub.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">4. Support & SLA</h2>
        <p>
          Standard support is provided via community forums or email. Enterprise tiers receive guaranteed 99.9% uptime and custom SLAs.
        </p>
      </div>
    </div>
  )
}
