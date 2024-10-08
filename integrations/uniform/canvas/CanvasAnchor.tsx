import { CanvasProps } from '../uniformTypes';

type Parameters = {
  title: string;
  anchor: string;
};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasAnchor({ anchor }: Props) {
  return <div className="scroll-target" id={anchor} />;
}
