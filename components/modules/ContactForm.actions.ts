'use server';

import { sendRequest } from '@/server/actions';
import { DefaultFormFeedback } from '@/lib/formTypes';

const testWebhook = "/webhook-test/175cd025-7232-4bae-afbe-6a20b252a959";
const prodWebhook = "/webhook/175cd025-7232-4bae-afbe-6a20b252a959";

type Result = {};

export async function contactFormAction(
  prevState: DefaultFormFeedback,
  formData: FormData,
): Promise<DefaultFormFeedback> {
  try {
    await sendRequest<Result>({
      formData,
      serviceHost: 'SERVICE_N8N_HOST',
      endpointPath: prodWebhook,
      method: 'POST',
      returnType: 'text',
    });

    return {
      successMessage: 'Successfully send message',
      errorMessage: null,
    };
  } catch (error) {
    return {
      successMessage: null,
      errorMessage: 'Sending message failed',
    };
  }
}
