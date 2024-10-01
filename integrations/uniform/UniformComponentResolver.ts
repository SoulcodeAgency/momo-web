import {
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";
import { UniformContainer } from "./canvas/UniformContainer";

export function resolveComponent({ component }: { component: any }) {
  let componentType: React.ComponentType<ComponentProps<any>> | null =
    DefaultNotImplementedComponent;

  // add page component resolution
  if (component.type === "page") {
    componentType = UniformContainer;
  }

  return {
    component: componentType,
  };
}
