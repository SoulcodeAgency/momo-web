import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

/**
 * A type alias (generic type) that represents the properties of a Canvas component.
 *
 * @template TParameters The parameters of the Canvas component.
 * @template TSlots A string literal type representing the slots available in the Canvas component.
 * @template TProps optional: The props of the UI component for which this canvas component is created.
 *
 * @returns The properties of a Canvas component without the children property.
 */
export type CanvasProps<TParameters, TSlots extends string = never, TProps = {}> = ComponentProps<
  Omit<TProps, 'children'> & TParameters,
  TSlots
>;

export type LinkType = {
  path: string;
  type?: string;
  nodeId?: string;
  projectMapId?: string;
};
