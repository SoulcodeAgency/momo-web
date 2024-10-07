import Title from "@/components/common/Title";
import { CanvasProps } from "../uniformTypes";
import { UniformText } from "@uniformdev/canvas-next-rsc/component";

type Parameters = { title: string };
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasTitle({ component, context }: Props) {
  return (
    <Title>
      <UniformText
        context={context}
        component={component}
        parameterId="title"
        placeholder={"Enter title here"}
      />
    </Title>
  );
}

