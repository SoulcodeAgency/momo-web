import { Button } from '@/components/ui/button';
import { CanvasProps } from '../uniformTypes';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';

type Parameters = {
  title: string;
  variant: 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasButton({ component, context, variant, size }: Props) {
  return (
    <Button variant={variant} size={size}>
      <UniformText context={context} component={component} parameterId="title" placeholder={'Enter button text here'} />
    </Button>
  );
}
