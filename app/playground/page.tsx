import { resolveComponent } from "@/integrations/uniform/UniformComponentResolver";
import {
  UniformPlayground,
  UniformPlaygroundProps,
} from "@uniformdev/canvas-next-rsc";

export default function PlaygroundPage(props: {
  searchParams: UniformPlaygroundProps["searchParams"];
}) {
  return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}

