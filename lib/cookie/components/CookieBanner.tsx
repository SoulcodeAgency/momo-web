import { Button } from '@/components/ui/button';
import { ConsentValue } from '../consent-types';
import { useTranslations } from 'next-intl';

type CookieBannerProps = {
  onConsentChange: (consent: ConsentValue) => void;
  onPreferencesClick: () => void;
  consentValue: ConsentValue;
};

const CookieBanner = (props: CookieBannerProps) => {
  const t = useTranslations('CookieBanner');

  return (
    <div className="shadow-custom-teal fixed inset-x-5 bottom-4 z-20 mx-auto flex max-w-screen-lg flex-wrap items-center justify-center gap-4 rounded-lg bg-white p-5 text-center text-gray-600 drop-shadow-2xl dark:bg-gray-800 dark:text-gray-200 md:bottom-20 md:flex-nowrap md:justify-between md:text-left print:hidden">
      <div className="w-full">
        {t('Description')}{' '}
        <a
          href="#"
          className="whitespace-nowrap text-primary hover:underline dark:text-indigo-400"
          onClick={(e) => {
            e.preventDefault();
            props.onPreferencesClick();
          }}
        >
          {t('More')}
        </a>
      </div>
      <div className="flex flex-shrink-0 items-center gap-4">
        <Button
          variant={'secondary'}
          onClick={() => {
            props.onConsentChange('necessary');
          }}
        >
          {t('OptOut')}
        </Button>
        <Button
          onClick={() => {
            props.onConsentChange('all');
          }}
        >
          {t('Accept')}
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
