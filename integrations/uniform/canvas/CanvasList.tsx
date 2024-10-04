import { CanvasProps } from "@/lib/typeHelpers";
import { UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import List from "@/components/common/List";

type Parameters = {};
type SlotNames = "listItems";
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasList({ context, component, slots }: Props) {
  return (
    <List>
      <UniformSlot
        context={context}
        data={component}
        slot={slots.listItems}
      />
    </List>
  );
}

