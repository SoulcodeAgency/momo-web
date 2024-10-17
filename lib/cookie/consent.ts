import { ConsentValue } from './consent-types';

const ConsentHash = 'momo-web_consent_v1';

export const getConsentSettingFromLocalStorage = (): ConsentValue => {
  // Return nothing if we are on the server.
  if (typeof window === 'undefined') {
    return null;
  }

  // Check if there is a consent value in local storage for the consent hash and return the appropriate value. Return null if there is no value.
  const consentValue = localStorage.getItem(ConsentHash);
  if (consentValue === 'necessary') {
    return 'necessary';
  }
  if (consentValue === 'all') {
    return 'all';
  }
  return null;
};

export const setConsentSettingInLocalStorage = (value: ConsentValue): void => {
  // Return early if we are on the server.
  if (typeof window === 'undefined') {
    return;
  }

  if (value === null) {
    localStorage.removeItem(ConsentHash);
  } else {
    localStorage.setItem(ConsentHash, value);
  }
};
