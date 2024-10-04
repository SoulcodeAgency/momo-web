import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";

/**
 * A type alias (generic type) that represents the properties of a Canvas component.
 *
 * @template TProps - The props of the UI component for which this canvas component is created.
 * @template TParameters - The parameters of the Canvas component.
 * @template TSlots - A string literal type representing the slots available in the Canvas component.
 * 
 * @returns The properties of a Canvas component without the children property.
 */
export type CanvasProps<TProps, TParameters, TSlots extends string> = ComponentProps<Omit<TProps, 'children'> & TParameters, TSlots>;