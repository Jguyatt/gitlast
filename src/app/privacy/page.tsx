import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Twinly",
  description: "Twinly Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <header className="border-b border-border pb-8 mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Privacy Policy</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Last Updated:</strong> September 13, 2025
            </p>
            <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-md">
              <strong className="text-foreground">Effective Date:</strong> September 13, 2025
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
            <p className="text-foreground leading-relaxed mb-4 text-lg">
              Twinly ("Twinly," "we," "our," or "us") respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and share information when you use our
              websites, applications, and related services (the "Services").
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              <strong>
                By using the Services, you agree to this Privacy Policy. If you do not agree, please do not use the
                Services.
              </strong>
            </p>
          </div>

          <div className="space-y-12">
            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                We collect the following categories of information:
              </p>

              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">1.1</span> Information You Provide
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                    <li>Account information (name, email, password).</li>
                    <li>Billing details (payment card, billing address, subscription tier).</li>
                    <li>
                      Content you upload or connect to Twinly (e.g., emails, PDFs, files, or data from integrated apps).
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">1.2</span> Information Collected Automatically
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                    <li>Usage data (features you use, actions you take).</li>
                    <li>Log data (IP address, browser type, operating system, date/time of access).</li>
                    <li>Device information (device model, OS version, unique identifiers).</li>
                    <li>Cookies and similar technologies for analytics and session management.</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">1.3</span> Third-Party Integrations
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    If you connect Twinly to third-party apps (e.g., Gmail, Outlook, Slack, CRM tools), we may access
                    data from those services as authorized by you.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                How We Use Information
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                  <li>Provide, maintain, and improve the Services.</li>
                  <li>Personalize your experience.</li>
                  <li>Process payments and manage billing.</li>
                  <li>Send important notices (service updates, security alerts, account changes).</li>
                  <li>Train and improve AI models (Free and Pro plans only).</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                AI Training and Data Use
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Free & Pro Plans</h4>
                    <p className="text-orange-800 dark:text-orange-200 text-sm">
                      Customer Data may be used to train and improve Twinly's AI models.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Enterprise Plans</h4>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Customer Data is excluded from AI training.
                    </p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mt-6">
                  We may create anonymized or aggregated data for analytics and research, which does not identify
                  individuals.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Sharing of Information
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-red-900 dark:text-red-100 font-semibold text-lg">
                    We do not sell your personal information.
                  </p>
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-lg">We may share data only in these cases:</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Service Providers:</span>
                    <span className="text-foreground">
                      With vendors (e.g., Stripe for billing, hosting providers, analytics tools) who process data on
                      our behalf.
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Legal Compliance:</span>
                    <span className="text-foreground">If required by law, regulation, or valid legal request.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Business Transfers:</span>
                    <span className="text-foreground">
                      In connection with a merger, acquisition, or sale of assets.
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">With Consent:</span>
                    <span className="text-foreground">If you explicitly authorize sharing.</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Data Retention
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  We retain personal data as long as necessary to provide the Services and comply with legal
                  obligations. Upon account deletion, we delete or anonymize Customer Data within a reasonable time,
                  unless required to retain it by law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Security
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  We implement commercially reasonable security measures to protect personal data, including encryption,
                  access controls, and monitoring. However, no system is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                International Data Transfers
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  If you access the Services from outside Canada, your data may be processed in countries that may not
                  provide the same level of data protection. We will take appropriate safeguards where required.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Your Rights
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  Depending on your location, you may have rights under privacy laws (e.g., GDPR, CCPA, PIPEDA):
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <ul className="space-y-2 text-blue-900 dark:text-blue-100">
                      <li>• Access, correct, or delete your personal data</li>
                      <li>• Object to or restrict processing</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <ul className="space-y-2 text-purple-900 dark:text-purple-100">
                      <li>• Withdraw consent where applicable</li>
                      <li>• Data portability</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted border border-border rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>To exercise your rights:</strong> Contact us at{" "}
                    <a href="mailto:privacy@twinly.ai" className="text-primary hover:underline font-semibold text-lg">
                      privacy@twinly.ai
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  9
                </span>
                Children's Privacy
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  The Services are not directed to individuals under 16. We do not knowingly collect data from children.
                  If we become aware that we have collected such data, we will delete it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  10
                </span>
                Changes to This Policy
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on our website with a new
                  "Last Updated" date.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  11
                </span>
                Contact Us
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                If you have questions or requests regarding this Privacy Policy, you can contact us at:
              </p>
              <div className="bg-gradient-to-br from-card to-muted border-2 border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
                    T
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Twinly</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground font-medium min-w-fit">Email:</span>
                        <a
                          href="mailto:privacy@twinly.ai"
                          className="text-primary hover:underline font-semibold text-lg"
                        >
                          privacy@twinly.ai
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground font-medium min-w-fit">Location:</span>
                        <span className="text-foreground font-medium">Canada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Privacy Policy constitutes a legally binding agreement between you and Twinly. Please review this
                document carefully and contact us if you have any questions about your privacy rights.
              </p>
              <p className="text-xs text-muted-foreground mt-4">© 2025 Twinly. All rights reserved. | GDPR Compliant | SOC 2 Type II Compliant</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
} 
