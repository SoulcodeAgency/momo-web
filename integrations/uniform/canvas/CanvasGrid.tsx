import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { CanvasProps } from '../typeHelpers';
import { cn } from '@/lib/tailwind/tailwindClassName';

type Parameters = {
  mdColumns: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
};
type SlotNames = 'content';
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasGrid({ component, context, slots, mdColumns, align, justify }: Props) {
  const columnClasses = `md:grid-cols-${mdColumns ?? 3}`;
  const alignClasses = align ? `items-${align}` : '';
  const justifyClasses = justify ? `justify-${justify}` : '';

  return (
    <div className={cn('grid grid-cols-1 gap-8 w-full max-w-5xl', columnClasses, alignClasses, justifyClasses)}>
      <UniformSlot context={context} data={component} slot={slots.content} />
    </div>
  );
}
