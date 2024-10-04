import { CanvasProps } from "@/lib/typeHelpers";
import { UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type Parameters = { title: string };
type SlotNames = "content" | "header" | "footer";
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasPage({ context, component, slots }: Props) {
  return (
    <div className="font-sans">
      <div className="flex flex-col min-h-screen">

        <UniformSlot
          context={context}
          data={component}
          slot={slots.header}
        />

        <main>
          <UniformSlot
            context={context}
            data={component}
            slot={slots.content}
          />
        </main>

        <UniformSlot
          context={context}
          data={component}
          slot={slots.footer}
        />

      </div>
    </div>
  );
}

