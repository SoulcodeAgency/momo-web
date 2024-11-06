import { PageParameters as UniformPageParameters } from '@uniformdev/canvas-next-rsc';
export type AsyncParams = Promise<UniformPageParameters['params']>;
export type AsyncSearchParams = Promise<UniformPageParameters['searchParams']>;

export type AsyncPageParameters = {
  params: AsyncParams;
  searchParams?: AsyncSearchParams;
};
