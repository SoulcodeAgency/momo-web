import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";
import Footer from "@/components/common/Footer";

type SlotNames = "";
type PageProps = ComponentProps<
  {},
  SlotNames
>;

export function CanvasFooter({ context, component, slots }: PageProps) {
  return (
    <Footer />
  );
}

