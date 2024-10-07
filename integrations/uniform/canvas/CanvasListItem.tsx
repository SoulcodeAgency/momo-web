import { CanvasProps } from "../uniformTypes";
import ListItem from "@/components/common/ListItem";
import { UniformText } from "@uniformdev/canvas-next-rsc/component";

type Parameters = {};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasListItem({ component, context }: Props) {
  return (
    <ListItem>
      <UniformText
        context={context}
        component={component}
        parameterId="text"
        placeholder={"Enter your list item text here"}
      />
    </ListItem>
  );
}

