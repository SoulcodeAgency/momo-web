// Create a type which dynamically applies the above rules, so one can enter the type and the return type will be generated
// so every prop within the type will be a promise of its type
export type AsyncProps<T> = {
  [K in keyof T]: Promise<T[K]>;
};

export const extractProps = async <T>(asyncProps: AsyncProps<T>): Promise<T> => {
  const entries = Object.entries(asyncProps);
  const resolvedEntries = await Promise.all(entries.map(async ([key, value]) => [key, await value]));

  console.log("resolvedEntries", resolvedEntries);

  return Object.fromEntries(resolvedEntries) as T;
};