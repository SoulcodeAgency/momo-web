'use server';

import { connection } from 'next/server';
import { EnvNames } from './types';

export default async function getRuntimeEnv(envName: EnvNames): Promise<string> {
  await connection();
  // this env's variable are evaluated at runtime
  // TODO: We might want to further limit, which envs are allowed to be evaluated at runtime
  return process.env[envName] ?? '';
}
