import { CanvasProps } from '../typeHelpers';
import { UniformRichText } from '@uniformdev/canvas-next-rsc/component';

type Parameters = {
  text: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasRichText({ component, context, textAlign = 'left' }: Props) {
  return (
    <div className={`prose group-[.bg-primary]/container:text-gray-100 text-${textAlign}`}>
      <UniformRichText context={context} component={component} parameterId="text" placeholder={'Enter text here'} />
    </div>
  );
}
