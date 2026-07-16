import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { company, contact, navigation } from '@/config/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 bg-surface-900 text-white" role="contentinfo">
      <div className="container-wide section-padding pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" className="mb-6" />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-surface-400">
              {company.description}
            </p>
            <div className="space-y-3 text-sm text-surface-400">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {contact.phone}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
                Company
              </h3>
              <ul className="space-y-2.5">
                {navigation.main.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-surface-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
                Services
              </h3>
              <ul className="space-y-2.5">
                {navigation.services.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-surface-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
                Legal
              </h3>
              <ul className="space-y-2.5">
                {navigation.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-surface-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
              Start a Project
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-surface-400">
              Ready to transform your enterprise technology? Let&apos;s discuss your requirements.
            </p>
            <Button
              href="/request-quote"
              variant="primary"
              className="w-full"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              Request a Quote
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-surface-800 pt-8 sm:flex-row">
          <p className="text-sm text-surface-500">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {Object.entries(contact.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm capitalize text-surface-500 transition-colors hover:text-white"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
