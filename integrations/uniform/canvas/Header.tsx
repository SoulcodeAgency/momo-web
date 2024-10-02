import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import Header from "@/components/common/Header";

type SlotNames = "links";
type PageProps = ComponentProps<
  {},
  SlotNames
>;

export function UniformHeader({ context, component, slots }: PageProps) {
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

