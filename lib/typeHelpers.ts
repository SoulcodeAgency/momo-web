// Create a type which dynamically applies the above rules, so one can enter the type and the return type will be generated
// so every prop within the type will be a promise of its type
export type AsyncProps<T> = {
  [K in keyof T]: Promise<T[K]>;
};

export const extractProps = async <T>(asyncProps: AsyncProps<T>): Promise<T> => {
  const entries = Object.entries(asyncProps);
  const settledEntries = await Promise.allSettled(entries.map(async ([key, value]) => {
    try {
      return [key, await value];
    } catch (error) {
      console.error(`Failed to resolve prop "${key}"`, error);
      return [key, undefined]; // or handle the error as needed
    }
  }));

  const resolvedEntries = settledEntries
    .filter(result => result.status === 'fulfilled')
    .map(result => (result as PromiseFulfilledResult<[string, any]>).value);

  return Object.fromEntries(resolvedEntries) as T;
};