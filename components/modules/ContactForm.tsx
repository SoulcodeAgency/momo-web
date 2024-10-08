'use client';

import { contactFormAction } from './ContactForm.actions';
import { initialState } from '@/lib/formTypes';
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
          <Label htmlFor="first-name">Name</Label>
          <Input name="name" id="name" placeholder="Enter your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="last-name">Message</Label>
        <Input id="message" name="message" placeholder="Your Message..." required />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
