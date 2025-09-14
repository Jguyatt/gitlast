import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Twinly",
  description: "Twinly Terms of Service - Read our terms and conditions for using our AI communication platform.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <header className="border-b border-border pb-8 mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Terms of Service</h1>
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
              Welcome to Twinly ("Twinly," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our
              AI communication platform and related services (the "Services"). By accessing or using our Services, you
              agree to be bound by these Terms.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              <strong>
                Please read these Terms carefully. If you do not agree to these Terms, please do not use our Services.
              </strong>
            </p>
          </div>

          <div className="space-y-12">
            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Acceptance of Terms
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  By creating an account, accessing, or using Twinly's Services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-foreground leading-relaxed">
                  If you are using the Services on behalf of an organization, you represent that you have the authority
                  to bind that organization to these Terms.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Description of Services
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  Twinly provides AI-powered communication tools that help users:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                  <li>Generate and improve written communications</li>
                  <li>Analyze and process email content</li>
                  <li>Integrate with third-party communication platforms</li>
                  <li>Access AI-powered writing assistance and templates</li>
                </ul>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                User Accounts and Registration
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">3.1</span> Account Creation
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You must provide accurate, current, and complete information when creating an account. You are
                    responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">3.2</span> Account Security
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You are responsible for all activities that occur under your account. Notify us immediately of any
                    unauthorized use of your account.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Acceptable Use Policy
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  You agree not to use the Services for any unlawful or prohibited activities, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">Prohibited Uses</h4>
                    <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                      <li>• Illegal activities or content</li>
                      <li>• Harassment or abuse</li>
                      <li>• Spam or unsolicited communications</li>
                      <li>• Violation of intellectual property rights</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Restricted Activities</h4>
                    <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                      <li>• Reverse engineering our systems</li>
                      <li>• Attempting to gain unauthorized access</li>
                      <li>• Interfering with service operations</li>
                      <li>• Creating multiple accounts to circumvent limits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Subscription Plans and Billing
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">5.1</span> Subscription Tiers
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Free Plan</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        Basic features with usage limits
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Pro Plan</h4>
                      <p className="text-purple-800 dark:text-purple-200 text-sm">
                        Advanced features and higher limits
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Enterprise</h4>
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        Custom solutions and dedicated support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">5.2</span> Payment Terms
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>All fees are non-refundable unless otherwise specified</li>
                    <li>We may change pricing with 30 days' notice</li>
                    <li>Failed payments may result in service suspension</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Intellectual Property Rights
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Our Rights</h3>
                    <p className="text-foreground leading-relaxed">
                      Twinly owns all rights, title, and interest in the Services, including all intellectual property
                      rights. You may not copy, modify, or distribute our proprietary content.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Your Content</h3>
                    <p className="text-foreground leading-relaxed">
                      You retain ownership of content you provide to Twinly. By using our Services, you grant us a
                      license to process and improve your content as described in our Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                Privacy and Data Protection
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  Your privacy is important to us. Our collection and use of personal information is governed by our
                  Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <div className="bg-muted border border-border rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>Key Points:</strong> We implement security measures to protect your data, comply with
                    applicable privacy laws, and provide transparency about our data practices.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Service Availability and Modifications
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. We may
                  modify, suspend, or discontinue the Services at any time with reasonable notice. We are not liable
                  for any downtime or service interruptions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  9
                </span>
                Limitation of Liability
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold text-lg">
                    Important: Please read this section carefully.
                  </p>
                </div>
                <p className="text-foreground leading-relaxed">
                  To the maximum extent permitted by law, Twinly shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or
                  business opportunities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  10
                </span>
                Termination
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  Either party may terminate these Terms at any time. Upon termination, your right to use the Services
                  ceases immediately. We may suspend or terminate your account for violations of these Terms or for
                  any other reason at our discretion.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  11
                </span>
                Governing Law and Disputes
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  These Terms are governed by the laws of Canada. Any disputes arising from these Terms or your use of
                  the Services will be resolved through binding arbitration.
                </p>
                <div className="bg-muted border border-border rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>Dispute Resolution:</strong> We encourage resolving disputes through direct communication
                    before pursuing formal legal action.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  12
                </span>
                Changes to Terms
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  We may update these Terms from time to time. Material changes will be communicated through our
                  Services or via email. Continued use of the Services after changes constitutes acceptance of the new
                  Terms.
                </p>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  13
                </span>
                Contact Information
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                If you have questions about these Terms of Service, please contact us:
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
                          href="mailto:legal@twinly.ai"
                          className="text-primary hover:underline font-semibold text-lg"
                        >
                          legal@twinly.ai
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
                These Terms of Service constitute a legally binding agreement between you and Twinly. By using our
                Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className="text-xs text-muted-foreground mt-4">© 2025 Twinly. All rights reserved. | GDPR Compliant | SOC 2 Type II Compliant</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
} 
