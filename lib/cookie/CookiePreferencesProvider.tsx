"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { setConsentSettingInLocalStorage } from "./consent";
import { ConsentValue } from "./consent-types";

type CookiePreferences = {
    consent: ConsentValue;
    setConsent: (value: ConsentValue) => void;
    isConsentLoaded: boolean;
    setIsConsentLoaded: (value: boolean) => void;
    isCookiePreferencesVisible: boolean;
    setIsCookiePreferencesVisible: (value: boolean) => void;
    handleConsentChange: (value: ConsentValue) => void;
};

const CookiePreferencesContext = createContext<CookiePreferences>(
    {} as CookiePreferences,
);

function useCookiePreferences() {
    const context = useContext(CookiePreferencesContext);
    if (!context) {
        throw new Error(
            `useCookiePreferences must be used within a CookiePreferencesProvider`,
        );
    }
    return context;
}

function CookiePreferencesProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // State for holding consent value
    const [consent, setConsent] = useState<ConsentValue>(null);
    const [isConsentLoaded, setIsConsentLoaded] = useState(false);
    const [isCookiePreferencesVisible, setIsCookiePreferencesVisible] =
        useState(false);

    // Callback for handling consent changes through the cookie banner or the cookie preferences modal
    const handleConsentChange = (value: ConsentValue) => {
        // Save the consent value to local storage and update the state.
        setConsentSettingInLocalStorage(value);
        setConsent(value);
        setIsCookiePreferencesVisible(false);

        // Future: Check user settings if they have opted in/out of auto capture and/or recording
    };

    const value = useMemo(
        () => ({
            consent,
            setConsent,
            isConsentLoaded,
            setIsConsentLoaded,
            isCookiePreferencesVisible,
            setIsCookiePreferencesVisible,
            handleConsentChange,
        }),
        [consent, isConsentLoaded, isCookiePreferencesVisible],
    );
    return (
        <CookiePreferencesContext.Provider value={value}>
            {children}
        </CookiePreferencesContext.Provider>
    );
}

export { CookiePreferencesProvider, useCookiePreferences };
