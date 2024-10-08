import { Button } from '@/components/ui/button';
import { CanvasProps, LinkType } from '../uniformTypes';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import Link from 'next/link';

type Parameters = {
  title: string;
  variant: 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  link?: LinkType;
};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasButton({ component, context, variant, size, link }: Props) {
  let url = link?.path;
  if (link?.type === 'email') url = `mailto:${url}`;
  if (link?.type === 'tel') url = `tel:${url}`;
  const button = (
    <Button variant={variant} size={size}>
      <UniformText context={context} component={component} parameterId="title" placeholder={'Enter button text here'} />
    </Button>
  );

  return url ? <Link href={url}>{button}</Link> : button;
}
