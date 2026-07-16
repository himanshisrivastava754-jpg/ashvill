import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { FadeIn } from '@/components/ui/Motion';
import { contact } from '@/config/company';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Ashvill IT Solutions for enterprise technology consultations and project inquiries.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Let's Start a Conversation" description="Tell us about your project and our team will respond within one business day." />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="grid gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <Card glass={false} padding="lg">
                <h2 className="font-display mb-6 text-2xl font-bold text-surface-900">Send Us a Message</h2>
                <ContactForm />
              </Card>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
                { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
                { icon: MapPin, label: 'Office', value: `${contact.address.line1}, ${contact.address.line2}`, href: undefined },
                { icon: Clock, label: 'Business Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM IST', href: undefined },
              ].map((item) => (
                <Card key={item.label} padding="sm">
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-5 w-5 text-brand-500" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-surface-400">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-sm font-medium text-surface-900 hover:text-brand-600">{item.value}</a>
                      ) : (
                        <div className="mt-1 text-sm font-medium text-surface-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
