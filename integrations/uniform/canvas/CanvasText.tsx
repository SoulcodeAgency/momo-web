import { CanvasProps } from '../typeHelpers';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import Text from '@/components/common/Text';

type Parameters = { text: string };
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasText({ component, context }: Props) {
  return (
    <Text>
      <UniformText context={context} component={component} parameterId="text" placeholder={'Enter text here'} />
    </Text>
  );
}
