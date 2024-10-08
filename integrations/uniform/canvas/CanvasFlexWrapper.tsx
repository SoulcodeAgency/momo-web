import FlexWrapper, { FlexWrapperProps } from '@/components/common/FlexWrapper';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { CanvasProps } from '../uniformTypes';

type Parameters = {};
type SlotNames = 'content';
type Props = CanvasProps<Parameters, SlotNames, FlexWrapperProps>;

export function CanvasFlexWrapper(props: Props) {
  const { context, component, slots, className } = props;
  return (
    <FlexWrapper className={className}>
      <UniformSlot context={context} data={component} slot={slots.content} />
    </FlexWrapper>
  );
}
