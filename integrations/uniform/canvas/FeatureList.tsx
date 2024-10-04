import FeatureList from "@/components/common/FeatureList";
import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "listItems";
type CanvasFeatureListProps = ComponentProps<
  {},
  SlotNames
>;

export function CanvasFeatureList({ context, component, slots }: CanvasFeatureListProps) {
  return (
    <FeatureList>
      <UniformSlot
        context={context}
        data={component}
        slot={slots.listItems}
      />
    </FeatureList>
  );
}

