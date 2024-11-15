'use client';

import { contactFormAction } from './ContactForm.actions';
import { initialState } from '@/lib/nextjs/formTypes';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useActionState } from 'react';

const initialFormState = { ...initialState, name: '', email: '', message: '' };

export default function ContactForm() {
  const [state, formAction] = useActionState(contactFormAction, initialFormState);

  return (
    <form action={formAction} key={state?.resetKey} className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" placeholder="Enter your name" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" autoComplete="email" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Input id="message" name="message" placeholder="Your Message..." autoComplete="off" required />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
