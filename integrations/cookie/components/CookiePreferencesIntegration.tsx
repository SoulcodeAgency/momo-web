"use client";

import { useEffect } from "react";
import { useCookiePreferences } from "../CookiePreferencesProvider";
import CookieBanner from "./CookieBanner";
import CookiePreferences from "./CookiePreferences";
import { getConsentSettingFromLocalStorage } from "../consent";
import ShowCookiePreferences from "./ShowCookiePreferences";

export default function CookiePreferencesIntegration() {
  const {
    setConsent,
    setIsConsentLoaded,
    isConsentLoaded,
    consent,
    isCookiePreferencesVisible,
    setIsCookiePreferencesVisible,
    handleConsentChange,
  } = useCookiePreferences();

  useEffect(() => {
    console.log("CookiePreferencesIntegration re-rendered with values:", { isConsentLoaded, isCookiePreferencesVisible });
  }, [isConsentLoaded, isCookiePreferencesVisible]);

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
          onPreferencesClick={() =>
            setIsCookiePreferencesVisible(true)
          }
          onConsentChange={handleConsentChange}
        />
      )}

      {isConsentLoaded && (
        <CookiePreferences />
      )}
    </>
  );
}
