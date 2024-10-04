import Container, { ContainerProps } from "@/components/common/Container";
import { ComponentProps, UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import { CanvasAnchor } from "./CanvasAnchor";

type SlotNames = "content";
type UniformContainerProps = ComponentProps<
  Omit<ContainerProps, 'children'> & { title: string; anchor: string },
  SlotNames
>;

// TODO: Should we allow default export? Should we name all canvas components with "Canvas" prefix?
export function UniformContainer(props: UniformContainerProps) {
  // Check and define the anchor element
  const anchorElement = props.anchor ? <CanvasAnchor {...props} title={props.title} anchor={props.anchor} /> : null;

  const { context, component, slots, containerVariant, className } = props;
  return (
    <>
      {anchorElement}
      <Container containerVariant={containerVariant} className={className} >
        <UniformSlot
          context={context}
          data={component}
          slot={slots.content}
        />
      </Container>
    </>
  );
}

