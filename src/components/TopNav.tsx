'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  active?: 'home' | 'pricing' | 'enterprise';
  /** Text for the pill CTA on the right */
  ctaLabel: string;
  /** If provided, CTA renders as a link */
  ctaHref?: string;
  /** If provided, CTA renders as a button and calls this handler */
  onCtaClick?: () => void;
};

export default function TopNav({ active, ctaLabel, ctaHref, onCtaClick }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'text-white font-semibold text-base transition-opacity opacity-80 hover:opacity-100';
  const activeLink = 'opacity-100';

  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] md:w-[98vw]"
    >
      <div
        className={`rounded-full pl-0 pr-0 py-3 border transition-all duration-500 ease-out
        ${isScrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg border-white/20'
            : 'bg-transparent backdrop-blur-0 shadow-none border-transparent'
        }`}
      >
        <div className="relative h-10">
          {/* Left: logo - smaller on mobile, same on desktop */}
          <a
            href="/"
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 h-12 flex items-center gap-2 md:gap-3 text-base text-white"
          >
            <Image src="/twinlyremove.png" alt="Twinly Logo" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
            <span className="font-semibold text-base md:text-lg leading-none">Twinly</span>
          </a>

          {/* Center: links - hidden on mobile, same on desktop */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center space-x-6 md:space-x-8 lg:flex">
            <a
              href="/pricing"
              className={`${linkBase} ${active === 'pricing' ? activeLink : ''}`}
            >
              Pricing
            </a>
            <a
              href="/enterprise"
              className={`${linkBase} ${active === 'enterprise' ? activeLink : ''}`}
            >
              Enterprise
            </a>
          </div>

          {/* Right: CTA - smaller on mobile, same on desktop */}
          <div className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex items-center space-x-3 pl-4">
            <button
              onClick={onCtaClick}
              className="rounded-full border border-white/30 bg-white px-3 md:px-4 py-1.5 text-black font-semibold transition-colors hover:bg-gray-100 h-8 md:h-9 text-sm md:text-base"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
