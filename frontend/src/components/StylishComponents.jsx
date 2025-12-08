/*
Stylish React Components (single-file)
- React + Tailwind CSS
- Uses framer-motion (install: `npm i framer-motion`)

How to use:
1. Ensure Tailwind is configured in your project.
2. Install framer-motion: `npm i framer-motion`.
3. Drop this file into your components folder (e.g. `StylishComponents.jsx`).
4. Import the main demo or individual components:
   import ComponentShowcase, { GlassCard, NeonButton, MorphIcon, FloatingTag, TimelineStepper } from './StylishComponents';

This file exports several small, reusable, and stylish components with props and a demo page at the bottom.
*/

import React from 'react';
import { motion } from 'framer-motion';

/* ----------------------------- GlassCard -----------------------------
 Props:
  - title (string)
  - subtitle (string)
  - children
  - accent (string) Tailwind color class e.g. 'from-pink-500 to-yellow-400'
---------------------------------------------------------------------*/
export function GlassCard({ title, subtitle, children, accent = 'from-indigo-400 to-pink-500' }) {
  return (
    <div className={`relative rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg overflow-hidden`}> 
      <div className={`absolute -inset-1 rounded-2xl blur-xl bg-gradient-to-br ${accent} opacity-40`} />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white drop-shadow-md">{title}</h3>
        {subtitle && <p className="text-sm text-white/80 mt-1">{subtitle}</p>}
        <div className="mt-4 text-white/90">{children}</div>
      </div>
    </div>
  );
}

/* ----------------------------- NeonButton -----------------------------
 Props:
  - children
  - onClick
  - size: 'sm'|'md'|'lg'
  - colorClass: Tailwind color for glow
---------------------------------------------------------------------*/
export function NeonButton({ children, onClick, size = 'md', colorClass = 'pink' }) {
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
  };
  return (
    <button
      onClick={onClick}
      className={`relative inline-block ${sizes[size]} font-semibold rounded-full tracking-wide text-white transform transition-transform active:scale-95`}
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        boxShadow: `0 6px 24px -6px var(--tw-shadow-color, rgb(236 72 153 / 0.45))`,
      }}
    >
      <span className={`absolute -inset-0.5 rounded-full opacity-40 blur`} style={{
        background: `radial-gradient(closest-side, var(--glow), transparent)`
      }} />
      <span className="relative z-10" style={{ '--glow': `rgba(236,72,153,0.25)` }}>{children}</span>
      {/* Decorative neon ring */}
      <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity pointer-events-none" style={{boxShadow: '0 0 30px 8px rgba(236,72,153,0.12)'}} />
    </button>
  );
}

/* ----------------------------- MorphIcon -----------------------------
 SVG icon that morphs on hover. Accepts 'icon' as children or uses default.
 Props:
  - size
  - variant: 'round'|'square'
---------------------------------------------------------------------*/
export function MorphIcon({ size = 64, variant = 'round', children }) {
  const shape = variant === 'round' ? 'rounded-full' : 'rounded-2xl';
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: 6 }}
      whileTap={{ scale: 0.98, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative ${shape} p-3 flex items-center justify-center`} 
      style={{ width: size, height: size, background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 10px 30px rgba(2,6,23,0.6) inset' }}
    >
      <motion.div whileHover={{ y: -4 }} className="text-white/90">
        {children || (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------- FloatingTag -----------------------------
 Small pill/tag that floats and shows extra info on hover
 Props:
  - label
  - hint
---------------------------------------------------------------------*/
export function FloatingTag({ label, hint }) {
  return (
    <div className="relative inline-block">
      <motion.div whileHover={{ y: -6 }} className="px-3 py-1 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-white">
        {label}
      </motion.div>
      {hint && (
        <motion.div initial={{ opacity: 0, y: 6 }} whileHover={{ opacity: 1, y: 0 }} className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-2 rounded-lg text-xs bg-black/70 text-white/90 backdrop-blur-sm border border-white/5">
          {hint}
        </motion.div>
      )}
    </div>
  );
}

/* ----------------------------- TimelineStepper -----------------------------
 A compact horizontal timeline with animated step indicator
 Props:
  - steps: [{title, subtitle}]
  - current: index
---------------------------------------------------------------------*/
export function TimelineStepper({ steps = [], current = 0 }) {
  return (
    <div className="flex items-center gap-4 w-full">
      {steps.map((s, i) => {
        const active = i === current;
        const done = i < current;
        return (
          <div key={i} className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full ${done ? 'bg-gradient-to-br from-green-400 to-emerald-500' : active ? 'bg-gradient-to-br from-indigo-500 to-pink-500' : 'bg-white/6'}`}>
                <motion.div layoutId={`dot-${i}`} className="text-white font-semibold">{done ? '✓' : i + 1}</motion.div>
              </div>
              <div className="min-w-0">
                <div className={`text-sm font-semibold ${active ? 'text-white' : 'text-white/80'}`}>{s.title}</div>
                <div className="text-xs text-white/70 truncate">{s.subtitle}</div>
              </div>
            </div>
            {i !== steps.length - 1 && <div className={`h-1 bg-white/6 mt-3 rounded-full`} style={{width: '100%'}} />}
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- Demo / Showcase -----------------------------*/
export default function ComponentShowcase() {
  const steps = [
    { title: 'Plan', subtitle: 'Sketch & research' },
    { title: 'Design', subtitle: 'Wireframes' },
    { title: 'Build', subtitle: 'Implementation' },
    { title: 'Ship', subtitle: 'Launch' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04050b] to-[#081124] text-white p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard title="Aurora Profile" subtitle="Stylish glass card" accent={'from-pink-500 to-yellow-400'}>
          <p className="text-sm">A compact profile card — drop avatar, quick stats, or buttons here.</p>
          <div className="mt-4 flex gap-3">
            <NeonButton size="md">Follow</NeonButton>
            <NeonButton size="sm">Message</NeonButton>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <MorphIcon size={72} variant="round">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </MorphIcon>
            <div>
              <div className="text-lg font-semibold">Stellar Badge</div>
              <div className="text-sm text-white/80">Interactive SVG with subtle motion</div>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <FloatingTag label="Pro" hint="Includes premium features & priority support" />
            <FloatingTag label="Beta" hint="Feature experimental — expect updates" />
          </div>

          <div className="mt-4">
            <TimelineStepper steps={steps} current={2} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8">
        <p className="text-sm text-white/70">Tip: tweak accents, gradients and animations via props or Tailwind utility classes to match your brand.</p>
      </div>
    </div>
  );
}
