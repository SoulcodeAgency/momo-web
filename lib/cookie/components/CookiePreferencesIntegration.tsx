'use client';

import { useEffect } from 'react';
import { useCookiePreferences } from '../CookiePreferencesProvider';
import CookieBanner from './CookieBanner';
import CookiePreferences from './CookiePreferences';
import { getConsentSettingFromLocalStorage } from '../consent';
import ShowCookiePreferences from './ShowCookiePreferences';
import { usePostHog } from 'posthog-js/react';

export default function CookiePreferencesIntegration() {
  const {
    setConsent,
    setIsConsentLoaded,
    isConsentLoaded,
    consent,
    setIsCookiePreferencesVisible,
    handleConsentChange,
  } = useCookiePreferences();

  const posthog = usePostHog();
  useEffect(() => {
    if (consent !== null) {
      posthog.set_config({ persistence: consent === 'all' ? 'localStorage+cookie' : 'memory' });
    }
  }, [consent]);

  useEffect(() => {
    // Get consent preference from local storage
    setConsent(getConsentSettingFromLocalStorage());
    setIsConsentLoaded(true);
  }, []);

  return (
    <>
      <ShowCookiePreferences />
      {isConsentLoaded && consent === null && (
        <CookieBanner
          consentValue={consent}
          onPreferencesClick={() => setIsCookiePreferencesVisible(true)}
          onConsentChange={handleConsentChange}
        />
      )}
      {isConsentLoaded && <CookiePreferences />}
    </>
  );
}
