import { UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import { CanvasProps } from "../uniformTypes";
import Header from "@/components/common/Header";

type Parameters = {};
type SlotNames = "links";
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasHeader({ context, component, slots }: Props) {
  return (
    <Header>
      <UniformSlot
        context={context}
        data={component}
        slot={slots.links}
      />
    </Header>
  );
}

