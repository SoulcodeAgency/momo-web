import { CanvasProps } from '../typeHelpers';
import ContactForm from '@/components/modules/ContactForm/ContactForm';

type Parameters = {};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasContactForm({}: Props) {
  return <ContactForm />;
}
