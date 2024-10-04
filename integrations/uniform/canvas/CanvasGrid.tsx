import { cn } from "@/lib/utils";
import { ComponentProps, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content";
type UniformTitleProps = ComponentProps<
  { mdColumns: number },
  SlotNames
>;

export function CanvasGrid({ component, context, slots, mdColumns }: UniformTitleProps) {
  const columnClasses = `md:grid-cols-${mdColumns ?? 3}`;
  return (
    <div className={cn("grid grid-cols-1 gap-8 w-full max-w-5xl", columnClasses)} >
      <UniformSlot
        context={context}
        data={component}
        slot={slots.content}
      />
    </div>
  );
}

