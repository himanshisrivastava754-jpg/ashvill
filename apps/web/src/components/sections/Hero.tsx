'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { company, stats } from '@/config/company';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="gradient-mesh absolute inset-0" aria-hidden />
      <div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(12,140,233,0.4) 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-wide relative flex min-h-[calc(100vh-7rem)] flex-col justify-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            Trusted by 350+ Global Enterprises
          </span>
        </motion.div>

        <motion.h1
          className="font-display max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight text-surface-900 md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Engineering Digital{' '}
          <span className="text-gradient">Excellence</span>{' '}
          for Global Enterprises
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-surface-500 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {company.name} delivers premium technology services — from custom software and cloud
          architecture to AI and cybersecurity — helping organizations worldwide transform and scale.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Button href="/request-quote" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
            Start Your Project
          </Button>
          <Button href="/services" variant="glass" size="lg">
            Explore Services
          </Button>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-2xl font-bold text-brand-600 md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-surface-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const capabilities = [
    'ISO-Aligned Processes',
    'Enterprise Security',
    'Global Delivery',
    'Agile Methodology',
    '24/7 Support Available',
  ];

  return (
    <section className="border-y border-surface-200 bg-white py-6" aria-label="Trust indicators">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {capabilities.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium text-surface-600">
              <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
