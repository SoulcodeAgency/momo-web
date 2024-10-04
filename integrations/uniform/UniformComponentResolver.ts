import {
  type ComponentProps,
  DefaultNotImplementedComponent,
} from "@uniformdev/canvas-next-rsc/component";
import { CanvasPage } from "./canvas/CanvasPage";
import { CanvasHero } from "./canvas/CanvasHero";
import { CanvasHeader } from "./canvas/CanvasHeader";
import { CanvasFooter } from "./canvas/CanvasFooter";
import { CanvasAnchor } from "./canvas/CanvasAnchor";
import { CanvasCard } from "./canvas/CanvasCard";
import { CanvasContainer } from "./canvas/CanvasContainer";
import { CanvasTitle } from "./canvas/CanvasTitle";
import { CanvasGrid } from "./canvas/CanvasGrid";
import { CanvasList } from "./canvas/CanvasList";
import { CanvasListItem } from "./canvas/CanvasListItem";

// TODO: Think about improving this resolver...

export function resolveComponent({ component }: { component: any }) {
  let componentType: React.ComponentType<ComponentProps<any>> | null =
    DefaultNotImplementedComponent;

  // Add component resolutions
  if (component.type === "page") {
    componentType = CanvasPage;
  }
  if (component.type === "hero") {
    componentType = CanvasHero;
  }
  if (component.type === "header") {
    componentType = CanvasHeader;
  }
  if (component.type === "footer") {
    componentType = CanvasFooter;
  }
  if (component.type === "anchor") {
    componentType = CanvasAnchor;
  }
  if (component.type === "card") {
    componentType = CanvasCard;
  }
  if (component.type === "container") {
    componentType = CanvasContainer;
  }
  if (component.type === "title") {
    componentType = CanvasTitle;
  }
  if (component.type === "grid") {
    componentType = CanvasGrid;
  }
  if (component.type === "list") {
    componentType = CanvasList;
  }
  if (component.type === "listItem") {
    componentType = CanvasListItem;
  }


  return {
    component: componentType,
  };
}
