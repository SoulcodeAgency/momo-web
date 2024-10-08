import { CanvasProps } from '../uniformTypes';
import ContactForm from '@/components/modules/ContactForm';

type Parameters = {};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasContactForm({}: Props) {
  return <ContactForm />;
}
