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

export default function PrivacyPage() {
  const [openIds, setOpenIds] = useState<string[]>(["who-we-are"])

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const sections: Section[] = [
    {
      id: "who-we-are",
      title: "1. Who we are",
      content: (
        <>
          <p>
            Lashvae Technologies Ltd. (&quot;Lashvae&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in the United Kingdom, with its office at Office 18036, 182&ndash;184 High Street North East, Ham, London, E6 2JA.
          </p>
          <p>
            We provide an AI-powered inbox that helps businesses manage messages from channels such as Instagram, WhatsApp, Facebook, Telegram, YouTube, and Google Maps in one place.
          </p>
          <p>
            This Notice explains what personal data we collect, why we collect it, and what rights you have over it. It applies to visitors to our website, our business customers, and the end-users who message our customers through the Lashvae platform. For end-user message data, our business customers act as the data controller and we act as their data processor under a Data Processing Agreement. For your account, billing, and website visitor data, we act as the data controller.
          </p>
        </>
      ),
    },
    {
      id: "laws",
      title: "2. Which laws this Notice follows",
      content: (
        <>
          <p>
            For purposes of the General Data Protection Regulation (GDPR) and other applicable data protection laws, we rely on a number of legal bases to process your Personal Data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018;</li>
            <li>The EU General Data Protection Regulation (GDPR), where it applies to individuals located in the EU;</li>
            <li>
              India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDPA&quot;) once the DPDPA enters into effect, and rules issued thereunder. Further, the term &quot;data controller&quot; includes &quot;data fiduciaries,&quot; and the term &quot;data subject&quot; includes &quot;data principal,&quot; both as defined in the DPDPA.
            </li>
            <li>
              Where our business customers or their end-users are located in other jurisdictions (for example, US states with comprehensive privacy laws), we assess and, where required, comply with those laws as well.
            </li>
          </ul>
          <p>
            Where these laws use different terms for the same thing, we use the plain-English version in this Notice (for example, we say &quot;we&quot; instead of &quot;Data Controller&quot; or &quot;Data Fiduciary&quot;).
          </p>
        </>
      ),
    },
    {
      id: "what-we-collect",
      title: "3. What information we collect",
      content: (
        <>
          <h4 className="text-[14px] font-semibold text-[#0a0a0a]">a. Information you give us directly</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account details: name, email address, phone number, company name, billing address, and payment information.</li>
            <li>Files or documents you upload to use our services.</li>
          </ul>

          <h4 className="text-[14px] font-semibold text-[#0a0a0a] pt-1">b. Information created when you use our service</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Messages and conversation details (timestamps, status, who was involved).</li>
            <li>Analytics data about which features are used, and error logs.</li>
            <li>Lead scores, customer intent, and engagement metrics generated from conversations.</li>
          </ul>

          <h4 className="text-[14px] font-semibold text-[#0a0a0a] pt-1">c. Technical information</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, device type, browser, and operating system.</li>
            <li>Session IDs, login (authentication) tokens, and cookie identifiers (if cookies are enabled in future).</li>
            <li>The web page you came from, and how you interact with our platform.</li>
          </ul>

          <h4 className="text-[14px] font-semibold text-[#0a0a0a] pt-1">d. Information you choose to give us (optional)</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Consent to let us use conversation data to train AI models. Where the conversation involves an end-user, we require our business customer to obtain the end-user&apos;s consent (or rely on another valid legal basis) before enabling this feature, in addition to the business customer&apos;s own opt-in.
            </li>
            <li>Marketing preferences, or participation in beta programs.</li>
          </ul>

          <p className="pt-1">
            <strong>Important:</strong> We do not read the content of your customers&apos; conversations for any purpose other than delivering the service to you, unless you&apos;ve given clear, explicit consent (for example, for AI training). Because our Service processes free-text messages, special category (sensitive) data may incidentally be present within message content (for example, if an end-user mentions health information). We do not deliberately seek to collect sensitive personal data, and we apply access controls to limit exposure of message content.
          </p>
        </>
      ),
    },
    {
      id: "where-from",
      title: "4. Where this information comes from",
      content: (
        <>
          <p>We collect information from:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Our business customers and their end-users;</li>
            <li>Our website and account sign-up forms;</li>
            <li>Social media platforms and APIs connected to your account (e.g., Instagram, WhatsApp, Facebook, Telegram, YouTube, Google);</li>
            <li>Bookings and support requests; and</li>
            <li>Technical logs generated automatically when you use our platform.</li>
          </ul>
        </>
      ),
    },
    {
      id: "why-we-use",
      title: "5. Why we use your information, and our legal basis for doing so",
      content: (
        <>
          <p>
            We use personal data for the purposes below. Under the GDPR, every use of personal data needs a &quot;legal basis&quot; &mdash; a lawful reason recognised by the law. We&apos;ve set these out here for transparency.
          </p>

          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-[13px] border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left py-2 pr-3 font-semibold text-[#0a0a0a]">What we do</th>
                  <th className="text-left py-2 pr-3 font-semibold text-[#0a0a0a]">Why</th>
                  <th className="text-left py-2 pr-3 font-semibold text-[#0a0a0a]">GDPR legal basis</th>
                  <th className="text-left py-2 font-semibold text-[#0a0a0a]">DPDPA basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Creating and managing your account, providing the dashboard, authenticating users</td>
                  <td className="py-2 pr-3">To deliver the service you&apos;ve signed up for</td>
                  <td className="py-2 pr-3">Performance of a contract (Art. 6(1)(b))</td>
                  <td className="py-2">Consent under Section 6, or, where applicable, a legitimate use enumerated under Section 7</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Managing conversations, automated &amp; manual customer support, bookings, FAQs</td>
                  <td className="py-2 pr-3">Core service delivery</td>
                  <td className="py-2 pr-3">
                    For our business customers: Performance of a contract (Art. 6(1)(b)). For end-users: processed by us on our business customer&apos;s behalf as processor &mdash; the business customer&apos;s own legal basis with its end-user applies
                  </td>
                  <td className="py-2">Consent</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Billing, invoicing, and subscription management</td>
                  <td className="py-2 pr-3">To charge you correctly and keep accurate records</td>
                  <td className="py-2 pr-3">Performance of a contract (Art. 6(1)(b)); Legal obligation (Art. 6(1)(c))</td>
                  <td className="py-2">Consent; legitimate use for specified purpose</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Product updates, support messages, security alerts, administrative notices</td>
                  <td className="py-2 pr-3">To keep you informed and secure</td>
                  <td className="py-2 pr-3">Legitimate interests (Art. 6(1)(f))</td>
                  <td className="py-2">Consent</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Marketing communications</td>
                  <td className="py-2 pr-3">To tell you about relevant offers</td>
                  <td className="py-2 pr-3">Consent (Art. 6(1)(a))</td>
                  <td className="py-2">Consent</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Analytics, lead scoring, generating business insights, detecting anomalies</td>
                  <td className="py-2 pr-3">To improve the platform and keep it secure</td>
                  <td className="py-2 pr-3">Legitimate interests (Art. 6(1)(f))</td>
                  <td className="py-2">Consent / legitimate use</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Using conversation content to train AI models</td>
                  <td className="py-2 pr-3">Only where you&apos;ve opted in</td>
                  <td className="py-2 pr-3">Consent (Art. 6(1)(a))</td>
                  <td className="py-2">Consent</td>
                </tr>
                <tr className="border-b border-[#f0f0f0] align-top">
                  <td className="py-2 pr-3">Security monitoring, fraud and abuse prevention</td>
                  <td className="py-2 pr-3">To protect our systems and users</td>
                  <td className="py-2 pr-3">Legitimate interests (Art. 6(1)(f))</td>
                  <td className="py-2">Legitimate use</td>
                </tr>
                <tr className="align-top">
                  <td className="py-2 pr-3">Complying with tax, accounting, and other legal obligations</td>
                  <td className="py-2 pr-3">Because the law requires it</td>
                  <td className="py-2 pr-3">Legal obligation (Art. 6(1)(c))</td>
                  <td className="py-2">Legitimate use (compliance with law)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="pt-1">
            Where we rely on your consent, you can withdraw it at any time by contacting us at{" "}
            <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a>, without affecting anything we did before you withdrew it. Please note that where your data has already been used to train an AI model, withdrawing consent stops further use of your data going forward but cannot remove its influence on a model already trained.
          </p>
          <p>We do not sell your personal data to anyone.</p>
        </>
      ),
    },
    {
      id: "who-we-share",
      title: "6. Who we share your information with",
      content: (
        <>
          <p>We may share personal data with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Our own staff &mdash; support and engineering teams who need it to run the service.</li>
            <li>Service providers we&apos;ve contracted with (and who are bound by confidentiality/NDA obligations) &mdash; such as hosting providers, email providers, AI providers, payment processors, and analytics providers.</li>
            <li>Connected platforms you choose to link to your account &mdash; such as Instagram, Facebook, Telegram, YouTube, and Google.</li>
            <li>Enterprise customers, limited strictly to that enterprise customer&apos;s own account data &mdash; we do not share one customer&apos;s data with another customer, where this is part of a specific contractual arrangement for custom services.</li>
            <li>Legal or regulatory authorities, where we&apos;re required to by law.</li>
          </ul>
          <p>All third parties we work with are required to protect your data and use it only for the purposes we specify.</p>
          <p>
            <strong>How we share it:</strong> We share only the data each recipient needs to do its job &mdash; for example, our payment processor receives billing details but not your conversation content, and our hosting provider stores data securely on our behalf under a data processing agreement. We don&apos;t hand over full, unrestricted access to your data to any third party, and none of this sharing is for the third party&apos;s own marketing purposes.
          </p>
        </>
      ),
    },
    {
      id: "transfers",
      title: "7. Sending your data outside your country",
      content: (
        <>
          <p>
            Some of our service providers (for example, cloud hosting on AWS EU or US regions) may store or process data in a country other than the one you live in.
          </p>
          <p>
            Where we transfer personal data out of the UK or EU, we put appropriate safeguards in place, such as Standard Contractual Clauses, the UK International Data Transfer Addendum, or reliance on an applicable adequacy decision. Where we transfer personal data out of India, we do so consistently with the requirements of the DPDPA, including by not transferring data to any country restricted by the Central Government from time to time.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "8. How long we keep your information",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account data: kept for as long as your subscription is active, plus 90 days after cancellation.</li>
            <li>
              Conversation logs: kept for 12 months by default. Enterprise customers can request a custom retention period. If your account is cancelled before the 12-month period ends, conversation logs are deleted no later than 90 days after cancellation, consistent with our account data retention above.
            </li>
            <li>Backups: may retain copies for up to 90 days after deletion, for operational continuity, even after you&apos;ve asked us to delete your data elsewhere.</li>
          </ul>
          <p>
            You can ask us to delete your data at any time by emailing{" "}
            <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a>.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "9. Your rights",
      content: (
        <>
          <p>Depending on where you live, you may have the following rights over your personal data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access</strong> &mdash; the right to request a copy of the personal data we process about you, subject to certain exceptions and conditions.</li>
            <li><strong>Correction</strong> &mdash; the right to request that we correct inaccurate personal data we retain about you.</li>
            <li><strong>Erasure</strong> &mdash; the right to request that we delete personal data collected from you when you use our Services, subject to certain exceptions.</li>
            <li><strong>Restriction</strong> &mdash; ask us to limit how we use your data in certain situations.</li>
            <li><strong>Portability</strong> &mdash; ask us for your data in a portable, machine-readable format.</li>
            <li><strong>Objection</strong> &mdash; object to us using your data for direct marketing, or on grounds relating to your particular situation.</li>
            <li><strong>Withdraw consent</strong> &mdash; where we rely on consent, withdraw it at any time.</li>
            <li><strong>Grievance redressal/nomination</strong> &mdash; under the DPDPA, you can raise a grievance about how we handle your data, and nominate another individual to exercise your rights in the event of your death or incapacity.</li>
            <li><strong>Complain to a regulator</strong> &mdash; you also have the right to complain to the data protection supervisory authority responsible for us. You can contact the data protection authority in your place of residence, which will then forward your request to the competent authority.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us as outlined below. We will respond within reasonable time under the appropriate law. However, please be aware that these rights are subject to certain limitations; we may decline a request if we have a lawful reason for doing so. That said, we strive to prioritize the protection of personal data, and comply with all applicable privacy laws.
          </p>

          <h4 className="text-[14px] font-semibold text-[#0a0a0a] pt-1">Process for exercising your data protection rights</h4>
          <p>
            To exercise your rights, you or an authorized agent may submit a request by contacting us. After we receive your request, we may verify it by requesting information sufficient to confirm your identity (e.g. email address, billing details). Where a third party representative submits a request on behalf of a data subject, we require evidence of authorization to act on behalf of the data subject.
          </p>
          <p>
            We will respond to your request within the period required by the data protection law that applies to you. For example, where the EU GDPR, UK GDPR, or DPDPA applies, we will respond within one calendar month of receiving a verifiable request, and where your request is complex or you have made a number of requests within a short timeframe, we may extend that period by up to a further two months. Where another law applies to you and sets a different period, we will respond within that period.
          </p>
          <p>
            To exercise your data protection rights related to Personal Data we process as a data controller or data processor, contact us as outlined below. If you believe we have not properly handled your rights request, you can escalate to the appropriate Data Protection Authority.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "10. Cookies",
      content: (
        <>
          <p>
            We do not currently use tracking or advertising cookies on our website. We use a strictly necessary session/authentication token (which may be cookie-based or an equivalent mechanism) solely to keep you securely logged in. In the future, we may use:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Strictly necessary cookies &mdash; for authentication and session security.</li>
            <li>Functional cookies &mdash; to remember preferences like theme or language.</li>
            <li>Analytics cookies &mdash; for aggregate usage insights, via tools such as PostHog.</li>
          </ul>
          <p>
            We do not use third-party advertising or tracking cookies. When we do start using cookies, you&apos;ll be able to manage your preferences through your browser, or by emailing{" "}
            <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a>.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "11. How we protect your information",
      content: (
        <p>
          We use industry-standard security measures, including HTTPS encryption, password hashing, encrypted authentication tokens, role-based access controls, separation of customer data between accounts, restricted database access, firewalls, rate limiting, webhook verification, audit logs, regular backups, and ongoing security monitoring.
        </p>
      ),
    },
    {
      id: "automated",
      title: "12. Automated decision-making and profiling",
      content: (
        <>
          <p>Some of our features involve automated processing of your data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Lead scoring and intent detection:</strong> we automatically analyse conversation metadata to flag likely leads, complaints, or booking requests to our business customers.
            </li>
            <li>
              <strong>AI-generated replies:</strong> where enabled, our AI drafts or sends responses to messages based on conversation content.
            </li>
          </ul>
          <p>
            This processing helps our business customers respond faster &mdash; it does not produce a legal effect or similarly significant effect on you (for example, it does not decide whether you get a service, a job, credit, or a price). It is designed to support, not replace, human judgement, and our business customers remain able to review, override, or intervene in any automated output. We have assessed this processing and do not consider it high-risk under Art. 35 GDPR given the human-review safeguards described above; we will carry out a Data Protection Impact Assessment before deploying any feature that could produce legal or similarly significant effects on individuals.
          </p>
          <p>
            If this changes in the future &mdash; for example, if any automated process starts producing decisions with legal or similarly significant effects on individuals &mdash; we will update this Notice, explain the logic involved, and tell you about your right to request human intervention, express your point of view, and contest the decision.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "13. Children's data",
      content: (
        <p>
          Our services are intended for business use and are not directed at children. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data (a child being someone under the relevant digital consent age in their jurisdiction &mdash; for example, 13&ndash;16 under GDPR/UK GDPR member state law, or 18 under the DPDPA), please contact us at{" "}
          <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a>{" "}
          so that we can delete the data and deactivate any associated account within a reasonable period, and take any other appropriate action.
        </p>
      ),
    },
    {
      id: "breach",
      title: "14. Breach notification",
      content: (
        <>
          <p>
            If we become aware of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify you using the email address associated with your account or the contact details you&apos;ve provided to us.
          </p>
          <p>
            <strong>Timeline.</strong> We will notify the relevant supervisory authority within 72 hours where required (e.g., under UK/EU GDPR or under any law), or to the Data Protection Board of India under the DPDP Rules, 2025, which requires reporting within 72 hours regardless of the breach&apos;s severity, and will notify affected individuals without undue delay where the breach poses a risk to you.
          </p>
          <p>
            <strong>What we&apos;ll tell you.</strong> Our breach notification will include the information required by applicable law, which may cover: the nature of the breach, the categories and approximate number of individuals and records affected, the likely consequences of the breach, the measures we&apos;ve taken or propose to take to address it, and how to contact us for more information.
          </p>
          <p>
            <strong>What you should do.</strong> If you receive a breach notification from us, please follow any specific guidance included in that notice (for example, updating your password). We will investigate the breach and work to resolve the matter as soon as possible, and will keep you updated on any significant developments.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes to this Notice",
      content: (
        <p>
          We may update this Notice from time to time, for example if our practices change or the law requires it. We&apos;ll post any updates on this page, along with the date they take effect.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us & Grievance Resolution",
      content: (
        <>
          <p>
            If you have complaints about how we handle your personal data or if you believe we have violated your data rights, contact us:
          </p>

          <div className="rounded-lg border border-[#e5e5e5] p-4 space-y-1">
            <p className="font-semibold text-[#0a0a0a]">Data Controller: Lashvae Technology Ltd</p>
            <p>Represented by Vishal T U</p>
            <p>#37, Louise De Marillac House, Smithy St, Stepney Green, London E1 3HP</p>
            <p>+44 7405 933901</p>
            <p>Email: <a href="mailto:Vishal@lashvae.com" className="text-[#0a0a0a] underline">Vishal@lashvae.com</a></p>
            <p>Email: <a href="mailto:dpo@lashvae.com" className="text-[#0a0a0a] underline">dpo@lashvae.com</a></p>
          </div>

          <p>For questions about privacy, data requests, or cookies, contact us:</p>

          <div className="rounded-lg border border-[#e5e5e5] p-4 space-y-1">
            <p className="font-semibold text-[#0a0a0a]">Lashvae Technology Ltd</p>
            <p>Office 18036, 182&ndash;184 High Street North East, Ham, London E6 2JA</p>
            <p>Email: <a href="mailto:privacy@lashvae.com" className="text-[#0a0a0a] underline">privacy@lashvae.com</a></p>
          </div>

          <p>We will investigate and respond within 30 days or as may be within the time frame prescribed by the law under governance.</p>

          <p>
            <strong>Grievance Officer</strong> (for the purposes of the Digital Personal Data Protection Act, 2023): Vishal T U, Grievance Officer, contactable at{" "}
            <a href="mailto:Vishal@lashvae.com" className="text-[#0a0a0a] underline">Vishal@lashvae.com</a>.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-bold text-[#0a0a0a] tracking-tight">Privacy Notice</h1>
      <p className="text-[12px] text-[#8e8e93]">
        Lashvae Technologies Ltd. &middot; Effective from: 27 July 2026 &middot; Version 1.0
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
        This Notice is governed by the laws of England and Wales, without prejudice to your statutory rights under the data protection law of your own country of residence.
      </p>
    </div>
  )
}