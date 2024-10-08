import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { CanvasProps } from '../uniformTypes';
import Price, { type PriceProps } from '@/components/common/Price';

type Parameters = {};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames, PriceProps>;

export function CanvasPrice({ context, component }: Props) {
  // Provide the uniform fields for inline editing, instead of passing strings directly
  const uniformPrice = <UniformText context={context} component={component} parameterId="price" placeholder="0" />;
  const uniformCurrency = (
    <UniformText context={context} component={component} parameterId="currency" placeholder="$" />
  );
  const uniformDescription = (
    <UniformText context={context} component={component} parameterId="description" placeholder="per user / month" />
  );
  return <Price price={uniformPrice} description={uniformDescription} currency={uniformCurrency} />;
}
