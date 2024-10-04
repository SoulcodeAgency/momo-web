import ListItem, { ListItemProps } from "@/components/common/ListItem";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "";
// TODO: Make a type helper for the Omit children part or the whole Component Props and Slot stuff
type CanvasListItemProps = ComponentProps<
  Omit<ListItemProps, 'children'>,
  SlotNames
>;

export function CanvasListItem({ component, context }: CanvasListItemProps) {
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

