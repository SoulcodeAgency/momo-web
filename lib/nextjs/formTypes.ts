export type DefaultFormFeedback = {
  successMessage: string | null;
  errorMessage: string | null;
  resetKey?: string; // Helps for resetting a form, its a missing react feature: https://github.com/vercel/next.js/discussions/58448
};

export const initialState: DefaultFormFeedback = {
  successMessage: null,
  errorMessage: null,
};
