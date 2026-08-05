"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: Section
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] font-semibold text-[#0a0a0a] pr-4">
          {section.title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#8e8e93] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-[15px] text-[#222222] leading-relaxed space-y-3">
            {section.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DPAPage() {
  const [openIds, setOpenIds] = useState<string[]>(["overview"])

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const sections: Section[] = [
    {
      id: "overview",
      title: "1. Overview and parties",
      content: (
        <>
          <p>
            This Data Processing Agreement (&quot;DPA&quot;) forms part of, and is subject to, the agreement between Lashvae Technologies Ltd. (&quot;Lashvae&quot;, &quot;we&quot;, &quot;us&quot;, &quot;Processor&quot;) and the business customer that uses our services (&quot;Customer&quot;, &quot;you&quot;, &quot;Controller&quot;) under which we provide the Lashvae platform (the &quot;Principal Agreement&quot;).
          </p>
          <p>
            It records the terms on which we process personal data on your behalf when you use our AI-powered inbox to manage messages from channels such as Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps.
          </p>
          <p>
            By accepting the Principal Agreement, or by using the Lashvae platform, you enter into this DPA on behalf of yourself and, to the extent required by applicable data protection law, in the name and on behalf of your authorised affiliates. Where any conflict arises between this DPA and the Principal Agreement on the subject of data protection, this DPA prevails.
          </p>
        </>
      ),
    },
    {
      id: "definitions",
      title: "2. Definitions",
      content: (
        <>
          <p>
            Terms such as &quot;controller&quot;, &quot;processor&quot;, &quot;data subject&quot;, &quot;personal data&quot;, &quot;processing&quot;, &quot;personal data breach&quot;, and &quot;supervisory authority&quot; have the meanings given to them under Applicable Data Protection Law.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Applicable Data Protection Law</strong> &mdash; the UK GDPR and the Data Protection Act 2018; the EU GDPR; India&apos;s Digital Personal Data Protection Act, 2023 and rules made under it (&quot;DPDPA&quot;); and any other privacy or data protection law that applies to the processing under this DPA.</li>
            <li><strong>Customer Personal Data</strong> &mdash; any personal data that we process on your behalf under the Principal Agreement, including end-user message content and the categories set out in Annex 1.</li>
            <li><strong>End-user</strong> &mdash; an individual who messages you through a channel connected to the Lashvae platform.</li>
            <li><strong>Sub-processor</strong> &mdash; any third party engaged by us to process Customer Personal Data on our behalf.</li>
          </ul>
          <p>
            Under the DPDPA, references to &quot;controller&quot; include &quot;data fiduciary&quot; and references to &quot;data subject&quot; include &quot;data principal&quot;.
          </p>
        </>
      ),
    },
    {
      id: "roles",
      title: "3. Roles of the parties",
      content: (
        <>
          <p>
            For Customer Personal Data (including end-user message content), <strong>you are the controller and we are the processor</strong>. You determine the purposes and means of processing; we act only on your behalf.
          </p>
          <p>
            You are responsible for ensuring you have a valid legal basis (for example, consent or another lawful ground under Applicable Data Protection Law) for the processing you instruct us to carry out, including for enabling optional features such as using conversation data to train AI models, and for providing any notices required to your end-users.
          </p>
          <p>
            Separately, for your account, billing, and website-visitor data, Lashvae acts as an independent controller. That processing is described in our Privacy Notice and is not governed by this DPA.
          </p>
        </>
      ),
    },
    {
      id: "processing",
      title: "4. Our processing of Customer Personal Data",
      content: (
        <>
          <p>We will:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>process Customer Personal Data only on your documented instructions, including as set out in the Principal Agreement, this DPA, and your configuration of the platform, unless required to do otherwise by law (in which case we will inform you, unless the law prohibits it);</li>
            <li>process Customer Personal Data only for the purposes described in Annex 1 &mdash; to deliver, maintain, secure, and support the service &mdash; and not for our own independent purposes;</li>
            <li>not sell Customer Personal Data and not use it for our own marketing; and</li>
            <li>immediately inform you if, in our opinion, an instruction infringes Applicable Data Protection Law.</li>
          </ul>
          <p>
            Because the service processes free-text messages, special category (sensitive) data may incidentally appear in message content. We do not deliberately collect sensitive data and apply access controls to limit exposure. You remain responsible for the content your end-users submit.
          </p>
        </>
      ),
    },
    {
      id: "confidentiality",
      title: "5. Confidentiality",
      content: (
        <p>
          We ensure that personnel authorised to process Customer Personal Data are bound by appropriate confidentiality obligations (whether contractual or statutory), are trained on their data protection responsibilities, and access Customer Personal Data only on a need-to-know basis to perform their role.
        </p>
      ),
    },
    {
      id: "security",
      title: "6. Security measures",
      content: (
        <>
          <p>
            Taking into account the state of the art, the costs of implementation, and the nature, scope, context, and purposes of processing, we implement appropriate technical and organisational measures to protect Customer Personal Data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.
          </p>
          <p>
            A summary of the measures currently in place is set out in Annex 2. We may update these measures over time, provided the level of protection is not materially reduced.
          </p>
        </>
      ),
    },
    {
      id: "subprocessors",
      title: "7. Sub-processors",
      content: (
        <>
          <p>
            You provide general authorisation for us to engage the sub-processors listed in Annex 3 to process Customer Personal Data. Before adding or replacing a sub-processor, we will update Annex 3 (or otherwise notify you) so that you have the opportunity to object on reasonable data-protection grounds.
          </p>
          <p>
            We impose data protection obligations on each sub-processor by written contract that are no less protective than those in this DPA, and we remain responsible to you for a sub-processor&apos;s performance of its obligations.
          </p>
        </>
      ),
    },
    {
      id: "assistance",
      title: "8. Assisting you with data subject rights",
      content: (
        <p>
          Taking into account the nature of the processing, we will assist you by appropriate technical and organisational measures, insofar as possible, to respond to requests from data subjects to exercise their rights (such as access, correction, erasure, restriction, portability, and objection). If we receive such a request directly from one of your end-users, we will not respond ourselves except on your instructions, and will promptly forward the request to you unless legally required to act otherwise.
        </p>
      ),
    },
    {
      id: "breach",
      title: "9. Personal data breaches",
      content: (
        <>
          <p>
            We will notify you without undue delay after becoming aware of a personal data breach affecting Customer Personal Data, and in any event within the timeframe required by Applicable Data Protection Law, so that you can meet your own notification obligations. Under the DPDP Rules, 2025, breaches affecting Indian data principals must be reported to the Data Protection Board of India within 72 hours regardless of severity; we will support you accordingly.
          </p>
          <p>
            Our notification will include, to the extent available: the nature of the breach, the categories and approximate number of data subjects and records affected, the likely consequences, and the measures taken or proposed to address it. We will cooperate with you and take reasonable steps to mitigate and remediate the breach.
          </p>
        </>
      ),
    },
    {
      id: "dpia",
      title: "10. Data protection impact assessments",
      content: (
        <p>
          Taking into account the nature of the processing and the information available to us, we will provide reasonable assistance to help you carry out data protection impact assessments and, where required, prior consultations with a supervisory authority, in relation to your use of the Lashvae platform.
        </p>
      ),
    },
    {
      id: "transfers",
      title: "11. International transfers",
      content: (
        <p>
          We and our sub-processors may process Customer Personal Data in countries other than your own (for example, cloud hosting in AWS EU or US regions). Where we transfer Customer Personal Data out of the UK or EU, we put appropriate safeguards in place &mdash; such as Standard Contractual Clauses, the UK International Data Transfer Addendum, or reliance on an applicable adequacy decision. Where we transfer data governed by the DPDPA, we do so consistently with its requirements, including any Central Government restrictions on transfers to specified countries.
        </p>
      ),
    },
    {
      id: "deletion",
      title: "12. Return and deletion of data",
      content: (
        <p>
          On termination or expiry of the Principal Agreement, and at your choice, we will delete or return all Customer Personal Data and delete existing copies, unless retention is required by law. Conversation logs are retained for 12 months by default (or a custom period for enterprise customers), and residual copies may persist in secure backups for up to 90 days after deletion before being overwritten in the ordinary course, consistent with the retention terms in our Privacy Notice.
        </p>
      ),
    },
    {
      id: "audits",
      title: "13. Audits and information",
      content: (
        <p>
          We will make available to you information reasonably necessary to demonstrate compliance with this DPA, and will allow for and contribute to audits, including inspections, conducted by you or an auditor you mandate. Audits are subject to reasonable notice, confidentiality obligations, and a frequency and scope that avoids undue disruption; where available, we may satisfy an audit request by providing relevant third-party certifications or reports.
        </p>
      ),
    },
    {
      id: "liability-term",
      title: "14. Liability, term, and governing law",
      content: (
        <>
          <p>
            Each party&apos;s liability under this DPA is subject to the limitations and exclusions of liability set out in the Principal Agreement. This DPA takes effect on the date you accept the Principal Agreement and continues for as long as we process Customer Personal Data on your behalf.
          </p>
          <p>
            This DPA is governed by the laws of England and Wales, without prejudice to any mandatory requirements of Applicable Data Protection Law in your place of establishment or the location of the relevant data subjects.
          </p>
        </>
      ),
    },
    {
      id: "annex-1",
      title: "Annex 1 — Details of processing",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse min-w-[520px]">
            <tbody>
              <tr className="border-b border-[#f0f0f0] align-top">
                <td className="py-2 pr-3 font-semibold text-[#0a0a0a] w-[38%]">Subject matter</td>
                <td className="py-2">Provision of the Lashvae AI-powered inbox and related support services.</td>
              </tr>
              <tr className="border-b border-[#f0f0f0] align-top">
                <td className="py-2 pr-3 font-semibold text-[#0a0a0a]">Duration</td>
                <td className="py-2">For the term of the Principal Agreement, plus applicable retention and backup periods.</td>
              </tr>
              <tr className="border-b border-[#f0f0f0] align-top">
                <td className="py-2 pr-3 font-semibold text-[#0a0a0a]">Nature and purpose</td>
                <td className="py-2">Receiving, storing, routing, and displaying messages; automated and manual support; lead scoring and intent detection; AI-generated replies where enabled; analytics and security.</td>
              </tr>
              <tr className="border-b border-[#f0f0f0] align-top">
                <td className="py-2 pr-3 font-semibold text-[#0a0a0a]">Types of personal data</td>
                <td className="py-2">Message content and metadata (timestamps, status, participants); contact identifiers such as name, handle, phone number, or email; engagement and lead-score data; and any personal data end-users choose to include in messages.</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-3 font-semibold text-[#0a0a0a]">Categories of data subjects</td>
                <td className="py-2">Your end-users and any individuals referenced in messages; your authorised platform users.</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "annex-2",
      title: "Annex 2 — Technical and organisational measures",
      content: (
        <p>
          We apply industry-standard security measures, including HTTPS encryption, password hashing, encrypted authentication tokens, role-based access controls, separation of customer data between accounts, restricted database access, firewalls, rate limiting, webhook verification, audit logs, regular backups, and ongoing security monitoring.
        </p>
      ),
    },
    {
      id: "annex-3",
      title: "Annex 3 — Authorised sub-processors",
      content: (
        <>
          <p>
            We engage the following categories of sub-processor to help deliver the service. Each is bound by data protection obligations no less protective than those in this DPA.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cloud hosting and infrastructure providers (e.g., AWS).</li>
            <li>AI model and inference providers, used to power automated features you enable.</li>
            <li>Payment processors, for billing and subscription management.</li>
            <li>Email and communications providers, for transactional and support messages.</li>
            <li>Analytics providers, for aggregate usage and error monitoring.</li>
          </ul>
          <p className="text-[13px] text-[#8e8e93]">
            A current, named list with each provider&apos;s role and processing location is available on request at{" "}
            <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a>.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <>
          <p>For questions about this DPA or our data processing, contact us:</p>
          <div className="rounded-lg border border-[#e5e5e5] p-4 space-y-1">
            <p className="font-semibold text-[#0a0a0a]">Lashvae Technologies Ltd.</p>
            <p>Office 18036, 182&ndash;184 High Street North East, Ham, London E6 2JA</p>
            <p>Email: <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a></p>
            <p>Data Protection / Grievance Officer: Vishal T U &mdash; <a href="mailto:dpo@lashvae.com" className="text-[#0a0a0a] underline">dpo@lashvae.com</a></p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Data Processing Agreement</h1>
      <p className="text-[12px] text-[#8e8e93]">
        Lashvae Technologies Ltd. &middot; Effective from: 27 July 2026 &middot; Version 1.0
      </p>

      <p className="text-[15px] text-[#222222] leading-relaxed">
        This DPA governs how we process personal data on behalf of our business customers. It supplements our{" "}
        <a href="/legal/privacy" className="text-[#0a0a0a] underline">Privacy Notice</a>, which explains the data we process as a controller for your account, billing, and website-visitor data.
      </p>

      <div className="border-t border-[#e5e5e5]">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            section={section}
            isOpen={openIds.includes(section.id)}
            onToggle={() => toggle(section.id)}
          />
        ))}
      </div>

      <p className="text-[13px] text-[#8e8e93] pt-2">
        This DPA is governed by the laws of England and Wales, without prejudice to any mandatory requirements of the data protection law applicable to you or to the relevant data subjects.
      </p>
    </div>
  )
}