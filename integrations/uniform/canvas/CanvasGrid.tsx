import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { CanvasProps } from '../typeHelpers';
import { cn } from '@/lib/utils';

type Parameters = { mdColumns: number };
type SlotNames = 'content';
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasGrid({ component, context, slots, mdColumns }: Props) {
  const columnClasses = `md:grid-cols-${mdColumns ?? 3}`;
  return (
    <div className={cn('grid grid-cols-1 gap-8 w-full max-w-5xl', columnClasses)}>
      <UniformSlot context={context} data={component} slot={slots.content} />
    </div>
  );
}
