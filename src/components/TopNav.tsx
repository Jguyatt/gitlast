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
      className="fixed top-2 sm:top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] sm:w-[98vw]"
    >
      <div
        className={`rounded-full pl-0 pr-0 py-2 sm:py-3 border transition-all duration-500 ease-out
        ${isScrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg border-white/20'
            : 'bg-transparent backdrop-blur-0 shadow-none border-transparent'
        }`}
      >
        <div className="relative h-8 sm:h-10">
          {/* Left: logo */}
          <a
            href="/"
            className="absolute left-2 sm:left-3 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 flex items-center gap-1 sm:gap-2 md:gap-3 text-base text-white"
          >
            <Image src="/twinlyremove.png" alt="Twinly Logo" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10" />
            <span className="font-semibold text-xs sm:text-sm md:text-lg leading-none">Twinly</span>
          </a>

          {/* Center: links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-3 sm:space-x-4 md:space-x-8">
            <a
              href="/pricing"
              className={`${linkBase} text-xs sm:text-sm md:text-base ${active === 'pricing' ? activeLink : ''}`}
            >
              Pricing
            </a>
            <a
              href="/enterprise"
              className={`${linkBase} text-xs sm:text-sm md:text-base ${active === 'enterprise' ? activeLink : ''}`}
            >
              Enterprise
            </a>
          </div>

          {/* Right: CTA */}
          <div className="absolute right-2 sm:right-3 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex items-center space-x-3 pl-2">
            <button
              onClick={onCtaClick}
              className="rounded-full border border-white/30 bg-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-black font-semibold transition-colors hover:bg-gray-100 h-6 sm:h-7 md:h-9 text-xs sm:text-sm md:text-base"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
