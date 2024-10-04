import {
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";
import { Page } from "./canvas/Page";
import { Hero } from "./canvas/Hero";
import { UniformHeader } from "./canvas/Header";
import { UniformFooter } from "./canvas/Footer";
import { CanvasAnchor } from "./canvas/CanvasAnchor";
import { CanvasCard } from "./canvas/Card";
import { UniformContainer } from "./canvas/Container";
import { UniformTitle } from "./canvas/Title";
import { UniformGrid } from "./canvas/Grid";
import { CanvasFeatureList } from "./canvas/FeatureList";
import { CanvasListItem } from "./canvas/ListItem";

// TODO: Think about improving this resolver...

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
  if (component.type === "anchor") {
    componentType = CanvasAnchor;
  }
  if (component.type === "card") {
    componentType = CanvasCard;
  }
  if (component.type === "container") {
    componentType = UniformContainer;
  }
  if (component.type === "title") {
    componentType = UniformTitle;
  }
  if (component.type === "grid") {
    componentType = UniformGrid;
  }
  if (component.type === "featureList") {
    componentType = CanvasFeatureList;
  }
  if (component.type === "listItem") {
    componentType = CanvasListItem;
  }


  return {
    component: componentType,
  };
}
