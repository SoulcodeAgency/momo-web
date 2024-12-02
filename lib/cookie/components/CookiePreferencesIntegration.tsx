'use client';

import { useEffect, useState } from 'react';
import { useCookiePreferences } from '../CookiePreferencesProvider';
import CookieBanner from './CookieBanner';
import CookiePreferences from './CookiePreferences';
import { getConsentSettingFromLocalStorage } from '../consent';
import ShowCookiePreferences from './ShowCookiePreferences';
import { usePostHog } from 'posthog-js/react';
import { ProductionDomain } from '../consent';

export default function CookiePreferencesIntegration() {
  const {
    setConsent,
    setIsConsentLoaded,
    isConsentLoaded,
    consent,
    setIsCookiePreferencesVisible,
    handleConsentChange,
  } = useCookiePreferences();

  const [onProd, setOnProd] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    if (consent !== null) {
      posthog.set_config({ persistence: consent === 'all' ? 'localStorage+cookie' : 'memory' });
    }
  }, [consent]);

  useEffect(() => {
    if (location.hostname === ProductionDomain) {
      setOnProd(true);
    }

    // Get consent preference from local storage
    setConsent(getConsentSettingFromLocalStorage());
    setIsConsentLoaded(true);
  }, []);

  // Do not render anything if we are not on production
  if (!onProd) {
    return null;
  }

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
