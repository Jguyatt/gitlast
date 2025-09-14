'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/twinlyremove.png" alt="Twinly" width={32} height={32} />
              <span className="text-xl font-semibold text-white">Twinly</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your AI communication twin that helps you stay productive, authentic, and efficient in all your digital interactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="/enterprise" className="block text-gray-400 hover:text-white transition-colors">Enterprise</a>
              <a href="/faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="/security" className="block text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
          
          {/* Right: Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="mailto:support@twinly.ai" className="block text-gray-400 hover:text-white transition-colors">Contact Support</a>
              <a href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/gdpr" className="block text-gray-400 hover:text-white transition-colors">GDPR</a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Twinly. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>SOC 2 Type II Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
