import Card from "@/components/common/Card";
import { ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content";
type CardProps = ComponentProps<
  {
    title: string;
    description?: string;
  },
  SlotNames
>;

export function CanvasCard({ context, component, slots }: CardProps) {
  // Provide the uniform fields for inline editing, instead of passing strings directly
  const uniformTitle = <UniformText context={context} component={component} parameterId="title" placeholder="Enter title here" />;
  const uniformDescription = <UniformText context={context} component={component} parameterId="description" placeholder="Enter description here" />;
  return (
    <Card title={uniformTitle} description={uniformDescription}>
      <UniformSlot
        context={context}
        data={component}
        slot={slots.content}
      />
    </Card>
  );
}

