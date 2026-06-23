export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Privacy Policy</h1>
      <p className="text-[12px] text-[#8e8e93]">Last updated: June 21, 2026</p>
      
      <div className="space-y-4 text-[15px] text-[#222222] leading-relaxed">
        <p>
          At Lashvae AI, we prioritize the protection and confidentiality of your enterprise customer data. This Privacy Policy details how we fetch, process, sync, and secure corporate datasets.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">1. Data Ingestion</h2>
        <p>
          Lashvae AI trains customer agents dynamically on documents uploaded to our Vector Database. This context is kept in private memory windows. We do not use corporate documents or conversation logs to train base models for third parties.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">2. Integrations & Third-Party APIs</h2>
        <p>
          When you link Shopify, Gorgias, Zendesk, or Meta endpoints (WhatsApp, Messenger), Lashvae AI fetches customer variables solely to complete user transactions. Data transfers are transient and encrypted end-to-end.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">3. Conversation Logs</h2>
        <p>
          Conversation transcripts are stored to enable human-in-the-loop handoff context. Logs are automatically anonymized or purged according to customer compliance guidelines.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">4. Compliance & SOC2</h2>
        <p>
          All operations comply with GDPR, HIPAA, and CCPA standards. Lashvae AI is audited annually for SOC2 compliance. For custom compliance schemas, contact compliance@lashvae.ai.
        </p>
      </div>
    </div>
  )
}
