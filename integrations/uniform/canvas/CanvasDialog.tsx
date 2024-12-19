import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { CanvasProps } from '../typeHelpers';
import Dialog, { type DialogProps } from '@/components/common/Dialog';

type Parameters = {};
type SlotNames = 'content';
type Props = CanvasProps<Parameters, SlotNames, DialogProps>;

export function CanvasDialog({ context, component, slots }: Props) {
  return (
    <Dialog>
      <UniformSlot context={context} data={component} slot={slots.content} />
    </Dialog>
  );
}
