import { CanvasProps } from '../uniformTypes';
import { UniformRichText } from '@uniformdev/canvas-next-rsc/component';

type Parameters = { text: string };
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasRichText({ component, context }: Props) {
  return (
    <div className='text-left prose'>
      <UniformRichText context={context} component={component} parameterId="text" placeholder={'Enter text here'} />
    </div>
  );
}
