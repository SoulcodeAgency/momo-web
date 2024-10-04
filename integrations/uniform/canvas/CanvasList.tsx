import List from "@/components/common/List";
import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "listItems";
type CanvasListProps = ComponentProps<
  {},
  SlotNames
>;

export function CanvasList({ context, component, slots }: CanvasListProps) {
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

