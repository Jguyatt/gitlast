import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GDPR Compliance - Twinly",
  description: "Twinly GDPR Compliance - Learn how we protect your data rights under the General Data Protection Regulation.",
}

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <header className="border-b border-border pb-8 mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">GDPR Compliance</h1>
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
              Twinly is committed to protecting your privacy and ensuring compliance with the General Data Protection
              Regulation (GDPR). This page outlines how we handle your personal data in accordance with GDPR
              requirements and your rights as a data subject.
            </p>
            <p className="text-foreground leading-relaxed text-lg">
              <strong>
                We are fully committed to GDPR compliance and protecting your fundamental privacy rights.
              </strong>
            </p>
          </div>

          <div className="space-y-12">
            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Legal Basis for Processing
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  We process your personal data under the following legal bases:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Contract Performance</h4>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      Processing necessary to provide our Services and fulfill our contractual obligations to you.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Legitimate Interest</h4>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Processing for service improvement, security, and business operations.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Consent</h4>
                    <p className="text-purple-800 dark:text-purple-200 text-sm">
                      Processing based on your explicit consent for specific purposes.
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Legal Obligation</h4>
                    <p className="text-orange-800 dark:text-orange-200 text-sm">
                      Processing required to comply with applicable laws and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Your Data Protection Rights
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.1</span> Right of Access
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You have the right to request access to your personal data and receive information about how we
                    process it, including the purposes, categories, and recipients of your data.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.2</span> Right to Rectification
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You can request correction of inaccurate or incomplete personal data. We will update your
                    information promptly upon verification.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.3</span> Right to Erasure
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You may request deletion of your personal data in certain circumstances, such as when the data is
                    no longer necessary for the original purpose or when you withdraw consent.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.4</span> Right to Restrict Processing
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You can request that we limit the processing of your personal data in specific situations, such as
                    when you contest the accuracy of the data or object to processing.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.5</span> Right to Data Portability
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You have the right to receive your personal data in a structured, commonly used format and to
                    transmit that data to another controller where technically feasible.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">2.6</span> Right to Object
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    You can object to the processing of your personal data for direct marketing purposes or when
                    processing is based on legitimate interests.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Data Processing Activities
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Account Management</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Data Types:</strong></p>
                        <p className="text-foreground text-sm">Name, email, password, profile information</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Purpose:</strong></p>
                        <p className="text-foreground text-sm">Account creation, authentication, user support</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Service Provision</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Data Types:</strong></p>
                        <p className="text-foreground text-sm">Communication content, usage patterns, preferences</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Purpose:</strong></p>
                        <p className="text-foreground text-sm">AI processing, service improvement, personalization</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Billing and Payments</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Data Types:</strong></p>
                        <p className="text-foreground text-sm">Payment information, billing address, transaction history</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2"><strong>Purpose:</strong></p>
                        <p className="text-foreground text-sm">Payment processing, subscription management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Data Transfers and International Processing
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  We may transfer your personal data outside the European Economic Area (EEA) with appropriate
                  safeguards:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Adequacy Decisions</h4>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Transfers to countries with adequate data protection levels
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Contractual Clauses</h4>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      EU-approved contractual clauses for data protection
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Binding Corporate Rules</h4>
                    <p className="text-purple-800 dark:text-purple-200 text-sm">
                      Internal data protection policies for international transfers
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Certification Schemes</h4>
                    <p className="text-orange-800 dark:text-orange-200 text-sm">
                      Third-party certifications ensuring adequate protection
                    </p>
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
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  We retain personal data only as long as necessary for the purposes outlined in our Privacy Policy:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Account Data:</span>
                    <span className="text-foreground">Retained while your account is active and for 3 years after closure</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Communication Data:</span>
                    <span className="text-foreground">Retained for 2 years or as required by law</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Billing Records:</span>
                    <span className="text-foreground">Retained for 7 years for tax and accounting purposes</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Analytics Data:</span>
                    <span className="text-foreground">Anonymized after 2 years, deleted after 5 years</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Security Measures
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  We implement comprehensive security measures to protect your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Technical Safeguards</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• End-to-end encryption</li>
                        <li>• Secure data transmission (TLS/SSL)</li>
                        <li>• Regular security audits</li>
                        <li>• Access controls and authentication</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Organizational Measures</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Staff training on data protection</li>
                        <li>• Data protection impact assessments</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular compliance reviews</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                Exercising Your Rights
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  To exercise your GDPR rights, you can:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Email Us:</span>
                    <span className="text-foreground">
                      Contact us at{" "}
                      <a href="mailto:privacy@twinly.ai" className="text-primary hover:underline font-semibold">
                        privacy@twinly.ai
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Account Settings:</span>
                    <span className="text-foreground">Use your account dashboard to manage preferences and data</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-primary min-w-fit">Response Time:</span>
                    <span className="text-foreground">We will respond to your request within 30 days</span>
                  </div>
                </div>
                <div className="bg-muted border border-border rounded-lg p-4 mt-6">
                  <p className="text-foreground leading-relaxed">
                    <strong>Identity Verification:</strong> We may request additional information to verify your
                    identity before processing your request, as required by GDPR.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Supervisory Authority
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  You have the right to lodge a complaint with a supervisory authority if you believe we have
                  violated your data protection rights.
                </p>
                <div className="bg-muted border border-border rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>EU Residents:</strong> You can contact your local data protection authority or the
                    authority in the country where you believe the violation occurred.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  9
                </span>
                Contact Us
              </h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                For GDPR-related questions or to exercise your rights, please contact us:
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
                Twinly is committed to GDPR compliance and protecting your fundamental privacy rights. We regularly
                review and update our data protection practices to ensure continued compliance with applicable laws.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                © 2025 Twinly. All rights reserved. | GDPR Compliant | SOC 2 Type II Compliant
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
} 
