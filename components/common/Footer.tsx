// import ShowCookiePreferences from '@/lib/cookie/components/ShowCookiePreferences';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500">
          {t('CopyrightSign')} {currentYear} {t('Company')} {t('Rights')}
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-xs hover:underline underline-offset-4" href="/nutzungsbedingungen">
            {t('TermsOfService')}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/datenschutz">
            {t('Privacy')}
          </Link>

          {/* TODO: Doesn't work correctly, maybe because we are in uniform context somehow... */}
          {/* <ShowCookiePreferences /> */}
        </nav>
      </div>
    </footer>
  );
}
