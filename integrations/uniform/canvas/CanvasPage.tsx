import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content" | "header" | "footer";
type PageProps = ComponentProps<
  {
    title: string;
  },
  SlotNames
>;

export function CanvasPage({ context, component, slots, title }: PageProps) {
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

