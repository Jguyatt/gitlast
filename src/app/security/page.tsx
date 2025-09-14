export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold text-gray-900 mb-8">Security</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> December 2024
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Encryption</h2>
          <p className="text-gray-600 mb-4">
            All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Access Controls</h2>
          <p className="text-gray-600 mb-4">
            We implement strict access controls and multi-factor authentication for all systems handling user data.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security Monitoring</h2>
          <p className="text-gray-600 mb-4">
            Our systems are continuously monitored for security threats and unauthorized access attempts.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Incident Response</h2>
          <p className="text-gray-600 mb-4">
            We have a comprehensive incident response plan to address any security breaches promptly and effectively.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security Contact</h2>
          <p className="text-gray-600 mb-4">
            To report security vulnerabilities, please contact us at security@twinly.com
          </p>
        </div>
      </div>
    </div>
  );
} 
