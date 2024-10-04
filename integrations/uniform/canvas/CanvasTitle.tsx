import Title, { TitleProps } from "@/components/common/Title";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "";
type UniformTitleProps = ComponentProps<
  Omit<TitleProps, 'children'> & { title: string },
  SlotNames
>;

export function CanvasTitle({ component, context }: UniformTitleProps) {
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

