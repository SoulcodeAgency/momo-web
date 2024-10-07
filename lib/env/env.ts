'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { EnvNames } from './types';

export default async function getRuntimeEnv(
  envName: EnvNames,
): Promise<string> {
  noStore();
  // this env's variable are evaluated at runtime
  // TODO: We might want to further limit, which envs are allowed to be evaluated at runtime
  return process.env[envName] ?? '';
}
