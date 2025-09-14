'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SalesPopup from '../../components/SalesPopup';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

/* ------------------ small animation helper ------------------ */
// Animates on enter and resets when scrolled out, so it can replay.
function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 28,
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hiddenPos =
    direction === 'up'
      ? { y: distance }
      : direction === 'down'
      ? { y: -distance }
      : direction === 'left'
      ? { x: distance }
      : direction === 'right'
      ? { x: -distance }
      : { scale: 0.96 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...hiddenPos }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.6, delay, ease: 'easeOut' } }
          : { opacity: 0, ...hiddenPos, transition: { duration: 0.4, ease: 'easeIn' } }
      }
    >
      {children}
    </motion.div>
  );
}

/* ------------------ page ------------------ */

export default function EnterprisePage() {
  // ROI calculator state
  const [teamSize, setTeamSize] = useState<number>(25);
  const [hourValue, setHourValue] = useState<number>(75);
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

  // Derived metrics (3 hours saved / user / week)
  const hoursPerWeek = useMemo(() => teamSize * 3, [teamSize]);
  const hoursPerMonth = Math.round(hoursPerWeek * 4.345);
  const hoursPerYear = hoursPerWeek * 52;

  const moneyPerWeek = hoursPerWeek * hourValue;
  const moneyPerMonth = Math.round(moneyPerWeek * 4.345);
  const moneyPerYear = Math.round(moneyPerWeek * 52);

  const fmtCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  const fmtNumber = (n: number) => new Intl.NumberFormat('en-US').format(n);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav>
      <TopNav
  active="enterprise"
  ctaLabel="Talk to sales"
  onCtaClick={() => setIsSalesOpen(true)}
/>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-32 text-center">
        <Reveal direction="down">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
            Enterprise
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.08}>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Everything in Pro, plus security, control, and onboarding for teams at scale.
          </p>
        </Reveal>
        <Reveal direction="scale" delay={0.16}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#roi"
              className="rounded-xl border border-white/20 bg-white px-5 py-2.5 text-black font-semibold hover:opacity-90"
            >
              Estimate ROI
            </a>
            <a
              href="#compare"
              className="rounded-xl border border-white/20 px-5 py-2.5 font-semibold hover:bg-white/10"
            >
              Compare features
            </a>
            <button
              onClick={() => setIsSalesOpen(true)}
              className="rounded-xl border border-white/20 px-5 py-2.5 font-semibold hover:bg-white/10"
            >
              Contact sales
            </button>
          </div>
        </Reveal>
      </header>

      {/* ROI Calculator */}
      <section id="roi" className="mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_25px_60px_-20px_rgba(0,0,0,.7)]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Controls */}
            <Reveal direction="left" className="">
              <div>
                <h2 className="text-2xl font-semibold">ROI Calculator</h2>
                <p className="mt-1 text-white/70 text-sm">
                  Drag the sliders. We assume <span className="font-semibold text-white">3 hours saved per user per week</span>.
                </p>

                {/* Team size */}
                <div className="mt-6">
                  <label htmlFor="team" className="flex items-center justify-between text-sm text-white/80">
                    <span>Team size</span>
                    <span className="font-semibold text-white">
                      {fmtNumber(teamSize)} {teamSize === 1 ? 'user' : 'users'}
                    </span>
                  </label>
                  <input
                    id="team"
                    type="range"
                    min={1}
                    max={1000}
                    step={1}
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="twin-range mt-3 w-full"
                  />
                  <div className="mt-2 flex justify-between text-xs text-white/50">
                    <span>1</span><span>250</span><span>500</span><span>750</span><span>1000</span>
                  </div>

                  {/* Exact team size input */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs text-white/60">Set exact team size:</span>
                    <input
                      type="number"
                      min={1}
                      max={1000}
                      step={1}
                      value={teamSize}
                      onChange={(e) => {
                        const v = Math.floor(Number(e.target.value || 1));
                        const clamped = clamp(isFinite(v) ? v : 1, 1, 1000);
                        setTeamSize(clamped);
                      }}
                      className="w-32 rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Hour value */}
                <div className="mt-8">
                  <label htmlFor="hour" className="flex items-center justify-between text-sm text-white/80">
                    <span>Value of 1 hour (fully-loaded cost)</span>
                    <span className="font-semibold text-white">{fmtCurrency(hourValue)}</span>
                  </label>
                  <input
                    id="hour"
                    type="range"
                    min={10}
                    max={500}
                    step={5}
                    value={hourValue}
                    onChange={(e) => setHourValue(parseInt(e.target.value))}
                    className="twin-range mt-3 w-full"
                  />
                  <div className="mt-2 flex justify-between text-xs text-white/50">
                    <span>$10</span><span>$125</span><span>$250</span><span>$375</span><span>$500</span>
                  </div>

                  {/* Exact $/hour input */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs text-white/60">Set exact value:</span>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      value={hourValue}
                      onChange={(e) => setHourValue(Number(e.target.value || 0))}
                      className="w-32 rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Results */}
            <Reveal direction="right" className="">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-6">
                <h3 className="text-lg font-semibold">Your estimated impact</h3>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <KPI label="Hours saved / week" value={fmtNumber(hoursPerWeek)} />
                  <KPI label="Hours saved / month" value={fmtNumber(hoursPerMonth)} />
                  <KPI label="Hours saved / year" value={fmtNumber(hoursPerYear)} />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <KPI label="Money saved / week" value={fmtCurrency(moneyPerWeek)} />
                  <KPI label="Money saved / month" value={fmtCurrency(moneyPerMonth)} />
                  <KPI label="Money saved / year" value={fmtCurrency(moneyPerYear)} />
                </div>

                <p className="mt-6 text-xs text-white/60">
                  Estimations are illustrative and depend on usage, team workflows, and selected models.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setIsSalesOpen(true)}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-5 py-2.5 text-black font-semibold hover:opacity-90"
                  >
                    Talk to sales
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="compare" className="mt-16 px-4">
        <Reveal direction="up">
          <div className="mx-auto w-full max-w-6xl overflow-x-auto rounded-2xl border border-white/15 bg-white/[0.06] shadow-[0_25px_60px_-20px_rgba(0,0,0,.7)]">
            <table className="w-full table-fixed text-sm text-white">
              <thead className="bg-white/10">
                <tr>
                  <th className="w-[40%] px-4 py-4 text-left font-semibold">Features</th>
                  <th className="w-[20%] px-4 py-4 text-center font-semibold">Starter<div className="text-xs font-normal">Free</div></th>
                  <th className="w-[20%] px-4 py-4 text-center font-semibold">Pro<div className="text-xs font-normal">Full access</div></th>
                  <th className="w-[20%] px-4 py-4 text-center font-semibold">
                    <span className="inline-block rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-white/90">Enterprise</span>
                    <div className="text-xs font-normal">Custom</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section) => (
                  <React.Fragment key={section.name}>
                    <tr className="bg-white/10">
                      <td colSpan={4} className="px-4 py-2 font-semibold">{section.name}</td>
                    </tr>
                    {section.rows.map((row, idx) => (
                      <tr key={row.label} className={idx % 2 === 0 ? 'bg-white/[0.04]' : 'bg-transparent'}>
                        <td className="px-4 py-3 text-left">{row.label}</td>
                        <Cell value={row.starter} />
                        <Cell value={row.pro} />
                        <Cell value={row.ent} />
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="px-4 py-4 text-right text-white/70">
                    © {new Date().getFullYear()} Twinly. All rights reserved.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto mt-16 max-w-6xl px-4 pb-24">
        <Reveal direction="up">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 text-center">
            <h3 className="text-2xl font-semibold">Ready to bring Twinly to your team?</h3>
            <p className="mt-2 text-white/70">Priority support, SSO/SAML, admin controls, and custom onboarding.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsSalesOpen(true)}
                className="rounded-xl border border-white/20 bg-white px-5 py-2.5 text-black font-semibold hover:opacity-90"
              >
                Contact sales
              </button>
              <a
                href="/pricing#enterprise"
                className="rounded-xl border border-white/20 px-5 py-2.5 font-semibold hover:bg-white/10"
              >
                See all plans
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Range styling */}
      <style jsx global>{`
        .twin-range {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.18);
          outline: none;
        }
        .twin-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid rgba(255,255,255,0.35);
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,.35);
        }
        .twin-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid rgba(255,255,255,0.35);
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,.35);
        }
      `}</style>

      {/* Footer */}
      <Footer />

      {/* Sales popup last */}
      <SalesPopup isOpen={isSalesOpen} onClose={() => setIsSalesOpen(false)} />
    </main>
  );
}

/* ---------------- small pieces ---------------- */

function KPI({ label, value }: { label: string; value: string | number }) {
  return (
    <Reveal direction="up" delay={0.05}>
      <div className="rounded-xl border border-white/15 bg-black/40 p-4">
        <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
        <div className="mt-1 text-2xl font-semibold text-white break-words">{value}</div>
      </div>
    </Reveal>
  );
}

function Check() {
  return (
    <svg
      className="h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Cell({ value }: { value: boolean | string }) {
  return (
    <td className="px-4 py-3">
      <div className="flex items-center justify-center">
        {typeof value === 'boolean'
          ? (value ? <Check /> : <span className="text-white/40">—</span>)
          : <span className="text-white text-center">{value}</span>}
      </div>
    </td>
  );
}

/* ---------- table data ---------- */
const sections: {
  name: string;
  rows: { label: string; starter: boolean | string; pro: boolean | string; ent: boolean | string }[];
}[] = [
  {
    name: 'Access',
    rows: [
      { label: 'Feature access', starter: 'All features (limited)', pro: 'All features', ent: 'All features' },
      { label: 'Models', starter: 'GPT-4', pro: 'GPT-5 + latest', ent: 'GPT-5 + latest' },
    ],
  },
  {
    name: 'Core',
    rows: [
      { label: 'Custom prompts / instructions', starter: true, pro: true, ent: true },
      { label: 'Conversation dashboard & history', starter: true, pro: true, ent: true },
    ],
  },
  {
    name: 'Usage limits',
    rows: [{ label: 'Responses per day', starter: 'Limited', pro: 'Unlimited', ent: 'Unlimited' }],
  },
  {
    name: 'Enterprise extras',
    rows: [
      { label: 'Support', starter: 'Community', pro: 'Standard', ent: 'Priority' },
      { label: 'Advanced customization & onboarding', starter: '—', pro: '—', ent: true },
      { label: 'Volume / team discount', starter: '—', pro: '—', ent: true },
      { label: 'SSO / SAML & Admin controls', starter: '—', pro: '—', ent: true },
      { label: 'Security reviews & DPA', starter: '—', pro: '—', ent: true },
    ],
  },
];

