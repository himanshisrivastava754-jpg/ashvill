'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/config/company';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isScrolled ? 'py-3' : 'py-5',
      )}
    >
      <div className="container-wide">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500',
            isScrolled ? 'glass shadow-glass' : 'bg-transparent',
          )}
          aria-label="Main navigation"
        >
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.main.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="glass w-[480px] rounded-2xl p-4 shadow-elevated">
                      <div className="grid grid-cols-2 gap-1">
                        {navigation.services.slice(0, 12).map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="rounded-lg px-3 py-2 text-sm text-surface-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-3 flex items-center gap-1 border-t border-surface-200 pt-3 text-sm font-semibold text-brand-600 hover:text-brand-700"
                      >
                        View all services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.main.slice(2).filter((item) => item.label !== 'Contact').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/request-quote" variant="outline" size="sm">
              Request Quote
            </Button>
            <Button href="/contact" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Contact
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-surface-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-surface-900/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-surface-700 hover:bg-surface-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-surface-700 hover:bg-surface-100"
                >
                  All Services
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/request-quote" variant="outline" className="w-full">
                  Request Quote
                </Button>
                <Button href="/contact" className="w-full">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
