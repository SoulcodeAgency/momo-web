import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";

/**
 * A type alias (generic type) that represents the properties of a Canvas component.
 *
 * @template TProps - The type of the properties for the Canvas component.
 * @template TSlots - A string literal type representing the slots available in the Canvas component.
 * 
 * @returns The properties of a Canvas component without the children property.
 */
export type CanvasProps<TProps, TSlots extends string> = ComponentProps<Omit<TProps, 'children'>, TSlots>;