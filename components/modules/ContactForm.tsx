'use client';

import { contactFormAction } from './ContactForm.actions';
import { initialState } from '@/lib/nextjs/formTypes';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

const initialFormState = { ...initialState, name: '', email: '', message: '' };

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [state, formAction] = useActionState(contactFormAction, initialFormState);

  return (
    <form action={formAction} key={state?.resetKey} className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">{t('Name.Label')}</Label>
          <Input name="name" id="name" placeholder={t('Name.Placeholder')} autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t('Email.Label')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t('Email.Placeholder')}
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{t('Message.Label')}</Label>
        <Input id="message" name="message" placeholder={t('Message.Placeholder')} autoComplete="off" required />
      </div>
      <Button type="submit">{t('SubmitButton.Text')}</Button>
    </form>
  );
}
