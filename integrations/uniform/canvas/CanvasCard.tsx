import { UniformSlot, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { CanvasProps } from "@/lib/typeHelpers";
import Card, { type CardProps } from "@/components/common/Card";

type Parameters = unknown;
type SlotNames = "content";
type Props = CanvasProps<CardProps, Parameters, SlotNames>;

export function CanvasCard({ context, component, slots }: Props) {
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
