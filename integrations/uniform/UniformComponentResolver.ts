import {
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";
import { Page } from "./canvas/Page";
import { Hero } from "./canvas/Hero";
import { UniformHeader } from "./canvas/Header";
import { UniformFooter } from "./canvas/Footer";

export function resolveComponent({ component }: { component: any }) {
  let componentType: React.ComponentType<ComponentProps<any>> | null =
    DefaultNotImplementedComponent;

  // Add component resolutions
  if (component.type === "page") {
    componentType = Page;
  }
  if (component.type === "hero") {
    componentType = Hero;
  }
  if (component.type === "header") {
    componentType = UniformHeader;
  }
  if (component.type === "footer") {
    componentType = UniformFooter;
  }

  return {
    component: componentType,
  };
}
