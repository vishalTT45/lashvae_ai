export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Security Status</h1>
      <p className="text-[12px] text-[#8e8e93]">Last updated: June 21, 2026</p>
      
      <div className="space-y-4 text-[15px] text-[#222222] leading-relaxed">
        <p>
          Lashvae AI maintains rigorous physical, technical, and administrative controls to protect customer operational databases.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">1. Encryption Architectures</h2>
        <p>
          All connections to our dashboard are encrypted using TLS 1.3. Databases containing vector embeddings, Notion tokens, and transaction logs are encrypted at rest using AES-256 standards.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">2. Token & API Management</h2>
        <p>
          Shopify and Gorgias API tokens are kept in encrypted hardware security modules (HSM). Tokens are only accessed transiently by automated workers during customer query resolution.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">3. Network Audits</h2>
        <p>
          Our cloud server containers undergo daily vulnerability scanning and monthly penetration testing. We maintain multi-region backups with automatic failover to guarantee service continuity.
        </p>

        <h2 className="text-[20px] font-bold text-[#0a0a0a] pt-4">4. Reporting Vulnerabilities</h2>
        <p>
          If you discover a security vulnerability in our platform, please report it immediately to security@lashvae.ai. We operate a coordinated disclosure program.
        </p>
      </div>
    </div>
  )
}
