'use server';

import getRuntimeEnv from '@/lib/env/getRuntimeEnv';
import { SERVICE_HOSTS } from '@/lib/env/types';

export async function sendRequest<T>({
  formData,
  serviceHost,
  endpointPath,
  revalidate = 30,
  method = 'GET',
  returnType = 'json',
}: {
  formData?: FormData;
  serviceHost: SERVICE_HOSTS;
  endpointPath: string;
  revalidate?: number;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  returnType?: 'json' | 'text';
}): Promise<T> {
  const hostAddress = await getRuntimeEnv(serviceHost);

  // Change the headers based on the return type
  const headers =
    returnType === 'json' ? new Headers({ accept: 'application/json' }) : new Headers({ accept: 'text/plain' });

  try {
    const requestInit: RequestInit = {
      method,
      headers,
      next: { revalidate },
    };
    if (formData) {
      requestInit.body = formData;
    }
    const res = await fetch(`${hostAddress}${endpointPath}`, requestInit);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    let data;
    if (returnType === 'json') {
      data = (await res.json()) as unknown as T;
    } else {
      data = (await res.text()) as unknown as T;
    }

    return data;
  } catch (error) {
    console.error(`${hostAddress}${endpointPath}`, error);
    throw error;
  }
}
