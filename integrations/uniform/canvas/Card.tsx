import CommonCard from "@/components/common/Card";
import { ComponentProps, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content";
type CardProps = ComponentProps<
  {
    title: string;
    description?: string;
  },
  SlotNames
>;

// TODO: Should we allow default export? Should we name all canvas components with "Canvas" prefix?
// For now, we just named the default export of the common "card" component as "CommonCard".
export function Card({ context, component, title, description, slots }: CardProps) {
  return (
    <CommonCard title={title} description={description}>
      <UniformSlot
        context={context}
        data={component}
        slot={slots.content}
      />
    </CommonCard>
  );
}

