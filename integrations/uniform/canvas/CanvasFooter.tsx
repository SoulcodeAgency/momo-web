import { CanvasProps } from "../uniformTypes";
import Footer from "@/components/common/Footer";

type Parameters = {
  title: string;
  anchor: string;
};
type SlotNames = string;
type Props = CanvasProps<Parameters, SlotNames>;

export function CanvasFooter({ context, component, slots }: Props) {
  return (
    <Footer />
  );
}

