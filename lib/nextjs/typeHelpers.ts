/**
 * A type representing an object where each value is a promise that resolves to a value of type T.
 * 
 * This utility type is used to define objects whose properties are promises. Each key in the object
 * corresponds to a key in the type T, and each value is a promise that resolves to the corresponding
 * value type in T.
 * 
 * @template T - The type of the object whose properties are being represented as promises.
 */
export type AsyncProps<T> = {
  [K in keyof T]: Promise<T[K]>;
};

/**
 * Extracts and resolves all properties from an object containing promises.
 * 
 * This function takes an object where the values are promises, waits for all
 * promises to settle, and returns a new object with the same keys but with
 * resolved values. If a promise is rejected, the corresponding value in the
 * resulting object will be `undefined` and an error will be logged.
 * 
 * @template T - The type of the resulting object.
 * @param {AsyncProps<T>} asyncProps - An object containing promises as values.
 * @returns {Promise<T>} A promise that resolves to an object with the same keys
 *                       as `asyncProps` but with resolved values.
 */
export const extractProps = async <T>(asyncProps: AsyncProps<T>): Promise<T> => {
  const entries = Object.entries(asyncProps);
  const settledEntries = await Promise.allSettled(entries.map(async ([key, value]) => {
    try {
      return [key, await value];
    } catch (error) {
      console.error(`Failed to resolve prop "${key}"`, error); // or handle the error as needed
      return [key, undefined];
    }
  }));

  const resolvedEntries = settledEntries
    .filter(result => result.status === 'fulfilled')
    .map(result => (result as PromiseFulfilledResult<[string, any]>).value);

  return Object.fromEntries(resolvedEntries) as T;
};