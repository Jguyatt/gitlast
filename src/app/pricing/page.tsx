
'use client';


import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import SalesPopup from '../../components/SalesPopup';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';


type Billing = 'monthly' | 'yearly';


/* -------------------- A reusable reveal-on-scroll wrapper -------------------- */
function Reveal({
 children,
 direction = 'up',
 delay = 0,
}: {
 children: React.ReactNode;
 direction?: 'up' | 'down' | 'left' | 'right';
 delay?: number;
}) {
 const ref = useRef<HTMLDivElement | null>(null);
 const ctrls = useAnimation();
 const inView = useInView(ref, { amount: 0.3, margin: '0px 0px -10% 0px' });


 useEffect(() => {
   // Animate in when visible, animate back to hidden when leaving viewport
   if (inView) ctrls.start('visible');
   else ctrls.start('hidden');
 }, [inView, ctrls]);


 const from = {
   x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
   y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
 };


 return (
   <motion.div
     ref={ref}
     initial="hidden"
     animate={ctrls}
     variants={{
       hidden: { opacity: 0, x: from.x, y: from.y },
       visible: {
         opacity: 1,
         x: 0,
         y: 0,
         transition: { duration: 0.6, delay, ease: [0.22, 0.65, 0.3, 0.9] },
       },
     }}
   >
     {children}
   </motion.div>
 );
}


/* -------------------- Shiny buttons/links -------------------- */
function ShinyButton({
 children,
 onClick,
 className = '',
}: {
 children: React.ReactNode;
 onClick?: () => void;
 className?: string;
}) {
 return (
   <button
     type="button"
     onClick={onClick}
     className={`group relative mt-5 w-full overflow-hidden rounded-xl border border-white/20 bg-white px-5 py-2.5 text-center font-semibold text-black outline-none transition
                shadow-[0_24px_48px_-18px_rgba(255,255,255,0.25),0_10px_32px_-12px_rgba(0,0,0,0.55)]
                hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-20px_rgba(255,255,255,0.28),0_14px_36px_-14px_rgba(0,0,0,0.6)]
                active:translate-y-0 focus:ring-2 focus:ring-white/40 ${className}`}
   >
     <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/70 to-transparent opacity-[0.06]" />
     <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
       <span className="absolute -left-24 top-0 h-full w-24 -skew-x-12 bg-white/50 blur-sm opacity-0 transition-all duration-500 ease-out
                        group-hover:left-[120%] group-hover:opacity-100" />
     </span>
     <span className="relative z-[1] inline-flex items-center justify-center gap-2">
       {children}
       <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
         <path d="M5 12h14" />
         <path d="M12 5l7 7-7 7" />
       </svg>
     </span>
   </button>
 );
}


function ShinyLink({ href, children }: { href: string; children: React.ReactNode }) {
 return (
   <a
     href={href}
     className="group relative inline-flex items-center overflow-hidden rounded-xl border border-white/20 bg-white px-4 py-1.5 font-semibold text-black
                shadow-[0_20px_44px_-18px_rgba(255,255,255,0.25),0_8px_26px_-10px_rgba(0,0,0,0.55)]
                transition hover:-translate-y-0.5 hover:shadow-[0_26px_58px_-20px_rgba(255,255,255,0.28),0_12px_32px_-12px_rgba(0,0,0,0.6)]
                focus:outline-none focus:ring-2 focus:ring-white/40"
   >
     <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/70 to-transparent opacity-[0.06]" />
     <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
       <span className="absolute -left-20 top-0 h-full w-20 -skew-x-12 bg-white/50 blur-sm opacity-0 transition-all duration-500 ease-out
                        group-hover:left-[120%] group-hover:opacity-100" />
     </span>
     <span className="relative z-[1] inline-flex items-center gap-2">
       {children}
       <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
         <path d="M5 12h14" />
         <path d="M12 5l7 7-7 7" />
       </svg>
     </span>
   </a>
 );
}


/* -------------------- Page -------------------- */


export default function PricingPage() {
 const [isSalesPopupOpen, setIsSalesPopupOpen] = useState(false);
 const [billing, setBilling] = useState<Billing>('monthly');


 // Prices
 const PRO_MONTHLY = 14.99;
 const PRO_YEARLY = 7.99;
 const proPrice = billing === 'monthly' ? PRO_MONTHLY : PRO_YEARLY;
 const proSuffix = billing === 'monthly' ? '/ month' : '/ month';
 const savePct = 100 - Math.round((PRO_YEARLY / (PRO_MONTHLY)) * 100);


 const subscribeHref =
   billing === 'yearly' ? '/checkout?plan=pro-yearly' : '/checkout?plan=pro-monthly';
 const subscribeLabel = billing === 'yearly' ? 'Subscribe Yearly' : 'Subscribe Monthly';


 return (
   <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
     <TopNav 
       active="pricing" 
       ctaLabel="Download today" 
       ctaHref="/" 
     />
     
    
     {/* Hero */}
     <header className="mx-auto max-w-6xl px-4 pt-32 text-center">
       <Reveal direction="down">
         <h1 className="mx-auto flex items-center justify-center gap-3 text-5xl font-bold tracking-tight sm:text-6xl">
           <span>Choose the right plan for you.</span>
         </h1>
       </Reveal>
       <Reveal delay={0.05}>
         <p className="mx-auto mt-4 max-w-2xl">
           Whether you're using Twinly for work, school, client communication, or just curious, it's free to use.
         </p>
       </Reveal>


       {/* Billing Toggle */}
       <Reveal delay={0.1}>
         <div className="mt-7 flex items-center justify-center gap-4 select-none">
           <button
             type="button"
             onClick={() => setBilling('monthly')}
             className={`text-sm font-semibold whitespace-nowrap transition ${
               billing === 'monthly' ? 'text-white' : 'text-white/60 hover:text-white'
             }`}
           >
             Monthly
           </button>


           <button
             type="button"
             role="switch"
             aria-checked={billing === 'yearly'}
             aria-label="Toggle billing period"
             onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
             className={`relative h-8 w-14 overflow-hidden rounded-full border border-white/25
                         transition-colors duration-300 ease-out
                         ${billing === 'yearly' ? 'bg-white/60' : 'bg-white/20'}
                         focus:outline-none focus:ring-2 focus:ring-white/60`}
           >
             <span
               className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow
                           transition-transform duration-300 ease-out will-change-transform
                           ${billing === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`}
             />
           </button>


           <button
             type="button"
             onClick={() => setBilling('yearly')}
             className={`text-sm font-semibold whitespace-nowrap transition ${
               billing === 'yearly' ? 'text-white' : 'text-white/60 hover:text-white'
             }`}
           >
             Annually
           </button>


           {billing === 'yearly' && (
             <span className="ml-2 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-2 py-1 text-xs text-white">
               Save {savePct}%
             </span>
           )}
         </div>
       </Reveal>
     </header>


     {/* Cards */}
     <section className="py-20">
       <div className="max-w-6xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Reveal direction="right">
             <Card>
               <PlanHeader title="Starter" price={<span>Free</span>} sub="All features (limited)." />
               
               <Features
                 items={[
                   '20 emails per month',
                   'Models: GPT-4',
                   'Custom prompts & instructions',
                   'Conversation dashboard & history',
                 ]}
               />
             </Card>
           </Reveal>

           <Reveal>
             <Card highlight>
               <PlanHeader
                 title="Pro"
                 price={<span>${proPrice} <span className="text-base font-normal text-white/90">{proSuffix}</span></span>}
                 badge={billing === 'yearly' ? `Save ${savePct}%` : undefined}
                 sub="All features. Unlimited usage."
               />
               
               <Features
                 items={[
                   'Unlimited emails & responses',
                   'Models: GPT-5 + latest',
                   'Unlimited responses / day',
                   'Standard support',
                 ]}
               />
             </Card>
           </Reveal>

           <Reveal direction="left">
             <Card id="enterprise">
               <PlanHeader title="Enterprise" price={<span>Custom</span>} sub="For teams at scale." />
               <ShinyButton onClick={() => setIsSalesPopupOpen(true)}>Talk to sales</ShinyButton>
               <Features
                 boldFirst="Everything in Pro, plus…"
                 items={[
                   'Priority support',
                   'Advanced customization & onboarding',
                   'Volume / team discount',
                 ]}
               />
             </Card>
           </Reveal>
         </div>
       </div>
     </section>

     {/* Add this after the pricing cards section and before the table */}
     <section className="py-8">
       <div className="max-w-4xl mx-auto px-6 text-center">
         <div className="flex flex-col items-center space-y-2">
           <p className="text-white/60 text-sm">
             Scroll down for detailed feature comparison
           </p>
           <svg 
             className="w-4 h-4 text-white/40" 
             fill="none" 
             stroke="currentColor" 
             viewBox="0 0 24 24"
           >
             <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               strokeWidth={2} 
               d="M19 14l-7 7m0 0l-7-7m7 7V3" 
             />
           </svg>
         </div>
       </div>
     </section>

     {/* Comparison Table */}
     <section className="py-20">
       <Reveal direction="up">
         <div className="mx-auto w-full max-w-6xl overflow-x-auto rounded-2xl border border-white/15 bg-white/[0.06] shadow-[0_25px_60px_-20px_rgba(0,0,0,.7)]">
           <table className="w-full table-fixed text-sm text-white">
             <thead className="bg-white/10">
               <tr>
                 <th className="w-[40%] px-4 py-4 text-left font-semibold">Features</th>
                 <th className="w-[20%] px-4 py-4 text-center font-semibold">
                   Starter
                   <div className="text-xs font-normal">Free</div>
                 </th>
                 <th className="w-[20%] px-4 py-4 text-center font-semibold">
                   Pro
                   <div className="text-xs font-normal">${proPrice} {proSuffix.replace('/', '/ ')}</div>
                 </th>
                 <th className="w-[20%] px-4 py-4 text-center font-semibold">
                   Enterprise
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
    
     <Footer />
     {/* Sales Popup */}
     <SalesPopup isOpen={isSalesPopupOpen} onClose={() => setIsSalesPopupOpen(false)} />
   </main>
 );
}


/* ---------- small components ---------- */


function Card({
 children,
 highlight,
 id,
}: {
 children: React.ReactNode;
 highlight?: boolean;
 id?: string;
}) {
 return (
   <div
     id={id}
     className={`rounded-3xl border p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,.6)] ${
       highlight ? 'border-white/25 bg-white/12' : 'border-white/15 bg-white/[0.08]'
     }`}
   >
     {children}
   </div>
 );
}


function PlanHeader({
 title,
 price,
 sub,
 badge,
}: {
 title: string;
 price: React.ReactNode;
 sub?: string;
 badge?: string;
}) {
 return (
   <div>
     <div className="text-sm uppercase tracking-wide text-white/90">{title}</div>
     <div className="mt-1 text-4xl font-semibold text-white">{price}</div>
     {sub && <div className="mt-1 text-sm text-white/90">{sub}</div>}
     {badge && (
       <div className="mt-2 inline-block rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-200">
         {badge}
       </div>
     )}
   </div>
 );
}


function Features({ items, boldFirst }: { items: string[]; boldFirst?: string }) {
 return (
   <ul className="mt-5 space-y-2 text-sm">
     {boldFirst && <li className="font-semibold text-white">{boldFirst}</li>}
     {items.map((t) => (
       <li key={t} className="flex items-start gap-2 text-white">
         <Check /> {t}
       </li>
     ))}
   </ul>
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
   ],
 },
];