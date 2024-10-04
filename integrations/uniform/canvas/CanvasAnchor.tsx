import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";

type AnchorProps = ComponentProps<{
  title: string;
  anchor: string;
}>;

export function CanvasAnchor({ anchor }: AnchorProps) {
  return (<div className="scroll-target" id={anchor} />);
}