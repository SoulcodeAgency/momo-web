import Container, { ContainerProps } from "@/components/common/Container";
import { UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import { CanvasAnchor } from "./CanvasAnchor";
import { CanvasProps } from "@/lib/typeHelpers";

type Parameters = {
  title: string;
  anchor: string;
};
type SlotNames = "content";
type Props = CanvasProps<Parameters, SlotNames, ContainerProps>;

export function CanvasContainer(props: Props) {
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
