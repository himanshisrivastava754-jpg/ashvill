'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().max(0).optional(),
});

const quoteSchema = contactSchema.extend({
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;
type QuoteFormData = z.infer<typeof quoteSchema>;

interface ContactFormProps {
  variant?: 'contact' | 'quote';
  services?: { value: string; label: string }[];
  className?: string;
}

export function ContactForm({ variant = 'contact', services = [], className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const schema = variant === 'quote' ? quoteSchema : contactSchema;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData | QuoteFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData | QuoteFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      const endpoint = variant === 'quote' ? '/api/leads/quote' : '/api/leads/contact';

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message ?? 'Failed to submit form');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      );
    }
  };

  const inputClass = cn(
    'w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900',
    'placeholder:text-surface-400 transition-colors',
    'focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100',
  );

  if (status === 'success') {
    return (
      <div className={cn('rounded-2xl glass p-8 text-center', className)}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <Send className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-surface-900">Message Sent</h3>
        <p className="mt-2 text-surface-500">
          Thank you for reaching out. Our team will respond within 1 business day.
        </p>
        <Button className="mt-6" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-5', className)} noValidate>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-surface-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="name" {...register('name')} className={inputClass} placeholder="John Smith" />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-surface-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="email" type="email" {...register('email')} className={inputClass} placeholder="john@company.com" />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-surface-700">Company</label>
          <input id="company" {...register('company')} className={inputClass} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-surface-700">Phone</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      {variant === 'quote' && services.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-surface-700">
              Service <span className="text-red-500">*</span>
            </label>
            <select id="service" {...register('service')} className={inputClass}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            {'service' in errors && errors.service && (
              <p className="mt-1 text-xs text-red-500">{(errors as Record<string, { message?: string }>).service?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-surface-700">Budget Range</label>
            <select id="budget" {...register('budget')} className={inputClass}>
              <option value="">Select budget</option>
              <option value="under-25k">Under $25,000</option>
              <option value="25k-50k">$25,000 – $50,000</option>
              <option value="50k-100k">$50,000 – $100,000</option>
              <option value="100k-250k">$100,000 – $250,000</option>
              <option value="250k-plus">$250,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-surface-700">Timeline</label>
            <select id="timeline" {...register('timeline')} className={inputClass}>
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1–3 months</option>
              <option value="3-6-months">3–6 months</option>
              <option value="6-plus-months">6+ months</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-surface-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <input id="subject" {...register('subject')} className={inputClass} placeholder="How can we help?" />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-surface-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className={cn(inputClass, 'resize-y')}
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === 'loading'} rightIcon={
        status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />
      }>
        {status === 'loading' ? 'Sending...' : variant === 'quote' ? 'Submit Quote Request' : 'Send Message'}
      </Button>
    </form>
  );
}
