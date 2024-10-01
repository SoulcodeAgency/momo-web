import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content";
type UniformContainerProps = ComponentProps<
  {
    title: string;
  },
  SlotNames
>;

export function UniformContainer({
  context,
  component,
  slots,
  title,
}: UniformContainerProps) {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <UniformSlot
          context={context}
          data={component}
          slot={slots.content}
        />
      </div>
    </>
  );
}
