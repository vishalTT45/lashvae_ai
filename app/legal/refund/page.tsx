export default function RefundPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Refund Policy</h1>
      <p className="text-[12px] text-[#8e8e93]">Last updated: June 21, 2026</p>
      
      <div className="space-y-4 text-[15px] text-[#222222] leading-relaxed">
        <p>
          We want to make sure you are completely satisfied with the deflection metrics and accuracy of Lashvae AI.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">1. 14-Day Money-Back Guarantee</h2>
        <p>
          If you upgrade to our Pro tier and find the AI deflection does not meet your team&apos;s CSAT goals, you are eligible for a full refund of your subscription fee within 14 days of your initial purchase date.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">2. Performance Deductions</h2>
        <p>
          Refunds do not apply to overage costs incurred for successfully deflected conversations beyond your package limits. Overage billing represents consumed GPU and API bandwidth and is final.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">3. Requesting a Refund</h2>
        <p>
          To request a refund, please contact billing@lashvae.ai with your organization ID and Shopify/Stripe invoice reference. Refund requests are processed within 3-5 business days.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">4. Enterprise Contracts</h2>
        <p>
          Enterprise tier refund and termination terms are governed solely by individual Master Service Agreements (MSA) and custom service-level SLAs.
        </p>
      </div>
    </div>
  )
}
