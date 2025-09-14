'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = { isOpen: boolean; onClose: () => void };

// shared classes so inputs look consistent & visible
const INPUT =
  'w-full rounded-xl border border-white/12 bg-zinc-800/60 px-3 py-2 text-sm text-white ' +
  'placeholder:text-white/40 outline-none transition ' +
  'focus:bg-zinc-800/80 focus:border-white/20 focus:ring-2 focus:ring-white/10';

export default function SalesPopup({ isOpen, onClose }: Props) {
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // lock scroll + focus
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => firstInputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = 'Please enter your name';
    if (!email.trim() || !email.includes('@')) next.email = 'Enter a valid work email';
    if (!company.trim()) next.company = 'Please enter your company';
    const size = Number(teamSize);
    if (!size || size < 1) next.teamSize = 'Team size must be at least 1';
    if (!message.trim()) next.message = 'Please tell us a bit about your needs';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const reset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setTeamSize('');
    setMessage('');
    setSubmitting(false);
    setDone(false);
    setErrors({});
  };

  // Update the handleSubmit function to send emails to tryranklyai@gmail.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/sales-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          teamSize: Number(teamSize),
          message,
        }),
      });

      if (response.ok) {
        setDone(true);
      } else {
        throw new Error('Failed to send inquiry');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      setErrors({ submit: 'Failed to send inquiry. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const closeAll = () => {
    onClose();
    setTimeout(reset, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* smoke overlay */}
          <motion.button
            aria-label="Close"
            onClick={closeAll}
            className="absolute inset-0 bg-zinc-950/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* dialog wrapper */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              key={done ? 'success' : 'form'}
              className="w-full max-w-xl rounded-[26px] border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-1 shadow-[0_50px_140px_-40px_rgba(0,0,0,0.75)]"
              initial={{ y: 22, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            >
              {/* inner surface */}
              <div className="rounded-[22px] bg-zinc-950/90 p-6">
                {/* header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Talk to Sales</h3>
                    <p className="mt-1 text-sm text-zinc-300/80">
                      Tell us a bit about your team and we’ll get back within 1 business day.
                    </p>
                  </div>
                  <button
                    onClick={closeAll}
                    className="group rounded-full border border-white/15 bg-zinc-900/60 p-2 text-zinc-300 transition hover:bg-zinc-800/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Close"
                  >
                    <svg
                      className="h-5 w-5 transition group-hover:rotate-90"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {!done ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* row 1 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Full name" error={errors.name}>
                        <input
                          ref={firstInputRef}
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Alex Chen"
                          className={INPUT}
                        />
                      </Field>

                      <Field label="Work email" error={errors.email}>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className={INPUT}
                        />
                      </Field>
                    </div>

                    {/* row 2 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Company" error={errors.company}>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company Inc."
                          className={INPUT}
                        />
                      </Field>

                      <Field label="Team size (users)" error={errors.teamSize}>
                        <div className="flex items-center gap-3">
                          <input
                            type="number"
                            min={1}
                            step={1}
                            value={teamSize}
                            onChange={(e) =>
                              setTeamSize(e.target.value === '' ? '' : Math.max(1, Number(e.target.value)))
                            }
                            placeholder="25"
                            className={`${INPUT} w-36`}
                          />
                          <div className="hidden flex-1 items-center gap-3 sm:flex">
                            <input
                              type="range"
                              min={1}
                              max={2000}
                              step={1}
                              value={Number(teamSize) || 1}
                              onChange={(e) => setTeamSize(Number(e.target.value))}
                              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
                            />
                            <span className="w-16 text-right text-xs text-white/55">max 2000</span>
                          </div>
                        </div>
                      </Field>
                    </div>

                    {/* message */}
                    <Field label="What are you hoping to accomplish?" error={errors.message}>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share a bit about your workflow, security requirements, or timeline..."
                        className={`${INPUT} min-h-[110px] resize-y`}
                      />
                    </Field>

                    {/* actions */}
                    <div className="mt-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={closeAll}
                        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-white/15"
                      >
                        Cancel
                      </button>

                      <PrimaryButton loading={submitting}>Send to Sales</PrimaryButton>
                    </div>
                  </form>
                ) : (
                  <Success onClose={closeAll} />
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- helpers ---------------- */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/60">{label}</div>
      {children}
      {error && <div className="mt-1 text-xs text-red-400">{error}</div>}
    </label>
  );
}

function PrimaryButton({ loading, children }: { loading?: boolean; children: React.ReactNode }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl
      border border-white/15 bg-zinc-100 px-6 py-2.5 text-sm font-semibold text-zinc-900
      shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition
      focus:outline-none focus:ring-2 focus:ring-white/30
      ${loading ? 'opacity-80' : 'hover:bg-zinc-200 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]'}`}
    >
      {/* subtle shine on hover */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute -left-20 top-0 h-full w-20 -skew-x-12 bg-white/35 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />
      </span>

      {loading ? (
        <>
          <Spinner />
          Sending…
        </>
      ) : (
        <>
          {children}
          <motion.svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ x: -3, opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </motion.svg>
        </>
      )}
    </motion.button>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-6 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
      >
        <motion.svg viewBox="0 0 24 24" className="h-9 w-9 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path
            d="M20 6L9 17l-5-5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>
      <h4 className="text-lg font-semibold text-white">Request sent</h4>
      <p className="mx-auto mt-1 max-w-md text-sm text-zinc-300/85">Thanks! Our team will reach out shortly.</p>
      <button
        onClick={onClose}
        className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-white/15"
      >
        Close
      </button>
    </div>
  );
}
