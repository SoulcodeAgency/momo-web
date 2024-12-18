import { getRequestConfig } from 'next-intl/server';

// https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing#i18n-request

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'de';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
